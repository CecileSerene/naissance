export const CATEGORY_CONFIG = {
  Chambre: { icon: 'bed', color: '#264653' },
  Jouets: { icon: 'toy', color: '#2a9d8f' },
  Transport: { icon: 'stroller', color: '#e9c46a' },
  Maison: { icon: 'house', color: '#f4a261' },
  Autre: { icon: 'gift', color: '#e76f51' },
}

export const DEFAULT_CATEGORY = { icon: 'gift', color: '#6B7280' }

export const CATEGORY_ORDER = ['Chambre', 'Jouets', 'Transport']

export function getCategoryConfig(name) {
  return CATEGORY_CONFIG[name] ?? DEFAULT_CATEGORY
}
