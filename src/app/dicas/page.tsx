'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import BottomNav from '@/components/BottomNav'
import { getState, recordSeenInsight, getSeenInsightIdsToday, recordImplementedTip, removeImplementedTip, getImplementedTipIds } from '@/lib/store'
import { getInsightForInterests, LearningInsight } from '@/lib/learning'
import { SETUP_TIPS, SetupTip, TIP_CATEGORY_LABELS, TIP_CATEGORY_EMOJIS, ALL_TIP_CATEGORIES, TipCategory } from '@/lib/tips'
import { APP_AUDITS, getAuditForApp, AppVerdict } from '@/lib/app-audit'
import { SOCIAL_APPS } from '@/lib/apps'
import { Interest } from '@/lib/interests'

type DicasTab = 'learn' | 'space' | 'apps'

const EFFORT_LABELS = { low: 'Easy', medium: 'Medium', high: 'Hard' }
const EFFORT_COLORS = {
  low: 'bg-green-50 text-green-700',
  medium: 'bg-yellow-50 text-yellow-700',
  high: 'bg-red-50 text-red-700',
}

const VERDICT_LABELS: Record<AppVerdict, string> = {
  keep: 'Keep',
  limit: 'Limit',
  uninstall: 'Uninstall',
}
const VERDICT_COLORS: Record<AppVerdict, string> = {
  keep: 'bg-green-100 text-green-700',
  limit: 'bg-yellow-100 text-yellow-700',
  uninstall: 'bg-red-100 text-red-700',
}

export default function DicasPage() {
  const [activeTab, setActiveTab] = useState<DicasTab>('learn')
  const [interests, setInterests] = useState<Interest[]>([])
  const [trackedApps, setTrackedApps] = useState<string[]>([])
  const [currentInsight, setCurrentInsight] = useState<LearningInsight | null>(null)
  const [seenCount, setSeenCount] = useState(0)
  const [implementedTips, setImplementedTips] = useState<string[]>([])
  const [activeTipCategory, setActiveTipCategory] = useState<TipCategory | 'all'>('all')

  useEffect(() => {
    const state = getState()
    setInterests((state.interests ?? []) as Interest[])
    setTrackedApps(state.trackedApps)
    setImplementedTips(getImplementedTipIds())
    loadNextInsight((state.interests ?? []) as Interest[])
  }, [])

  const loadNextInsight = (userInterests: Interest[]) => {
    const excludeIds = getSeenInsightIdsToday()
    setSeenCount(excludeIds.length)
    const insight = getInsightForInterests(userInterests, excludeIds)
    if (insight) {
      setCurrentInsight(insight)
      recordSeenInsight(insight.id)
      setSeenCount(prev => prev + 1)
    } else {
      setCurrentInsight(null)
    }
  }

  const handleNextInsight = () => {
    loadNextInsight(interests)
  }

  const toggleTip = (tipId: string) => {
    if (implementedTips.includes(tipId)) {
      removeImplementedTip(tipId)
      setImplementedTips(prev => prev.filter(id => id !== tipId))
    } else {
      recordImplementedTip(tipId)
      setImplementedTips(prev => [...prev, tipId])
    }
  }

  const filteredTips: SetupTip[] = activeTipCategory === 'all'
    ? SETUP_TIPS
    : SETUP_TIPS.filter(t => t.category === activeTipCategory)

  const appsToAudit = trackedApps.length > 0
    ? SOCIAL_APPS.filter(a => trackedApps.includes(a.id))
    : SOCIAL_APPS

  return (
    <div className="min-h-screen bg-[#F4F5FF] pb-28">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4" style={{ borderBottom: '1px solid #E8EAFF' }}>
        <h1 className="text-2xl font-black text-[#0A0B1A] mb-0.5">Tips</h1>
        <p className="text-sm text-gray-500">What to learn and how to create better conditions</p>
      </div>

      {/* Tab bar */}
      <div className="px-5 pt-4 pb-3 flex gap-2">
        {([['learn', 'Learn'], ['space', 'Space & Habits'], ['apps', 'Apps']] as [DicasTab, string][]).map(([tab, label]) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all"
            style={activeTab === tab
              ? { background: '#0A0B1A', color: 'white' }
              : { background: 'white', border: '1px solid #E8EAFF', color: '#6B7280' }
            }
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab: Learn */}
      {activeTab === 'learn' && (
        <div className="px-5 flex flex-col gap-4">
          {interests.length === 0 ? (
            <div className="rounded-2xl p-5 text-center" style={{ background: '#F0F1FF', border: '1px solid #C8CBFF' }}>
              <p className="text-2xl mb-2">🎯</p>
              <p className="text-sm font-semibold text-[#0A0B1A] mb-1">Personalise your insights</p>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                Select your interests in Settings to receive personalised content.
              </p>
              <Link href="/settings">
                <span className="text-sm font-semibold" style={{ color: '#5C6FF5' }}>Go to Settings →</span>
              </Link>
            </div>
          ) : currentInsight ? (
            <>
              {/* Main insight card */}
              <div className="rounded-3xl p-6" style={{ background: '#0A0B1A' }}>
                {/* Interest tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-4"
                  style={{ background: 'rgba(92,111,245,0.15)' }}>
                  <span className="text-xs font-semibold" style={{ color: '#8B9CF8' }}>
                    {currentInsight.interest}
                  </span>
                </div>
                {/* Title */}
                <h2 className="text-xl font-black text-white leading-tight mb-3">
                  {currentInsight.title}
                </h2>
                {/* Body */}
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {currentInsight.body}
                </p>
                {/* Source */}
                {currentInsight.source && (
                  <p className="text-[11px] text-gray-600 mb-4 italic">— {currentInsight.source}</p>
                )}
                {/* Action tip */}
                <div className="rounded-xl p-3 mb-5" style={{ background: 'rgba(92,111,245,0.12)' }}>
                  <p className="text-xs font-semibold" style={{ color: '#8B9CF8' }}>
                    💡 {currentInsight.actionTip}
                  </p>
                </div>
                {/* Next button */}
                <button
                  onClick={handleNextInsight}
                  className="w-full py-3 rounded-2xl text-sm font-semibold active:opacity-70 transition-opacity"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#9CA3AF' }}
                >
                  Next insight →
                </button>
              </div>
              <p className="text-center text-xs text-gray-400">
                {seenCount} insight{seenCount !== 1 ? 's' : ''} seen today
              </p>
            </>
          ) : (
            <div className="rounded-2xl p-5 text-center" style={{ background: '#F0F1FF', border: '1px solid #C8CBFF' }}>
              <p className="text-2xl mb-2">✨</p>
              <p className="text-sm font-semibold text-[#0A0B1A] mb-1">You&apos;ve seen everything for today</p>
              <p className="text-xs text-gray-500">New insights tomorrow. Great work!</p>
            </div>
          )}
        </div>
      )}

      {/* Tab: Space & Habits */}
      {activeTab === 'space' && (
        <div className="px-5 flex flex-col gap-4">
          {/* Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-[#0A0B1A]">
                {implementedTips.length} of {SETUP_TIPS.length} tips implemented
              </p>
              <p className="text-xs text-gray-400">
                {Math.round((implementedTips.length / SETUP_TIPS.length) * 100)}%
              </p>
            </div>
            <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${(implementedTips.length / SETUP_TIPS.length) * 100}%`,
                  background: 'linear-gradient(90deg, #5C6FF5, #7C4CF5)',
                }}
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5">
            <button
              onClick={() => setActiveTipCategory('all')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all"
              style={activeTipCategory === 'all'
                ? { background: '#0A0B1A', color: 'white' }
                : { background: 'white', border: '1px solid #E8EAFF', color: '#6B7280' }
              }
            >
              All
            </button>
            {ALL_TIP_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTipCategory(cat)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all"
                style={activeTipCategory === cat
                  ? { background: '#0A0B1A', color: 'white' }
                  : { background: 'white', border: '1px solid #E8EAFF', color: '#6B7280' }
                }
              >
                {TIP_CATEGORY_EMOJIS[cat]} {TIP_CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>

          {/* Tips list */}
          <div className="flex flex-col gap-3">
            {filteredTips.map(tip => {
              const done = implementedTips.includes(tip.id)
              return (
                <div
                  key={tip.id}
                  className="bg-white rounded-2xl p-4"
                  style={{ border: done ? '1px solid #BBF7D0' : '1px solid #E8EAFF' }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="text-lg flex-shrink-0">{tip.emoji}</span>
                      <p className="text-sm font-semibold text-[#0A0B1A] leading-tight">{tip.title}</p>
                    </div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${EFFORT_COLORS[tip.effort]}`}>
                      {EFFORT_LABELS[tip.effort]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{tip.description}</p>
                  <button
                    onClick={() => toggleTip(tip.id)}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold transition-all active:scale-95"
                    style={done
                      ? { background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0' }
                      : { background: 'white', color: '#0A0B1A', border: '1px solid #E8EAFF' }
                    }
                  >
                    {done ? '✓ Implemented' : 'Mark as done'}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Tab: Apps */}
      {activeTab === 'apps' && (
        <div className="px-5 flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold text-[#0A0B1A] mb-0.5">Your app audit</p>
            <p className="text-xs text-gray-500">
              Honest analysis of {appsToAudit.length} app{appsToAudit.length !== 1 ? 's' : ''} you track
            </p>
          </div>

          {appsToAudit.map(app => {
            const audit = getAuditForApp(app.id)
            if (!audit) return null
            const verdictLabel = VERDICT_LABELS[audit.verdict]
            const verdictColor = VERDICT_COLORS[audit.verdict]

            return (
              <div key={app.id} className="bg-white rounded-2xl p-4" style={{ border: '1px solid #E8EAFF' }}>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                      style={{ backgroundColor: app.bgColor }}
                    >
                      {app.emoji}
                    </div>
                    <p className="font-bold text-[#0A0B1A] text-sm">{app.name}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${verdictColor}`}>
                    {verdictLabel}
                  </span>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">Pros</p>
                    {audit.pros.map((pro, i) => (
                      <div key={i} className="flex items-start gap-1.5 mb-1">
                        <span className="text-green-500 text-xs leading-tight mt-0.5 flex-shrink-0">✓</span>
                        <p className="text-xs text-gray-600 leading-tight">{pro}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">Cons</p>
                    {audit.cons.map((con, i) => (
                      <div key={i} className="flex items-start gap-1.5 mb-1">
                        <span className="text-red-400 text-xs leading-tight mt-0.5 flex-shrink-0">✗</span>
                        <p className="text-xs text-gray-600 leading-tight">{con}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verdict reason */}
                <div className="rounded-xl p-3 mb-2" style={{ background: '#F4F5FF' }}>
                  <p className="text-xs text-gray-700 leading-relaxed">{audit.verdictReason}</p>
                </div>

                {/* Alternative */}
                {audit.alternativa && (
                  <div className="flex items-start gap-1.5">
                    <span className="text-xs" style={{ color: '#5C6FF5' }}>💡</span>
                    <p className="text-xs leading-relaxed" style={{ color: '#5C6FF5' }}>
                      Alternative: {audit.alternativa}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      <BottomNav />
    </div>
  )
}
