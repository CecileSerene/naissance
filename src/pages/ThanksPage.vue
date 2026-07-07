<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="thanks">
    <h1>Merci pour votre participation ! 💚</h1>
    <p>Les futurs parents seront ravis.</p>
    <RouterLink to="/" class="back-link">Retour à la liste</RouterLink>
  </div>
</template>

<style scoped>
.thanks {
  max-width: 600px;
  margin: 100px auto;
  text-align: center;
}

.thanks h1 {
  font-family: var(--font-display);
  font-weight: 500;
  color: var(--text-dark);
}

.thanks p {
  color: var(--text-muted);
  margin-bottom: 24px;
}

.back-link {
  color: var(--green-primary);
  font-weight: 600;
  text-decoration: none;
}
</style>
