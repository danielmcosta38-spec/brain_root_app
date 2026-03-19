import { LocalBusiness } from '@/lib/businesses'

interface Props {
  business: LocalBusiness
  onDismiss: () => void
  onOpenUrl: () => void
}

export default function BusinessSuggestionCard({ business, onDismiss, onOpenUrl }: Props) {
  const nextDate = business.upcomingDates?.[0]

  return (
    <div
      className="rounded-2xl p-4 mb-4"
      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl leading-tight mt-0.5">{business.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-0.5">
            <div>
              <p className="font-semibold text-white text-sm leading-tight">{business.name}</p>
              <p className="text-[10px] text-gray-600 mt-0.5">📍 {business.city}</p>
            </div>
            <button
              onClick={onDismiss}
              className="text-gray-600 text-xs leading-none flex-shrink-0 mt-0.5 hover:text-gray-400 transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-3 leading-relaxed">{business.tagline}</p>
          <div className="flex gap-2">
            <button
              onClick={onOpenUrl}
              className="flex-1 py-2 rounded-xl text-xs font-semibold text-center transition-opacity active:opacity-70"
              style={{ background: 'rgba(92,111,245,0.2)', color: '#8B9CF8' }}
            >
              Do it now →
            </button>
            <button
              onClick={onOpenUrl}
              className="flex-1 py-2 rounded-xl text-xs font-medium text-center transition-opacity active:opacity-70"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#6B7280' }}
            >
              {nextDate ? `📅 ${nextDate}` : 'Schedule 📅'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
