<script setup>
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()

const cols = [
  {
    heading: 'Escrituras',
    links: [
      { to: '/biblia', label: 'La Biblia' },
      { to: '/antiguo-testamento', label: 'Antiguo Testamento' },
      { to: '/nuevo-testamento', label: 'Nuevo Testamento' },
      { to: '/versiculos', label: 'Versículos' },
    ],
  },
  {
    heading: 'Personas e historia',
    links: [
      { to: '/jesus', label: 'Jesús' },
      { to: '/personajes', label: 'Personajes' },
      { to: '/parabolas', label: 'Parábolas' },
    ],
  },
  {
    heading: 'Religiones del mundo',
    links: [
      { to: '/religiones', label: 'Panorama de religiones' },
      { to: '/comparacion', label: 'Cuadro comparativo' },
      { to: '/diferencias', label: 'Diferencias clave' },
    ],
  },
  {
    heading: 'Interactivo',
    links: [
      { to: '/quiz', label: 'Quiz bíblico' },
      { to: '/contacto', label: 'Contacto' },
    ],
  },
]
</script>

<template>
  <footer class="relative z-10 mt-16 border-t border-white/60 bg-white/70 backdrop-blur-xl">
    <div class="mx-auto grid max-w-7xl gap-10 px-8 py-14 lg:grid-cols-[1.2fr_2fr]">
      <div>
        <p class="section-heading text-sky-600">Jesús es el camino</p>
        <h3 class="font-display mt-3 text-3xl font-bold text-slate-900">
          Una forma clara, visual y cercana de conocer la Biblia.
        </h3>
        <p class="mt-4 max-w-md text-sm leading-7 text-slate-600">
          Exploramos las Escrituras, la vida de Jesús y las religiones del mundo con
          ilustraciones, flashcards, cuadros comparativos y un quiz para aprender
          mientras juegas.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <RouterLink to="/quiz" class="btn-primary">
            Probar el quiz
            <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink to="/biblia" class="btn-ghost">Abrir la Biblia</RouterLink>
        </div>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="col in cols" :key="col.heading">
          <p class="section-heading text-slate-500">{{ col.heading }}</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li v-for="link in col.links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="inline-flex items-center gap-1 font-semibold text-slate-700 transition hover:text-sky-700"
              >
                <span aria-hidden="true" class="text-sky-400">•</span>
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-white/60 bg-gradient-to-r from-sky-50 via-white to-violet-50">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-8 py-5 text-xs text-slate-500 sm:flex-row">
        <p>© {{ year }} Jesús es el camino · Contenido educativo con base en la Reina-Valera 1960.</p>
        <p class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
          Gratis · Sin publicidad · Apto para todas las edades
        </p>
      </div>
    </div>
  </footer>
</template>
