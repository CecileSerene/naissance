<script setup>
import { COPY } from '../constants/copy.js'
</script>

<template>
  <header class="app-header">
    <div class="app-header__icon" aria-hidden="true">
      <img src="./icons/Whales.png">
    </div>
    <h1 class="app-header__title">{{ COPY.header.title }}</h1>
    <p class="app-header__intro" v-html="COPY.header.intro"></p>
  </header>
</template>

<style scoped>
.app-header {
  text-align: center;
  padding: 2rem 0 1.5rem;
}

.app-header__icon {
  width: 8rem;
  margin: 0 auto 1rem;
  color: var(--color-primary);
}

.app-header__icon :deep(svg) {
  width: 100%;
}

.app-header__title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.3;
  margin: 0 0 0.75rem;
}

.app-header__intro {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  max-width: 40rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .app-header__icon {
    width: 10rem;
  }

  .app-header__title {
    font-size: 2rem;
  }
}
</style>
