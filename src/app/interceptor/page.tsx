'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import CountdownRing from '@/components/CountdownRing'
import { getState, recordHabitCompleted, recordInterception, recordBusinessClick, getRecentBusinessIds, recordShownBusiness } from '@/lib/store'
import { getRandomHabit, Habit, CATEGORY_LABELS, HabitCategory } from '@/lib/habits'
import { getRandomApp, SocialApp } from '@/lib/apps'
import { getBusinessSuggestion, LocalBusiness } from '@/lib/businesses'
import BusinessSuggestionCard from '@/components/BusinessSuggestionCard'

const CATEGORY_COLORS: Record<string, string> = {
  reading: 'bg-blue-50 text-blue-700',
  movement: 'bg-green-50 text-green-700',
  mindfulness: 'bg-purple-50 text-purple-700',
  learning: 'bg-yellow-50 text-yellow-700',
  creative: 'bg-pink-50 text-pink-700',
  social: 'bg-orange-50 text-orange-700',
}

type Phase = 'countdown' | 'done' | 'skipped'

export default function InterceptorPage() {
  const router = useRouter()
  const [phase, setPhase] = useState<Phase>('countdown')
  const [habit, setHabit] = useState<Habit | null>(null)
  const [app, setApp] = useState<SocialApp | null>(null)
  const [business, setBusiness] = useState<LocalBusiness | null>(null)
  const [businessDismissed, setBusinessDismissed] = useState(false)

  useEffect(() => {
    const state = getState()
    setApp(getRandomApp(state.trackedApps))
    setHabit(getRandomHabit(state.habitCategories as HabitCategory[]))
    const recentIds = getRecentBusinessIds()
    const biz = getBusinessSuggestion(
      state.habitCategories as HabitCategory[],
      state.interests ?? [],
      state.location?.city ?? null,
      recentIds
    )
    if (biz) {
      setBusiness(biz)
      recordShownBusiness(biz.id)
    }
  }, [])

  const shuffleHabit = () => {
    const state = getState()
    setHabit(getRandomHabit(state.habitCategories as HabitCategory[]))
  }

  const handleTryThis = () => {
    if (!habit || !app) return
    recordHabitCompleted(habit.id)
    recordInterception(app.id, 'completed', habit.id)
    setPhase('done')
  }

  const handleSkip = () => {
    if (!app) return
    recordInterception(app.id, 'skipped')
    setPhase('skipped')
  }

  if (phase === 'done' && habit) {
    return (
      <div className="min-h-screen bg-[#F4F5FF] flex flex-col items-center justify-center px-6 text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-4xl">🎉</span>
        </div>
        <div>
          <h2 className="text-3xl font-black text-[#0A0B1A] mb-2">Done!</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            You replaced scrolling with <span className="font-semibold text-[#0A0B1A]">{habit.name}</span>.
            +{habit.duration} mindful minutes.
          </p>
        </div>
        <div className="rounded-2xl p-4 w-full max-w-xs" style={{ background: '#F0F1FF', border: '1px solid #C8CBFF' }}>
          <p className="text-sm font-semibold text-[#5C6FF5]">+{habit.duration} min mindful 🌱</p>
          <p className="text-xs text-gray-400 mt-1">Your streak is growing.</p>
        </div>
        <button
          onClick={() => router.push('/home')}
          className="w-full max-w-xs py-4 rounded-2xl text-white font-bold text-base active:scale-95 transition-transform"
          style={{ background: '#0A0B1A' }}
        >
          Back home
        </button>
      </div>
    )
  }

  if (phase === 'skipped') {
    return (
      <div className="min-h-screen bg-[#F4F5FF] flex flex-col items-center justify-center px-6 text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-4xl">👀</span>
        </div>
        <div>
          <h2 className="text-3xl font-black text-[#0A0B1A] mb-2">That&apos;s okay.</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            You were aware of the choice. That&apos;s already the first step.
          </p>
        </div>
        <button
          onClick={() => router.push('/home')}
          className="w-full max-w-xs py-4 rounded-2xl text-white font-bold text-base active:scale-95 transition-transform"
          style={{ background: '#0A0B1A' }}
        >
          Back home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col px-5 pt-12 pb-8" style={{ background: '#0A0B1A' }}>
      {/* Back button */}
      <button
        onClick={() => router.push('/home')}
        className="self-start text-gray-600 text-sm mb-6"
      >
        ← Close
      </button>

      {/* App being intercepted */}
      {app && (
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
            style={{ backgroundColor: app.bgColor }}
          >
            {app.emoji}
          </div>
          <div>
            <p className="text-gray-500 text-xs">About to open</p>
            <p className="text-white font-bold text-base">{app.name}</p>
          </div>
          <span className="ml-auto text-[10px] text-gray-600 font-medium tracking-wide uppercase">Simulation</span>
        </div>
      )}

      {/* Countdown */}
      <div className="flex justify-center mb-6">
        <CountdownRing seconds={5} onComplete={() => {}} size={120} />
      </div>

      {/* Habit suggestion — compact */}
      {habit && (
        <div
          className="flex items-center gap-3 p-4 rounded-2xl mb-4"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <span className="text-2xl">{habit.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">{habit.name}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${CATEGORY_COLORS[habit.category]}`}>
                {CATEGORY_LABELS[habit.category]}
              </span>
              <span className="text-xs text-gray-600">⏱ {habit.duration} min</span>
            </div>
          </div>
          <button
            onClick={shuffleHabit}
            className="text-xs font-semibold px-2.5 py-1 rounded-full active:opacity-60 transition-opacity"
            style={{ background: 'rgba(92,111,245,0.15)', color: '#8B9CF8' }}
          >
            Shuffle →
          </button>
        </div>
      )}

      {/* Business suggestion — always visible */}
      {business && !businessDismissed && (
        <BusinessSuggestionCard
          business={business}
          onDismiss={() => setBusinessDismissed(true)}
          onOpenUrl={() => {
            recordBusinessClick(business.id)
            window.open(business.ctaUrl, '_blank')
          }}
        />
      )}

      {/* Action buttons */}
      <div className="flex flex-col gap-3 mt-auto">
        <button
          onClick={handleTryThis}
          className="w-full py-4 rounded-2xl text-white font-bold text-base active:scale-95 transition-transform"
          style={{ background: 'linear-gradient(135deg, #5C6FF5 0%, #7C4CF5 100%)' }}
        >
          Do this instead ✓
        </button>
        <button
          onClick={handleSkip}
          className="w-full py-3 text-gray-600 font-medium text-sm active:opacity-60 transition-opacity"
        >
          Continue to {app?.name} →
        </button>
      </div>
    </div>
  )
}
