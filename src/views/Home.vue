<script setup>
import { RouterLink } from 'vue-router'
import TopicCard from '../components/TopicCard.vue'
import FeatureGrid from '../components/FeatureGrid.vue'
import VerseCard from '../components/VerseCard.vue'
import StatsBanner from '../components/StatsBanner.vue'
import FlashCardDeck from '../components/FlashCardDeck.vue'
import { versiculos } from '../data/versiculos.js'

const destacados = versiculos.slice(0, 4)

const topics = [
  { to: '/biblia', title: 'La Biblia', description: 'Conoce qué es, cómo está formada y por qué se considera la Palabra de Dios.', emoji: '📖', tag: 'Base', accent: 'sky' },
  { to: '/jesus', title: 'Jesús', description: 'Su vida, sus enseñanzas, sus milagros y el mensaje que transformó al mundo.', emoji: '✝️', tag: 'Figura central', accent: 'amber' },
  { to: '/antiguo-testamento', title: 'Antiguo Testamento', description: 'Creación, alianza, Ley y profetas: cómo Dios se reveló a su pueblo.', emoji: '📜', tag: '39 libros', accent: 'indigo' },
  { to: '/nuevo-testamento', title: 'Nuevo Testamento', description: 'Evangelios, Hechos, epístolas y Apocalipsis: la esperanza cumplida.', emoji: '✉️', tag: '27 libros', accent: 'violet' },
  { to: '/religiones', title: 'Religiones del mundo', description: 'Un panorama claro de las grandes religiones, con imágenes y contexto.', emoji: '🌍', tag: 'Comparar', accent: 'emerald' },
  { to: '/comparacion', title: 'Cuadro comparativo', description: 'Filtra, elige religiones y compáralas criterio por criterio.', emoji: '📊', tag: 'Interactivo', accent: 'rose' },
  { to: '/parabolas', title: 'Parábolas', description: 'Historias breves que enseñan con imágenes cotidianas del Reino.', emoji: '🌱', tag: 'Flashcards', accent: 'sky' },
  { to: '/personajes', title: 'Personajes', description: 'De Abraham a Pablo: las personas detrás de la historia bíblica.', emoji: '👥', tag: 'Flashcards', accent: 'amber' },
  { to: '/quiz', title: 'Quiz bíblico', description: '10 preguntas para repasar lo aprendido jugando.', emoji: '🎯', tag: 'Juega', accent: 'violet' },
]

const features = [
  { emoji: '🧠', title: 'Flashcards interactivas', text: 'Gira las tarjetas para descubrir definiciones, referencias y contexto histórico.' },
  { emoji: '📊', title: 'Comparaciones lado a lado', text: 'Elige las religiones y compáralas criterio por criterio en una tabla editable.' },
  { emoji: '🎨', title: 'Ilustraciones y fotografías', text: 'Cada sección combina imágenes libres de Unsplash con SVG propios para una lectura amena.' },
  { emoji: '✨', title: 'Versículo del día', text: 'Un versículo elegido por la fecha para inspirar tu jornada.' },
  { emoji: '🎯', title: 'Quiz con explicaciones', text: 'Responde y recibe la explicación de cada respuesta, con progreso visible.' },
  { emoji: '🌤️', title: 'Diseño claro y limpio', text: 'Fondos con nubes, tipografía serif contemporánea y gran legibilidad.' },
]

const stats = [
  { emoji: '📚', label: 'Libros', value: '66', hint: '39 Antiguo + 27 Nuevo' },
  { emoji: '🌐', label: 'Religiones', value: '8', hint: 'Con cuadro comparativo' },
  { emoji: '🃏', label: 'Flashcards', value: '60+', hint: 'Para aprender jugando' },
  { emoji: '⏱️', label: 'Páginas', value: '13', hint: 'Listo para explorar' },
]

const flashcardsPreview = [
  {
    front: { tag: 'Parábola', emoji: '🌱', title: 'La semilla', subtitle: 'Diferentes tipos de terreno' },
    back: { tag: 'Enseñanza', text: 'La palabra se siembra en corazones: unos la rechazan, otros la escuchan y dan fruto abundante.', reference: 'Mateo 13:3-23' },
    accent: 'emerald',
  },
  {
    front: { tag: 'Personaje', emoji: '👑', title: 'David', subtitle: 'Pastor, músico y rey' },
    back: { tag: 'Historia', text: 'Rey elegido por Dios para Israel. Valiente, adorador y padre de Salomón. Reconocido por su corazón según el Señor.', reference: '1 Samuel 16' },
    accent: 'amber',
  },
  {
    front: { tag: 'Milagro', emoji: '🍞', title: 'Los 5 panes y 2 peces', subtitle: 'Multiplicación para 5000' },
    back: { tag: 'Enseñanza', text: 'Jesús bendice un almuerzo humilde y alimenta a miles. Dios hace mucho con poco cuando lo ponemos en sus manos.', reference: 'Juan 6:1-14' },
    accent: 'sky',
  },
]
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
      <div>
        <span class="chip">
          <span aria-hidden="true">✨</span>
          Una app interactiva sobre la Biblia
        </span>
        <h1 class="font-display mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          <RouterLink
            to="/jesus-es-el-camino"
            class="group inline-flex flex-wrap items-baseline gap-x-3 transition hover:text-sky-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 focus-visible:ring-offset-4 focus-visible:ring-offset-white rounded-2xl"
            aria-label="Jesús es el camino — abrir página completa"
          >
            <span>Jesús es el</span>
            <span class="text-white drop-shadow-[0_4px_18px_rgba(15,23,42,0.35)] transition group-hover:translate-y-[-2px]">camino</span>
            <span
              aria-hidden="true"
              class="ml-1 inline-block translate-y-[-4px] text-3xl text-sky-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:text-4xl"
            >
              →
            </span>
          </RouterLink>
        </h1>
        <p class="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
          Toca el título para leer Juan 14:6
        </p>
        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
          Una experiencia clara y visual para <strong class="text-slate-900">leer la Biblia</strong>,
          conocer a <strong class="text-slate-900">Jesús</strong> y <strong class="text-slate-900">comparar las religiones</strong>
          del mundo con flashcards, ilustraciones y un quiz interactivo.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <RouterLink to="/biblia" class="btn-primary">
            Comenzar por la Biblia
            <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink to="/religiones" class="btn-ghost">Comparar religiones</RouterLink>
          <RouterLink to="/quiz" class="btn-accent">Probar el quiz</RouterLink>
        </div>

        <div class="mt-10">
          <StatsBanner :stats="stats" />
        </div>
      </div>

      <!-- Hero illustration (SVG + imagen) -->
      <div class="relative">
        <div class="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-sky-300/40 via-violet-300/30 to-amber-200/40 blur-2xl"></div>
        <div class="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/80 p-5 shadow-2xl shadow-sky-500/20 backdrop-blur-md">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
            alt="Cielo y mar con nubes"
            class="h-64 w-full rounded-2xl object-cover sm:h-80"
            loading="eager"
          />
          <div class="mt-5 grid grid-cols-3 gap-3">
            <div class="rounded-2xl bg-sky-50 p-4 text-center">
              <p class="text-3xl" aria-hidden="true">📖</p>
              <p class="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Biblia</p>
            </div>
            <div class="rounded-2xl bg-amber-50 p-4 text-center">
              <p class="text-3xl" aria-hidden="true">✝️</p>
              <p class="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Jesús</p>
            </div>
            <div class="rounded-2xl bg-violet-50 p-4 text-center">
              <p class="text-3xl" aria-hidden="true">🌍</p>
              <p class="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">Religiones</p>
            </div>
          </div>
          <div class="mt-5 flex items-center gap-3 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-violet-50 p-4">
            <span class="grid h-10 w-10 place-items-center rounded-full bg-white text-sky-600 shadow" aria-hidden="true">🔎</span>
            <p class="text-sm font-semibold text-slate-700">
              Explora 13 páginas llenas de recursos visuales.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Secciones del sitio -->
  <section class="mx-auto max-w-7xl px-6 py-16 sm:px-8">
    <div class="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
      <div class="max-w-2xl">
        <p class="section-heading text-sky-600">Explora la app</p>
        <h2 class="section-title mt-3">13 secciones pensadas para aprender visualmente</h2>
        <p class="section-lead">
          Cada página combina texto breve, imágenes y recursos interactivos para que puedas
          saltar de un tema a otro sin perder el hilo.
        </p>
      </div>
      <RouterLink to="/contacto" class="btn-ghost">
        ¿Ideas o dudas? Escríbenos
        <span aria-hidden="true">→</span>
      </RouterLink>
    </div>

    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <TopicCard v-for="topic in topics" :key="topic.to" v-bind="topic" />
    </div>
  </section>

  <!-- Qué ofrece -->
  <section class="mx-auto max-w-7xl px-6 py-16 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-violet-600">Recursos interactivos</p>
      <h2 class="section-title mt-3">Hecho para aprender jugando</h2>
      <p class="section-lead">
        Diseñamos la app con elementos interactivos en casi todas las secciones: flashcards,
        tablas filtrables, versículos categorizados y un quiz con explicaciones.
      </p>
    </div>
    <div class="mt-10">
      <FeatureGrid :items="features" />
    </div>
  </section>

  <!-- Flashcards preview -->
  <section class="mx-auto max-w-7xl px-6 py-16 sm:px-8">
    <div class="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
      <div class="max-w-2xl">
        <p class="section-heading text-amber-600">Probá una flashcard</p>
        <h2 class="section-title mt-3">Tocá las tarjetas y descubrí el reverso</h2>
        <p class="section-lead">
          Cada sección temática trae decenas de tarjetas. Acá hay un anticipo con una
          parábola, un personaje y un milagro.
        </p>
      </div>
      <div class="flex flex-wrap gap-2 text-xs">
        <span class="chip">Parábolas</span>
        <span class="chip-amber">Personajes</span>
        <span class="chip-rose">Milagros</span>
      </div>
    </div>
    <div class="mt-10">
      <FlashCardDeck :cards="flashcardsPreview" />
    </div>
  </section>

  <!-- Versículos destacados -->
  <section class="mx-auto max-w-7xl px-6 py-16 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-rose-600">Para meditar</p>
      <h2 class="section-title mt-3">Versículos para guardar hoy</h2>
      <p class="section-lead">
        Una selección breve para llevar contigo. Mirá más en la sección de versículos.
      </p>
    </div>
    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <VerseCard
        v-for="v in destacados"
        :key="v.reference"
        :text="v.text"
        :reference="v.reference"
        :theme="v.theme"
      />
    </div>
  </section>

  <!-- CTA final -->
  <section class="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
    <div
      class="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500 p-10 text-white shadow-2xl shadow-sky-500/30 sm:p-14"
    >
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg class="cloud-drift absolute -right-10 top-0 w-96 opacity-30" viewBox="0 0 600 200" fill="currentColor">
          <path d="M60 130c-22 0-40-16-40-38s18-38 40-38c4 0 8 .5 12 1.4C80 36 107 18 140 18c38 0 69 26 76 60h8c22 0 40 16 40 38s-18 38-40 38H60z" />
        </svg>
      </div>
      <div class="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p class="section-heading text-white/80">Empieza hoy</p>
          <h2 class="font-display mt-3 text-4xl font-bold sm:text-5xl">
            Aprende la Biblia con tarjetas, imágenes y un quiz divertido.
          </h2>
          <p class="mt-4 max-w-xl text-white/90">
            Sin publicidad, sin registro y con contenido cuidadosamente seleccionado
            para todas las edades.
          </p>
        </div>
        <div class="flex flex-wrap gap-3 lg:justify-end">
          <RouterLink to="/quiz" class="btn-accent">
            Jugar el quiz
            <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink to="/jesus" class="btn-ghost bg-white/15 text-white hover:bg-white/25">
            Conocer a Jesús
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
