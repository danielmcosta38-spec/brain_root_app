import { HabitCategory } from './habits'
import { Interest } from './interests'

export interface LocalBusiness {
  id: string
  name: string
  emoji: string
  tagline: string
  ctaText: string
  ctaUrl: string
  category: HabitCategory
  interests: Interest[]
  city: string
  upcomingDates?: string[]
}

export const BUSINESSES: LocalBusiness[] = [
  // Lisboa — movement / fitness / yoga
  {
    id: 'fitness-studio-lisboa',
    name: 'Fitness Studio Lisboa',
    emoji: '🏋️',
    tagline: 'Try a free class today',
    ctaText: 'Learn more',
    ctaUrl: '#',
    category: 'movement',
    interests: ['fitness'],
    city: 'Lisboa',
    upcomingDates: ['Fri Mar 20 · 6pm', 'Sat Mar 21 · 10am'],
  },
  {
    id: 'yoga-flow-lisboa',
    name: 'Yoga Flow',
    emoji: '🧘',
    tagline: 'First session for €1 — cancel anytime',
    ctaText: 'Book class',
    ctaUrl: '#',
    category: 'movement',
    interests: ['yoga', 'wellness'],
    city: 'Lisboa',
    upcomingDates: ['Tomorrow · 7:30am', 'Sat Mar 21 · 9am'],
  },
  // Lisboa — mindfulness / wellness
  {
    id: 'serenity-spa-lisboa',
    name: 'Serenity Spa',
    emoji: '🧖',
    tagline: '30-min massage for €25',
    ctaText: 'Book session',
    ctaUrl: '#',
    category: 'mindfulness',
    interests: ['wellness'],
    city: 'Lisboa',
    upcomingDates: ['Today · available until 9pm', 'Tomorrow · 10am'],
  },
  {
    id: 'mind-center-lisboa',
    name: 'Mind Center',
    emoji: '🏡',
    tagline: 'Free guided meditation online',
    ctaText: 'Try it',
    ctaUrl: '#',
    category: 'mindfulness',
    interests: ['wellness', 'yoga'],
    city: 'Lisboa',
    upcomingDates: ['Tonight · 8pm online', 'Sun Mar 22 · 10am'],
  },
  // Lisboa — coffee / reading
  {
    id: 'livraria-letra-livre',
    name: 'Livraria Letra Livre',
    emoji: '📚',
    tagline: '10% off your next purchase',
    ctaText: 'View catalogue',
    ctaUrl: '#',
    category: 'reading',
    interests: ['books'],
    city: 'Lisboa',
    upcomingDates: ['Open today until 8pm'],
  },
  {
    id: 'cafe-da-biblioteca',
    name: 'Café da Biblioteca',
    emoji: '☕',
    tagline: 'Coffee + book for €4.50',
    ctaText: 'Get directions',
    ctaUrl: '#',
    category: 'reading',
    interests: ['coffee', 'books'],
    city: 'Lisboa',
    upcomingDates: ['Open now · until 10pm'],
  },
  // Lisboa — creative / music / art
  {
    id: 'atelie-do-bairro',
    name: 'Ateliê do Bairro',
    emoji: '🎨',
    tagline: 'Watercolour workshop — Saturdays',
    ctaText: 'Sign up',
    ctaUrl: '#',
    category: 'creative',
    interests: ['art'],
    city: 'Lisboa',
    upcomingDates: ['Sat Mar 21 · 3pm', 'Sat Mar 28 · 3pm'],
  },
  {
    id: 'escola-musica-nota',
    name: 'Escola de Música Nota',
    emoji: '🎸',
    tagline: 'Free trial class this week',
    ctaText: 'Schedule class',
    ctaUrl: '#',
    category: 'creative',
    interests: ['music'],
    city: 'Lisboa',
    upcomingDates: ['Fri Mar 20 · 5pm', 'Sat Mar 21 · 11am'],
  },
  // Lisboa — social / events / gaming
  {
    id: 'jogo-do-bairro-lisboa',
    name: 'Jogo do Bairro',
    emoji: '🎲',
    tagline: 'Board game night — €5 entry',
    ctaText: 'See schedule',
    ctaUrl: '#',
    category: 'social',
    interests: ['gaming', 'events'],
    city: 'Lisboa',
    upcomingDates: ['Fri Mar 20 · 8pm', 'Sat Mar 21 · 8pm'],
  },
  {
    id: 'timeout-market-eventos',
    name: 'Time Out Market',
    emoji: '🍕',
    tagline: '20+ restaurants under one roof',
    ctaText: 'Explore',
    ctaUrl: '#',
    category: 'social',
    interests: ['food', 'events'],
    city: 'Lisboa',
    upcomingDates: ['Open now · until midnight'],
  },
  // Lisboa — learning / tech / cooking
  {
    id: 'lingua-viva-lisboa',
    name: 'Língua Viva',
    emoji: '🗣️',
    tagline: 'Free English conversation class',
    ctaText: 'Try it',
    ctaUrl: '#',
    category: 'learning',
    interests: ['tech'],
    city: 'Lisboa',
    upcomingDates: ['Mon Mar 23 · 7pm', 'Wed Mar 25 · 7pm'],
  },
  {
    id: 'workshop-culinaria-lisboa',
    name: 'Cozinha do Bairro',
    emoji: '🍳',
    tagline: 'Weekend cooking workshop',
    ctaText: 'See dates',
    ctaUrl: '#',
    category: 'learning',
    interests: ['cooking', 'food'],
    city: 'Lisboa',
    upcomingDates: ['Sat Mar 21 · 2pm', 'Sun Mar 22 · 2pm'],
  },
  // Porto
  {
    id: 'yoga-porto',
    name: 'Studio Harmonia',
    emoji: '🧘',
    tagline: 'First week free — yoga & pilates',
    ctaText: 'Start now',
    ctaUrl: '#',
    category: 'movement',
    interests: ['yoga', 'wellness', 'fitness'],
    city: 'Porto',
    upcomingDates: ['Tomorrow · 7am', 'Sat Mar 21 · 9:30am'],
  },
  {
    id: 'livraria-lello-porto',
    name: 'Café Literário Porto',
    emoji: '📖',
    tagline: 'Reading club on Fridays — free entry',
    ctaText: 'Learn more',
    ctaUrl: '#',
    category: 'reading',
    interests: ['books', 'coffee'],
    city: 'Porto',
    upcomingDates: ['Fri Mar 20 · 7pm', 'Fri Mar 27 · 7pm'],
  },
  {
    id: 'music-events-porto',
    name: 'Casa da Música — Agenda',
    emoji: '🎵',
    tagline: 'Concerts this week from €5',
    ctaText: 'See schedule',
    ctaUrl: '#',
    category: 'creative',
    interests: ['music', 'events'],
    city: 'Porto',
    upcomingDates: ['Fri Mar 20 · 9:30pm', 'Sat Mar 21 · 7pm'],
  },
  // Braga
  {
    id: 'crossfit-braga',
    name: 'CrossFit Braga',
    emoji: '🏋️',
    tagline: 'Free intro training session',
    ctaText: 'Book now',
    ctaUrl: '#',
    category: 'movement',
    interests: ['fitness'],
    city: 'Braga',
    upcomingDates: ['Tomorrow · 6:30am', 'Sat Mar 21 · 9am'],
  },
]

function pickFrom(pool: LocalBusiness[], excludeIds: string[]): LocalBusiness | null {
  if (pool.length === 0) return null
  const filtered = pool.filter(b => !excludeIds.includes(b.id))
  const source = filtered.length > 0 ? filtered : pool
  return source[Math.floor(Math.random() * source.length)]
}

export function getBusinessSuggestion(
  categories: HabitCategory[],
  interests: Interest[],
  city: string | null,
  excludeIds: string[] = []
): LocalBusiness | null {
  const hasCity = !!city
  const hasInterests = interests && interests.length > 0

  // Priority 1: city + interest match
  if (hasCity && hasInterests) {
    const matches = BUSINESSES.filter(
      b => b.city === city && b.interests.some(i => interests.includes(i))
    )
    const pick = pickFrom(matches, excludeIds)
    if (pick) return pick
  }

  // Priority 2: city + category match
  if (hasCity && categories.length > 0) {
    const matches = BUSINESSES.filter(
      b => b.city === city && categories.includes(b.category)
    )
    const pick = pickFrom(matches, excludeIds)
    if (pick) return pick
  }

  // Priority 3: interest match (no city)
  if (hasInterests) {
    const matches = BUSINESSES.filter(
      b => b.interests.some(i => interests.includes(i))
    )
    const pick = pickFrom(matches, excludeIds)
    if (pick) return pick
  }

  // Priority 4: category match (fallback)
  if (categories.length > 0) {
    const matches = BUSINESSES.filter(b => categories.includes(b.category))
    const pick = pickFrom(matches, excludeIds)
    if (pick) return pick
  }

  return null
}
