export interface SocialApp {
  id: string
  name: string
  emoji: string
  color: string
  bgColor: string
}

export const SOCIAL_APPS: SocialApp[] = [
  { id: 'instagram', name: 'Instagram', emoji: '📸', color: '#E1306C', bgColor: '#fce4ec' },
  { id: 'tiktok', name: 'TikTok', emoji: '🎵', color: '#000000', bgColor: '#f5f5f5' },
  { id: 'youtube', name: 'YouTube', emoji: '▶️', color: '#FF0000', bgColor: '#ffebee' },
  { id: 'twitter', name: 'Twitter / X', emoji: '𝕏', color: '#000000', bgColor: '#f5f5f5' },
  { id: 'facebook', name: 'Facebook', emoji: '👤', color: '#1877F2', bgColor: '#e3f2fd' },
  { id: 'reddit', name: 'Reddit', emoji: '🤖', color: '#FF4500', bgColor: '#fbe9e7' },
  { id: 'snapchat', name: 'Snapchat', emoji: '👻', color: '#FFFC00', bgColor: '#fffde7' },
  { id: 'linkedin', name: 'LinkedIn', emoji: '💼', color: '#0A66C2', bgColor: '#e3f2fd' },
]

export function getAppById(id: string): SocialApp | undefined {
  return SOCIAL_APPS.find(a => a.id === id)
}

export function getRandomApp(appIds: string[]): SocialApp {
  const pool = appIds.length > 0 ? SOCIAL_APPS.filter(a => appIds.includes(a.id)) : SOCIAL_APPS
  return pool[Math.floor(Math.random() * pool.length)]
}
