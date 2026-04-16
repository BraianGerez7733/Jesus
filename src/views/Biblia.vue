<script setup>
import { RouterLink } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import FeatureGrid from '../components/FeatureGrid.vue'
import FlashCardDeck from '../components/FlashCardDeck.vue'
import VerseCard from '../components/VerseCard.vue'
import StatsBanner from '../components/StatsBanner.vue'

const stats = [
  { emoji: '📚', label: 'Libros', value: '66', hint: 'AT: 39 · NT: 27' },
  { emoji: '✍️', label: 'Autores', value: '+40', hint: 'En 1500 años' },
  { emoji: '🌐', label: 'Idiomas', value: '3500+', hint: 'Traducciones' },
  { emoji: '📖', label: 'Capítulos', value: '1189', hint: 'Para estudiar' },
]

const features = [
  { emoji: '🕰️', title: 'Historia', text: 'Relata la acción de Dios a lo largo de los siglos, desde la creación hasta el nuevo cielo.' },
  { emoji: '📜', title: 'Ley y alianza', text: 'Muestra cómo Dios se relaciona con su pueblo a través de la Torá y los pactos.' },
  { emoji: '🎶', title: 'Poesía y sabiduría', text: 'Salmos, Proverbios y Cantar reúnen oración, alabanza y sabiduría práctica.' },
  { emoji: '🗣️', title: 'Profecía', text: 'Voces de Dios para corregir, consolar y anunciar la venida del Mesías.' },
  { emoji: '✝️', title: 'Evangelio', text: 'Cuatro miradas distintas sobre la vida, muerte y resurrección de Jesús.' },
  { emoji: '✉️', title: 'Cartas', text: 'Instrucciones pastorales a las primeras comunidades cristianas.' },
]

const flashcards = [
  { front: { tag: 'Autoridad', emoji: '🪶', title: 'Inspiración', subtitle: '¿Quién escribió?' }, back: { tag: 'Respuesta', text: 'Hombres guiados por el Espíritu Santo redactaron los textos en distintos géneros, épocas y lugares.', reference: '2 Timoteo 3:16' }, accent: 'sky' },
  { front: { tag: 'Formato', emoji: '📘', title: 'Dos testamentos', subtitle: 'AT y NT' }, back: { tag: 'Estructura', text: 'El Antiguo Testamento prepara la venida del Mesías. El Nuevo relata su vida, su iglesia y la esperanza eterna.', reference: 'Hebreos 1:1-2' }, accent: 'violet' },
  { front: { tag: 'Idiomas', emoji: '🌍', title: 'Hebreo, arameo y griego', subtitle: 'Originales' }, back: { tag: 'Dato', text: 'El AT fue escrito principalmente en hebreo (con porciones en arameo) y el NT en griego koiné.', reference: '' }, accent: 'amber' },
  { front: { tag: 'Canon', emoji: '🔏', title: '66 libros', subtitle: 'AT 39 + NT 27' }, back: { tag: 'Detalle', text: 'La iglesia primitiva discernió qué libros eran inspirados y los agrupó formando el canon actual.', reference: '' }, accent: 'emerald' },
  { front: { tag: 'Mensaje', emoji: '✝️', title: 'Jesús en el centro', subtitle: 'Hilo conductor' }, back: { tag: 'Síntesis', text: 'Toda la Escritura apunta a Jesucristo: prometido en el AT y revelado en el NT.', reference: 'Juan 5:39' }, accent: 'rose' },
  { front: { tag: 'Uso', emoji: '🗺️', title: 'Cómo leerla', subtitle: 'Sugerencia práctica' }, back: { tag: 'Consejo', text: 'Comienza por un Evangelio (p. ej. Juan), luego Génesis, Salmos y Romanos para ver el plan completo.', reference: '' }, accent: 'sky' },
]

const versos = [
  { text: 'Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia.', reference: '2 Timoteo 3:16', theme: 'sky' },
  { text: 'Sea la ley de Jehová vuestro deleite, y en su ley meditad de día y de noche.', reference: 'Salmos 1:2', theme: 'violet' },
  { text: 'Para siempre, oh Jehová, permanece tu palabra en los cielos.', reference: 'Salmos 119:89', theme: 'amber' },
]
</script>

<template>
  <PageHeader
    eyebrow="La Biblia"
    title="Un libro, muchas voces, un solo plan"
    description="Una biblioteca de 66 libros escritos a lo largo de 1500 años por más de 40 autores. Relata cómo Dios se acerca al ser humano y trae salvación en Jesús."
    image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80"
  >
    <template #actions>
      <RouterLink to="/antiguo-testamento" class="btn-primary">
        Antiguo Testamento
        <span aria-hidden="true">→</span>
      </RouterLink>
      <RouterLink to="/nuevo-testamento" class="btn-ghost">Nuevo Testamento</RouterLink>
    </template>
  </PageHeader>

  <section class="mx-auto max-w-7xl px-6 py-14 sm:px-8">
    <StatsBanner :stats="stats" />
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-sky-600">Géneros literarios</p>
      <h2 class="section-title mt-3">Historia, poesía, profecía y cartas</h2>
      <p class="section-lead">
        La Biblia no es un solo tipo de texto: mezcla narrativa, poesía y cartas pastorales.
      </p>
    </div>
    <div class="mt-10">
      <FeatureGrid :items="features" />
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-violet-600">Flashcards</p>
      <h2 class="section-title mt-3">Preguntas frecuentes sobre la Biblia</h2>
      <p class="section-lead">Girá cada tarjeta para ver la respuesta.</p>
    </div>
    <div class="mt-10">
      <FlashCardDeck :cards="flashcards" />
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-amber-600">Versículos</p>
      <h2 class="section-title mt-3">Para amar y meditar las Escrituras</h2>
    </div>
    <div class="mt-10 grid gap-5 sm:grid-cols-3">
      <VerseCard v-for="v in versos" :key="v.reference" v-bind="v" />
    </div>
  </section>
</template>
