'use client'

import { useState, useEffect } from 'react'
import HabitCard from '@/components/HabitCard'
import { HABITS, ALL_CATEGORIES, CATEGORY_LABELS, CATEGORY_EMOJIS, HabitCategory } from '@/lib/habits'
import { getState, recordHabitCompleted } from '@/lib/store'

export default function HabitsPage() {
  const [activeCategory, setActiveCategory] = useState<HabitCategory | 'all'>('all')
  const [completedToday, setCompletedToday] = useState<string[]>([])
  const [justCompleted, setJustCompleted] = useState<string | null>(null)

  useEffect(() => {
    const state = getState()
    const today = new Date().toISOString().split('T')[0]
    const todayEntries = state.completedHabits[today] || []
    setCompletedToday(todayEntries.map(e => e.habitId))
  }, [])

  const handleComplete = (habitId: string) => {
    recordHabitCompleted(habitId)
    setCompletedToday(prev => [...prev, habitId])
    setJustCompleted(habitId)
    setTimeout(() => setJustCompleted(null), 2000)
  }

  const filtered = activeCategory === 'all'
    ? HABITS
    : HABITS.filter(h => h.category === activeCategory)

  const todayCount = completedToday.length

  return (
    <div className="min-h-screen bg-[#F4F5FF] pb-6">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4" style={{ borderBottom: '1px solid #E8EAFF' }}>
        <h1 className="text-2xl font-black text-[#0A0B1A] mb-0.5">Habit Library</h1>
        <p className="text-sm text-gray-500">
          {todayCount === 0
            ? 'Pick a 3-minute habit to do right now'
            : `${todayCount} habit${todayCount !== 1 ? 's' : ''} completed today 🎉`}
        </p>
      </div>

      {/* Category filters */}
      <div className="px-5 py-4 overflow-x-auto">
        <div className="flex gap-2 w-max">
          <button
            onClick={() => setActiveCategory('all')}
            className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all"
            style={activeCategory === 'all'
              ? { background: '#0A0B1A', color: 'white' }
              : { background: 'white', border: '1px solid #E8EAFF', color: '#6B7280' }
            }
          >
            All ({HABITS.length})
          </button>
          {ALL_CATEGORIES.map(cat => {
            const count = HABITS.filter(h => h.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5"
                style={activeCategory === cat
                  ? { background: '#0A0B1A', color: 'white' }
                  : { background: 'white', border: '1px solid #E8EAFF', color: '#6B7280' }
                }
              >
                <span>{CATEGORY_EMOJIS[cat]}</span>
                {CATEGORY_LABELS[cat]} ({count})
              </button>
            )
          })}
        </div>
      </div>

      {/* Success toast */}
      {justCompleted && (
        <div className="mx-5 mb-3 rounded-2xl p-3 flex items-center gap-2" style={{ background: '#F0F1FF', border: '1px solid #C8CBFF' }}>
          <span style={{ color: '#5C6FF5' }}>✓</span>
          <span className="text-sm font-semibold" style={{ color: '#5C6FF5' }}>Habit completed! +3 mindful minutes</span>
        </div>
      )}

      {/* Habits grid */}
      <div className="px-5 flex flex-col gap-3">
        {filtered.map(habit => (
          <HabitCard
            key={habit.id}
            habit={habit}
            completed={completedToday.includes(habit.id)}
            onComplete={() => handleComplete(habit.id)}
          />
        ))}
      </div>
    </div>
  )
}
