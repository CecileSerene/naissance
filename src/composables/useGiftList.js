import { ref, onMounted } from 'vue'
import { fetchGifts } from '../services/gifts.js'

export function useGiftList() {
  const gifts = ref([])
  const loading = ref(true)
  const error = ref(null)

  async function loadGifts() {
    loading.value = true
    error.value = null

    try {
      gifts.value = await fetchGifts()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  onMounted(loadGifts)

  return {
    gifts,
    loading,
    error,
    refresh: loadGifts,
  }
}
