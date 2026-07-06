<script setup>
import { computed } from 'vue'
import { getCategoryConfig } from '../constants/categories.js'
import { COPY } from '../constants/copy.js'
import CategoryIcon from './CategoryIcon.vue'
import GiftCard from './GiftCard.vue'

const props = defineProps({
  name: { type: String, required: true },
  gifts: { type: Array, required: true },
  availableCount: { type: Number, required: true },
})

const config = computed(() => getCategoryConfig(props.name))
</script>

<template>
  <section class="category-section" :aria-label="name">
    <header class="category-section__header">
      <div
        class="category-section__icon"
        :style="{ backgroundColor: config.color }"
      >
        <CategoryIcon :name="config.icon" />
      </div>
      <div class="category-section__titles">
        <h2 class="category-section__name">{{ name }}</h2>
        <p class="category-section__count">
          {{ COPY.gifts.availableCount(availableCount) }}
        </p>
      </div>
    </header>
    <div class="category-section__grid">
      <GiftCard
        v-for="gift in gifts"
        :key="gift.id"
        :gift="gift"
        :category-color="config.color"
      />
    </div>
  </section>
</template>

<style scoped>
.category-section {
  margin-bottom: 2.5rem;
}

.category-section__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.category-section__icon {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.category-section__icon :deep(svg) {
  width: 1.25rem;
  height: 1.25rem;
}

.category-section__name {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-text);
}

.category-section__count {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin: 0.125rem 0 0;
}

.category-section__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

@media (min-width: 480px) {
  .category-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .category-section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .category-section__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
