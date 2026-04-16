<script setup>
import { ref } from 'vue'

defineProps({
  front: { type: Object, required: true },
  back: { type: Object, required: true },
  accent: { type: String, default: 'sky' },
})

const flipped = ref(false)

function toggle() {
  flipped.value = !flipped.value
}

const accentMap = {
  sky: 'from-sky-100 via-white to-sky-50',
  violet: 'from-violet-100 via-white to-violet-50',
  amber: 'from-amber-100 via-white to-amber-50',
  rose: 'from-rose-100 via-white to-rose-50',
  emerald: 'from-emerald-100 via-white to-emerald-50',
}
</script>

<template>
  <button
    type="button"
    class="flip-card group relative h-64 w-full cursor-pointer text-left focus:outline-none"
    :class="{ 'is-flipped': flipped }"
    :aria-pressed="flipped"
    @click="toggle"
    @keydown.space.prevent="toggle"
  >
    <span class="flip-card-inner block h-full w-full rounded-3xl">
      <span
        class="flip-face surface-card flex h-full w-full flex-col justify-between p-6 transition group-hover:shadow-sky-500/20 group-hover:-translate-y-1"
        :class="[`bg-gradient-to-br ${accentMap[accent] ?? accentMap.sky}`]"
      >
        <span class="flex items-start justify-between gap-4">
          <span class="chip">{{ front.tag ?? 'Flashcard' }}</span>
          <span
            class="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-lg shadow-sm ring-1 ring-slate-100"
            aria-hidden="true"
          >
            {{ front.emoji ?? '✨' }}
          </span>
        </span>
        <span class="block">
          <span class="font-display block text-2xl font-bold leading-tight text-slate-900">
            {{ front.title }}
          </span>
          <span v-if="front.subtitle" class="mt-2 block text-sm text-slate-600">
            {{ front.subtitle }}
          </span>
        </span>
        <span class="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          <span>Toca para girar</span>
          <span aria-hidden="true">↺</span>
        </span>
      </span>

      <span
        class="flip-face flip-back surface-card flex h-full w-full flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white"
      >
        <span class="flex items-start justify-between gap-4">
          <span class="chip border-white/30 bg-white/10 text-white">{{ back.tag ?? 'Detalle' }}</span>
          <span
            class="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-lg"
            aria-hidden="true"
          >
            📖
          </span>
        </span>
        <span class="block">
          <span class="block text-base leading-7 text-white/90">
            {{ back.text }}
          </span>
          <span v-if="back.reference" class="mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            {{ back.reference }}
          </span>
        </span>
        <span class="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          <span>Volver</span>
          <span aria-hidden="true">↻</span>
        </span>
      </span>
    </span>
  </button>
</template>
