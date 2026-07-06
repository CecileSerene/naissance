<script setup>
import BankIcon from './icons/BankIcon.vue'
import BoxIcon from './icons/BoxIcon.vue'
import HandsIcon from './icons/HandsIcon.vue'
import { COPY } from '../constants/copy.js'
</script>

<template>
  <section class="participation-banner" aria-labelledby="participation-title">
    <h2 id="participation-title" class="participation-banner__title">
      {{ COPY.banner.title }}
    </h2>
    <div class="participation-banner__options">
      <div class="participation-banner__option">
        <div class="participation-banner__icon participation-banner__icon--hands">
          <HandsIcon />
        </div>
        <div>
          <h3 class="participation-banner__option-title">{{ COPY.banner.hand.title }}</h3>
          <p class="participation-banner__option-text">{{ COPY.banner.hand.description }}</p>
        </div>
      </div>
      <div class="participation-banner__separator"></div>
      <div class="participation-banner__option">
        <div class="participation-banner__icon participation-banner__icon--postal">
          <BoxIcon />
        </div>
        <div>
          <h3 class="participation-banner__option-title">{{ COPY.banner.postal.title }}</h3>
          <p class="participation-banner__option-text" v-html="COPY.banner.postal.description"></p>
        </div>
      </div>
      <div class="participation-banner__separator"></div>
      <div class="participation-banner__option">
        <div class="participation-banner__icon participation-banner__icon--bank">
          <BankIcon />
        </div>
        <div>
          <h3 class="participation-banner__option-title">{{ COPY.banner.bank.title }}</h3>
          <p class="participation-banner__option-text">{{ COPY.banner.bank.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.participation-banner {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: 1.5rem;
  margin-bottom: 2.5rem;
}

.participation-banner__title {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 1.25rem;
  color: var(--color-text);
}

.participation-banner__options {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.participation-banner__option {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.participation-banner__separator {
  border-right: solid 1px var(--color-border);
}

.participation-banner__icon {
  flex-shrink: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.participation-banner__icon :deep(svg) {
  width: 1.25rem;
  height: 1.25rem;
}

.participation-banner__icon--bank {
  background: #264653;
}

.participation-banner__icon--hands {
  background: #e76f51;
}

.participation-banner__icon--postal {
  background: #2a9d8f;
}

.participation-banner__option-title {
  font-size: 0.9375rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  color: var(--color-text);
}

.participation-banner__option-text {
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  color: var(--color-text-muted);
}

@media (min-width: 640px) {
  .participation-banner__options {
    flex-direction: row;
    gap: 2rem;
  }

  .participation-banner__option {
    flex: 1;
  }
}
</style>
