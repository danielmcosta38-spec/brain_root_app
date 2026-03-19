export type HabitCategory = 'reading' | 'movement' | 'mindfulness' | 'learning' | 'creative' | 'social'

export interface Habit {
  id: string
  emoji: string
  name: string
  description: string
  category: HabitCategory
  duration: number // minutes
}

export const HABITS: Habit[] = [
  // Reading
  { id: 'r1', emoji: '📖', name: 'Read 3 pages', description: 'Pick up your book and read just 3 pages. No more required.', category: 'reading', duration: 3 },
  { id: 'r2', emoji: '📰', name: 'Read one article', description: 'Open your saved articles and finish one you bookmarked.', category: 'reading', duration: 3 },
  { id: 'r3', emoji: '📚', name: 'Review your highlights', description: 'Skim through notes or highlights from a book you read recently.', category: 'reading', duration: 3 },

  // Movement
  { id: 'm1', emoji: '💪', name: '20 push-ups', description: 'Drop and do 20 push-ups. Modify if needed — just move your body.', category: 'movement', duration: 3 },
  { id: 'm2', emoji: '🧘', name: '3-min stretch', description: 'Roll your shoulders, stretch your neck, touch your toes. Your body needs this.', category: 'movement', duration: 3 },
  { id: 'm3', emoji: '🚶', name: 'Walk to get water', description: 'Stand up, get a glass of water, and walk slowly back. Hydrate.', category: 'movement', duration: 3 },
  { id: 'm4', emoji: '🏃', name: '30 jumping jacks', description: 'Quick burst of energy. Count to 30, then notice how different you feel.', category: 'movement', duration: 3 },

  // Mindfulness
  { id: 'mn1', emoji: '🫁', name: '5 deep breaths', description: 'Inhale for 4 counts, hold for 4, exhale for 6. Repeat 5 times.', category: 'mindfulness', duration: 3 },
  { id: 'mn2', emoji: '🤫', name: '60 seconds of silence', description: 'Close your eyes. No phone. No music. Just sit with the quiet.', category: 'mindfulness', duration: 3 },
  { id: 'mn3', emoji: '🙏', name: '3 things you\'re grateful for', description: 'Think of 3 specific things that happened today worth appreciating.', category: 'mindfulness', duration: 3 },
  { id: 'mn4', emoji: '👀', name: '5-4-3-2-1 grounding', description: 'Name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste.', category: 'mindfulness', duration: 3 },

  // Learning
  { id: 'l1', emoji: '🗣️', name: '5 words in a new language', description: 'Open Duolingo or just Google "5 Spanish words today". Say them out loud.', category: 'learning', duration: 3 },
  { id: 'l2', emoji: '🎥', name: 'Watch a 3-min explainer', description: 'Search for a topic you\'ve been curious about. Learn one thing.', category: 'learning', duration: 3 },
  { id: 'l3', emoji: '📝', name: 'Review your notes', description: 'Open any notes app and skim what you wrote last week. Let it sink in.', category: 'learning', duration: 3 },
  { id: 'l4', emoji: '🧩', name: 'Solve a quick puzzle', description: 'Do a mini crossword, Wordle, or a short brain teaser. Engage your thinking.', category: 'learning', duration: 3 },

  // Creative
  { id: 'c1', emoji: '✏️', name: 'Sketch anything', description: 'Grab a pen and paper. Draw whatever comes to mind for 3 minutes.', category: 'creative', duration: 3 },
  { id: 'c2', emoji: '📔', name: 'Write 3 sentences', description: 'Open your notes and write 3 sentences about how you\'re feeling right now.', category: 'creative', duration: 3 },
  { id: 'c3', emoji: '🎵', name: 'Hum or play an instrument', description: 'Pick up your guitar, hum a melody, or tap a rhythm. Music is therapy.', category: 'creative', duration: 3 },

  // Social
  { id: 's1', emoji: '💬', name: 'Text someone you miss', description: 'Send a message to someone you haven\'t talked to in a while. One sentence is enough.', category: 'social', duration: 3 },
  { id: 's2', emoji: '🎙️', name: 'Send a voice message', description: 'Record a 30-second voice message to a friend. It\'s more personal than a text.', category: 'social', duration: 3 },
  { id: 's3', emoji: '😊', name: 'Pay someone a compliment', description: 'Tell someone nearby something genuine you appreciate about them.', category: 'social', duration: 3 },
]

export const CATEGORY_LABELS: Record<HabitCategory, string> = {
  reading: 'Reading',
  movement: 'Movement',
  mindfulness: 'Mindfulness',
  learning: 'Learning',
  creative: 'Creative',
  social: 'Social',
}

export const CATEGORY_EMOJIS: Record<HabitCategory, string> = {
  reading: '📖',
  movement: '💪',
  mindfulness: '🧘',
  learning: '🧠',
  creative: '✨',
  social: '💬',
}

export const ALL_CATEGORIES: HabitCategory[] = ['reading', 'movement', 'mindfulness', 'learning', 'creative', 'social']

export function getHabitsByCategories(categories: HabitCategory[]): Habit[] {
  if (categories.length === 0) return HABITS
  return HABITS.filter(h => categories.includes(h.category))
}

export function getRandomHabit(categories: HabitCategory[]): Habit {
  const pool = getHabitsByCategories(categories)
  return pool[Math.floor(Math.random() * pool.length)]
}
