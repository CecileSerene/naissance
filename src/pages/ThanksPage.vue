<script setup>
import { RouterLink } from 'vue-router'
import ParticipationBanner from '../components/ParticipationBanner.vue'
</script>

<template>
  <div class="thanks">
    <h1>Merci pour votre participation !</h1>
    <p>Nous apprécions enormément votre geste généreux !</p>
    <p>Vous pouvez maintenant nous le faire parvenir de la manière de votre choix.</p>
    <ParticipationBanner :show-details="true" />
    <RouterLink to="/" class="back-link">Retour à la liste</RouterLink>
  </div>
</template>

<style scoped>
.thanks {
  max-width: var(--container-max);
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
