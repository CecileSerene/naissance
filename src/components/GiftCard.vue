<script setup>
import { computed } from 'vue'
import { isFullyPaid, progressPercent } from '../composables/useGifts.js'
import { COPY } from '../constants/copy.js'
import GiftIcon from './icons/GiftIcon.vue'

const props = defineProps({
  gift: { type: Object, required: true },
  categoryColor: { type: String, default: '#3D5A44' },
})

const fullyPaid = computed(() => isFullyPaid(props.gift))
const percent = computed(() => progressPercent(props.gift))
const showProgress = computed(
  () => props.gift.allowPartial && props.gift.paid > 0 && !fullyPaid.value
)
const contributorsText = computed(() => props.gift.contributors.join(', '))
const showReserved = computed(
  () => !fullyPaid.value && !props.gift.allowPartial && props.gift.contributors.length > 0
)
const showParticipations = computed(
  () => !fullyPaid.value && props.gift.allowPartial && props.gift.contributors.length > 0
)
const url = props.gift.source ? new URL(props.gift.source).hostname : null
</script>

<template>
  <article
    class="gift-card"
    :class="{ 'gift-card--completed': fullyPaid }"
  >
    <div class="gift-card__image-wrap">
      <img
        class="gift-card__image"
        :src="gift.image"
        :alt="gift.name"
        loading="lazy"
      />
      <span
        v-if="!fullyPaid && gift.allowPartial"
        class="gift-card__badge"
        :class="gift.allowPartial ? 'gift-card__badge--partial' : 'gift-card__badge--full'"
      >
        {{ COPY.gifts.badgePartial }}
      </span>
    </div>

    <div class="gift-card__body">
      <h3 class="gift-card__name">{{ gift.name }}</h3>
      <p v-if="gift.price" class="gift-card__price">{{ gift.price }} €</p>
      <p v-if="gift.source" class="gift-card__source">{{ url }}</p>

      <div v-if="showProgress" class="gift-card__progress">
        <div class="gift-card__progress-bar">
          <div
            class="gift-card__progress-fill"
            :style="{ width: `${percent}%`, backgroundColor: categoryColor }"
          />
        </div>
        <p class="gift-card__progress-text">
          {{ COPY.gifts.progress(gift.paid, gift.price, percent) }}
        </p>
      </div>

      <div class="gift-card__footer">
        <p v-if="fullyPaid && contributorsText" class="gift-card__contributors">
          {{ COPY.gifts.participations }} {{ contributorsText }}
        </p>
        <p v-else-if="showReserved" class="gift-card__contributors">
          {{ COPY.gifts.reservedBy }} {{ contributorsText }}
        </p>
        <p v-else-if="showParticipations" class="gift-card__contributors">
          {{ COPY.gifts.participations }} {{ contributorsText }}
        </p>

        <div class="gift-card__actions">
          <template v-if="fullyPaid">
            <button type="button" class="gift-card__btn gift-card__btn--disabled"  disabled>
              {{ COPY.gifts.offeredFull }}
            </button>
          </template>
          <template v-else-if="gift.allowPartial">
            <button type="button" class="gift-card__btn gift-card__btn--primary" :style="{ backgroundColor: categoryColor }">
              {{ COPY.gifts.offerFull }}
            </button>
            <button type="button" class="gift-card__btn gift-card__btn--secondary"  :style="{ color: categoryColor, borderColor: categoryColor }">
              {{ COPY.gifts.participate }}
            </button>
          </template>
          <template v-else>
            <button type="button" class="gift-card__btn gift-card__btn--primary gift-card__btn--full" :style="{ backgroundColor: categoryColor }">
              {{ COPY.gifts.offerFull }}
            </button>
          </template>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.gift-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: opacity 0.2s;
}

.gift-card--completed {
  opacity: 0.65;
}

.gift-card__image-wrap {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--color-bg-muted);
}

.gift-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gift-card--completed .gift-card__image {
  filter: grayscale(100%);
}

.gift-card__badge {
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-full);
  line-height: 1.3;
  max-width: calc(100% - 1.25rem);
}

.gift-card__badge--full {
  background: var(--color-badge-green);
  color: var(--color-primary);
}

.gift-card__badge--partial {
  background: var(--color-badge-yellow);
  color: #7A6520;
}

.gift-card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.gift-card__name {
  font-size: 0.9375rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  color: var(--color-text);
  line-height: 1.3;
}

.gift-card__price {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-text);
}

.gift-card__source {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin: 0.125rem 0 0;
}

.gift-card__progress {
  margin-top: 0.75rem;
}

.gift-card__progress-bar {
  height: 0.375rem;
  background: var(--color-bg-muted);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.gift-card__progress-fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 0.3s ease;
}

.gift-card__progress-text {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin: 0.375rem 0 0;
}

.gift-card__footer {
  margin-top: auto;
}

.gift-card__contributors {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin: 0.75rem 0 0;
  line-height: 1.4;
}

.gift-card__actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
}

@media (min-width: 480px) {
  .gift-card__actions {
    flex-direction: row;
  }

  .gift-card__btn--full {
    flex: 1;
  }
}

.gift-card__btn {
  min-height: 2.75rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.8125rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  flex: 1;
  transition: background 0.15s, border-color 0.15s;
}

.gift-card__btn :deep(svg) {
  width: 1rem;
  height: 1rem;
}

.gift-card__btn--primary {
  color: white;
  border: none;
}

.gift-card__btn--secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.gift-card__btn--disabled {
  background: var(--color-bg-muted);
  color: var(--color-text-muted);
  border: 2px solid var(--color-border);
  cursor: not-allowed;
  width: 100%;
}
</style>
