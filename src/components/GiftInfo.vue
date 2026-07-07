<script setup>
import { computed } from 'vue'

const props = defineProps({
  gift: { type: Object, required: true },
  categoryColor: { type: String, default: '#3D5A44' },
})

const hasPrice = computed(() => props.gift.price !== null && props.gift.price !== undefined)

const percent = computed(() => {
  if (!hasPrice.value || props.gift.price === 0) return 0
  return Math.min(100, Math.round((props.gift.paid / props.gift.price) * 100))
})

const remaining = computed(() => {
  if (!hasPrice.value) return 0
  return Math.max(0, props.gift.price - props.gift.paid)
})

const contributorNames = computed(() =>
  (props.gift.contributors || []).map((c) => c).join(', ')
)

const formatEuro = (value) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value)
</script>

<template>
  <div class="gift-info">
    <h1 class="title">{{ gift.name }}</h1>

    <p v-if="hasPrice" class="price">{{ formatEuro(gift.price) }}</p>

    <a v-if="gift.link" :href="gift.link" target="_blank" rel="noopener" class="shop-link">
      {{ gift.linkLabel || gift.link }}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="categoryColor" stroke-width="2">
        <path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a>

    <a v-if="gift.source" :href="gift.source" target="_blank" rel="noopener" class="merchant-btn" :style="{ backgroundColor: categoryColor }">
      Voir sur le site marchand
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a>

    <div v-if="gift.isPaid" class="reserved-banner" >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span>Ce cadeau est déjà entièrement réservé</span>
    </div>


    <template v-if="hasPrice" :style="{ margin: '8px' }">
      <template v-if="!gift.isPaid && gift.allowPartial">
        <div class="progress-row">
          <span>Payé à {{ percent }}%</span>
          <span>{{ formatEuro(gift.paid) }} sur {{ formatEuro(gift.price) }}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="{ width: percent + '%' }" />
        </div>
      </template>
    </template>
    <p v-else class="free-note">Ce cadeau n'a pas de prix fixe : proposez le modèle de votre choix.</p>

    

    <div v-if="contributorNames" class="reserved-by">
      <p class="reserved-label">Réservé par</p>
      <p class="reserved-names">{{ contributorNames }}</p>
    </div>

    <div class="gift-description" v-if="gift.description">
      <div class="divider" />
      <h2>Le mot des parents</h2>
      <p v-html="gift.description"></p>
    </div>
  </div>
</template>

<style scoped>
.gift-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.badge {
  display: inline-block;
  align-self: flex-start;
  background: var(--green-badge-bg);
  color: var(--green-badge-text);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 12px;
}

.title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 500;
  color: var(--text-dark);
  margin: 0 0 12px;
}

.price {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-dark);
  margin: 0;
}

.price--free {
  color: var(--green-primary);
}

.shop-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 6px;
}

.shop-link:hover {
  color: var(--green-primary);
}

.merchant-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: flex-start;
  background: var(--green-primary);
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 10px;
  margin-top: 14px;
}

.merchant-btn:hover {
  background: var(--green-dark);
}

.reserved-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--green-badge-bg);
  color: var(--green-badge-text);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 14px;
  border-radius: 10px;
  margin-top: 16px;
}

.reserved-banner svg {
  flex-shrink: 0;
}

.divider {
  height: 1px;
  background: var(--border-light);
  margin: 20px 0;
}

.progress-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.progress-track {
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: var(--border-light);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--green-primary);
  border-radius: 999px;
  transition: width 0.3s ease;
}

.free-note {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
  margin-top: 8px;
}


.gift-description h2 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-dark);
  margin: 0 0 12px;
}

.gift-description p {
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.reserved-by {
  margin-top: 20px;
}

.reserved-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0 0 4px;
}

.reserved-names {
  font-weight: 500;
  color: var(--text-dark);
  margin: 0;
}

.notice {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  padding: 14px 16px;
  margin-top: 20px;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.notice svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--text-muted);
}

.notice p {
  margin: 0;
}
</style>