<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
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
const heroOffset = ref(0)

const updateParallax = () => {
  // Ajusta este multiplicador para un parallax mas o menos sutil.
  heroOffset.value = Math.min(window.scrollY * 0.18, 120)
}

onMounted(() => {
  updateParallax()
  window.addEventListener('scroll', updateParallax, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateParallax)
})

const themeClasses = computed(() => {
  if (props.theme === 'cyan') {
    return {
      glow:
        'bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.28),_transparent_32%),linear-gradient(160deg,_rgba(11,4,22,0.6),_rgba(88,28,135,0.35),_rgba(5,1,16,0.95))]',
      topGlow: 'from-indigo-300/15',
      badge:
        'border-indigo-300/40 bg-white/10 text-indigo-100',
      eyebrow: 'text-indigo-200',
      quoteLabel: 'text-fuchsia-200',
      active:
        'border-indigo-300/50 bg-indigo-400/15 text-indigo-50',
      muted: 'border-white/10 bg-white/10 text-slate-200',
    }
  }

  return {
    glow:
      'bg-[radial-gradient(circle_at_top,_rgba(217,70,239,0.32),_transparent_32%),linear-gradient(135deg,_rgba(11,4,22,0.6),_rgba(91,33,182,0.45),_rgba(5,1,16,0.95))]',
    topGlow: 'from-fuchsia-300/20',
    badge:
      'border-fuchsia-300/40 bg-white/10 text-fuchsia-100',
    eyebrow: 'text-fuchsia-200',
    quoteLabel: 'text-violet-200',
    active:
      'border-fuchsia-300/50 bg-fuchsia-400/15 text-fuchsia-50',
    muted: 'border-white/10 bg-white/10 text-slate-200',
  }
})

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/religiones', label: 'Religiones' },
  { to: '/diferencias', label: 'Diferencias' },
]
</script>

<template>
  <main
    class="relative isolate min-h-screen overflow-hidden"
    role="main"
  >
    <div
      class="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity will-change-transform"
      :style="{
        backgroundImage: `url(${cloudsBg})`,
        transform: `translate3d(0, ${heroOffset}px, 0) scale(1.1)`,
      }"
    ></div>
    <div class="absolute inset-0 bg-[#0b0416]/78"></div>
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

          <h1 class="mt-6 max-w-3xl bg-gradient-to-r from-white via-fuchsia-200 to-violet-300 bg-clip-text text-5xl font-black leading-none text-transparent drop-shadow-[0_6px_30px_rgba(217,70,239,0.35)] sm:text-6xl lg:text-7xl">
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
