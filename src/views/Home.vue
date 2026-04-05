<script setup>
import { RouterLink } from 'vue-router'
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
          class="page-card p-5 backdrop-blur-md"
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
            class="page-card"
          >
            <p class="text-lg font-semibold text-white">{{ seccion.titulo }}</p>
            <p class="mt-3 text-sm leading-7 text-slate-200">
              {{ seccion.texto }}
            </p>
          </div>
        </div>
      </div>
      </section>
    </template>
  </SiteShell>
</template>
