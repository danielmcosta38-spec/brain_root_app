import { HabitCategory } from './habits'
import { Interest } from './interests'
import { createClient } from './supabase/client'

export interface CompletedHabitEntry {
  habitId: string
  completedAt: string // ISO string
}

export interface InterceptionEntry {
  app: string
  action: 'completed' | 'skipped'
  habitId?: string
  timestamp: string // ISO string
}

export interface BusinessClickEntry {
  businessId: string
  clickedAt: string // ISO string
}

export interface SeenInsightEntry {
  insightId: string
  seenAt: string // ISO string
}

export interface ImplementedTipEntry {
  tipId: string
  implementedAt: string // ISO string
}

export interface LocationData {
  city: string
  neighborhood?: string
}

export interface AppState {
  onboardingDone: boolean
  trackedApps: string[]
  habitCategories: HabitCategory[]
  completedHabits: Record<string, CompletedHabitEntry[]>
  interceptions: Record<string, InterceptionEntry[]>
  businessClicks: Record<string, BusinessClickEntry[]>
  interests: Interest[]
  location: LocationData | null
  seenInsights: SeenInsightEntry[]
  implementedTips: ImplementedTipEntry[]
}

const STORAGE_KEY = 'brainrot_state'

const DEFAULT_STATE: AppState = {
  onboardingDone: false,
  trackedApps: [],
  habitCategories: [],
  completedHabits: {},
  interceptions: {},
  businessClicks: {},
  interests: [],
  location: null,
  seenInsights: [],
  implementedTips: [],
}

export function getState(): AppState {
  if (typeof window === 'undefined') return DEFAULT_STATE
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_STATE
    return { ...DEFAULT_STATE, ...JSON.parse(raw) }
  } catch {
    return DEFAULT_STATE
  }
}

export function saveState(state: Partial<AppState>): void {
  if (typeof window === 'undefined') return
  const current = getState()
  const next = { ...current, ...state }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  // Fire-and-forget cloud sync
  syncToCloud(next).catch((err) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[BrainBreak] Cloud sync failed:', err)
    }
  })
}

export function resetState(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

export function toDateKey(date: Date = new Date()): string {
  return date.toISOString().split('T')[0]
}

export function recordHabitCompleted(habitId: string): void {
  const state = getState()
  const key = toDateKey()
  const existing = state.completedHabits[key] || []
  saveState({
    completedHabits: {
      ...state.completedHabits,
      [key]: [...existing, { habitId, completedAt: new Date().toISOString() }],
    },
  })
}

export function recordInterception(app: string, action: 'completed' | 'skipped', habitId?: string): void {
  const state = getState()
  const key = toDateKey()
  const existing = state.interceptions[key] || []
  saveState({
    interceptions: {
      ...state.interceptions,
      [key]: [...existing, { app, action, habitId, timestamp: new Date().toISOString() }],
    },
  })
}

export function recordBusinessClick(businessId: string): void {
  const state = getState()
  const key = toDateKey()
  const existing = state.businessClicks[key] || []
  saveState({
    businessClicks: {
      ...state.businessClicks,
      [key]: [...existing, { businessId, clickedAt: new Date().toISOString() }],
    },
  })
}

// Stats helpers
export function getTodayStats() {
  const state = getState()
  const key = toDateKey()
  const todayHabits = state.completedHabits[key] || []
  const todayInterceptions = state.interceptions[key] || []
  return {
    habitsCompleted: todayHabits.length,
    mindfulMinutes: todayHabits.length * 3,
    interceptions: todayInterceptions.length,
    skips: todayInterceptions.filter(i => i.action === 'skipped').length,
  }
}

export function getCurrentStreak(): number {
  const state = getState()
  let streak = 0
  const today = new Date()
  for (let i = 0; i < 365; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const key = toDateKey(d)
    const habits = state.completedHabits[key] || []
    if (habits.length > 0) {
      streak++
    } else if (i > 0) {
      break
    }
  }
  return streak
}

export function getLongestStreak(): number {
  const state = getState()
  const allDates = Object.keys(state.completedHabits)
    .filter(k => (state.completedHabits[k] || []).length > 0)
    .sort()

  if (allDates.length === 0) return 0

  let longest = 1
  let current = 1
  for (let i = 1; i < allDates.length; i++) {
    const prev = new Date(allDates[i - 1])
    const curr = new Date(allDates[i])
    const diff = (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24)
    if (diff === 1) {
      current++
      longest = Math.max(longest, current)
    } else {
      current = 1
    }
  }
  return longest
}

export function getWeeklyData(): { day: string; count: number }[] {
  const state = getState()
  const result = []
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  for (let i = 6; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const key = toDateKey(d)
    result.push({
      day: days[d.getDay()],
      count: (state.completedHabits[key] || []).length,
    })
  }
  return result
}

export function getAllTimeStats() {
  const state = getState()
  const totalHabits = Object.values(state.completedHabits).reduce((sum, arr) => sum + arr.length, 0)
  const totalInterceptions = Object.values(state.interceptions).reduce((sum, arr) => sum + arr.length, 0)
  const totalSkips = Object.values(state.interceptions).reduce(
    (sum, arr) => sum + arr.filter(i => i.action === 'skipped').length, 0
  )
  return {
    totalHabits,
    totalMindfulMinutes: totalHabits * 3,
    totalInterceptions,
    totalSkips,
  }
}

export function getRecentHabits(n: number = 3): CompletedHabitEntry[] {
  const state = getState()
  const all: CompletedHabitEntry[] = []
  Object.values(state.completedHabits).forEach(arr => all.push(...arr))
  return all
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, n)
}

// Insights
export function recordSeenInsight(insightId: string): void {
  const state = getState()
  const key = toDateKey()
  const existing = state.seenInsights.filter(e => e.seenAt.startsWith(key))
  if (existing.some(e => e.insightId === insightId)) return
  saveState({
    seenInsights: [
      ...state.seenInsights,
      { insightId, seenAt: new Date().toISOString() },
    ],
  })
}

export function getSeenInsightIdsToday(): string[] {
  const state = getState()
  const key = toDateKey()
  return state.seenInsights
    .filter(e => e.seenAt.startsWith(key))
    .map(e => e.insightId)
}

// Tips
export function recordImplementedTip(tipId: string): void {
  const state = getState()
  if (state.implementedTips.some(e => e.tipId === tipId)) return
  saveState({
    implementedTips: [
      ...state.implementedTips,
      { tipId, implementedAt: new Date().toISOString() },
    ],
  })
}

export function removeImplementedTip(tipId: string): void {
  const state = getState()
  saveState({
    implementedTips: state.implementedTips.filter(e => e.tipId !== tipId),
  })
}

export function getImplementedTipIds(): string[] {
  return getState().implementedTips.map(e => e.tipId)
}

const SHOWN_BUSINESSES_KEY = 'brainrot_shown_businesses'

export function getRecentBusinessIds(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(SHOWN_BUSINESSES_KEY)
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

export function recordShownBusiness(id: string): void {
  if (typeof window === 'undefined') return
  const recent = getRecentBusinessIds()
  const updated = [id, ...recent.filter(r => r !== id)].slice(0, 5)
  localStorage.setItem(SHOWN_BUSINESSES_KEY, JSON.stringify(updated))
}

// Cloud sync — fire-and-forget after each saveState
export async function syncToCloud(state: AppState): Promise<void> {
  if (typeof window === 'undefined') return
  const supabase = createClient()
  if (!supabase) return
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return
  await supabase.from('user_state').upsert(
    { user_id: user.id, state },
    { onConflict: 'user_id' }
  )
}

// Load state from cloud and hydrate localStorage (call once on login)
export async function loadFromCloud(): Promise<AppState | null> {
  if (typeof window === 'undefined') return null
  const supabase = createClient()
  if (!supabase) return null
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  const { data } = await supabase
    .from('user_state')
    .select('state')
    .eq('user_id', user.id)
    .single()
  if (!data?.state) return null
  const cloudState = { ...DEFAULT_STATE, ...data.state } as AppState
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudState))
  return cloudState
}

// Sign out — clear local state and Supabase session
export async function signOut(): Promise<void> {
  if (typeof window === 'undefined') return
  resetState()
  localStorage.removeItem(SHOWN_BUSINESSES_KEY)
  const supabase = createClient()
  if (supabase) await supabase.auth.signOut()
}
