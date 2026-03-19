'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SOCIAL_APPS } from '@/lib/apps'
import { ALL_CATEGORIES, CATEGORY_LABELS, CATEGORY_EMOJIS, HabitCategory } from '@/lib/habits'
import { INTERESTS, PORTUGUESE_CITIES, Interest } from '@/lib/interests'
import { getState, saveState, resetState, signOut, LocationData } from '@/lib/store'

export default function SettingsPage() {
  const router = useRouter()
  const [trackedApps, setTrackedApps] = useState<string[]>([])
  const [habitCategories, setHabitCategories] = useState<HabitCategory[]>([])
  const [interests, setInterests] = useState<Interest[]>([])
  const [selectedCity, setSelectedCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [showReset, setShowReset] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const state = getState()
    setTrackedApps(state.trackedApps)
    setHabitCategories(state.habitCategories as HabitCategory[])
    setInterests((state.interests ?? []) as Interest[])
    setSelectedCity(state.location?.city ?? '')
    setNeighborhood(state.location?.neighborhood ?? '')
  }, [])

  const toggleApp = (id: string) =>
    setTrackedApps(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id])

  const toggleCategory = (cat: HabitCategory) =>
    setHabitCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])

  const toggleInterest = (id: Interest) =>
    setInterests(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])

  const handleSave = () => {
    const location: LocationData | null = selectedCity
      ? { city: selectedCity, neighborhood: neighborhood.trim() || undefined }
      : null
    saveState({ trackedApps, habitCategories, interests, location })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    resetState()
    router.push('/onboarding')
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/auth/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#F4F5FF] pb-6">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4" style={{ borderBottom: '1px solid #E8EAFF' }}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-[#0A0B1A]">Settings</h1>
          <button onClick={() => router.back()} className="text-sm text-gray-500 font-medium">← Back</button>
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col gap-6">

        {/* Tracked apps */}
        <div>
          <h2 className="text-sm font-bold text-[#0A0B1A] uppercase tracking-wide mb-1">Tracked Apps</h2>
          <p className="text-xs text-gray-500 mb-3">These apps will trigger an interception</p>
          <div className="flex flex-col gap-2">
            {SOCIAL_APPS.map(app => {
              const selected = trackedApps.includes(app.id)
              return (
                <button
                  key={app.id}
                  onClick={() => toggleApp(app.id)}
                  className="flex items-center gap-3 p-4 rounded-2xl border-2 transition-all active:scale-95"
                  style={{ borderColor: selected ? '#5C6FF5' : '#E8EAFF', background: selected ? '#F0F1FF' : 'white' }}
                >
                  <span className="text-xl">{app.emoji}</span>
                  <span className="text-sm font-semibold flex-1 text-left" style={{ color: selected ? '#5C6FF5' : '#0A0B1A' }}>
                    {app.name}
                  </span>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: selected ? '#5C6FF5' : '#D1D5DB', background: selected ? '#5C6FF5' : 'transparent' }}>
                    {selected && <span className="text-white text-xs">✓</span>}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Habit categories */}
        <div>
          <h2 className="text-sm font-bold text-[#0A0B1A] uppercase tracking-wide mb-1">Habit Categories</h2>
          <p className="text-xs text-gray-500 mb-3">Habits from these categories will be suggested</p>
          <div className="grid grid-cols-2 gap-2">
            {ALL_CATEGORIES.map(cat => {
              const selected = habitCategories.includes(cat)
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className="flex items-center gap-2 p-3 rounded-2xl border-2 transition-all active:scale-95"
                  style={{ borderColor: selected ? '#5C6FF5' : '#E8EAFF', background: selected ? '#F0F1FF' : 'white' }}
                >
                  <span className="text-xl">{CATEGORY_EMOJIS[cat]}</span>
                  <span className="text-sm font-semibold" style={{ color: selected ? '#5C6FF5' : '#0A0B1A' }}>
                    {CATEGORY_LABELS[cat]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Interests */}
        <div>
          <h2 className="text-sm font-bold text-[#0A0B1A] uppercase tracking-wide mb-1">Your Interests</h2>
          <p className="text-xs text-gray-500 mb-3">Used to suggest local activities you&apos;ll enjoy</p>
          <div className="grid grid-cols-2 gap-2">
            {INTERESTS.map(interest => {
              const selected = interests.includes(interest.id)
              return (
                <button
                  key={interest.id}
                  onClick={() => toggleInterest(interest.id)}
                  className="flex items-center gap-2 p-3 rounded-2xl border-2 transition-all active:scale-95"
                  style={{ borderColor: selected ? '#5C6FF5' : '#E8EAFF', background: selected ? '#F0F1FF' : 'white' }}
                >
                  <span className="text-xl">{interest.emoji}</span>
                  <span className="text-sm font-semibold flex-1 text-left" style={{ color: selected ? '#5C6FF5' : '#0A0B1A' }}>
                    {interest.label}
                  </span>
                  {selected && <span className="text-xs" style={{ color: '#5C6FF5' }}>✓</span>}
                </button>
              )
            })}
          </div>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-sm font-bold text-[#0A0B1A] uppercase tracking-wide mb-1">Your Location</h2>
          <p className="text-xs text-gray-500 mb-3">To suggest businesses and activities near you</p>
          <div className="flex flex-col gap-2 mb-3">
            {PORTUGUESE_CITIES.map(city => {
              const selected = selectedCity === city
              return (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className="flex items-center gap-3 p-3.5 rounded-2xl border-2 transition-all active:scale-95"
                  style={{ borderColor: selected ? '#5C6FF5' : '#E8EAFF', background: selected ? '#F0F1FF' : 'white' }}
                >
                  <span>📍</span>
                  <span className="text-sm font-semibold flex-1 text-left" style={{ color: selected ? '#5C6FF5' : '#0A0B1A' }}>
                    {city}
                  </span>
                  {selected && <span className="text-xs" style={{ color: '#5C6FF5' }}>✓</span>}
                </button>
              )
            })}
          </div>
          {selectedCity && (
            <input
              type="text"
              value={neighborhood}
              onChange={e => setNeighborhood(e.target.value)}
              placeholder="Neighborhood or zone (optional)"
              className="w-full p-4 rounded-2xl border-2 text-sm text-gray-700 outline-none"
              style={{ borderColor: '#E8EAFF', background: 'white' }}
            />
          )}
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          className="w-full py-4 rounded-2xl font-bold text-base text-white active:scale-95 transition-all"
          style={{ background: saved ? '#22C55E' : '#0A0B1A' }}
        >
          {saved ? 'Saved ✓' : 'Save changes'}
        </button>

        {/* Danger Zone */}
        <div className="pt-4" style={{ borderTop: '1px solid #E8EAFF' }}>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Danger Zone</h2>
          {!showReset ? (
            <button
              onClick={() => setShowReset(true)}
              className="w-full py-3.5 rounded-2xl border-2 border-red-200 text-red-400 font-semibold text-sm"
            >
              Reset all data
            </button>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex flex-col gap-3">
              <p className="text-sm font-semibold text-red-700">Are you sure? This will delete all your progress.</p>
              <div className="flex gap-2">
                <button onClick={() => setShowReset(false)} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-500 font-medium text-sm">Cancel</button>
                <button onClick={handleReset} className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-bold text-sm">Yes, reset</button>
              </div>
            </div>
          )}
        </div>

        {/* Sign out / Create account */}
        <div className="px-5 pt-2 pb-4 flex flex-col gap-2">
          <button
            onClick={handleSignOut}
            className="w-full py-3 rounded-2xl text-sm font-semibold text-gray-500"
            style={{ border: '1px solid #E8EAFF', background: 'white' }}
          >
            Sign out
          </button>
          <button
            onClick={() => {
              document.cookie = 'brainbreak_guest=; path=/; max-age=0'
              router.push('/auth/login')
            }}
            className="w-full py-3 rounded-2xl text-sm font-semibold text-white"
            style={{ background: '#5C6FF5' }}
          >
            Create account to sync data
          </button>
        </div>
      </div>
    </div>
  )
}
