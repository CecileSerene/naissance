<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  gift: { type: Object, required: true },
  remaining: { type: Number, default: 0 },
  minAmount: { type: Number, default: 10 },
})

const emit = defineEmits(['submit'])

const route = useRoute()
const isFull = route.query.full === 'true'

const hasPrice = computed(() => props.gift.price !== null && props.gift.price !== undefined)

// The full/partial toggle only makes sense when there is a fixed price
// AND the gift owner allows splitting the cost between several people.
const showModeToggle = computed(() => hasPrice.value && props.gift.allowPartial)

const mode = ref(isFull ? 'full' : 'partial')
const amount = ref(hasPrice.value && !props.gift.allowPartial ? props.remaining : props.minAmount)
const message = ref('')
const contributorName = ref('')
const contributorEmail = ref('')
const displayName = ref(true)
const nameError = ref(false)

watch(mode, (newMode) => {
  if (newMode === 'full' && hasPrice.value) {
    amount.value = props.remaining
  } else if (newMode === 'partial') {
    amount.value = props.minAmount
  }
})

watch(contributorName, () => {
  if (contributorName.value.trim()) nameError.value = false
})

const isAmountEditable = computed(() => !hasPrice.value || mode.value === 'partial')

function handleSubmit() {
  if (!contributorName.value.trim()) {
    nameError.value = true
    return
  }

  emit('submit', {
    name: contributorName.value.trim(),
    amount: amount.value,
    message: message.value,
    email: contributorEmail.value.trim(),
    displayName: displayName.value,
  })
}
</script>

<template>
  <section class="contribution-card">
    <h2>Participer à ce cadeau</h2>
    <p>Indiquez aux autres invités votre réservation ou participation et ainsi éviter les doublons.</p>

    <p class="hint" v-if="allowPartial">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path
          d="M12 21s-7-4.5-9.5-9C1 8 2.5 4.5 6 4c2-.3 3.7.7 4.7 2.2C11.7 5 13.4 4 15.4 4c3.5.5 5 4 3.5 8-2.5 4.5-7 9-7 9z"
        />
      </svg>
      Vous pouvez participer du montant de votre choix.
    </p>

    <div class="field">
      <label for="contributor-name">Votre nom</label>
      <input
        id="contributor-name"
        type="text"
        v-model="contributorName"
        placeholder="Votre nom"
        :class="{ 'has-error': nameError }"
      />

      <div class="checkbox-row">
        <input type="checkbox" id="displayName" v-model="displayName" />
        <label for="displayName" class="checkbox-label">Afficher mon nom (visible par les autres invités)</label>
      </div>

      <p v-if="nameError" class="error-note">Merci d'indiquer votre nom.</p>
    </div>

    <div class="field">
      <label for="contributor-name">Email</label>
      <input
        id="contributor-email"
        type="text"
        v-model="contributorEmail"
        placeholder="email"
        :class="{ 'has-error': emailError }"
      />
      <p v-if="emailError" class="error-note">Merci d'indiquer votre email.</p>
    </div>

    <div v-if="showModeToggle" class="mode-choice">
      <label class="mode-option" :class="{ active: mode === 'full' }">
        <input type="radio" value="full" v-model="mode" name="mode" />
        <span>
          <strong>Offrir en entier</strong>
          <small>Je réserve ce cadeau en totalité</small>
        </span>
      </label>

      <label class="mode-option" :class="{ active: mode === 'partial' }">
        <input type="radio" value="partial" v-model="mode" name="mode" />
        <span>
          <strong>Participation partielle</strong>
          <small>Je participe du montant de mon choix</small>
        </span>
      </label>
    </div>

    <div v-if="isAmountEditable && showModeToggle" class="field">
      <label for="amount">Montant de ma participation</label>
      <div class="amount-input">
        <input
          id="amount"
          type="number"
          step="1"
          inputmode="numeric"
          v-model.number="amount"
          :min="minAmount"
          :readonly="!isAmountEditable"
          :class="{ readonly: !isAmountEditable }"
          @blur="amount = Math.round(amount)"
        />
        <span>€</span>
      </div>
    </div>

    <div class="field">
      <label for="message">Mon message</label>
      <textarea
        id="message"
        v-model="message"
        maxlength="200"
        placeholder="Un petit mot pour les futurs parents..."
        rows="3"
      />
      <p class="char-count">{{ message.length }} / 200</p>
    </div>

    <button type="button" class="submit-btn" @click="handleSubmit">Continuer ma participation</button>
  </section>
</template>

<style scoped>
.contribution-card {
  background: var(--card-bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius);
  padding: 32px;
  margin-top: 40px;
}

.contribution-card h2 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-dark);
  margin: 0 0 16px;
}

.hint {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--bg-cream);
  border-radius: 10px;
  padding: 12px 16px;
  color: var(--text-dark);
  font-size: 0.9rem;
  margin: 0 0 24px;
}

.hint svg {
  color: var(--green-primary);
  flex-shrink: 0;
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
}

.checkbox-row input[type='checkbox'] {
  width: 16px;
  height: 16px;
  margin: 0;
  flex-shrink: 0;
  cursor: pointer;
  accent-color: #264653;
}

.field .checkbox-row label {
  display: inline;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  cursor: pointer;
}

.mode-choice {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.mode-option {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border: 1.5px solid var(--border-light);
  border-radius: 10px;
  padding: 14px;
  cursor: pointer;
}

.mode-option.active {
  border-color: #264653;
  background: #cde3eb;
}

.mode-option input {
  margin-top: 3px;
}

.mode-option strong {
  display: block;
  font-size: 0.9rem;
  color: var(--text-dark);
}

.mode-option small {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.field {
  margin-bottom: 20px;
}

.field label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.field > input[type='text'] {
  width: 100%;
  border: 1.5px solid var(--border-light);
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 1rem;
  font-family: inherit;
  color: var(--text-dark);
  box-sizing: border-box;
}

.field > input[type='text'].has-error {
  border-color: #c0392b;
}

.error-note {
  font-size: 0.8rem;
  color: #c0392b;
  margin: 6px 0 0;
}

.amount-input {
  display: flex;
  align-items: center;
  border: 1.5px solid var(--border-light);
  border-radius: 10px;
  padding: 10px 14px;
}

.amount-input input {
  border: none;
  outline: none;
  font-size: 1rem;
  width: 100%;
  color: var(--text-dark);
  background: transparent;
}

.amount-input input.readonly {
  color: var(--text-muted);
}

.amount-input span {
  color: var(--text-muted);
}

.min-note,
.char-count {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 6px 0 0;
  text-align: right;
}

.min-note {
  text-align: left;
}

textarea {
  width: 100%;
  border: 1.5px solid var(--border-light);
  border-radius: 10px;
  padding: 12px 14px;
  font-family: inherit;
  font-size: 0.95rem;
  resize: vertical;
  box-sizing: border-box;
}

.submit-btn {
  width: 100%;
  background: var(--green-primary);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.submit-btn:hover {
  background: var(--green-dark);
}

.secure-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: var(--text-muted);
  font-size: 0.85rem;
  margin: 14px 0 0;
}

@media (max-width: 560px) {
  .mode-choice {
    grid-template-columns: 1fr;
  }
}
</style>