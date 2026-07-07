<template>
  <div class="payment-notice">
    <div class="icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 21h18M4 21V9l8-6 8 6v12M9 21v-6h6v6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div>
      <p>
        Vous aurez toutes les informations à l'étape suivante
      </p>
      <p class="muted">Les informations vous seront communiquées après validation.</p>
    </div>
  </div>
</template>

<style scoped>
.payment-notice {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: var(--bg-cream);
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin-top: 24px;
}

.icon {
  color: var(--text-dark);
  flex-shrink: 0;
}

.payment-notice p {
  margin: 0;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.payment-notice .muted {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-top: 2px;
}
</style>
