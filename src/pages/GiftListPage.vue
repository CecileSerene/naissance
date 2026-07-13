<script setup>
import { useGifts } from '../composables/useGifts.js'
import { useGiftList } from '../composables/useGiftList.js'
import AppHeader from '../components/AppHeader.vue'
import ParticipationBanner from '../components/ParticipationBanner.vue'
import CategorySection from '../components/CategorySection.vue'
import Footer from '../components/Footer.vue'

const { gifts, loading, error } = useGiftList()
const { groupedCategories } = useGifts(gifts)
</script>

<template>
  <div class="app">
    <div class="container">
      <AppHeader />
      <ParticipationBanner />

      <main>
        <div v-if="loading" class="loading">Chargement de la liste de naissance...</div>
        <div v-else-if="error" class="error">Une erreur est survenue lors du chargement de la liste de naissance, veuillez réessayer plus tard.</div>
        <div v-else>
          <CategorySection
            v-for="category in groupedCategories"
            :key="category.name"
            :name="category.name"
            :gifts="category.gifts"
            :available-count="category.availableCount"
          />
        </div>
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
