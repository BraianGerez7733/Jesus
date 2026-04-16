<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  to: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  emoji: { type: String, default: '✨' },
  tag: { type: String, default: 'Sección' },
  accent: { type: String, default: 'sky' },
})

const gradientMap = {
  sky: 'from-sky-400 to-cyan-300',
  violet: 'from-violet-400 to-fuchsia-300',
  amber: 'from-amber-400 to-orange-300',
  rose: 'from-rose-400 to-pink-300',
  emerald: 'from-emerald-400 to-teal-300',
  indigo: 'from-indigo-400 to-sky-300',
}
</script>

<template>
  <RouterLink
    :to="to"
    class="hover-lift group relative block overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-sky-500/10 backdrop-blur-md"
  >
    <div
      class="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br opacity-30 blur-2xl transition group-hover:opacity-60"
      :class="gradientMap[accent] ?? gradientMap.sky"
    ></div>

    <div class="relative flex items-start justify-between gap-4">
      <span
        class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow-md"
        :class="gradientMap[accent] ?? gradientMap.sky"
        aria-hidden="true"
      >
        {{ emoji }}
      </span>
      <span class="chip">{{ tag }}</span>
    </div>

    <h3 class="font-display relative mt-6 text-2xl font-bold text-slate-900">
      {{ title }}
    </h3>
    <p class="relative mt-3 text-sm leading-7 text-slate-600">
      {{ description }}
    </p>

    <span
      class="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sky-700 transition group-hover:gap-2"
    >
      Explorar
      <span aria-hidden="true">→</span>
    </span>
  </RouterLink>
</template>
