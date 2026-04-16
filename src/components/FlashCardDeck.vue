<script setup>
import FlashCard from './FlashCard.vue'

defineProps({
  cards: { type: Array, required: true },
  accent: { type: String, default: 'sky' },
})
</script>

<template>
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <FlashCard
      v-for="card in cards"
      :key="card.front.title"
      :front="card.front"
      :back="card.back"
      :accent="card.accent ?? accent"
    />
  </div>
</template>
