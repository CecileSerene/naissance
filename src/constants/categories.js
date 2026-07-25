export const CATEGORY_CONFIG = {
  Chambre: { name: 'De beaux rêves', icon: 'bed', color: '#1b617c' },
  Jouets: { name: 'Des bêtises',icon: 'toy', color: '#2a9d8f' },
  Transport: { name: 'Des promenades',icon: 'stroller', color: '#64113f' },
  Repas: { name: 'De bons repas', icon: 'lunch', color: '#B9B8D3' },
  Bain: { name: 'Des ploufs', icon: 'bath', color: '#ef6f6c' },
  Parents: { name: 'Pour Papa et Maman', icon: 'house', color: '#DC758F' },
  Autre: { name: 'Autre', icon: 'gift', color: '#ef6f6c' },
}

export const DEFAULT_CATEGORY = { icon: 'gift', color: '#6B7280' }

export const CATEGORY_ORDER = ['Chambre', 'Jouets', 'Transport', 'Bain', 'Repas', 'Parents', 'Autre']

export function getCategoryConfig(name) {
  return CATEGORY_CONFIG[name] ?? DEFAULT_CATEGORY
}
