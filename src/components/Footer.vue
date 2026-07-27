<script setup>
import HeartIcon from './icons/HeartIcon.vue'
import { COPY } from '../constants/copy.js'
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__icon" aria-hidden="true">
      <HeartIcon />
    </div>
    <p class="app-footer__text">{{ COPY.footer.text }}</p>
    <p class="app-footer__signoff">{{ COPY.footer.signoff }}</p>

    <div class="app-footer__contact">
      <span class="app-footer__contact-line">Vous pouvez nous contacter par mail : poirriergontier@gmail.com</span>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  text-align: center;
  padding: 2.5rem 0 3rem;
  padding-bottom: max(3rem, env(safe-area-inset-bottom, 0px));
}

.app-footer__icon {
  width: 1.25rem;
  height: 1.25rem;
  margin: 0 auto 0.75rem;
  color: #E8A0A0;
}

.app-footer__icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.app-footer__text {
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
  line-height: 1.5;
}

.app-footer__signoff {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-style: italic;
  color: var(--color-text);
  margin: 0;
}

.app-footer__contact {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.app-footer__contact-line {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  text-decoration: none;
}
</style>