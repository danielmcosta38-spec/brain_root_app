'use client'

import { useEffect, useState } from 'react'

interface CountdownRingProps {
  seconds: number
  onComplete: () => void
  size?: number
}

export default function CountdownRing({ seconds, onComplete, size = 120 }: CountdownRingProps) {
  const [remaining, setRemaining] = useState(seconds)
  const [started, setStarted] = useState(false)

  const radius = (size - 16) / 2
  const circumference = 2 * Math.PI * radius
  const progress = remaining / seconds
  const strokeDashoffset = circumference * (1 - progress)

  useEffect(() => {
    // Small delay before starting
    const startTimer = setTimeout(() => setStarted(true), 300)
    return () => clearTimeout(startTimer)
  }, [])

  useEffect(() => {
    if (!started) return
    if (remaining <= 0) {
      onComplete()
      return
    }
    const timer = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [started, remaining, onComplete])

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={8}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#5C6FF5"
          strokeWidth={8}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.9s linear' }}
        />
      </svg>
      {/* Center number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold text-white">
          {remaining === 0 ? '✓' : remaining}
        </span>
      </div>
    </div>
  )
}
