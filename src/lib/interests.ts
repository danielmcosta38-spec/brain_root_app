export type Interest =
  | 'fitness' | 'yoga' | 'coffee' | 'books' | 'music'
  | 'art' | 'food' | 'hiking' | 'wellness' | 'photography'
  | 'events' | 'cooking' | 'tech' | 'gaming'

export interface InterestOption {
  id: Interest
  emoji: string
  label: string
}

export const INTERESTS: InterestOption[] = [
  { id: 'fitness',     emoji: '🏃', label: 'Fitness'      },
  { id: 'yoga',        emoji: '🧘', label: 'Yoga'         },
  { id: 'coffee',      emoji: '☕', label: 'Coffee'       },
  { id: 'books',       emoji: '📚', label: 'Books'        },
  { id: 'music',       emoji: '🎵', label: 'Music'        },
  { id: 'art',         emoji: '🎨', label: 'Art & Design' },
  { id: 'food',        emoji: '🍕', label: 'Food'         },
  { id: 'hiking',      emoji: '🥾', label: 'Hiking'       },
  { id: 'wellness',    emoji: '💆', label: 'Wellness'     },
  { id: 'photography', emoji: '📸', label: 'Photography'  },
  { id: 'events',      emoji: '🎭', label: 'Events'       },
  { id: 'cooking',     emoji: '🍳', label: 'Cooking'      },
  { id: 'tech',        emoji: '💻', label: 'Tech'         },
  { id: 'gaming',      emoji: '🎮', label: 'Gaming'       },
]

export const PORTUGUESE_CITIES = [
  'Lisboa', 'Porto', 'Braga', 'Coimbra', 'Faro',
  'Cascais', 'Setúbal', 'Aveiro', 'Funchal', 'Outra',
]
