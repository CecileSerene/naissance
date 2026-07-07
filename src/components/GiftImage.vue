<script setup>
defineProps({
  image: { type: String, required: true },
  name: { type: String, required: true }
})
</script>

<template>
  <div class="gift-image">
    <img :src="image" :alt="name" loading="lazy" />
  </div>
</template>

<style scoped>
.gift-image {
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  aspect-ratio: 4 / 3;
}

.gift-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
