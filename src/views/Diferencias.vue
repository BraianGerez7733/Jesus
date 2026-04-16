<script setup>
import PageHeader from '../components/PageHeader.vue'
import FlashCardDeck from '../components/FlashCardDeck.vue'
import VerseCard from '../components/VerseCard.vue'

const temas = [
  {
    tema: 'Salvación',
    emoji: '🕊️',
    color: 'from-sky-400 to-cyan-300',
    biblia: 'Por gracia, mediante la fe en Jesús. No por obras.',
    otras: 'Otras tradiciones añaden obras, ritos o ciclos de reencarnación.',
    refs: ['Efesios 2:8-9', 'Romanos 3:23-24'],
  },
  {
    tema: 'Identidad de Jesús',
    emoji: '✝️',
    color: 'from-violet-400 to-fuchsia-300',
    biblia: 'Verdadero Dios y verdadero hombre. Único Salvador.',
    otras: 'Profeta, maestro o ser divino menor según otras religiones.',
    refs: ['Juan 1:1-14', 'Colosenses 2:9'],
  },
  {
    tema: 'Fuente de autoridad',
    emoji: '📖',
    color: 'from-amber-400 to-orange-300',
    biblia: 'La Biblia (AT + NT) como Palabra de Dios inspirada.',
    otras: 'Otros libros, tradición oral, magisterio o revelaciones posteriores.',
    refs: ['2 Timoteo 3:16', 'Salmos 119:160'],
  },
  {
    tema: 'Naturaleza de Dios',
    emoji: '🌟',
    color: 'from-emerald-400 to-teal-300',
    biblia: 'Un solo Dios en tres personas: Padre, Hijo y Espíritu.',
    otras: 'Monoteísmo estricto, politeísmo, panteísmo o no teísmo.',
    refs: ['Mateo 28:19', 'Deuteronomio 6:4'],
  },
  {
    tema: 'Vida después de la muerte',
    emoji: '⏳',
    color: 'from-rose-400 to-pink-300',
    biblia: 'Resurrección y vida eterna con Dios o separación de Él.',
    otras: 'Reencarnación, extinción, purgatorio o reinos intermedios.',
    refs: ['Juan 5:28-29', 'Apocalipsis 21:1-4'],
  },
  {
    tema: 'Base de la moral',
    emoji: '⚖️',
    color: 'from-indigo-400 to-sky-300',
    biblia: 'Amor a Dios y al prójimo, reflejo del carácter de Dios.',
    otras: 'Ley, karma, pilares, consenso humano o deber cósmico.',
    refs: ['Mateo 22:37-40'],
  },
]

const flashcards = [
  { front: { tag: 'Diferencia', emoji: '🪶', title: 'Gracia vs. obras', subtitle: 'Cristianismo bíblico' }, back: { tag: 'Síntesis', text: 'La Biblia enseña que somos salvos por gracia, no por acumular méritos.', reference: 'Efesios 2:8-9' }, accent: 'sky' },
  { front: { tag: 'Diferencia', emoji: '✝️', title: 'Cristo único', subtitle: 'No hay otro nombre' }, back: { tag: 'Síntesis', text: 'Pedro afirma que solo en Jesús hay salvación, ante autoridades religiosas.', reference: 'Hechos 4:12' }, accent: 'violet' },
  { front: { tag: 'Diferencia', emoji: '📖', title: 'Sola Scriptura', subtitle: 'Autoridad final' }, back: { tag: 'Síntesis', text: 'La Biblia es suficiente para enseñar, corregir e instruir en justicia.', reference: '2 Timoteo 3:16-17' }, accent: 'amber' },
  { front: { tag: 'Diferencia', emoji: '🌅', title: 'Resurrección', subtitle: 'Vida nueva' }, back: { tag: 'Síntesis', text: 'El cristianismo se sostiene en un hecho histórico: Jesús resucitó.', reference: '1 Corintios 15:3-4' }, accent: 'rose' },
]

const versos = [
  { text: 'Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.', reference: 'Juan 14:6', theme: 'sky' },
  { text: 'Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.', reference: 'Hechos 4:12', theme: 'violet' },
  { text: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.', reference: 'Efesios 2:8', theme: 'amber' },
]
</script>

<template>
  <PageHeader
    eyebrow="Diferencias doctrinales"
    title="¿En qué difiere el cristianismo bíblico?"
    description="Miramos con respeto las distinciones clave con otras tradiciones, usando la Biblia como referencia."
    image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  />

  <section class="mx-auto max-w-7xl px-6 py-14 sm:px-8">
    <div class="grid gap-5 lg:grid-cols-2">
      <article
        v-for="t in temas"
        :key="t.tema"
        class="hover-lift group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-md"
      >
        <div
          class="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition group-hover:opacity-70"
          :class="t.color"
        ></div>
        <div class="relative flex items-center gap-3">
          <span
            class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow"
            :class="t.color"
            aria-hidden="true"
          >
            {{ t.emoji }}
          </span>
          <h3 class="font-display text-2xl font-bold text-slate-900">{{ t.tema }}</h3>
        </div>
        <div class="relative mt-5 grid gap-3 text-sm leading-7 sm:grid-cols-2">
          <div class="rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
            <p class="section-heading text-sky-700">Biblia</p>
            <p class="mt-2 text-slate-700">{{ t.biblia }}</p>
          </div>
          <div class="rounded-2xl border border-slate-100 bg-white/70 p-4">
            <p class="section-heading text-slate-500">Otras tradiciones</p>
            <p class="mt-2 text-slate-700">{{ t.otras }}</p>
          </div>
        </div>
        <div class="relative mt-5 flex flex-wrap gap-2">
          <span
            v-for="ref in t.refs"
            :key="ref"
            class="chip"
          >
            {{ ref }}
          </span>
        </div>
      </article>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-violet-600">Flashcards</p>
      <h2 class="section-title mt-3">Ideas para recordar</h2>
    </div>
    <div class="mt-10">
      <FlashCardDeck :cards="flashcards" />
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-rose-600">Versículos clave</p>
      <h2 class="section-title mt-3">Palabras que marcan diferencia</h2>
    </div>
    <div class="mt-10 grid gap-5 sm:grid-cols-3">
      <VerseCard v-for="v in versos" :key="v.reference" v-bind="v" />
    </div>
  </section>
</template>
