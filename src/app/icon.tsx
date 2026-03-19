import { ImageResponse } from 'next/og'

export const size = { width: 192, height: 192 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '42px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span style={{ fontSize: 96, lineHeight: 1 }}>⚡</span>
      </div>
    ),
    { ...size }
  )
}
