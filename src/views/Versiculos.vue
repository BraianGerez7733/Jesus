<script setup>
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import VerseCard from '../components/VerseCard.vue'
import { versiculos } from '../data/versiculos.js'

const categorias = ['todas', ...Array.from(new Set(versiculos.map((v) => v.categoria)))]
const activa = ref('todas')

const filtrados = computed(() =>
  activa.value === 'todas' ? versiculos : versiculos.filter((v) => v.categoria === activa.value),
)

function dayIndex() {
  const now = new Date()
  const start = Date.UTC(now.getUTCFullYear(), 0, 0)
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  return Math.floor((today - start) / 86_400_000) % versiculos.length
}

const delDia = versiculos[dayIndex()]
const fecha = new Date().toLocaleDateString('es-ES', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

async function copiar(v) {
  const text = `"${v.text}" — ${v.reference}`
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    /* ignore */
  }
}
</script>

<template>
  <PageHeader
    eyebrow="Versículos"
    title="Palabras para el camino"
    description="Una colección organizada por temas para copiar, compartir o meditar. Arriba vas a encontrar el versículo del día."
    image="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
  />

  <section class="mx-auto max-w-7xl px-6 py-12 sm:px-8">
    <div
      class="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500 p-10 text-white shadow-xl shadow-sky-500/30"
    >
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg class="cloud-drift absolute -right-10 top-0 w-96 opacity-30" viewBox="0 0 600 200" fill="currentColor">
          <path d="M60 130c-22 0-40-16-40-38s18-38 40-38c4 0 8 .5 12 1.4C80 36 107 18 140 18c38 0 69 26 76 60h8c22 0 40 16 40 38s-18 38-40 38H60z" />
        </svg>
      </div>
      <div class="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-3xl">
          <p class="section-heading text-white/80">Versículo del día · {{ fecha }}</p>
          <p class="font-display mt-3 text-3xl leading-relaxed sm:text-4xl">
            “{{ delDia.text }}”
          </p>
          <p class="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
            {{ delDia.reference }}
          </p>
        </div>
        <button class="btn-accent self-start" type="button" @click="copiar(delDia)">
          Copiar versículo
          <span aria-hidden="true">⎘</span>
        </button>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-14 sm:px-8">
    <div class="flex flex-wrap items-center gap-2">
      <span class="section-heading text-slate-500">Filtrar por tema</span>
      <button
        v-for="cat in categorias"
        :key="cat"
        type="button"
        class="rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition"
        :class="
          activa === cat
            ? 'border-sky-300 bg-sky-500 text-white'
            : 'border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:text-sky-700'
        "
        @click="activa = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <VerseCard v-for="v in filtrados" :key="v.reference" v-bind="v" />
    </div>
  </section>
</template>
