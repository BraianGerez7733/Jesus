<script setup>
import PageHeader from '../components/PageHeader.vue'
import FlashCardDeck from '../components/FlashCardDeck.vue'
import VerseCard from '../components/VerseCard.vue'

const grupos = [
  {
    nombre: 'Pentateuco',
    emoji: '📜',
    color: 'from-sky-400 to-cyan-300',
    description: 'Los cinco libros de Moisés. Origen del mundo, del pueblo de Israel y de la Ley.',
    libros: ['Génesis', 'Éxodo', 'Levítico', 'Números', 'Deuteronomio'],
  },
  {
    nombre: 'Históricos',
    emoji: '🏛️',
    color: 'from-indigo-400 to-sky-300',
    description: 'De la entrada a la tierra prometida al regreso del exilio: 12 libros.',
    libros: ['Josué', 'Jueces', 'Rut', '1-2 Samuel', '1-2 Reyes', '1-2 Crónicas', 'Esdras', 'Nehemías', 'Ester'],
  },
  {
    nombre: 'Poéticos',
    emoji: '🎼',
    color: 'from-amber-400 to-orange-300',
    description: 'Poesía, oración, sabiduría y alabanza a Dios.',
    libros: ['Job', 'Salmos', 'Proverbios', 'Eclesiastés', 'Cantares'],
  },
  {
    nombre: 'Profetas mayores',
    emoji: '🔥',
    color: 'from-rose-400 to-pink-300',
    description: 'Voces largas que hablan del juicio y la esperanza del Mesías.',
    libros: ['Isaías', 'Jeremías', 'Lamentaciones', 'Ezequiel', 'Daniel'],
  },
  {
    nombre: 'Profetas menores',
    emoji: '📯',
    color: 'from-emerald-400 to-teal-300',
    description: 'Doce voces breves con mensajes urgentes para su tiempo.',
    libros: ['Oseas', 'Joel', 'Amós', 'Abdías', 'Jonás', 'Miqueas', 'Nahúm', 'Habacuc', 'Sofonías', 'Hageo', 'Zacarías', 'Malaquías'],
  },
]

const flashcards = [
  { front: { tag: 'Inicio', emoji: '🌎', title: 'Génesis', subtitle: 'Creación y patriarcas' }, back: { tag: 'Resumen', text: 'Dios crea el mundo, llama a Abraham y forma el pueblo elegido a través de Isaac, Jacob y José.', reference: 'Génesis 1-50' }, accent: 'sky' },
  { front: { tag: 'Liberación', emoji: '🌊', title: 'Éxodo', subtitle: 'Moisés y la salida' }, back: { tag: 'Resumen', text: 'Dios libera a Israel de Egipto, entrega la Ley en el Sinaí y camina con su pueblo en el desierto.', reference: 'Éxodo 1-40' }, accent: 'violet' },
  { front: { tag: 'Canto', emoji: '🎶', title: 'Salmos', subtitle: '150 cantos' }, back: { tag: 'Contenido', text: 'Oraciones y cantos que expresan gozo, lamento, confianza y adoración a Dios.', reference: 'Salmos 1-150' }, accent: 'amber' },
  { front: { tag: 'Sabiduría', emoji: '🧠', title: 'Proverbios', subtitle: 'Consejos prácticos' }, back: { tag: 'Clave', text: 'Enseña que “el principio de la sabiduría es el temor de Jehová”. Ideal para el día a día.', reference: 'Proverbios 1:7' }, accent: 'emerald' },
  { front: { tag: 'Profecía', emoji: '🌅', title: 'Isaías', subtitle: 'El profeta del Mesías' }, back: { tag: 'Dato', text: 'Anuncia con claridad la venida del Siervo sufriente (cap. 53) siglos antes de Jesús.', reference: 'Isaías 53' }, accent: 'rose' },
  { front: { tag: 'Valentía', emoji: '🦁', title: 'Daniel', subtitle: 'Fiel en Babilonia' }, back: { tag: 'Historia', text: 'Joven exiliado que permanece fiel al Dios vivo, incluso entre leones. Interpreta sueños y ve visiones.', reference: 'Daniel 6' }, accent: 'sky' },
]

const versos = [
  { text: 'En el principio creó Dios los cielos y la tierra.', reference: 'Génesis 1:1', theme: 'sky' },
  { text: 'Oye, Israel: Jehová nuestro Dios, Jehová uno es.', reference: 'Deuteronomio 6:4', theme: 'violet' },
  { text: 'Jehová es mi pastor; nada me faltará.', reference: 'Salmos 23:1', theme: 'amber' },
]
</script>

<template>
  <PageHeader
    eyebrow="Antiguo Testamento"
    title="La historia del pueblo de Dios"
    description="39 libros que narran la creación, la alianza con Abraham, la liberación de Egipto, los reyes, los profetas y la espera del Mesías."
    image="https://images.unsplash.com/photo-1519455953755-af066f52f1a6?auto=format&fit=crop&w=1200&q=80"
  />

  <section class="mx-auto max-w-7xl px-6 py-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-sky-600">División clásica</p>
      <h2 class="section-title mt-3">5 bloques, 39 libros</h2>
      <p class="section-lead">
        Pasa el cursor sobre cada grupo para ver los libros que contiene.
      </p>
    </div>

    <div class="mt-10 grid gap-5 lg:grid-cols-2">
      <article
        v-for="grupo in grupos"
        :key="grupo.nombre"
        class="hover-lift group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-md"
      >
        <div
          class="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition group-hover:opacity-70"
          :class="grupo.color"
        ></div>
        <div class="relative flex items-center gap-3">
          <span
            class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow-md"
            :class="grupo.color"
            aria-hidden="true"
          >
            {{ grupo.emoji }}
          </span>
          <h3 class="font-display text-2xl font-bold text-slate-900">{{ grupo.nombre }}</h3>
        </div>
        <p class="relative mt-4 text-sm leading-7 text-slate-600">{{ grupo.description }}</p>
        <ul class="relative mt-5 flex flex-wrap gap-2">
          <li
            v-for="libro in grupo.libros"
            :key="libro"
            class="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
          >
            {{ libro }}
          </li>
        </ul>
      </article>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-violet-600">Flashcards</p>
      <h2 class="section-title mt-3">Claves para recordar del AT</h2>
    </div>
    <div class="mt-10">
      <FlashCardDeck :cards="flashcards" />
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-amber-600">Versículos clave</p>
      <h2 class="section-title mt-3">Palabras que marcaron la historia</h2>
    </div>
    <div class="mt-10 grid gap-5 sm:grid-cols-3">
      <VerseCard v-for="v in versos" :key="v.reference" v-bind="v" />
    </div>
  </section>
</template>
