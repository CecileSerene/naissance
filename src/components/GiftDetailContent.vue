<script setup>
import { computed } from 'vue'
import GiftHeader from './GiftHeader.vue'
import GiftImage from './GiftImage.vue'
import GiftInfo from './GiftInfo.vue'
import ContributionForm from './ContributionForm.vue'
import PaymentNotice from './PaymentNotice.vue'

const props = defineProps({
  gift: { type: Object, required: true },
  categoryColor: { type: String, default: '#3D5A44' },
})

const emit = defineEmits(['back', 'submit'])

const collected = computed(() =>
  (props.gift.contributors || []).reduce((sum, c) => sum + (c.amount || 0), 0)
)

const remaining = computed(() => {
  if (props.gift.price === null || props.gift.price === undefined) return 0
  return Math.max(0, props.gift.price - collected.value)
})

function handleSubmit(payload) {
  emit('submit', { giftId: props.gift.id, ...payload })
}
</script>

<template>
  <div class="gift-page">
    <GiftHeader @back="$emit('back')" />

    <div class="gift-main">
      <GiftImage :image="gift.image" :name="gift.name" />
      <GiftInfo :gift="gift" :categoryColor="categoryColor" />
    </div>

    <ContributionForm v-if="!gift.isPaid" :gift="gift" :categoryColor="categoryColor" :remaining="remaining" @submit="handleSubmit" />

    <PaymentNotice v-if="!gift.isPaid"/>
  </div>
</template>

<style scoped>
.gift-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

.gift-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

@media (max-width: 760px) {
  .gift-main {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
