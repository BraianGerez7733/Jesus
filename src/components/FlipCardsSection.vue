<script setup>
import { ref } from 'vue'

const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
})

const activeIndex = ref(null)

const toggleCard = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const clearCard = () => {
  activeIndex.value = null
}
</script>

<template>
  <div class="grid gap-5 md:grid-cols-3">
    <button
      v-for="(card, index) in props.cards"
      :key="card.title"
      type="button"
      class="flip-card group h-64 w-full bg-transparent text-left"
      :class="{ 'is-flipped': activeIndex === index }"
      @click="toggleCard(index)"
      @mouseleave="clearCard"
      @blur="clearCard"
    >
      <span class="flip-card-inner block h-full w-full rounded-[1.75rem]">
        <span class="flip-card-face page-card flex h-full flex-col justify-end rounded-[1.75rem] bg-white/10 p-6">
          <span class="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
            Frente
          </span>
          <span class="mt-4 text-2xl font-bold text-white">
            {{ card.title }}
          </span>
        </span>

        <span class="flip-card-face flip-card-back page-card flex h-full flex-col justify-between rounded-[1.75rem] border-fuchsia-200/20 bg-slate-950/85 p-6">
          <span class="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Reverso
          </span>
          <span class="text-sm leading-7 text-slate-200">
            {{ card.description }}
          </span>
        </span>
      </span>
    </button>
  </div>
</template>

<style scoped>
.flip-card {
  perspective: 1200px;
}

.flip-card-inner {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.flip-card:hover .flip-card-inner,
.flip-card:focus-visible .flip-card-inner,
.flip-card.is-flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
