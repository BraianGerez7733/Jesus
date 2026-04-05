<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import cloudsBg from '../assets/images/clouds.jpg'

const props = defineProps({
  badge: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  verse: {
    type: String,
    required: true,
  },
  asideLabel: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: 'amber',
  },
})

const route = useRoute()

const themeClasses = computed(() => {
  if (props.theme === 'cyan') {
    return {
      glow:
        'bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),linear-gradient(160deg,_rgba(15,23,42,0.45),_rgba(2,132,199,0.22),_rgba(2,6,23,0.92))]',
      topGlow: 'from-cyan-200/10',
      badge:
        'border-cyan-200/30 bg-white/10 text-cyan-100',
      eyebrow: 'text-cyan-200',
      quoteLabel: 'text-amber-200',
      active:
        'border-cyan-200/40 bg-cyan-300/15 text-cyan-50',
      muted: 'border-white/10 bg-white/10 text-slate-200',
    }
  }

  return {
    glow:
      'bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_30%),linear-gradient(135deg,_rgba(15,23,42,0.4),_rgba(12,74,110,0.35),_rgba(2,6,23,0.88))]',
    topGlow: 'from-amber-200/15',
    badge:
      'border-amber-200/30 bg-white/10 text-amber-200',
    eyebrow: 'text-amber-200',
    quoteLabel: 'text-sky-200',
    active:
      'border-amber-200/40 bg-amber-300/15 text-amber-50',
    muted: 'border-white/10 bg-white/10 text-slate-200',
  }
})

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/diferencias', label: 'Diferencias' },
]
</script>

<template>
  <main
    class="relative isolate min-h-screen overflow-hidden"
    :style="{ backgroundImage: `url(${cloudsBg})` }"
    role="main"
  >
    <div class="absolute inset-0 bg-slate-950/72"></div>
    <div class="absolute inset-0" :class="themeClasses.glow"></div>
    <div class="absolute inset-x-0 top-0 h-44 bg-gradient-to-b to-transparent" :class="themeClasses.topGlow"></div>

    <div class="relative z-10 mx-auto w-full max-w-6xl px-6 py-6 sm:py-8">
      <header
        class="page-panel flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            La Biblia · RVR 1960
          </p>
          <p class="mt-2 text-lg font-semibold text-white">
            Jesús es el Señor
          </p>
        </div>

        <nav class="flex flex-wrap gap-3">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md transition hover:bg-white/15"
            :class="route.path === link.to ? themeClasses.active : themeClasses.muted"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </header>

      <section class="grid min-h-[calc(100vh-9rem)] items-center gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
        <div class="text-left">
          <span
            class="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] backdrop-blur-md"
            :class="themeClasses.badge"
          >
            {{ badge }}
          </span>

          <h1 class="mt-6 max-w-3xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
            {{ title }}
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            {{ description }}
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <slot name="actions" />
          </div>

          <div class="mt-10">
            <slot name="highlights" />
          </div>
        </div>

        <aside class="page-panel p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <div class="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.28em]" :class="themeClasses.quoteLabel">
              {{ asideLabel }}
            </p>

            <blockquote class="mt-5 text-2xl font-semibold leading-10 text-white">
              {{ quote }}
            </blockquote>

            <p class="mt-4 text-sm uppercase tracking-[0.22em] text-slate-300">
              {{ verse }}
            </p>

            <div class="mt-8">
              <slot name="aside" />
            </div>
          </div>
        </aside>
      </section>
    </div>

    <slot name="content" />
  </main>
</template>
