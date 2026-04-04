<script setup>
import { RouterLink } from 'vue-router'
import cloudsBg from '../assets/images/clouds.jpg'

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
</script>

<template>
  <main
    class="relative isolate min-h-screen overflow-hidden"
    :style="{ backgroundImage: `url(${cloudsBg})` }"
    role="main"
  >
    <div class="absolute inset-0 bg-slate-950/70"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_30%),linear-gradient(135deg,_rgba(15,23,42,0.4),_rgba(12,74,110,0.35),_rgba(2,6,23,0.88))]"></div>
    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-200/15 to-transparent"></div>

    <section class="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
      <div class="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div class="text-left">
          <span
            class="mb-5 inline-flex items-center rounded-full border border-amber-200/30 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] text-amber-200 backdrop-blur-md"
          >
            La Biblia · RVR 1960
          </span>

          <h1 class="max-w-3xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
            Jesús es el Señor
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Un espacio sobrio para leer, estudiar y meditar en las Escrituras con una
            presentacion clara, centrada en Jesucristo y preparada para seguir creciendo.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
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
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <article
              v-for="pilar in pilares"
              :key="pilar.titulo"
              class="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md"
            >
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                {{ pilar.titulo }}
              </p>
              <p class="mt-3 text-sm leading-6 text-slate-200">
                {{ pilar.texto }}
              </p>
            </article>
          </div>
        </div>

        <aside class="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <div class="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
              Texto destacado
            </p>

            <blockquote class="mt-5 text-2xl font-semibold leading-10 text-white">
              “Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.”
            </blockquote>

            <p class="mt-4 text-sm uppercase tracking-[0.22em] text-slate-300">
              Juan 14:6
            </p>

            <div class="mt-8 rounded-2xl border border-amber-200/20 bg-amber-300/10 p-5">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">
                Proposito del sitio
              </p>
              <p class="mt-3 text-sm leading-7 text-slate-200">
                Presentar contenido biblico con respeto, legibilidad y una estructura que
                facilite el estudio personal y la comparacion doctrinal.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section
      id="proposito"
      class="relative z-10 border-t border-white/10 bg-slate-950/55 px-6 py-16 backdrop-blur-sm"
    >
      <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
            Diseno de inicio
          </p>
          <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Una Home mas firme, mas legible y con mejor direccion visual
          </h2>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-white/10 p-6">
            <p class="text-lg font-semibold text-white">Jerarquia visual</p>
            <p class="mt-3 text-sm leading-7 text-slate-200">
              El mensaje principal ahora domina la pantalla y las acciones secundarias no
              compiten con el titulo.
            </p>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/10 p-6">
            <p class="text-lg font-semibold text-white">Mejor contraste</p>
            <p class="mt-3 text-sm leading-7 text-slate-200">
              Las capas oscuras y la luz calida superior mejoran la lectura sobre la imagen
              de fondo en desktop y mobile.
            </p>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/10 p-6">
            <p class="text-lg font-semibold text-white">Contenido util</p>
            <p class="mt-3 text-sm leading-7 text-slate-200">
              Se incorporan pilares y un bloque destacado para dar contexto sin saturar la
              primera pantalla.
            </p>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/10 p-6">
            <p class="text-lg font-semibold text-white">CTA consistente</p>
            <p class="mt-3 text-sm leading-7 text-slate-200">
              Las llamadas a la accion priorizan recorridos reales del proyecto y eliminan
              accesos a rutas que hoy no existen.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
