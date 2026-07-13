<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import GiftDetailContent from '../components/GiftDetailContent.vue'
import { useGiftDetail } from '../composables/useGiftDetail.js'
import { getCategoryConfig } from '../constants/categories.js'

// Because the route is declared with `props: true`, vue-router passes
// the :id param straight in as a prop instead of us reading useRoute().
const props = defineProps({
  id: { type: String, required: true }
})

const router = useRouter()
const { gift, loading, error } = useGiftDetail(props.id)
const categoryColor = computed(() => gift.value ? getCategoryConfig(gift.value.category)?.color : null)

function handleBack() {
  router.push('/')
}

function handleSubmit(payload) {
  console.log('Contribution soumise :', payload)
  router.push('/thanks')
}
</script>

<template>
  <div>
    <div v-if="loading" class="loading">Chargement du cadeau…</div>
    <div v-else-if="error" class="error">Une erreur est survenue lors du chargement du cadeau.</div>
    <GiftDetailContent
      v-else-if="gift"
      :gift="gift"
      :categoryColor="categoryColor"
      @back="handleBack"
      @submit="handleSubmit"
    />
    <div v-else class="not-found">
      <p>Ce cadeau est introuvable.</p>
      <button type="button" @click="handleBack">Retour à la liste</button>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  max-width: 960px;
  margin: 80px auto;
  text-align: center;
  color: var(--text-muted);
}

.not-found button {
  margin-top: 16px;
  background: var(--green-primary);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
