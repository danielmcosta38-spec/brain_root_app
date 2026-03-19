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
        <span style={{ fontSize: 90, lineHeight: 1 }}>⚡</span>
      </div>
    ),
    { ...size }
  )
}
