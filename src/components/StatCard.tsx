interface StatCardProps {
  label: string
  value: string | number
  emoji: string
  accent?: boolean
}

export default function StatCard({ label, value, emoji, accent = false }: StatCardProps) {
  return (
    <div className={`rounded-2xl p-4 flex flex-col gap-1 ${accent ? 'bg-[#F5A623]' : 'bg-white border border-gray-100'}`}>
      <span className="text-2xl">{emoji}</span>
      <span className={`text-2xl font-bold ${accent ? 'text-white' : 'text-[#1A1A1A]'}`}>{value}</span>
      <span className={`text-xs font-medium ${accent ? 'text-orange-100' : 'text-gray-500'}`}>{label}</span>
    </div>
  )
}
