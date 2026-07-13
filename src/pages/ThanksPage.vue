<script setup>
import { RouterLink } from 'vue-router'
import ParticipationBanner from '../components/ParticipationBanner.vue'
</script>

<template>
  <div class="thanks">
    <div class="mascot" aria-hidden="true">
      <img src="../components/icons/Whales.png" alt="" />
    </div>
    <h1>Merci pour votre participation&nbsp!</h1>
    <p>Votre geste nous touche énormément.<br>Grâce à votre générosité, nous préparons l'arrivée de bébé avec encore plus de sérénité.</p>
    <p>Vous pouvez maintenant nous le faire parvenir de la manière de votre choix.</p>
    <ParticipationBanner :show-details="true" />
    <RouterLink to="/" class="back-link">Retour à la liste</RouterLink>
  </div>
</template>

<style scoped>
.thanks {
  max-width: var(--container-max);
  margin: 40px auto;
  padding: 0 var(--gutter);
  text-align: center;
}

.mascot {
  width: 8rem;
  margin: 0 auto 1rem;
}

.mascot img {
  width: 100%;
  height: auto;
  display: block;
}

.thanks h1 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  line-height: 1.3;
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

@media (min-width: 768px) {
  .mascot {
    width: 10rem;
  }

  .thanks h1 {
    font-size: 2rem;
  }
}
</style>
