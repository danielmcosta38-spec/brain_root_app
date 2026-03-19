'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SOCIAL_APPS } from '@/lib/apps'
import { ALL_CATEGORIES, CATEGORY_LABELS, CATEGORY_EMOJIS, HabitCategory } from '@/lib/habits'
import { INTERESTS, PORTUGUESE_CITIES, Interest } from '@/lib/interests'
import { saveState, LocationData } from '@/lib/store'

const TOTAL_STEPS = 5

function ProgressBar({ current }: { current: number }) {
  return (
    <div className="flex gap-2 mb-8">
      {Array.from({ length: TOTAL_STEPS - 1 }).map((_, i) => (
        <div
          key={i}
          className="h-1 flex-1 rounded-full"
          style={{ background: i < current - 1 ? '#5C6FF5' : '#E8EAFF' }}
        />
      ))}
    </div>
  )
}

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selectedApps, setSelectedApps] = useState<string[]>(['instagram', 'tiktok'])
  const [selectedCategories, setSelectedCategories] = useState<HabitCategory[]>(['movement', 'mindfulness'])
  const [selectedInterests, setSelectedInterests] = useState<Interest[]>([])
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [neighborhood, setNeighborhood] = useState('')

  const toggleApp = (id: string) => {
    setSelectedApps(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id])
  }

  const toggleCategory = (cat: HabitCategory) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])
  }

  const toggleInterest = (id: Interest) => {
    setSelectedInterests(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  const handleFinish = (skipLocation = false) => {
    const location: LocationData | null = !skipLocation && selectedCity
      ? { city: selectedCity, neighborhood: neighborhood.trim() || undefined }
      : null
    saveState({
      onboardingDone: true,
      trackedApps: selectedApps,
      habitCategories: selectedCategories,
      interests: selectedInterests,
      location,
    })
    router.push('/home')
  }

  return (
    <div className="min-h-screen bg-[#F4F5FF] flex flex-col">

      {/* Step 1 — Welcome */}
      {step === 1 && (
        <div className="flex-1 flex flex-col items-center justify-between px-6 py-12">
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg"
              style={{ background: 'linear-gradient(135deg, #5C6FF5 0%, #7C4CF5 100%)' }}
            >
              <span className="text-5xl">🧠</span>
            </div>
            <div>
              <h1 className="text-4xl font-black text-[#0A0B1A] leading-tight mb-3">
                Brain<span style={{ color: '#5C6FF5' }}>Break</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xs">
                Your brain deserves better than another hour of scrolling.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {[
                { emoji: '⚡', text: 'Intercepts the automatic scroll reflex' },
                { emoji: '🌱', text: 'Replaces it with a 3-min micro-habit' },
                { emoji: '📍', text: 'Suggests local spots you\'ll love' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3 bg-white rounded-2xl p-3 border border-indigo-100">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm text-gray-600 text-left">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setStep(2)}
            className="w-full max-w-xs py-4 rounded-2xl text-white font-bold text-lg shadow-md active:scale-95 transition-transform"
            style={{ background: '#0A0B1A' }}
          >
            Get started →
          </button>
        </div>
      )}

      {/* Step 2 — Pick triggers */}
      {step === 2 && (
        <div className="flex-1 flex flex-col px-6 py-10">
          <ProgressBar current={2} />
          <h2 className="text-3xl font-black text-[#0A0B1A] mb-2">Which apps trigger you?</h2>
          <p className="text-gray-500 mb-8">Select the apps you open without thinking.</p>
          <div className="flex flex-col gap-2 mb-auto">
            {SOCIAL_APPS.map(app => {
              const selected = selectedApps.includes(app.id)
              return (
                <button
                  key={app.id}
                  onClick={() => toggleApp(app.id)}
                  className="flex items-center gap-3 p-4 rounded-2xl border-2 transition-all active:scale-95"
                  style={{ borderColor: selected ? '#5C6FF5' : '#E8EAFF', background: selected ? '#F0F1FF' : 'white' }}
                >
                  <span className="text-2xl">{app.emoji}</span>
                  <span className="text-sm font-semibold flex-1 text-left" style={{ color: selected ? '#5C6FF5' : '#0A0B1A' }}>
                    {app.name}
                  </span>
                  {selected
                    ? <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#5C6FF5' }}><span className="text-white text-xs">✓</span></div>
                    : <div className="w-5 h-5 rounded-full border-2 border-gray-200" />
                  }
                </button>
              )
            })}
          </div>
          <div className="flex gap-3 mt-8">
            <button onClick={() => setStep(1)} className="flex-1 py-3.5 rounded-2xl border-2 border-gray-200 text-gray-500 font-semibold">← Back</button>
            <button
              onClick={() => setStep(3)}
              className="flex-[2] py-3.5 rounded-2xl text-white font-bold shadow-md active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(135deg, #5C6FF5 0%, #7C4CF5 100%)' }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Habit categories */}
      {step === 3 && (
        <div className="flex-1 flex flex-col px-6 py-10">
          <ProgressBar current={3} />
          <h2 className="text-3xl font-black text-[#0A0B1A] mb-2">What do you want instead?</h2>
          <p className="text-gray-500 mb-8">Choose the habit types you&apos;d like suggested.</p>
          <div className="grid grid-cols-2 gap-3 mb-auto">
            {ALL_CATEGORIES.map(cat => {
              const selected = selectedCategories.includes(cat)
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className="flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border-2 transition-all active:scale-95"
                  style={{ borderColor: selected ? '#5C6FF5' : '#E8EAFF', background: selected ? '#F0F1FF' : 'white' }}
                >
                  <span className="text-3xl">{CATEGORY_EMOJIS[cat]}</span>
                  <span className="text-sm font-semibold" style={{ color: selected ? '#5C6FF5' : '#0A0B1A' }}>{CATEGORY_LABELS[cat]}</span>
                  {selected && <span className="text-xs" style={{ color: '#5C6FF5' }}>✓ Selected</span>}
                </button>
              )
            })}
          </div>
          <div className="flex gap-3 mt-8">
            <button onClick={() => setStep(2)} className="flex-1 py-3.5 rounded-2xl border-2 border-gray-200 text-gray-500 font-semibold">← Back</button>
            <button
              onClick={() => setStep(4)}
              className="flex-[2] py-3.5 rounded-2xl text-white font-bold shadow-md active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(135deg, #5C6FF5 0%, #7C4CF5 100%)' }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 4 — Interests */}
      {step === 4 && (
        <div className="flex-1 flex flex-col px-6 py-10">
          <ProgressBar current={4} />
          <h2 className="text-3xl font-black text-[#0A0B1A] mb-2">What are you into?</h2>
          <p className="text-gray-500 mb-6">We&apos;ll suggest local activities you&apos;ll actually enjoy.</p>
          <div className="grid grid-cols-2 gap-3 mb-auto">
            {INTERESTS.map(interest => {
              const selected = selectedInterests.includes(interest.id)
              return (
                <button
                  key={interest.id}
                  onClick={() => toggleInterest(interest.id)}
                  className="flex items-center gap-3 p-4 rounded-2xl border-2 transition-all active:scale-95"
                  style={{ borderColor: selected ? '#5C6FF5' : '#E8EAFF', background: selected ? '#F0F1FF' : 'white' }}
                >
                  <span className="text-2xl">{interest.emoji}</span>
                  <span className="text-sm font-semibold flex-1 text-left" style={{ color: selected ? '#5C6FF5' : '#0A0B1A' }}>
                    {interest.label}
                  </span>
                  {selected && <span style={{ color: '#5C6FF5' }} className="text-xs">✓</span>}
                </button>
              )
            })}
          </div>
          <div className="flex gap-3 mt-8">
            <button onClick={() => setStep(3)} className="flex-1 py-3.5 rounded-2xl border-2 border-gray-200 text-gray-500 font-semibold">← Back</button>
            <button
              onClick={() => setStep(5)}
              className="flex-[2] py-3.5 rounded-2xl text-white font-bold shadow-md active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(135deg, #5C6FF5 0%, #7C4CF5 100%)' }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 5 — Location */}
      {step === 5 && (
        <div className="flex-1 flex flex-col px-6 py-10">
          <ProgressBar current={5} />
          <h2 className="text-3xl font-black text-[#0A0B1A] mb-2">Where are you based?</h2>
          <p className="text-gray-500 mb-6">To suggest activities and local spots near you.</p>

          <div className="flex flex-col gap-2 mb-4">
            {PORTUGUESE_CITIES.map(city => {
              const selected = selectedCity === city
              return (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className="flex items-center gap-3 p-4 rounded-2xl border-2 transition-all active:scale-95"
                  style={{ borderColor: selected ? '#5C6FF5' : '#E8EAFF', background: selected ? '#F0F1FF' : 'white' }}
                >
                  <span className="text-lg">📍</span>
                  <span className="text-sm font-semibold flex-1 text-left" style={{ color: selected ? '#5C6FF5' : '#0A0B1A' }}>
                    {city}
                  </span>
                  {selected
                    ? <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#5C6FF5' }}><span className="text-white text-xs">✓</span></div>
                    : <div className="w-5 h-5 rounded-full border-2 border-gray-200" />
                  }
                </button>
              )
            })}
          </div>

          {selectedCity && (
            <div className="mb-6">
              <input
                type="text"
                value={neighborhood}
                onChange={e => setNeighborhood(e.target.value)}
                placeholder="Neighborhood or zone (optional)"
                className="w-full p-4 rounded-2xl border-2 text-sm text-gray-700 outline-none"
                style={{ borderColor: '#E8EAFF', background: 'white' }}
              />
            </div>
          )}

          <div className="flex gap-3 mt-auto">
            <button onClick={() => setStep(4)} className="flex-1 py-3.5 rounded-2xl border-2 border-gray-200 text-gray-500 font-semibold">← Back</button>
            <button
              onClick={() => handleFinish(false)}
              disabled={!selectedCity}
              className="flex-[2] py-3.5 rounded-2xl text-white font-bold shadow-md active:scale-95 transition-transform disabled:opacity-40"
              style={{ background: 'linear-gradient(135deg, #5C6FF5 0%, #7C4CF5 100%)' }}
            >
              Let&apos;s go 🚀
            </button>
          </div>
          <button
            onClick={() => handleFinish(true)}
            className="text-center text-sm text-gray-400 mt-4 active:opacity-60"
          >
            Skip for now →
          </button>
        </div>
      )}
    </div>
  )
}
