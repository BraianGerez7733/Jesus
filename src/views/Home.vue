<script setup>
import { RouterLink } from 'vue-router'
import FlipCardsSection from '../components/FlipCardsSection.vue'
import HeroCarousel from '../components/HeroCarousel.vue'
import ScrollVisualSection from '../components/ScrollVisualSection.vue'
import SiteShell from '../components/SiteShell.vue'

const pilares = [
  {
    titulo: 'Lectura clara',
    texto: 'Una portada simple y directa para entrar a la Palabra sin ruido visual ni distracciones innecesarias.',
  },
  {
    titulo: 'Enfoque cristocentrico',
    texto: 'El mensaje principal pone a Jesucristo en el centro, con un tono reverente y accesible.',
  },
  {
    titulo: 'Navegacion inmediata',
    texto: 'Los accesos principales quedan visibles desde el primer pliegue para orientar el recorrido.',
  },
]

const secciones = [
  {
    titulo: 'Lectura bíblica',
    texto: 'Acceso simple al texto para leer con calma, sin elementos que interrumpan la atencion.',
  },
  {
    titulo: 'Religiones en perspectiva',
    texto: 'Una comparacion breve y neutral entre cristianismo, judaísmo, mormonismo, islam, budismo y catolicismo.',
  },
  {
    titulo: 'Estudio comparativo',
    texto: 'Espacio para observar diferencias doctrinales con base bíblica y un tono sereno.',
  },
  {
    titulo: 'Enfoque en Cristo',
    texto: 'Cada contenido busca volver al evangelio, a la gracia y a la persona de Jesucristo.',
  },
  {
    titulo: 'Crecimiento gradual',
    texto: 'La estructura queda preparada para sumar luego versiculos, notas y desarrollos breves.',
  },
]

// Cambia aqui el titulo y la descripcion de cada flip card.
const flipCards = [
  {
    title: 'Leer',
    description: 'Un acceso directo y ordenado para entrar al contenido biblico sin distracciones innecesarias.',
  },
  {
    title: 'Comparar',
    description: 'Un resumen visual para contrastar ideas y ubicar diferencias doctrinales con claridad.',
  },
  {
    title: 'Consultar',
    description: 'Un punto rapido de contacto para hacer preguntas, pedir oración o continuar por WhatsApp.',
  },
]

const heroSlides = [
  {
    eyebrow: 'Lectura bíblica',
    title: 'Lee la Escritura con una portada más visual y directa',
    text: 'Un carrusel amplio, con transición suave y controles manuales, para destacar lectura, doctrina y acceso rápido sin salir del tono sobrio del sitio.',
    ctaLabel: 'Ir a lectura',
    ctaHref: '#proposito',
    overlayClass:
      'bg-[linear-gradient(125deg,_rgba(15,23,42,0.9),_rgba(12,74,110,0.46),_rgba(250,204,21,0.18))]',
    accentClass:
      'bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.28),_transparent_30%)]',
  },
  {
    eyebrow: 'Comparación doctrinal',
    title: 'Presenta tus secciones principales como un slideshow de portada',
    text: 'Cada slide puede resaltar una idea distinta con texto principal, descripción breve y llamada a la acción, al estilo del ejemplo que compartiste.',
    ctaLabel: 'Ver diferencias',
    ctaTo: '/diferencias',
    align: 'center',
    overlayClass:
      'bg-[linear-gradient(135deg,_rgba(2,6,23,0.88),_rgba(71,85,105,0.32),_rgba(34,211,238,0.2))]',
    accentClass:
      'bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.34),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(148,163,184,0.24),_transparent_32%)]',
  },
  {
    eyebrow: 'Acceso rápido',
    title: 'Incluye navegación con flechas, puntos y avance automático',
    text: 'El carrusel rota solo, permite pausa al pasar el cursor y mantiene una estructura reutilizable para cambiar slides después sin rehacer el diseño.',
    ctaLabel: 'Comparar religiones',
    ctaTo: '/religiones',
    align: 'right',
    overlayClass:
      'bg-[linear-gradient(140deg,_rgba(15,23,42,0.88),_rgba(120,53,15,0.32),_rgba(251,191,36,0.18))]',
    accentClass:
      'bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.36),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(249,115,22,0.2),_transparent_28%)]',
  },
]

// Cambia aqui titulos, textos, superficies y posiciones del montaje visual.
// Para usar imagenes reales, agrega `image: '/ruta-o-import'` en cada bloque.
const visualItems = [
  {
    kicker: 'Desde la izquierda',
    title: 'Lectura serena',
    text: 'Un bloque visual pensado para transmitir calma, orden y acceso claro al contenido.',
    enterFrom: 'left',
    positionClass: '-translate-x-[118%] -translate-y-[62%] lg:-translate-x-[128%] lg:-translate-y-[58%]',
    surfaceClass: 'bg-[linear-gradient(140deg,_rgba(245,158,11,0.45),_rgba(15,23,42,0.9))]',
  },
  {
    kicker: 'Desde la derecha',
    title: 'Doctrina comparada',
    text: 'La composición equilibra contraste visual con una estética sobria y elegante.',
    enterFrom: 'right',
    positionClass: 'translate-x-[18%] -translate-y-[62%] lg:translate-x-[28%] lg:-translate-y-[58%]',
    surfaceClass: 'bg-[linear-gradient(145deg,_rgba(34,211,238,0.42),_rgba(15,23,42,0.92))]',
  },
  {
    kicker: 'Desde abajo',
    title: 'Contacto directo',
    text: 'Una pieza inferior que cierra el conjunto y genera un punto focal estable en el centro.',
    enterFrom: 'bottom',
    positionClass: '-translate-x-1/2 translate-y-[2%] lg:-translate-x-1/2 lg:translate-y-[8%]',
    surfaceClass: 'bg-[linear-gradient(155deg,_rgba(148,163,184,0.28),_rgba(15,23,42,0.95),_rgba(250,204,21,0.2))]',
  },
]
</script>

<template>
  <SiteShell
    badge="La Biblia · RVR 1960"
    title="Jesús es el Señor"
    description="Un espacio sobrio para leer, estudiar y meditar en las Escrituras con una presentacion clara, centrada en Jesucristo y preparada para seguir creciendo."
    quote="“Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.”"
    verse="Juan 14:6"
    aside-label="Texto destacado"
  >
    <template #actions>
      <a
        href="#proposito"
        class="inline-flex items-center rounded-2xl bg-amber-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-200"
      >
        Ver enfoque
      </a>

      <RouterLink
        to="/diferencias"
        class="inline-flex items-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
      >
        Explorar diferencias
      </RouterLink>

      <RouterLink
        to="/religiones"
        class="inline-flex items-center rounded-2xl border border-amber-200/30 bg-amber-300/10 px-6 py-3 text-sm font-semibold text-amber-100 backdrop-blur-md transition hover:bg-amber-300/20"
      >
        Comparar religiones
      </RouterLink>
    </template>

    <template #highlights>
      <div class="grid gap-4 sm:grid-cols-3">
        <article
          v-for="pilar in pilares"
          :key="pilar.titulo"
          class="page-card hover-lift-soft p-5 backdrop-blur-md"
        >
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
            {{ pilar.titulo }}
          </p>
          <p class="mt-3 text-sm leading-6 text-slate-200">
            {{ pilar.texto }}
          </p>
        </article>
      </div>
    </template>

    <template #aside>
      <div class="rounded-2xl border border-amber-200/20 bg-amber-300/10 p-5">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">
          Proposito del sitio
        </p>
        <p class="mt-3 text-sm leading-7 text-slate-200">
          Presentar contenido biblico con respeto, legibilidad y una estructura que
          facilite el estudio personal y la comparacion doctrinal.
        </p>
      </div>
    </template>

    <template #content>
      <section class="section-shell border-t-0 pt-0">
        <div class="mx-auto max-w-6xl">
          <div class="mb-8 max-w-2xl">
            <p class="section-heading text-amber-200">
              Carrusel principal
            </p>
            <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Un slideshow inicial con el estilo del ejemplo de referencia
            </h2>
            <p class="mt-4 text-sm leading-7 text-slate-300">
              Se agregó un carrusel ancho con autoplay, flechas laterales y navegación
              por puntos para abrir la portada con más movimiento visual.
            </p>
          </div>

          <HeroCarousel :slides="heroSlides" />
        </div>
      </section>

      <section id="proposito" class="section-shell">
        <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p class="section-heading text-amber-200">
              Contenido principal
            </p>
            <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Una portada breve para ubicar el sentido del sitio
            </h2>
            <p class="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              La idea es que el visitante entienda rapido qué va a encontrar: lectura,
              orientación doctrinal y una presentación reverente del mensaje bíblico.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="seccion in secciones"
              :key="seccion.titulo"
              class="page-card hover-lift-soft"
            >
              <p class="text-lg font-semibold text-white">{{ seccion.titulo }}</p>
              <p class="mt-3 text-sm leading-7 text-slate-200">
                {{ seccion.texto }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-shell border-t-0 pt-0">
        <div class="mx-auto max-w-6xl">
          <div class="mb-8 max-w-2xl">
            <p class="section-heading text-cyan-200">
              Interacción breve
            </p>
            <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Tarjetas con efecto flip para destacar ideas clave
            </h2>
            <p class="mt-4 text-sm leading-7 text-slate-300">
              El frente resume el concepto y el reverso agrega una explicación corta,
              con una animación suave tanto en escritorio como en móvil.
            </p>
          </div>

          <FlipCardsSection :cards="flipCards" />
        </div>
      </section>

      <ScrollVisualSection
        eyebrow="Composición visual"
        title="Una sección amplia con entrada suave y alineación al centro"
        description="Los bloques entran cuando la sección aparece en pantalla y terminan formando una composición limpia, equilibrada y fácil de adaptar después."
        :items="visualItems"
      />
    </template>
  </SiteShell>
</template>
