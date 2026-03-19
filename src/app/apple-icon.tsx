import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #6272F5 0%, #5C6FF5 40%, #8B45E8 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle highlight orb top-left */}
        <div
          style={{
            position: 'absolute',
            top: -50,
            left: -50,
            width: 200,
            height: 200,
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        {/* Lightning bolt SVG — no borderRadius, iOS applies its own squircle mask */}
        <svg width="72" height="90" viewBox="0 0 19 24" fill="none">
          <path d="M11 0L0 14H7.5L5 24L19 10H11.5L11 0Z" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
