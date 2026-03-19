'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [signupDone, setSignupDone] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    if (!supabase) {
      setError('Authentication not configured. Add Supabase env vars.')
      setLoading(false)
      return
    }

    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) { setError('Não foi possível criar conta. Verifica o email e tenta novamente.'); setLoading(false); return }
      setSignupDone(true)
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError('Email ou password incorretos. Tenta novamente.'); setLoading(false); return }
    router.push('/')
    router.refresh()
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0A0B1A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: 40, textAlign: 'center' }}>
        <div
          style={{
            width: 56,
            height: 56,
            background: 'linear-gradient(135deg, #5C6FF5, #7C3AED)',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            margin: '0 auto 16px',
          }}
        >
          ⚡
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-0.5px',
            margin: 0,
          }}
        >
          Brain<span style={{ color: '#5C6FF5' }}>Break</span>
        </h1>
        <p style={{ color: '#6B7280', fontSize: 14, marginTop: 6, margin: '6px 0 0' }}>
          Replace scrolling with something real.
        </p>
      </div>

      {/* Card */}
      <div
        style={{
          width: '100%',
          maxWidth: 360,
          background: '#111228',
          borderRadius: 24,
          padding: '32px 24px',
          border: '1px solid #2A2B40',
        }}
      >
        {signupDone ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>📬</div>
            <h2 style={{ color: 'white', fontSize: 18, fontWeight: 700, margin: '0 0 8px' }}>
              Check your email
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.5, margin: 0 }}>
              We sent a confirmation link to <strong style={{ color: 'white' }}>{email}</strong>.
              Click it to activate your account.
            </p>
          </div>
        ) : (
          <>
            {/* Mode toggle */}
            <div
              style={{
                display: 'flex',
                background: '#0A0B1A',
                borderRadius: 12,
                padding: 4,
                marginBottom: 28,
              }}
            >
              {(['signin', 'signup'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => { setMode(m); setError('') }}
                  style={{
                    flex: 1,
                    padding: '9px 0',
                    borderRadius: 9,
                    border: 'none',
                    background: mode === m ? '#5C6FF5' : 'transparent',
                    color: mode === m ? 'white' : '#6B7280',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {m === 'signin' ? 'Sign in' : 'Create account'}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: '13px 16px',
                  borderRadius: 12,
                  border: '1px solid #2A2B40',
                  background: '#0A0B1A',
                  color: 'white',
                  fontSize: 15,
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
              <input
                type="password"
                placeholder="Password (min. 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                style={{
                  padding: '13px 16px',
                  borderRadius: 12,
                  border: '1px solid #2A2B40',
                  background: '#0A0B1A',
                  color: 'white',
                  fontSize: 15,
                  outline: 'none',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />

              {error && (
                <p style={{ color: '#F87171', fontSize: 13, margin: 0 }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  marginTop: 8,
                  padding: '14px',
                  borderRadius: 12,
                  border: 'none',
                  background: loading ? '#3D4880' : '#5C6FF5',
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background 0.15s',
                }}
              >
                {loading
                  ? 'Loading...'
                  : mode === 'signin'
                  ? 'Sign in →'
                  : 'Create account →'}
              </button>
            </form>
          </>
        )}
      </div>

      <button
        onClick={() => {
          document.cookie = 'brainbreak_guest=1; path=/; max-age=86400; SameSite=Lax'
          router.push('/')
        }}
        style={{
          marginTop: 16,
          background: 'none',
          border: 'none',
          color: '#4B5563',
          fontSize: 13,
          cursor: 'pointer',
          textDecoration: 'underline',
          textDecorationColor: '#374151',
        }}
      >
        Continue as guest
      </button>

      <p style={{ color: '#1F2937', fontSize: 11, marginTop: 12, textAlign: 'center' }}>
        Your data is private and syncs across devices.
      </p>
    </div>
  )
}
