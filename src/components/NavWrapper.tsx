'use client'

import { usePathname } from 'next/navigation'
import BottomNav from './BottomNav'

const NAV_ROUTES = ['/home', '/habits', '/dicas', '/dashboard', '/settings']

export default function NavWrapper() {
  const pathname = usePathname()
  const show = NAV_ROUTES.some(r => pathname === r || pathname.startsWith(r + '/'))
  if (!show) return null
  return <BottomNav />
}
