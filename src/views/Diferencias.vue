<script setup>
import { RouterLink } from 'vue-router'
import ScrollVisualSection from '../components/ScrollVisualSection.vue'
import SiteShell from '../components/SiteShell.vue'
import VerseGallery from '../components/VerseGallery.vue'
import cloudsWide from '../assets/images/clouds.jpg'

const criterios = [
  'Autoridad final de la Biblia',
  'Identidad y divinidad de Jesucristo',
  'Salvacion por gracia mediante la fe',
]

const religiones = [
  {
    nombre: 'Judaísmo',
    resumen: 'Se compara la expectativa del Mesias con la afirmacion cristiana de que Jesús cumple las promesas del Antiguo Testamento.',
    enfoque: 'Mesias prometido y cumplimiento en Cristo.',
    detalle: 'El punto central no es la moral solamente, sino la identidad de Jesús.',
  },
  {
    nombre: 'Catolicismo',
    resumen: 'Se revisan autoridad doctrinal, mediacion y justificacion, contrastando tradición e Iglesia con la suficiencia de Cristo y la Escritura.',
    enfoque: 'Autoridad, gracia y mediacion.',
    detalle: 'La comparacion apunta a la salvacion por gracia y al lugar único de Cristo.',
  },
  {
    nombre: 'Mormonismo',
    resumen: 'Se observan las revelaciones posteriores, la idea de Dios y el mensaje de salvacion frente al testimonio bíblico histórico.',
    enfoque: 'Revelacion, deidad y evangelio.',
    detalle: 'El eje es si el canon bíblico es suficiente y quién es realmente Jesús.',
  },
  {
    nombre: 'Islam',
    resumen: 'Se contrasta la vision islamica de Jesús con la confesión cristiana sobre su divinidad, su muerte en la cruz y su resurreccion.',
    enfoque: 'Jesús, cruz y redencion.',
    detalle: 'La diferencia principal está en la persona de Cristo y en la obra redentora.',
  },
  {
    nombre: 'Budismo',
    resumen: 'Se comparan la comprensión del sufrimiento, el problema del pecado y la esperanza final con la respuesta del evangelio.',
    enfoque: 'Sufrimiento, pecado y esperanza.',
    detalle: 'Aquí cambia la base completa: no solo una practica, sino la visión del ser humano y de la salvacion.',
  },
]

const verseHighlights = [
  {
    text: 'Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.',
    reference: 'Hechos 4:12',
    layout: 'wide',
  },
  {
    text: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.',
    reference: 'Efesios 2:8',
    layout: 'pill',
  },
  {
    text: 'Santifícalos en tu verdad; tu palabra es verdad.',
    reference: 'Juan 17:17',
    layout: 'stacked',
  },
]

// Cambia aqui textos, superficies y posiciones de la seccion visual.
// Si luego quieres usar imagenes reales, agrega `image` a cada objeto.
const visualItems = [
  {
    kicker: 'Desde la izquierda',
    title: 'Autoridad bíblica',
    text: 'Una pieza lateral que introduce el eje de comparación con presencia sobria.',
    enterFrom: 'left',
    positionClass: '-translate-x-[118%] -translate-y-[62%] lg:-translate-x-[128%] lg:-translate-y-[58%]',
    surfaceClass: 'bg-[linear-gradient(145deg,_rgba(34,211,238,0.36),_rgba(15,23,42,0.94))]',
    image: cloudsWide,
    verse: 'Toda la Escritura es inspirada por Dios.',
    verseRef: '2 Timoteo 3:16',
  },
  {
    kicker: 'Desde la derecha',
    title: 'Persona de Cristo',
    text: 'El segundo bloque equilibra la escena y deja claro el centro doctrinal del conjunto.',
    enterFrom: 'right',
    positionClass: 'translate-x-[18%] -translate-y-[62%] lg:translate-x-[28%] lg:-translate-y-[58%]',
    surfaceClass: 'bg-[linear-gradient(145deg,_rgba(250,204,21,0.28),_rgba(15,23,42,0.95))]',
    image: cloudsWide,
    verse: 'Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.',
    verseRef: 'Juan 14:6',
  },
  {
    kicker: 'Desde abajo',
    title: 'Salvación por gracia',
    text: 'El bloque inferior ancla la composición y completa una lectura visual ordenada.',
    enterFrom: 'bottom',
    positionClass: '-translate-x-1/2 translate-y-[2%] lg:-translate-x-1/2 lg:translate-y-[8%]',
    surfaceClass: 'bg-[linear-gradient(155deg,_rgba(56,189,248,0.24),_rgba(15,23,42,0.95),_rgba(14,165,233,0.18))]',
    image: cloudsWide,
    verse: 'Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo.',
    verseRef: 'Romanos 5:1',
  },
]
</script>

<template>
  <SiteShell
    badge="Estudio comparativo"
    title="Diferencias con otras religiones"
    description="Una seccion pensada para comparar doctrinas con claridad, respeto y base biblica, manteniendo a Jesucristo y a la Escritura como referencia central."
    quote="“Examinadlo todo; retened lo bueno.”"
    verse="1 Tesalonicenses 5:21"
    aside-label="Enfoque del contenido"
    theme="cyan"
  >
    <template #actions>
      <RouterLink
        to="/"
        class="inline-flex items-center rounded-2xl bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
      >
        Volver al inicio
      </RouterLink>

      <a
        href="#comparaciones"
        class="inline-flex items-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
      >
        Ver comparaciones
      </a>
    </template>

    <template #highlights>
      <div class="grid gap-4 sm:grid-cols-3">
        <article
          v-for="criterio in criterios"
          :key="criterio"
          class="page-card hover-lift-soft p-5 backdrop-blur-md"
        >
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Criterio
          </p>
          <p class="mt-3 text-base font-semibold leading-7 text-white">
            {{ criterio }}
          </p>
        </article>
      </div>
    </template>

    <template #aside>
      <div class="space-y-4">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Tono
          </p>
          <p class="mt-2 text-sm leading-7 text-slate-200">
            Comparacion respetuosa, lenguaje claro y enfoque en convicciones biblicas.
          </p>
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Objetivo
          </p>
          <p class="mt-2 text-sm leading-7 text-slate-200">
            Ayudar al lector a distinguir diferencias doctrinales sin agresividad ni
            simplificaciones vacias.
          </p>
        </div>
      </div>
    </template>

    <template #content>
      <section id="comparaciones" class="section-shell">
        <div class="mx-auto max-w-6xl">
          <div class="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="section-heading text-cyan-200">
                Temas a desarrollar
              </p>
              <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Comparaciones organizadas por enfoque doctrinal
              </h2>
            </div>

            <p class="max-w-xl text-sm leading-7 text-slate-300">
              Cada bloque resume una diferencia importante y deja abierta la posibilidad de
              ampliar luego con textos bíblicos concretos.
            </p>
          </div>

          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <article
              v-for="religion in religiones"
              :key="religion.nombre"
              class="page-card hover-lift-soft group rounded-[1.75rem] transition hover:bg-white/15"
            >
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
                {{ religion.nombre }}
              </p>

              <p class="mt-4 text-xl font-bold text-white">
                {{ religion.enfoque }}
              </p>

              <p class="mt-4 text-sm leading-7 text-slate-200">
                {{ religion.resumen }}
              </p>

              <p class="mt-4 text-sm leading-7 text-slate-300">
                {{ religion.detalle }}
              </p>

              <div class="mt-6 h-px w-full bg-white/10"></div>

              <p class="mt-5 text-sm font-semibold text-cyan-100 transition group-hover:text-white">
                Lectura sintetica lista para ampliar
              </p>
            </article>
          </div>
        </div>
      </section>

      <VerseGallery
        eyebrow="Base bíblica"
        title="Versículos distribuidos a lo largo de la página doctrinal"
        description="La comparación ahora queda acompañada por textos bíblicos visibles en distintos formatos para reforzar la lectura en cada tramo."
        :verses="verseHighlights"
        accent="cyan"
      />

      <ScrollVisualSection
        eyebrow="Escena doctrinal"
        title="Una composición visual que acompaña la lectura comparativa"
        description="La entrada por scroll mantiene el tono sobrio del sitio y agrega una pausa visual con movimiento medido y alineación limpia."
        :items="visualItems"
      />
    </template>
  </SiteShell>
</template>
