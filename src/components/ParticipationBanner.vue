<script setup>
import { ref } from 'vue'
import BankIcon from './icons/BankIcon.vue'
import BoxIcon from './icons/BoxIcon.vue'
import HandsIcon from './icons/HandsIcon.vue'
import { COPY } from '../constants/copy.js'

const props = defineProps({
  showDetails: { type: Boolean, default: false }
})

const copiedField = ref(null)

async function copyToClipboard(text, field) {
  try {
    await navigator.clipboard.writeText(text)
    copiedField.value = field
    setTimeout(() => {
      if (copiedField.value === field) copiedField.value = null
    }, 2000)
  } catch (err) {
    console.error('Copie impossible :', err)
  }
}
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

          <div v-if="showDetails" class="participation-banner__details">
            <p class="participation-banner__detail-line" v-html="COPY.banner.postal.address"></p>
          </div>
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

          <div v-if="showDetails" class="participation-banner__details">
            <p class="participation-banner__detail-line"><strong>Nom :</strong> {{ COPY.banner.bank.name }}</p>
            <p class="participation-banner__detail-line"><strong>IBAN :</strong> {{ COPY.banner.bank.iban }}</p>
            <p class="participation-banner__detail-line"><strong>BIC :</strong> {{ COPY.banner.bank.bic }}</p>

            <button
              type="button"
              class="participation-banner__copy-btn"
              :class="{ 'participation-banner__copy-btn--copied': copiedField === 'rib' }"
              @click="copyToClipboard(COPY.banner.bank.iban.replaceAll(' ',''), 'rib')"
            >
              <svg v-if="copiedField !== 'rib'" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ copiedField === 'rib' ? 'Copié !' : 'Copier le RIB' }}
            </button>
          </div>
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
  text-align: left;
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
  background: #64113f;
}

.participation-banner__icon--postal {
  background: #2a9d8f;
}

.participation-banner__copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.75rem;
  padding: 0.45rem 0.9rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
  background: color-mix(in srgb, var(--color-primary) 8%, white);
  border: 1px solid color-mix(in srgb, var(--color-primary) 25%, white);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.1s ease;
}

.participation-banner__copy-btn:hover {
  background: color-mix(in srgb, var(--color-primary) 15%, white);
  border-color: color-mix(in srgb, var(--color-primary) 40%, white);
}

.participation-banner__copy-btn:active {
  transform: scale(0.97);
}

.participation-banner__copy-btn svg {
  flex-shrink: 0;
}

.participation-banner__copy-btn--copied {
  color: #1f7a4d;
  background: color-mix(in srgb, #1f7a4d 12%, white);
  border-color: color-mix(in srgb, #1f7a4d 35%, white);
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
