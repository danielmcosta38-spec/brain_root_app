'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import HabitCard from '@/components/HabitCard'
import { getState, getTodayStats, getCurrentStreak, getRecentHabits } from '@/lib/store'
import { HABITS } from '@/lib/habits'

export default function HomePage() {
  const [stats, setStats] = useState({ habitsCompleted: 0, mindfulMinutes: 0, interceptions: 0, skips: 0 })
  const [streak, setStreak] = useState(0)
  const [recentHabits, setRecentHabits] = useState<ReturnType<typeof getRecentHabits>>([])

  useEffect(() => {
    setStats(getTodayStats())
    setStreak(getCurrentStreak())
    setRecentHabits(getRecentHabits(3))
  }, [])

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  const recentHabitObjects = recentHabits.map(r => HABITS.find(h => h.id === r.habitId)).filter(Boolean)

  return (
    <div className="min-h-screen bg-[#F4F5FF] pb-6">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-5" style={{ borderBottom: '1px solid #E8EAFF' }}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-0.5">{getGreeting()},</p>
            <h1 className="text-2xl font-black text-[#0A0B1A]">
              Brain<span style={{ color: '#5C6FF5' }}>Break</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {streak > 0 && (
              <div className="flex items-center gap-1 rounded-full px-3 py-1.5" style={{ background: '#F0F1FF', border: '1px solid #C8CBFF' }}>
                <span className="text-sm">🔥</span>
                <span className="text-sm font-bold" style={{ color: '#5C6FF5' }}>{streak} day{streak !== 1 ? 's' : ''}</span>
              </div>
            )}
            <Link href="/settings" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-lg">⚙️</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col gap-5">
        {/* Today's stats — compact row */}
        <div className="flex bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E8EAFF' }}>
          {[
            { value: stats.mindfulMinutes, label: 'min today', color: '#5C6FF5' },
            { value: stats.habitsCompleted, label: 'habits done', color: '#0A0B1A' },
            { value: streak, label: 'day streak', color: '#0A0B1A' },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex-1 py-4 text-center"
              style={{ borderRight: i < 2 ? '1px solid #E8EAFF' : 'none' }}
            >
              <p className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Core CTA — Simulate interception */}
        <Link href="/interceptor">
          <div className="rounded-2xl p-5 flex items-center gap-4 active:scale-95 transition-transform cursor-pointer" style={{ background: '#0A0B1A' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #5C6FF5 0%, #7C4CF5 100%)' }}
            >
              <span className="text-3xl">⚡</span>
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-base mb-0.5">Simulate an interception</p>
              <p className="text-gray-400 text-xs">The 5-second pause that changes everything</p>
            </div>
            <span className="text-gray-400 text-lg">→</span>
          </div>
        </Link>

        {/* Motivation banner if no habits yet */}
        {stats.habitsCompleted === 0 && (
          <div className="rounded-2xl p-4" style={{ background: '#F0F1FF', border: '1px solid #C8CBFF' }}>
            <p className="text-sm font-semibold text-[#0A0B1A] mb-1">Your brain is ready 🧠</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Next time you reach for Instagram, you'll have a better option waiting. Start your first interception now.
            </p>
          </div>
        )}

        {/* Recent habits */}
        {recentHabitObjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-bold text-[#0A0B1A]">Recently completed</h2>
              <Link href="/habits" className="text-sm font-semibold" style={{ color: '#5C6FF5' }}>See all</Link>
            </div>
            <div className="flex flex-col gap-2">
              {recentHabitObjects.map((habit, i) => habit && (
                <HabitCard key={i} habit={habit} compact completed />
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  )
}
