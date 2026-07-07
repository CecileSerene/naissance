<script setup>
defineEmits(['back'])
</script>

<template>
  <header class="gift-header">
    <button class="back-link" type="button" @click="$emit('back')">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      Retour à la liste
    </button>

    <div class="mascot" aria-hidden="true">
      <img src="./icons/Whales.png" alt="" width="100" />
    </div>
  </header>
</template>

<style scoped>
.gift-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-dark);
  cursor: pointer;
  padding: 4px 0;
}

.back-link:hover {
  color: var(--green-primary);
}

.mascot {
  display: flex;
}
</style>
