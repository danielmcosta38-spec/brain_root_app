export type AppVerdict = 'keep' | 'limit' | 'uninstall'

export interface AppAuditEntry {
  appId: string
  pros: string[]
  cons: string[]
  verdict: AppVerdict
  verdictReason: string
  alternativa?: string
}

export const APP_AUDITS: AppAuditEntry[] = [
  {
    appId: 'instagram',
    pros: [
      'Visual inspiration and creative discovery',
      'High-quality niche communities',
      'DMs with close friends',
      'Following artists and independent creators',
    ],
    cons: [
      'Compares real life to curated highlights',
      'Reels algorithm optimised for infinite scroll',
      'Validation anxiety via likes and views',
      'Average session: 30–50 minutes',
    ],
    verdict: 'limit',
    verdictReason: 'Instagram has legitimate uses but the Reels format is engineered for compulsion. Disabling Reels and limiting to 15 min/day resolves 80% of the problem without losing the genuine value.',
  },
  {
    appId: 'tiktok',
    pros: [
      'Educational content (BookTok, science, history)',
      'Short-form humour and creative formats',
      'Discovery of niche creators and trends',
    ],
    cons: [
      'Most aggressive recommendation algorithm in existence',
      'Infinite scroll with no natural endpoint',
      'Trains fragmented attention (15–60s videos)',
      'Extensive data collection and tracking',
      'Average sessions of 90+ minutes',
    ],
    verdict: 'uninstall',
    verdictReason: 'TikTok has the most aggressive attention-capture design of any app. The cost-to-benefit ratio is the worst across all social platforms. The same educational content exists on YouTube without the same algorithmic intensity.',
    alternativa: 'YouTube with specific subscriptions (channels you chose, not the algorithmic feed)',
  },
  {
    appId: 'youtube',
    pros: [
      'Long-form, high-quality educational content',
      'Documentaries, tutorials, video podcasts',
      'Largest content library in the world',
      'Subscription and playlist control',
    ],
    cons: [
      'Autoplay and endless recommendations',
      'Rabbit holes that are hard to exit',
      'Video length inflation and duration clickbait',
      'Shorts replicates the TikTok problem',
    ],
    verdict: 'limit',
    verdictReason: 'YouTube has real educational value but the recommendation system is problematic. Use it with specific subscriptions, autoplay disabled, and avoid the Shorts tab entirely.',
  },
  {
    appId: 'twitter',
    pros: [
      'Real-time news and breaking events',
      'Direct access to researchers and experts',
      'Niche intellectual conversations',
      'Professional networking in some fields',
    ],
    cons: [
      'Outrage culture and emotional reactivity by design',
      'Increasing algorithmic polarisation',
      'Discourse quality in sharp decline',
      'Platform direction deeply uncertain',
      'Feed optimised for negative engagement',
    ],
    verdict: 'uninstall',
    verdictReason: 'The format is optimised for emotional reactivity, not information. For news and expert access, there are alternatives with a fraction of the cost to your wellbeing.',
    alternativa: 'Expert newsletters via email. Curated RSS feeds.',
  },
  {
    appId: 'facebook',
    pros: [
      'High-quality special-interest groups',
      'Local events and cultural listings',
      'Staying in contact with family',
      'Useful Marketplace',
    ],
    cons: [
      'Low-quality algorithmic news feed',
      'Increasingly irrelevant content',
      'Privacy and data track record (extensively documented)',
      'Interface designed to maximise time in-app',
    ],
    verdict: 'limit',
    verdictReason: 'Facebook has legitimate use cases (groups, events, family) but the algorithmic feed is the problem. Access groups and events directly — never open the main feed.',
  },
  {
    appId: 'reddit',
    pros: [
      'Exceptionally high-quality niche communities',
      'In-depth discussions with subject matter experts',
      'Outstanding learning subreddits',
      'Community-curated content (not algorithmic)',
      'Anonymity enables unusual honesty',
    ],
    cons: [
      'Generalised subreddit rabbit holes',
      'r/worldnews and similar promote doomscrolling',
      'Generic subreddits (r/AskReddit) are scroll in disguise',
      'Can become as addictive as other platforms',
    ],
    verdict: 'keep',
    verdictReason: 'Reddit with specific, well-chosen subscriptions is one of the best available sources of quality information. The key is the subscription list — remove any subreddit that functions as infinite scroll.',
  },
  {
    appId: 'snapchat',
    pros: [
      'Ephemeral communication with close friends',
      'Streaks as motivation for regular contact',
      'Spontaneous sharing of daily moments',
    ],
    cons: [
      'Streaks create artificial continuity anxiety',
      'Stories is an Instagram clone with a smaller base',
      'Declining user base',
      'Low-quality Discover feed',
    ],
    verdict: 'uninstall',
    verdictReason: 'The only legitimate use case (ephemeral communication) is better served by WhatsApp or Signal. Streaks create artificial FOMO without real value.',
    alternativa: 'WhatsApp or Signal for private communication with friends',
  },
  {
    appId: 'linkedin',
    pros: [
      'Genuine professional networking',
      'Real career opportunities',
      'Content from industry leaders',
      'Meaningful professional visibility',
    ],
    cons: [
      'Performance of professionalism and success theatre',
      'Professional trajectory comparison',
      'Increasingly low-relevance feed content',
      'Manipulative notifications ("X people viewed your profile")',
    ],
    verdict: 'keep',
    verdictReason: 'LinkedIn has real professional value and low time cost when used intentionally. Check 2–3 times per week, never daily. Disable all email notifications.',
  },
]

export function getAuditForApp(appId: string): AppAuditEntry | undefined {
  return APP_AUDITS.find(a => a.appId === appId)
}
