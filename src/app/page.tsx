'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getState, loadFromCloud } from '@/lib/store'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    async function init() {
      // Try to load cloud state first (hydrates localStorage if user is logged in)
      await loadFromCloud()
      const state = getState()
      if (state.onboardingDone) {
        router.replace('/home')
      } else {
        router.replace('/onboarding')
      }
    }
    init()
  }, [router])

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
      <div className="w-16 h-16 rounded-3xl bg-[#F5A623] flex items-center justify-center">
        <span className="text-3xl">🧠</span>
      </div>
    </div>
  )
}
