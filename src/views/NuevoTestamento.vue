<script setup>
import PageHeader from '../components/PageHeader.vue'
import FlashCardDeck from '../components/FlashCardDeck.vue'
import VerseCard from '../components/VerseCard.vue'

const secciones = [
  {
    nombre: 'Evangelios',
    emoji: '✝️',
    color: 'from-sky-400 to-violet-400',
    description: 'Cuatro relatos sobre la vida, enseñanzas, muerte y resurrección de Jesús.',
    libros: ['Mateo', 'Marcos', 'Lucas', 'Juan'],
  },
  {
    nombre: 'Historia de la Iglesia',
    emoji: '🕊️',
    color: 'from-amber-400 to-rose-300',
    description: 'El nacimiento y expansión de la primera iglesia con el Espíritu Santo.',
    libros: ['Hechos'],
  },
  {
    nombre: 'Cartas de Pablo',
    emoji: '✉️',
    color: 'from-indigo-400 to-sky-300',
    description: 'Trece cartas pastorales y doctrinales a iglesias y personas.',
    libros: ['Romanos', '1-2 Corintios', 'Gálatas', 'Efesios', 'Filipenses', 'Colosenses', '1-2 Tesalonicenses', '1-2 Timoteo', 'Tito', 'Filemón'],
  },
  {
    nombre: 'Cartas generales',
    emoji: '📬',
    color: 'from-emerald-400 to-teal-300',
    description: 'Cartas de otros apóstoles a toda la iglesia.',
    libros: ['Hebreos', 'Santiago', '1-2 Pedro', '1-2-3 Juan', 'Judas'],
  },
  {
    nombre: 'Apocalipsis',
    emoji: '🌅',
    color: 'from-rose-400 to-fuchsia-300',
    description: 'La visión final de Juan: esperanza, juicio y nuevo cielo y tierra.',
    libros: ['Apocalipsis'],
  },
]

const flashcards = [
  { front: { tag: 'Evangelio', emoji: '🌟', title: 'Mateo', subtitle: 'El Rey prometido' }, back: { tag: 'Enfoque', text: 'Escrito para lectores judíos. Muestra a Jesús como el Mesías anunciado por los profetas.', reference: 'Mateo 1:1' }, accent: 'sky' },
  { front: { tag: 'Evangelio', emoji: '⚡', title: 'Marcos', subtitle: 'Jesús en acción' }, back: { tag: 'Tono', text: 'El más breve y dinámico. Presenta a Jesús como el Siervo que actúa con poder.', reference: 'Marcos 10:45' }, accent: 'amber' },
  { front: { tag: 'Evangelio', emoji: '🫂', title: 'Lucas', subtitle: 'Compasión por todos' }, back: { tag: 'Enfoque', text: 'Se fija en los pobres, las mujeres y los extranjeros. Jesús como Salvador universal.', reference: 'Lucas 19:10' }, accent: 'rose' },
  { front: { tag: 'Evangelio', emoji: '💡', title: 'Juan', subtitle: 'El Hijo de Dios' }, back: { tag: 'Clave', text: 'Siete “yo soy” y siete señales revelan que Jesús es Dios hecho hombre.', reference: 'Juan 20:31' }, accent: 'violet' },
  { front: { tag: 'Carta', emoji: '🏛️', title: 'Romanos', subtitle: 'Evangelio explicado' }, back: { tag: 'Síntesis', text: 'Pablo resume el evangelio: todos pecaron, somos justificados por fe en Jesús y vivimos por el Espíritu.', reference: 'Romanos 1:16' }, accent: 'sky' },
  { front: { tag: 'Final', emoji: '🌈', title: 'Apocalipsis', subtitle: 'Visión de esperanza' }, back: { tag: 'Mensaje', text: 'Aunque haya pruebas, Jesús vence y renueva todas las cosas. Cielo nuevo, tierra nueva.', reference: 'Apocalipsis 21:1-5' }, accent: 'emerald' },
]

const versos = [
  { text: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.', reference: 'Juan 3:16', theme: 'sky' },
  { text: 'Id, pues, y haced discípulos a todas las naciones.', reference: 'Mateo 28:19', theme: 'amber' },
  { text: 'Yo soy el camino, y la verdad, y la vida.', reference: 'Juan 14:6', theme: 'violet' },
]
</script>

<template>
  <PageHeader
    eyebrow="Nuevo Testamento"
    title="La promesa cumplida en Jesús"
    description="27 libros que narran la venida del Mesías, el nacimiento de la Iglesia y la esperanza del nuevo cielo y la nueva tierra."
    image="https://images.unsplash.com/photo-1528806550657-d2e6d19f0ee3?auto=format&fit=crop&w=1200&q=80"
  />

  <section class="mx-auto max-w-7xl px-6 py-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-violet-600">Estructura</p>
      <h2 class="section-title mt-3">5 bloques, 27 libros</h2>
    </div>
    <div class="mt-10 grid gap-5 lg:grid-cols-2">
      <article
        v-for="s in secciones"
        :key="s.nombre"
        class="hover-lift group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-md"
      >
        <div
          class="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition group-hover:opacity-70"
          :class="s.color"
        ></div>
        <div class="relative flex items-center gap-3">
          <span
            class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow-md"
            :class="s.color"
            aria-hidden="true"
          >
            {{ s.emoji }}
          </span>
          <h3 class="font-display text-2xl font-bold text-slate-900">{{ s.nombre }}</h3>
        </div>
        <p class="relative mt-4 text-sm leading-7 text-slate-600">{{ s.description }}</p>
        <ul class="relative mt-5 flex flex-wrap gap-2">
          <li
            v-for="libro in s.libros"
            :key="libro"
            class="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
          >
            {{ libro }}
          </li>
        </ul>
      </article>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-sky-600">Flashcards</p>
      <h2 class="section-title mt-3">Claves para recordar del NT</h2>
    </div>
    <div class="mt-10">
      <FlashCardDeck :cards="flashcards" />
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-rose-600">Versículos esenciales</p>
      <h2 class="section-title mt-3">Palabras del Reino</h2>
    </div>
    <div class="mt-10 grid gap-5 sm:grid-cols-3">
      <VerseCard v-for="v in versos" :key="v.reference" v-bind="v" />
    </div>
  </section>
</template>
