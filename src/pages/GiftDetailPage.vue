<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import GiftDetailContent from '../components/GiftDetailContent.vue'
import { getGiftById } from '../data/gifts'
import { getCategoryConfig } from '../constants/categories.js'

// Because the route is declared with `props: true`, vue-router passes
// the :id param straight in as a prop instead of us reading useRoute().
const props = defineProps({
  id: { type: String, required: true }
})

const router = useRouter()

const gift = computed(() => getGiftById(props.id))
const categoryColor = computed(() => getCategoryConfig(gift.value.category)?.color)

function handleBack() {
  router.push('/')
}

function handleSubmit(payload) {
  // Wire this up to your API call when it's ready.
  console.log('Contribution soumise :', payload)
  router.push('/thanks')
}
</script>

<template>
  <GiftDetailContent v-if="gift" :gift="gift" :categoryColor="categoryColor" @back="handleBack" @submit="handleSubmit" />
  <div v-else class="not-found">
    <p>Ce cadeau est introuvable.</p>
    <button type="button" @click="handleBack">Retour à la liste</button>
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
