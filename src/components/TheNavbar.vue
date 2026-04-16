<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)

const primary = [
  { to: '/', label: 'Inicio' },
  { to: '/biblia', label: 'La Biblia' },
  { to: '/jesus', label: 'Jesús' },
  { to: '/religiones', label: 'Religiones' },
  { to: '/comparacion', label: 'Comparar' },
  { to: '/quiz', label: 'Quiz' },
]

const secondary = [
  { to: '/antiguo-testamento', label: 'Antiguo Testamento', emoji: '📜' },
  { to: '/nuevo-testamento', label: 'Nuevo Testamento', emoji: '📖' },
  { to: '/parabolas', label: 'Parábolas', emoji: '🌱' },
  { to: '/personajes', label: 'Personajes', emoji: '👥' },
  { to: '/versiculos', label: 'Versículos', emoji: '✨' },
  { to: '/diferencias', label: 'Diferencias', emoji: '⚖️' },
  { to: '/contacto', label: 'Contacto', emoji: '✉️' },
]

const isActive = (to) => route.path === to || (to !== '/' && route.path.startsWith(to))
const headerTone = computed(() => (open.value ? 'bg-white/95' : 'bg-white/70'))

function close() {
  open.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-white/60 backdrop-blur-xl transition-colors"
    :class="headerTone"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
      <RouterLink to="/" class="group flex items-center gap-3" @click="close">
        <span
          class="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 text-lg font-bold text-white shadow-lg shadow-sky-400/30 transition group-hover:rotate-6"
        >
          ✝
        </span>
        <span>
          <span class="block font-display text-lg font-bold leading-none text-slate-900">
            Jesús el camino
          </span>
          <span class="mt-1 block text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">
            Biblia · Religiones · Interactivo
          </span>
        </span>
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex">
        <RouterLink
          v-for="link in primary"
          :key="link.to"
          :to="link.to"
          class="rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="
            isActive(link.to)
              ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
              : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'
          "
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="hidden lg:block">
        <RouterLink to="/contacto" class="btn-primary">
          Escríbenos
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>

      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 lg:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        aria-label="Abrir menú"
        @click="open = !open"
      >
        <svg v-if="!open" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <div
        v-if="open"
        id="mobile-menu"
        class="border-t border-white/70 bg-white/95 px-5 py-5 shadow-lg lg:hidden"
      >
        <div class="grid gap-2">
          <RouterLink
            v-for="link in [...primary, ...secondary]"
            :key="link.to"
            :to="link.to"
            class="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold transition"
            :class="
              isActive(link.to)
                ? 'border-sky-200 bg-sky-50 text-sky-700'
                : 'text-slate-700 hover:border-slate-200 hover:bg-white'
            "
            @click="close"
          >
            <span class="flex items-center gap-3">
              <span class="text-base" aria-hidden="true">{{ link.emoji ?? '•' }}</span>
              {{ link.label }}
            </span>
            <span class="text-slate-400">›</span>
          </RouterLink>
        </div>
      </div>
    </transition>

    <div class="hidden border-t border-white/60 bg-white/40 lg:block">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-8 py-2 text-xs font-semibold text-slate-500">
        <span class="uppercase tracking-[0.22em] text-slate-400">Explora:</span>
        <RouterLink
          v-for="link in secondary"
          :key="link.to"
          :to="link.to"
          class="inline-flex items-center gap-1 rounded-full px-3 py-1 transition hover:bg-white hover:text-sky-700"
          :class="isActive(link.to) ? 'bg-white text-sky-700 shadow-sm' : ''"
        >
          <span aria-hidden="true">{{ link.emoji }}</span>
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
