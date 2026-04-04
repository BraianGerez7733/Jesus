<script setup>
import { RouterLink } from 'vue-router'
import cloudsBg from '../assets/images/clouds.jpg'

const criterios = [
  'Autoridad final de la Biblia',
  'Identidad y divinidad de Jesucristo',
  'Salvacion por gracia mediante la fe',
]

const religiones = [
  {
    nombre: 'Judaísmo',
    resumen: 'Comparacion sobre el Mesias prometido, la ley y el cumplimiento en Cristo.',
    enfoque: 'Profecias, pacto y reconocimiento de Jesús.',
  },
  {
    nombre: 'Catolicismo',
    resumen: 'Revision de autoridad doctrinal, tradicion, mediacion y justificacion.',
    enfoque: 'Biblia, gracia y suficiencia de Cristo.',
  },
  {
    nombre: 'Mormonismo',
    resumen: 'Analisis de revelaciones posteriores, naturaleza de Dios y evangelio.',
    enfoque: 'Canon biblico, deidad y salvacion.',
  },
  {
    nombre: 'Islam',
    resumen: 'Contraste entre la persona de Jesús, la cruz y la revelacion coranica.',
    enfoque: 'Hijo de Dios, redencion y autoridad.',
  },
  {
    nombre: 'Budismo',
    resumen: 'Diferencias entre cosmovision, pecado, sufrimiento y esperanza eterna.',
    enfoque: 'Gracia, verdad y vida nueva en Cristo.',
  },
]
</script>

<template>
  <main
    class="relative isolate min-h-screen overflow-hidden"
    :style="{ backgroundImage: `url(${cloudsBg})` }"
  >
    <div class="absolute inset-0 bg-slate-950/75"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_28%),linear-gradient(160deg,_rgba(15,23,42,0.45),_rgba(2,132,199,0.22),_rgba(2,6,23,0.92))]"></div>
    <div class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-cyan-200/10 to-transparent"></div>

    <section class="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <RouterLink
            to="/"
            class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100 backdrop-blur-md transition hover:bg-white/20"
          >
            Volver al inicio
          </RouterLink>

          <p class="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Estudio comparativo
          </p>

          <h1 class="mt-4 max-w-3xl text-5xl font-black leading-none text-white sm:text-6xl">
            Diferencias con otras religiones
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Una seccion pensada para comparar doctrinas con claridad, respeto y base biblica,
            manteniendo a Jesucristo y a la Escritura como referencia central.
          </p>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <article
              v-for="criterio in criterios"
              :key="criterio"
              class="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md"
            >
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Criterio
              </p>
              <p class="mt-3 text-base font-semibold leading-7 text-white">
                {{ criterio }}
              </p>
            </article>
          </div>
        </div>

        <aside class="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <div class="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
              Enfoque del contenido
            </p>

            <blockquote class="mt-5 text-2xl font-semibold leading-10 text-white">
              “Examinadlo todo; retened lo bueno.”
            </blockquote>

            <p class="mt-4 text-sm uppercase tracking-[0.22em] text-slate-300">
              1 Tesalonicenses 5:21
            </p>

            <div class="mt-8 space-y-4">
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
          </div>
        </aside>
      </div>
    </section>

    <section class="relative z-10 border-t border-white/10 bg-slate-950/55 px-6 py-16 backdrop-blur-sm">
      <div class="mx-auto max-w-6xl">
        <div class="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Temas a desarrollar
            </p>
            <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Comparaciones organizadas por enfoque doctrinal
            </h2>
          </div>

          <p class="max-w-xl text-sm leading-7 text-slate-300">
            Cada bloque puede crecer luego hacia estudios mas profundos, citas biblicas y
            cuadros comparativos.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="religion in religiones"
            :key="religion.nombre"
            class="group rounded-[1.75rem] border border-white/10 bg-white/10 p-6 transition hover:-translate-y-1 hover:bg-white/15"
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

            <div class="mt-6 h-px w-full bg-white/10"></div>

            <p class="mt-5 text-sm font-semibold text-cyan-100 transition group-hover:text-white">
              Proximo paso: desarrollar estudio detallado
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
