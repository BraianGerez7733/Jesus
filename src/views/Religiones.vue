<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import ReligionCard from '../components/ReligionCard.vue'
import { religions } from '../data/religiones.js'

const query = ref('')
const activeTag = ref('todas')

const tags = ['todas', 'monoteísta', 'cristiana', 'no teísta', 'panteísta', 'humanismo']

const filtradas = computed(() => {
  return religions.filter((r) => {
    const matchesQuery = query.value.trim().length === 0
      || r.nombre.toLowerCase().includes(query.value.toLowerCase())
      || r.resumen.toLowerCase().includes(query.value.toLowerCase())
    const matchesTag = activeTag.value === 'todas' || r.tags.includes(activeTag.value)
    return matchesQuery && matchesTag
  })
})
</script>

<template>
  <PageHeader
    eyebrow="Religiones del mundo"
    title="Un panorama claro y respetuoso"
    description="Conocer las principales religiones ayuda a entender el mundo y a respetar a quien piensa distinto. Filtra, busca y compara con las demás secciones."
    image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
  >
    <template #actions>
      <RouterLink to="/comparacion" class="btn-primary">
        Ir a comparación interactiva
        <span aria-hidden="true">→</span>
      </RouterLink>
      <RouterLink to="/diferencias" class="btn-ghost">Diferencias clave</RouterLink>
    </template>
  </PageHeader>

  <section class="mx-auto max-w-7xl px-6 py-10 sm:px-8">
    <div class="surface-card grid gap-4 p-5 sm:flex sm:items-center sm:justify-between">
      <label class="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
        <span class="text-lg" aria-hidden="true">🔎</span>
        <input
          v-model="query"
          type="search"
          placeholder="Buscar religión por nombre o palabra clave..."
          class="w-full border-none bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />
      </label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tag in tags"
          :key="tag"
          type="button"
          class="rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition"
          :class="
            activeTag === tag
              ? 'border-sky-300 bg-sky-500 text-white'
              : 'border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:text-sky-700'
          "
          @click="activeTag = tag"
        >
          {{ tag }}
        </button>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
    <transition-group name="fade" tag="div" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ReligionCard v-for="r in filtradas" :key="r.key" :religion="r" />
    </transition-group>

    <p v-if="filtradas.length === 0" class="mt-10 text-center text-slate-500">
      No encontramos resultados. Probá con otra palabra o quita el filtro.
    </p>
  </section>
</template>
