export type TipCategory = 'bedroom' | 'desk' | 'routine' | 'digital' | 'environment'

export interface SetupTip {
  id: string
  category: TipCategory
  emoji: string
  title: string
  description: string
  effort: 'low' | 'medium' | 'high'
}

export const TIP_CATEGORY_LABELS: Record<TipCategory, string> = {
  bedroom: 'Bedroom',
  desk: 'Desk',
  routine: 'Routine',
  digital: 'Digital',
  environment: 'Environment',
}

export const TIP_CATEGORY_EMOJIS: Record<TipCategory, string> = {
  bedroom: '🛏',
  desk: '🖥',
  routine: '⏰',
  digital: '📱',
  environment: '🌿',
}

export const ALL_TIP_CATEGORIES: TipCategory[] = ['bedroom', 'desk', 'routine', 'digital', 'environment']

export const SETUP_TIPS: SetupTip[] = [
  // bedroom
  {
    id: 'q1',
    category: 'bedroom',
    emoji: '🔌',
    title: 'Charger outside the bedroom',
    description: 'Charging your phone outside the bedroom eliminates automatic morning and night scrolling in one move. A €5 analog alarm clock replaces the phone as your wake-up device and removes the trigger entirely.',
    effort: 'low',
  },
  {
    id: 'q2',
    category: 'bedroom',
    emoji: '📖',
    title: 'Book on the nightstand',
    description: 'Having a book visible and within arm\'s reach replaces bedtime scrolling with reading without requiring an active decision. What is already at hand is what you use — environment shapes behaviour more than willpower.',
    effort: 'low',
  },
  {
    id: 'q3',
    category: 'bedroom',
    emoji: '🌡️',
    title: 'Temperature and darkness',
    description: 'A bedroom at 18–19°C with complete darkness improves sleep quality by up to 30%. Invest in blackout curtains before any sleep supplement — the environment is the intervention.',
    effort: 'medium',
  },
  {
    id: 'q4',
    category: 'bedroom',
    emoji: '🚫',
    title: 'Zero phone in bed',
    description: 'Creating a simple rule — phone stays out of bed — is more effective than any sleep tracking app. The environment defines the behaviour. One rule, enforced consistently, beats complex systems.',
    effort: 'low',
  },
  // desk
  {
    id: 's1',
    category: 'desk',
    emoji: '✨',
    title: 'Clear surface before starting work',
    description: 'Visual clutter increases cortisol and reduces cognitive capacity before you\'ve typed a single word. Two minutes clearing the desk before working is an investment, not housekeeping.',
    effort: 'low',
  },
  {
    id: 's2',
    category: 'desk',
    emoji: '📓',
    title: 'Physical notebook always visible',
    description: 'Having a notebook and pen on the desk replaces the reflex of opening your phone to "note something down." Paper is faster and has no notifications. The physical is often the upgrade.',
    effort: 'low',
  },
  {
    id: 's3',
    category: 'desk',
    emoji: '🔒',
    title: 'Block social media on your computer',
    description: 'Extensions like Cold Turkey or Freedom block distracting sites during work periods. The added friction of bypassing a blocker breaks the automatic habit without requiring willpower. Friction is the feature.',
    effort: 'medium',
  },
  {
    id: 's4',
    category: 'desk',
    emoji: '🖥',
    title: 'Make a decision about the second monitor',
    description: 'A second monitor increases productivity for technical work but also increases the tendency to keep social media open in parallel. Know exactly what you use it for — and whether that is the honest answer.',
    effort: 'high',
  },
  // routine
  {
    id: 'r1',
    category: 'routine',
    emoji: '🌅',
    title: 'First hour screen-free',
    description: 'The first hour of your day sets the cognitive tone for the next 4–6 hours. Replacing morning scrolling with coffee, movement, or reading has a disproportionate impact on the rest of the day that evening habits cannot match.',
    effort: 'medium',
  },
  {
    id: 'r2',
    category: 'routine',
    emoji: '⏰',
    title: 'Analog alarm clock',
    description: 'Using your phone as an alarm forces you to pick it up the moment you wake. A €15 analog clock eliminates this trigger completely. It\'s the highest ROI morning habit change available for under €20.',
    effort: 'low',
  },
  {
    id: 'r3',
    category: 'routine',
    emoji: '📋',
    title: '15-minute weekly review',
    description: 'Friday afternoon, 15 minutes to review what worked and what didn\'t. Without this feedback loop, problematic patterns repeat indefinitely. The review doesn\'t have to be elaborate — just honest.',
    effort: 'low',
  },
  {
    id: 'r4',
    category: 'routine',
    emoji: '🕐',
    title: 'One fixed phone-free hour per day',
    description: 'Identify one daily hour — dinner, 30 minutes before bed, morning — and make it consistently screen-free. One fixed, kept commitment beats any vague intention to "use less." Specificity is what makes habits real.',
    effort: 'medium',
  },
  // digital
  {
    id: 'd1',
    category: 'digital',
    emoji: '⬛',
    title: 'Grayscale mode on your phone',
    description: 'Activating black-and-white mode reduces average phone usage by 20%. The brain responds less to the visual triggers of colourful app icons and notifications. On iOS: Accessibility → Display & Text Size.',
    effort: 'low',
  },
  {
    id: 'd2',
    category: 'digital',
    emoji: '🔕',
    title: 'Turn off push notifications',
    description: 'Most notifications don\'t require immediate attention. Checking apps actively — on your schedule — instead of reactively gives back control of your time and attention in a way that feels immediately different.',
    effort: 'low',
  },
  {
    id: 'd3',
    category: 'digital',
    emoji: '📁',
    title: 'Minimalist home screen',
    description: 'Moving all social media apps to a folder on the second page adds just enough friction to break the automatic opening reflex. The app that isn\'t immediately visible is used significantly less. Out of sight is out of habit.',
    effort: 'low',
  },
  // environment
  {
    id: 'am1',
    category: 'environment',
    emoji: '🪴',
    title: 'Plants in your workspace',
    description: 'Having plants in your field of view reduces stress by 37% and increases measured productivity by 15%. The effect is consistent and doesn\'t require rare or high-maintenance plants — any greenery works.',
    effort: 'medium',
  },
  {
    id: 'am2',
    category: 'environment',
    emoji: '☀️',
    title: 'Natural light in the first 30 minutes',
    description: 'Exposure to natural light shortly after waking regulates the circadian rhythm and increases sustained energy throughout the day. Opening the curtains is more effective than any energy supplement and costs nothing.',
    effort: 'low',
  },
  {
    id: 'am3',
    category: 'environment',
    emoji: '🗺️',
    title: 'Specific spaces for specific activities',
    description: 'The brain creates associations between physical spaces and behaviours over time. Using the sofa only for rest, the desk only for work, reinforces these associations and reduces the friction of starting any given activity.',
    effort: 'medium',
  },
]
