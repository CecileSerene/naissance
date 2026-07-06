import { computed } from 'vue'
import { CATEGORY_ORDER } from '../constants/categories.js'

export function isFullyPaid(gift) {
  return gift.paid >= gift.price
}

export function progressPercent(gift) {
  if (gift.price <= 0) return 0
  return Math.round((gift.paid / gift.price) * 100)
}

function sortGifts(gifts) {
  return [...gifts].sort((a, b) => {
    const aPaid = isFullyPaid(a)
    const bPaid = isFullyPaid(b)
    if (aPaid !== bPaid) return aPaid ? 1 : -1
    return 0
  })
}

export function useGifts(gifts) {
  const groupedCategories = computed(() => {
    const groups = new Map()

    for (const gift of gifts) {
      if (!groups.has(gift.category)) {
        groups.set(gift.category, [])
      }
      groups.get(gift.category).push(gift)
    }

    const ordered = CATEGORY_ORDER.filter((name) => groups.has(name))
    const extras = [...groups.keys()].filter((name) => !CATEGORY_ORDER.includes(name))

    return [...ordered, ...extras].map((name) => ({
      name,
      gifts: sortGifts(groups.get(name)),
      availableCount: groups.get(name).filter((g) => !isFullyPaid(g)).length,
    }))
  })

  return { groupedCategories, isFullyPaid, progressPercent }
}
