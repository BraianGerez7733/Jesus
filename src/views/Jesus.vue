<script setup>
import { RouterLink } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import Timeline from '../components/Timeline.vue'
import FlashCardDeck from '../components/FlashCardDeck.vue'
import VerseCard from '../components/VerseCard.vue'

const eventos = [
  { period: '≈ 5 a.C.', icon: '⭐', title: 'Nacimiento en Belén', text: 'Jesús nace en Belén de una virgen llamada María. Ángeles anuncian el suceso a pastores.', verse: 'Lucas 2:7' },
  { period: '≈ 30 d.C.', icon: '💧', title: 'Bautismo en el Jordán', text: 'Es bautizado por Juan. El Espíritu desciende como paloma y el Padre afirma: “Este es mi Hijo amado”.', verse: 'Mateo 3:16-17' },
  { period: '3 años', icon: '📣', title: 'Ministerio público', text: 'Enseña con parábolas, sana enfermos, perdona pecados y anuncia el Reino de Dios.', verse: 'Mateo 4:17' },
  { period: 'Pascua', icon: '🍞', title: 'Última cena', text: 'Instituye la cena del Señor con pan y vino, símbolos de su cuerpo y sangre entregados.', verse: '1 Corintios 11:23-25' },
  { period: 'Viernes', icon: '✝️', title: 'Crucifixión', text: 'Es crucificado fuera de Jerusalén. Muere cargando los pecados del mundo.', verse: 'Juan 19:30' },
  { period: 'Domingo', icon: '🌅', title: 'Resurrección', text: 'Al tercer día resucita. Se aparece a mujeres, discípulos y a más de 500 personas.', verse: '1 Corintios 15:4-6' },
  { period: '+40 días', icon: '☁️', title: 'Ascensión', text: 'Sube al cielo prometiendo volver y enviar al Espíritu Santo.', verse: 'Hechos 1:9-11' },
]

const yoSoy = [
  { front: { tag: 'Yo soy', emoji: '🍞', title: 'Pan de vida', subtitle: 'Juan 6:35' }, back: { tag: 'Sentido', text: 'Jesús sacia el hambre del alma y ofrece vida que no termina.', reference: 'Juan 6:35' }, accent: 'amber' },
  { front: { tag: 'Yo soy', emoji: '💡', title: 'Luz del mundo', subtitle: 'Juan 8:12' }, back: { tag: 'Sentido', text: 'Quien lo sigue no camina en oscuridad: Jesús aclara el sentido de la vida.', reference: 'Juan 8:12' }, accent: 'sky' },
  { front: { tag: 'Yo soy', emoji: '🚪', title: 'La puerta', subtitle: 'Juan 10:9' }, back: { tag: 'Sentido', text: 'Es el acceso a la salvación y a una vida plena con Dios.', reference: 'Juan 10:9' }, accent: 'violet' },
  { front: { tag: 'Yo soy', emoji: '🐑', title: 'Buen pastor', subtitle: 'Juan 10:11' }, back: { tag: 'Sentido', text: 'Conoce a los suyos y da su vida por ellos, a diferencia del asalariado.', reference: 'Juan 10:11' }, accent: 'emerald' },
  { front: { tag: 'Yo soy', emoji: '🌿', title: 'Resurrección y vida', subtitle: 'Juan 11:25' }, back: { tag: 'Sentido', text: 'Quien cree en Él, aunque muera, vivirá. Vence la muerte.', reference: 'Juan 11:25' }, accent: 'rose' },
  { front: { tag: 'Yo soy', emoji: '🧭', title: 'Camino, verdad, vida', subtitle: 'Juan 14:6' }, back: { tag: 'Sentido', text: 'Nadie viene al Padre sino por Él. Es la ruta, no solo el guía.', reference: 'Juan 14:6' }, accent: 'sky' },
]

const milagros = [
  { front: { tag: 'Milagro', emoji: '🍷', title: 'Agua en vino', subtitle: 'Bodas de Caná' }, back: { tag: 'Primer signo', text: 'Jesús manifiesta su gloria convirtiendo el agua en vino de calidad durante una boda.', reference: 'Juan 2:1-11' }, accent: 'rose' },
  { front: { tag: 'Milagro', emoji: '🌊', title: 'Calma la tempestad', subtitle: 'Mar de Galilea' }, back: { tag: 'Poder', text: 'Con una palabra calma el viento y las olas. Hasta la naturaleza le obedece.', reference: 'Marcos 4:39' }, accent: 'sky' },
  { front: { tag: 'Milagro', emoji: '🦯', title: 'Sana al ciego', subtitle: 'Bartimeo' }, back: { tag: 'Compasión', text: 'Se detiene frente al clamor de un ciego y le devuelve la vista por su fe.', reference: 'Marcos 10:46-52' }, accent: 'amber' },
  { front: { tag: 'Milagro', emoji: '🪦', title: 'Resucita a Lázaro', subtitle: 'Después de 4 días' }, back: { tag: 'Vida', text: 'Llama a Lázaro fuera del sepulcro demostrando que Él es la resurrección.', reference: 'Juan 11:38-44' }, accent: 'violet' },
]

const versos = [
  { text: 'El Verbo fue hecho carne, y habitó entre nosotros.', reference: 'Juan 1:14', theme: 'sky' },
  { text: 'Porque el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos.', reference: 'Marcos 10:45', theme: 'rose' },
  { text: 'Jesucristo es el mismo ayer, y hoy, y por los siglos.', reference: 'Hebreos 13:8', theme: 'amber' },
]
</script>

<template>
  <PageHeader
    eyebrow="Jesús de Nazaret"
    title="Dios hecho hombre, centro de la Biblia"
    description="Su vida y enseñanzas dividieron la historia en dos. Creyó, oró, sanó, enseñó, murió y resucitó. El cristianismo se sostiene en quién es Él."
    image="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?auto=format&fit=crop&w=1200&q=80"
  >
    <template #actions>
      <RouterLink to="/parabolas" class="btn-primary">
        Sus parábolas
        <span aria-hidden="true">→</span>
      </RouterLink>
      <RouterLink to="/nuevo-testamento" class="btn-ghost">Los Evangelios</RouterLink>
    </template>
  </PageHeader>

  <section class="mx-auto max-w-7xl px-6 py-14 sm:px-8">
    <div class="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p class="section-heading text-sky-600">Línea de vida</p>
        <h2 class="section-title mt-3">De Belén al cielo</h2>
        <p class="section-lead">
          Siete momentos para entender su ministerio de principio a fin.
        </p>
      </div>
      <Timeline :events="eventos" />
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-violet-600">Los siete “Yo soy”</p>
      <h2 class="section-title mt-3">Cómo se describe Jesús a sí mismo</h2>
    </div>
    <div class="mt-10">
      <FlashCardDeck :cards="yoSoy" />
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-rose-600">Milagros</p>
      <h2 class="section-title mt-3">Señales que revelan su poder y amor</h2>
    </div>
    <div class="mt-10">
      <FlashCardDeck :cards="milagros" />
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-6 pb-20 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-amber-600">Versículos sobre Cristo</p>
      <h2 class="section-title mt-3">Sobre quién es Él</h2>
    </div>
    <div class="mt-10 grid gap-5 sm:grid-cols-3">
      <VerseCard v-for="v in versos" :key="v.reference" v-bind="v" />
    </div>
  </section>
</template>
