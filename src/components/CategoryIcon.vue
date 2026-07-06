<script setup>
import { computed } from 'vue'
import BedIcon from './icons/BedIcon.vue'
import ToyIcon from './icons/ToyIcon.vue'
import StrollerIcon from './icons/StrollerIcon.vue'
import GiftIcon from './icons/GiftIcon.vue'

const props = defineProps({
  name: { type: String, required: true },
})

const iconMap = {
  bed: BedIcon,
  toy: ToyIcon,
  stroller: StrollerIcon,
  gift: GiftIcon,
}

const IconComponent = computed(() => iconMap[props.name] ?? GiftIcon)
</script>

<template>
  <component :is="IconComponent" />
</template>
