'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-50"
      style={{
        background: 'rgba(244, 245, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(92, 111, 245, 0.12)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {/* Home */}
        <Link href="/home" className="flex flex-col items-center gap-1 flex-1 py-1">
          <span className="text-xl">{isActive('/home') ? '🏠' : '🏡'}</span>
          <span className={`text-[10px] font-medium ${isActive('/home') ? 'text-[#5C6FF5]' : 'text-gray-400'}`}>
            Home
          </span>
        </Link>

        {/* Intercept */}
        <Link href="/interceptor" className="flex flex-col items-center gap-1 flex-1 py-1">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: isActive('/interceptor')
                ? 'linear-gradient(135deg, #5C6FF5 0%, #7C4CF5 100%)'
                : 'rgba(92,111,245,0.12)',
            }}
          >
            <span className="text-base">⚡</span>
          </div>
          <span className={`text-[10px] font-medium ${isActive('/interceptor') ? 'text-[#5C6FF5]' : 'text-gray-400'}`}>
            Intercept
          </span>
        </Link>

        {/* Tips */}
        <Link href="/dicas" className="flex flex-col items-center gap-1 flex-1 py-1">
          <span className="text-xl">{isActive('/dicas') ? '💡' : '🔆'}</span>
          <span className={`text-[10px] font-medium ${isActive('/dicas') ? 'text-[#5C6FF5]' : 'text-gray-400'}`}>
            Tips
          </span>
        </Link>

        {/* Habits */}
        <Link href="/habits" className="flex flex-col items-center gap-1 flex-1 py-1">
          <span className="text-xl">{isActive('/habits') ? '✅' : '☑️'}</span>
          <span className={`text-[10px] font-medium ${isActive('/habits') ? 'text-[#5C6FF5]' : 'text-gray-400'}`}>
            Habits
          </span>
        </Link>
      </div>
    </nav>
  )
}
