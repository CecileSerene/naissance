<script setup>
import { computed } from 'vue'
import BedIcon from './icons/BedIcon.vue'
import ToyIcon from './icons/ToyIcon.vue'
import StrollerIcon from './icons/StrollerIcon.vue'
import GiftIcon from './icons/GiftIcon.vue'
import BathIcon from './icons/BathIcon.vue'
import LunchIcon from './icons/LunchIcon.vue'

const props = defineProps({
  name: { type: String, required: true },
})

const iconMap = {
  bed: BedIcon,
  toy: ToyIcon,
  stroller: StrollerIcon,
  bath: BathIcon,
  lunch: LunchIcon,
  gift: GiftIcon,
}

const IconComponent = computed(() => iconMap[props.name] ?? GiftIcon)
</script>

<template>
  <component :is="IconComponent" />
</template>
