<script setup>
import PageHeader from '../components/PageHeader.vue'
import FlashCardDeck from '../components/FlashCardDeck.vue'
import VerseCard from '../components/VerseCard.vue'

const parabolas = [
  { front: { tag: 'Parábola', emoji: '🌱', title: 'El sembrador', subtitle: 'Tipos de terreno' }, back: { tag: 'Moraleja', text: 'La palabra de Dios da fruto según el corazón en que cae: endurecido, superficial, ahogado o bueno.', reference: 'Mateo 13:3-23' }, accent: 'emerald' },
  { front: { tag: 'Parábola', emoji: '🧳', title: 'El hijo pródigo', subtitle: 'Padre que espera' }, back: { tag: 'Moraleja', text: 'Dios recibe con fiesta al que vuelve arrepentido, sin importar cuán lejos haya ido.', reference: 'Lucas 15:11-32' }, accent: 'amber' },
  { front: { tag: 'Parábola', emoji: '🧑\u200d🤝\u200d🧑', title: 'El buen samaritano', subtitle: 'Amar al prójimo' }, back: { tag: 'Moraleja', text: 'Ser prójimo significa acercarse y ayudar, sin importar la raza o religión del otro.', reference: 'Lucas 10:25-37' }, accent: 'rose' },
  { front: { tag: 'Parábola', emoji: '💰', title: 'Los talentos', subtitle: 'Administrar lo recibido' }, back: { tag: 'Moraleja', text: 'Dios nos confía dones y espera que los usemos con fidelidad y valentía.', reference: 'Mateo 25:14-30' }, accent: 'sky' },
  { front: { tag: 'Parábola', emoji: '🐑', title: 'La oveja perdida', subtitle: 'Valor de uno' }, back: { tag: 'Moraleja', text: 'El Pastor deja 99 y va por la que se perdió. Hay gozo en el cielo por cada persona que vuelve.', reference: 'Lucas 15:3-7' }, accent: 'violet' },
  { front: { tag: 'Parábola', emoji: '💍', title: 'El tesoro escondido', subtitle: 'Valor del Reino' }, back: { tag: 'Moraleja', text: 'El Reino de Dios vale más que todo; quien lo descubre, da cualquier cosa por tenerlo.', reference: 'Mateo 13:44' }, accent: 'amber' },
  { front: { tag: 'Parábola', emoji: '🍇', title: 'Obreros de la viña', subtitle: 'Gracia inesperada' }, back: { tag: 'Moraleja', text: 'Dios da su gracia libremente, incluso a quien llega último. Nadie merece más que otro.', reference: 'Mateo 20:1-16' }, accent: 'emerald' },
  { front: { tag: 'Parábola', emoji: '🕯️', title: 'Las diez vírgenes', subtitle: 'Estar listos' }, back: { tag: 'Moraleja', text: 'Vivir preparados para la venida del Señor, con la lámpara encendida de la fe.', reference: 'Mateo 25:1-13' }, accent: 'sky' },
  { front: { tag: 'Parábola', emoji: '🏠', title: 'Las dos casas', subtitle: 'Roca o arena' }, back: { tag: 'Moraleja', text: 'Escuchar y obedecer la palabra de Jesús es edificar una vida firme.', reference: 'Mateo 7:24-27' }, accent: 'rose' },
]

const versos = [
  { text: 'Por medio de parábolas les hablaba.', reference: 'Mateo 13:34', theme: 'sky' },
  { text: 'El Reino de los cielos es semejante al grano de mostaza.', reference: 'Mateo 13:31', theme: 'emerald' },
]
</script>

<template>
  <PageHeader
    eyebrow="Parábolas"
    title="Historias breves con gran enseñanza"
    description="Jesús enseñaba con historias tomadas de la vida cotidiana. Con unas pocas imágenes revela cómo es el Reino de Dios."
    image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
  />

  <section class="mx-auto max-w-7xl px-6 py-14 sm:px-8">
    <FlashCardDeck :cards="parabolas" />
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
    <div class="grid gap-5 sm:grid-cols-2">
      <VerseCard v-for="v in versos" :key="v.reference" v-bind="v" />
    </div>
  </section>
</template>
