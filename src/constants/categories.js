export const CATEGORY_CONFIG = {
  Chambre: { icon: 'bed', color: '#1b617c' },
  Jouets: { icon: 'toy', color: '#2a9d8f' },
  Transport: { icon: 'stroller', color: '#64113f' },
  Maison: { icon: 'house', color: '#ef6f6c' },
  Autre: { icon: 'gift', color: '#ef6f6c' },
}

export const DEFAULT_CATEGORY = { icon: 'gift', color: '#6B7280' }

export const CATEGORY_ORDER = ['Chambre', 'Jouets', 'Transport']

export function getCategoryConfig(name) {
  return CATEGORY_CONFIG[name] ?? DEFAULT_CATEGORY
}
