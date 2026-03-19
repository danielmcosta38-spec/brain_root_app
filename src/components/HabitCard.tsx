import { Habit, CATEGORY_LABELS } from '@/lib/habits'

interface HabitCardProps {
  habit: Habit
  onComplete?: () => void
  completed?: boolean
  compact?: boolean
}

const CATEGORY_COLORS: Record<string, string> = {
  reading: 'bg-blue-50 text-blue-700',
  movement: 'bg-green-50 text-green-700',
  mindfulness: 'bg-purple-50 text-purple-700',
  learning: 'bg-yellow-50 text-yellow-700',
  creative: 'bg-pink-50 text-pink-700',
  social: 'bg-orange-50 text-orange-700',
}

export default function HabitCard({ habit, onComplete, completed = false, compact = false }: HabitCardProps) {
  if (compact) {
    return (
      <div className={`flex items-center gap-3 p-3 rounded-2xl bg-white border border-gray-100 ${completed ? 'opacity-60' : ''}`}>
        <span className="text-2xl">{habit.emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#1A1A1A] truncate">{habit.name}</p>
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[habit.category]}`}>
            {CATEGORY_LABELS[habit.category]}
          </span>
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap">⏱ {habit.duration} min</span>
        {completed && <span className="text-green-500 text-lg">✓</span>}
      </div>
    )
  }

  return (
    <div className={`p-4 rounded-2xl bg-white border border-gray-100 shadow-sm ${completed ? 'opacity-60' : ''}`}>
      <div className="flex items-start justify-between mb-2">
        <span className="text-3xl">{habit.emoji}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">⏱ {habit.duration} min</span>
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[habit.category]}`}>
            {CATEGORY_LABELS[habit.category]}
          </span>
        </div>
      </div>
      <h3 className="font-bold text-[#1A1A1A] text-base mb-1">{habit.name}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-3">{habit.description}</p>
      {onComplete && !completed && (
        <button
          onClick={onComplete}
          className="w-full py-2.5 rounded-xl bg-[#0A0B1A] text-white font-semibold text-sm active:scale-95 transition-transform"
        >
          Mark as done ✓
        </button>
      )}
      {completed && (
        <div className="w-full py-2.5 rounded-xl bg-green-50 text-green-600 font-semibold text-sm text-center">
          Completed ✓
        </div>
      )}
    </div>
  )
}
