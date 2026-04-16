<script setup>
import PageHeader from '../components/PageHeader.vue'
import QuizEngine from '../components/QuizEngine.vue'

const preguntas = [
  {
    text: '¿Cuántos libros tiene la Biblia completa?',
    options: ['27', '39', '66', '73'],
    correct: 2,
    explanation: 'La Biblia tiene 66 libros: 39 del Antiguo Testamento y 27 del Nuevo Testamento.',
  },
  {
    text: '¿Cuál es el primer libro de la Biblia?',
    options: ['Éxodo', 'Génesis', 'Mateo', 'Salmos'],
    correct: 1,
    explanation: 'Génesis relata la creación del mundo y el origen del pueblo de Israel.',
  },
  {
    text: '¿Quién fue bautizado por Juan el Bautista?',
    options: ['Pedro', 'Pablo', 'Jesús', 'Moisés'],
    correct: 2,
    explanation: 'Jesús fue bautizado en el río Jordán y el Espíritu descendió sobre Él como paloma.',
  },
  {
    text: 'Según Juan 14:6, Jesús se presenta como...',
    options: ['La Roca', 'El Camino, la Verdad y la Vida', 'El Sembrador', 'El Cordero herido'],
    correct: 1,
    explanation: '“Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí”.',
  },
  {
    text: '¿Qué apóstol escribió la mayor cantidad de cartas del NT?',
    options: ['Pedro', 'Pablo', 'Juan', 'Santiago'],
    correct: 1,
    explanation: 'Se le atribuyen 13 cartas del Nuevo Testamento, desde Romanos hasta Filemón.',
  },
  {
    text: '¿En qué ciudad nació Jesús?',
    options: ['Nazaret', 'Jerusalén', 'Belén', 'Capernaúm'],
    correct: 2,
    explanation: 'Jesús nació en Belén, como lo había profetizado Miqueas 5:2.',
  },
  {
    text: '¿Cuál es el libro más largo de la Biblia?',
    options: ['Génesis', 'Isaías', 'Salmos', 'Jeremías'],
    correct: 2,
    explanation: 'Salmos tiene 150 capítulos, el libro más largo por número de capítulos.',
  },
  {
    text: 'La salvación, según Efesios 2:8, es...',
    options: ['Por obras', 'Por gracia mediante la fe', 'Por nacimiento', 'Por sacrificios'],
    correct: 1,
    explanation: '“Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios”.',
  },
  {
    text: '¿Qué parábola habla del padre que recibe a su hijo que se fue?',
    options: ['El sembrador', 'El hijo pródigo', 'El buen samaritano', 'Las diez vírgenes'],
    correct: 1,
    explanation: 'El hijo pródigo, en Lucas 15, muestra el corazón misericordioso del Padre.',
  },
  {
    text: '¿Cuál es el último libro de la Biblia?',
    options: ['Judas', 'Apocalipsis', 'Malaquías', '2 Pedro'],
    correct: 1,
    explanation: 'Apocalipsis cierra la Biblia con la visión de la victoria final de Jesús.',
  },
]
</script>

<template>
  <PageHeader
    eyebrow="Quiz"
    title="Pon a prueba lo aprendido"
    description="10 preguntas rápidas con explicación al final de cada una. Sin registro, sin tiempo: a tu ritmo."
    image="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80"
  />

  <section class="mx-auto max-w-4xl px-6 py-14 sm:px-8">
    <QuizEngine :questions="preguntas" />
  </section>
</template>
