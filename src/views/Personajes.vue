<script setup>
import PageHeader from '../components/PageHeader.vue'
import FlashCardDeck from '../components/FlashCardDeck.vue'

const antiguo = [
  { front: { tag: 'AT', emoji: '🌳', title: 'Adán y Eva', subtitle: 'Los primeros humanos' }, back: { tag: 'Historia', text: 'Creados a imagen de Dios. Su caída introdujo el pecado, pero también la promesa de redención.', reference: 'Génesis 1-3' }, accent: 'sky' },
  { front: { tag: 'AT', emoji: '🚢', title: 'Noé', subtitle: 'Constructor del arca' }, back: { tag: 'Historia', text: 'Hombre justo que obedeció a Dios, construyó el arca y preservó la vida tras el diluvio.', reference: 'Génesis 6-9' }, accent: 'violet' },
  { front: { tag: 'AT', emoji: '⭐', title: 'Abraham', subtitle: 'Padre de la fe' }, back: { tag: 'Historia', text: 'Dios le prometió descendencia incontable y por medio de su familia bendecir a todas las naciones.', reference: 'Génesis 12, 15' }, accent: 'amber' },
  { front: { tag: 'AT', emoji: '🌊', title: 'Moisés', subtitle: 'Liberador del pueblo' }, back: { tag: 'Historia', text: 'Dios lo envió a sacar a Israel de Egipto y le entregó la Ley en el monte Sinaí.', reference: 'Éxodo 3-20' }, accent: 'emerald' },
  { front: { tag: 'AT', emoji: '👑', title: 'David', subtitle: 'Pastor y rey' }, back: { tag: 'Historia', text: 'Rey valiente y salmista. Dios prometió que su reino se establecería para siempre.', reference: '1 Samuel 16' }, accent: 'rose' },
  { front: { tag: 'AT', emoji: '🦁', title: 'Daniel', subtitle: 'Fiel en Babilonia' }, back: { tag: 'Historia', text: 'Mantuvo su fe en medio de una cultura extranjera. Fue protegido incluso en el foso de los leones.', reference: 'Daniel 1-6' }, accent: 'sky' },
]

const nuevo = [
  { front: { tag: 'NT', emoji: '💧', title: 'Juan el Bautista', subtitle: 'El precursor' }, back: { tag: 'Historia', text: 'Llamaba al arrepentimiento y bautizó a Jesús. Preparaba el camino del Señor.', reference: 'Mateo 3' }, accent: 'sky' },
  { front: { tag: 'NT', emoji: '🌷', title: 'María', subtitle: 'Madre de Jesús' }, back: { tag: 'Historia', text: 'Joven piadosa que aceptó la voluntad de Dios: “He aquí la sierva del Señor”.', reference: 'Lucas 1:38' }, accent: 'rose' },
  { front: { tag: 'NT', emoji: '🎣', title: 'Pedro', subtitle: 'Pescador y apóstol' }, back: { tag: 'Historia', text: 'Impulsivo y leal. Tras negar a Jesús fue restaurado y predicó en Pentecostés a miles.', reference: 'Hechos 2' }, accent: 'amber' },
  { front: { tag: 'NT', emoji: '📝', title: 'Pablo', subtitle: 'Apóstol a los gentiles' }, back: { tag: 'Historia', text: 'De perseguidor a misionero. Escribió gran parte del NT y plantó iglesias por el mundo.', reference: 'Hechos 9' }, accent: 'violet' },
  { front: { tag: 'NT', emoji: '👼', title: 'Juan', subtitle: 'Discípulo amado' }, back: { tag: 'Historia', text: 'Escribió el cuarto Evangelio, tres cartas y Apocalipsis. Vio la visión del nuevo cielo.', reference: 'Juan 21' }, accent: 'emerald' },
  { front: { tag: 'NT', emoji: '🧕', title: 'María Magdalena', subtitle: 'Primera testigo' }, back: { tag: 'Historia', text: 'Fue la primera en ver a Jesús resucitado y anunciar la buena noticia a los apóstoles.', reference: 'Juan 20:11-18' }, accent: 'rose' },
]
</script>

<template>
  <PageHeader
    eyebrow="Personajes bíblicos"
    title="Las personas detrás de la historia"
    description="La Biblia está poblada de figuras reales con virtudes y defectos. Dios las usó, y su historia también habla de nosotros."
    image="https://images.unsplash.com/photo-1473226375592-c38ba9fe9e93?auto=format&fit=crop&w=1200&q=80"
  />

  <section class="mx-auto max-w-7xl px-6 py-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-sky-600">Antiguo Testamento</p>
      <h2 class="section-title mt-3">Del Edén a los profetas</h2>
    </div>
    <div class="mt-10">
      <FlashCardDeck :cards="antiguo" />
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-violet-600">Nuevo Testamento</p>
      <h2 class="section-title mt-3">Discípulos, apóstoles y testigos</h2>
    </div>
    <div class="mt-10">
      <FlashCardDeck :cards="nuevo" />
    </div>
  </section>
</template>
