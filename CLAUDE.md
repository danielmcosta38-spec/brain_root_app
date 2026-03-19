# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Brain Rot App** — A mobile app that solves compulsive social media use by introducing positive friction at the moment of automatic app opening.

Three core features:
1. **App Interceptor** — 5-second delay before social media apps open, surfacing a conscious choice
2. **Micro-Habit Library** — Curated 3-minute zero-prep alternatives delivered at interception
3. **Impact Dashboard** — Tracks time reclaimed, habits completed, and streaks

**Target user:** The Aware Doomscroller — someone conscious of problematic phone usage but unable to break the habit. Problem validated through 10 user interviews.

**Business model:** Paid (freemium likely). Financial commitment used as retention mechanism.

See [Value Proposition.pdf](Value%20Proposition.pdf) for full research, customer profile, and validated hypotheses.

---

## Commands

```bash
pnpm dev      # localhost:3000
pnpm build    # TypeScript check + production build
```

## Tech Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + pnpm
- Primary persistence: localStorage (`src/lib/store.ts`)
- Optional cloud sync: Supabase (auth + `user_state` JSONB table) — app works fully without Supabase env vars
- Mobile-first: max-width 390px centered wrapper in layout

## Supabase Setup (optional)

Add to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

Run `supabase/migrations/001_init.sql` in Supabase SQL Editor to create the `user_state` table with RLS.

Without env vars, `createClient()` returns `null` and the app runs in guest mode (cookie `brainbreak_guest=1` set at `/auth/login`).

## Architecture

### Data flow
- All state lives in localStorage under key `brainrot_state` as a single `AppState` JSON blob
- `saveState()` writes to localStorage and fires `syncToCloud()` in the background (no-op if not authenticated)
- On app load (`page.tsx`), `loadFromCloud()` hydrates localStorage from Supabase if a session exists, then routes to `/home` or `/onboarding`

### Key lib files
- `src/lib/store.ts` — all localStorage read/write, stat helpers, cloud sync (`syncToCloud`, `loadFromCloud`, `signOut`)
- `src/lib/habits.ts` — 21 hardcoded micro-habits with categories
- `src/lib/apps.ts` — 8 trackable social media apps
- `src/lib/interests.ts` — 14 user interests + Portuguese cities list
- `src/lib/learning.ts` — learning insights matched to user interests (shown in `/dicas` → Learn tab)
- `src/lib/tips.ts` — setup tips for better digital environment (shown in `/dicas` → Space & Habits tab)
- `src/lib/app-audit.ts` — per-app verdicts (keep / limit / uninstall) with pros/cons (shown in `/dicas` → Apps tab)
- `src/lib/businesses.ts` — local business suggestions matched by interest + Portuguese city
- `src/lib/supabase/client.ts` — `createClient()` returns Supabase browser client or `null`
- `src/proxy.ts` — reusable middleware function (auth guard): redirects unauthenticated non-guest users to `/auth/login`; imported by `middleware.ts`

### Key components
- `src/components/CountdownRing.tsx` — SVG animated 5-second countdown
- `src/components/BottomNav.tsx` — fixed bottom nav (Home | Intercept | Tips | Habits)
- `src/components/HabitCard.tsx` — habit display card
- `src/components/StatCard.tsx` — stat display card
- `src/components/BusinessSuggestionCard.tsx` — local business suggestion card

## Screens

| Route | Description |
|-------|-------------|
| `/onboarding` | 3-step onboarding (welcome, pick apps, pick habit categories) |
| `/home` | Dashboard with today's stats + "Simulate interception" CTA |
| `/interceptor` | Core feature: 5s countdown + habit suggestion + Try/Skip |
| `/habits` | Micro-habit library with category filters |
| `/dashboard` | Impact stats: streaks, weekly chart, all-time |
| `/dicas` | Tips screen — 3 tabs: Learn (insights by interest), Space & Habits (setup tips checklist), Apps (app audit) |
| `/settings` | Toggle tracked apps, habit categories, interests, location; reset data; sign out |
| `/auth/login` | Email/password sign in + sign up + "Continue as guest" |
| `/auth/callback` | Supabase OAuth callback route |

## Shareable Version

`BrainBreak.html` — fully standalone single-file version with zero dependencies. All HTML, CSS and JS inline. Open directly in any browser, no install needed. Same functionality as the Next.js app.

---

## Product Constraints (from research)

- Must NOT block apps — users rejected restriction-based solutions
- Interception delay should be exactly 5 seconds (tested in interviews)
- Alternatives must require zero prep — friction is the core problem
- Dashboard must show concrete progress, not abstract metrics
