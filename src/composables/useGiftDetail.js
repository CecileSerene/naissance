import { ref, watchEffect } from 'vue'
import { fetchGiftById } from '../services/gifts.js'

export function useGiftDetail(id) {
  const gift = ref(null)
  const loading = ref(true)
  const error = ref(null)

  async function loadGift() {
    if (!id) return

    loading.value = true
    error.value = null

    try {
      gift.value = await fetchGiftById(id)
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    if (id) {
      loadGift()
    }
  })

  return {
    gift,
    loading,
    error,
    refresh: loadGift,
  }
}
