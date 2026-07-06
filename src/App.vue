<script setup>
import gifts from './data/gifts.json'
import { useGifts } from './composables/useGifts.js'
import AppHeader from './components/AppHeader.vue'
import ParticipationBanner from './components/ParticipationBanner.vue'
import CategorySection from './components/CategorySection.vue'
import Footer from './components/Footer.vue'

const { groupedCategories } = useGifts(gifts)
</script>

<template>
  <div class="app">
    <div class="container">
      <AppHeader />
      <ParticipationBanner />
      <main>
        <CategorySection
          v-for="category in groupedCategories"
          :key="category.name"
          :name="category.name"
          :gifts="category.gifts"
          :available-count="category.availableCount"
        />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background: var(--color-bg);
}
</style>
