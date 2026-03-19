'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getTodayStats, getCurrentStreak, getLongestStreak, getWeeklyData, getAllTimeStats } from '@/lib/store'
import BottomNav from '@/components/BottomNav'

const QUOTES = [
  '"The secret of getting ahead is getting started." — Mark Twain',
  '"Small steps every day lead to big changes over time."',
  '"You don\'t rise to the level of your goals. You fall to the level of your systems." — James Clear',
  '"Every time you resist the scroll, you get stronger."',
  '"The rabbit hole is optional. You proved it today."',
]

export default function DashboardPage() {
  const [todayStats, setTodayStats] = useState({ habitsCompleted: 0, mindfulMinutes: 0, interceptions: 0, skips: 0 })
  const [streak, setStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)
  const [weeklyData, setWeeklyData] = useState<{ day: string; count: number }[]>([])
  const [allTime, setAllTime] = useState({ totalHabits: 0, totalMindfulMinutes: 0, totalInterceptions: 0, totalSkips: 0 })
  const [quote] = useState(QUOTES[Math.floor(Math.random() * QUOTES.length)])

  useEffect(() => {
    setTodayStats(getTodayStats())
    setStreak(getCurrentStreak())
    setLongestStreak(getLongestStreak())
    setWeeklyData(getWeeklyData())
    setAllTime(getAllTimeStats())
  }, [])

  const maxWeekly = Math.max(...weeklyData.map(d => d.count), 1)

  return (
    <div className="min-h-screen bg-[#F4F5FF] pb-28">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4" style={{ borderBottom: '1px solid #E8EAFF' }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-[#0A0B1A]">Your Impact</h1>
            <p className="text-sm text-gray-500">Every minute reclaimed counts</p>
          </div>
          <Link href="/home" className="text-sm font-semibold" style={{ color: '#5C6FF5' }}>← Home</Link>
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col gap-5">
        {/* Streak section */}
        <div className="rounded-2xl p-5" style={{ background: '#0A0B1A' }}>
          <p className="text-gray-400 text-xs uppercase tracking-wide mb-3 font-semibold">Streaks</p>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">🔥</span>
                <span className="text-4xl font-black text-white">{streak}</span>
              </div>
              <p className="text-gray-400 text-xs">Current streak</p>
            </div>
            <div className="w-px bg-gray-700" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">🏆</span>
                <span className="text-4xl font-black text-white">{longestStreak}</span>
              </div>
              <p className="text-gray-400 text-xs">Best streak</p>
            </div>
          </div>
          {streak === 0 && (
            <p className="text-gray-500 text-xs mt-3 italic">Complete a habit today to start your streak!</p>
          )}
        </div>

        {/* Today */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Today</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl p-4" style={{ background: 'linear-gradient(135deg, #5C6FF5 0%, #7C4CF5 100%)' }}>
              <span className="text-2xl block mb-1">⏱</span>
              <span className="text-3xl font-black text-white">{todayStats.mindfulMinutes}</span>
              <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>mindful minutes</p>
            </div>
            <div className="bg-white rounded-2xl p-4" style={{ border: '1px solid #E8EAFF' }}>
              <span className="text-2xl block mb-1">✅</span>
              <span className="text-3xl font-black text-[#0A0B1A]">{todayStats.habitsCompleted}</span>
              <p className="text-gray-500 text-xs font-medium">habits done</p>
            </div>
          </div>
        </div>

        {/* Weekly chart */}
        <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E8EAFF' }}>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">This week — habits per day</p>
          <div className="flex items-end gap-2 h-20">
            {weeklyData.map((d, i) => {
              const isToday = i === weeklyData.length - 1
              const height = d.count === 0 ? 4 : Math.max((d.count / maxWeekly) * 80, 12)
              return (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-lg transition-all"
                    style={{
                      height: `${height}px`,
                      background: isToday ? 'linear-gradient(135deg, #5C6FF5 0%, #7C4CF5 100%)' : d.count > 0 ? '#C8CBFF' : '#E8EAFF',
                    }}
                  />
                  <span className="text-[10px] font-medium" style={{ color: isToday ? '#5C6FF5' : '#9CA3AF' }}>
                    {d.day}
                  </span>
                </div>
              )
            })}
          </div>
          {weeklyData.every(d => d.count === 0) && (
            <p className="text-center text-xs text-gray-400 mt-2 italic">Complete some habits to see your chart!</p>
          )}
        </div>

        {/* All time */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">All time</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { emoji: '🌱', value: allTime.totalHabits, label: 'total habits' },
              {
                emoji: '💪',
                value: `${allTime.totalInterceptions > 0 ? Math.round(((allTime.totalInterceptions - allTime.totalSkips) / allTime.totalInterceptions) * 100) : 0}%`,
                label: 'success rate',
              },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-2xl p-4" style={{ border: '1px solid #E8EAFF' }}>
                <span className="text-2xl block mb-1">{stat.emoji}</span>
                <span className="text-3xl font-black text-[#0A0B1A]">{stat.value}</span>
                <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="rounded-2xl p-5" style={{ background: '#F0F1FF', border: '1px solid #C8CBFF' }}>
          <p className="text-sm text-gray-600 italic leading-relaxed text-center">{quote}</p>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
