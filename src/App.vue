<script setup>
import { ref } from 'vue'

const pilares = [
  {
    titulo: 'El camino',
    emoji: '🧭',
    color: 'from-sky-400 to-cyan-300',
    texto:
      'Jesús no mostró un camino ni enseñó un método: dijo "yo soy". Él mismo, como persona viva, es el puente entre Dios y nosotros.',
  },
  {
    titulo: 'La verdad',
    emoji: '💡',
    color: 'from-amber-400 to-orange-300',
    texto:
      'En un mundo con muchas voces, Jesús no habla sobre la verdad: es la verdad. Escucharle ordena cómo pensamos y cómo vivimos.',
  },
  {
    titulo: 'La vida',
    emoji: '🌿',
    color: 'from-emerald-400 to-teal-300',
    texto:
      'La vida que ofrece no se mide en años ni logros. Es vida nueva que comienza hoy al confiar en Él y sigue más allá de la muerte.',
  },
]

const copiado = ref(false)

async function copiarVersiculo() {
  const texto =
    '"Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí." — Juan 14:6 (RVR1960)'
  try {
    await navigator.clipboard.writeText(texto)
    copiado.value = true
    setTimeout(() => (copiado.value = false), 2000)
  } catch {
    /* clipboard API no disponible */
  }
}
</script>

<template>
  <main class="min-h-screen">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 backdrop-blur"
        >
          <span aria-hidden="true">✝️</span>
          Juan 14:6 · RVR 1960
        </span>

        <h1
          class="mt-8 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 drop-shadow-[0_6px_24px_rgba(14,165,233,0.25)] sm:text-6xl lg:text-7xl"
        >
          Jesús es el
          <span class="bg-gradient-to-r from-sky-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">camino</span>
        </h1>

        <figure class="mt-10 max-w-2xl">
          <blockquote class="font-display text-xl italic leading-relaxed text-slate-700 sm:text-2xl">
            "Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí."
          </blockquote>
          <figcaption class="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Juan 14:6
          </figcaption>
        </figure>

        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#significado"
            class="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
          >
            Ver el significado
            <span aria-hidden="true">↓</span>
          </a>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
            @click="copiarVersiculo"
          >
            <span aria-hidden="true">⎘</span>
            {{ copiado ? '¡Copiado!' : 'Copiar versículo' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Explicación -->
    <section id="significado" class="mx-auto max-w-3xl px-6 pb-16">
      <div class="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl shadow-sky-500/10 backdrop-blur sm:p-10">
        <p class="text-xs font-semibold uppercase tracking-[0.32em] text-sky-600">
          El versículo, explicado
        </p>
        <h2 class="mt-3 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          ¿Qué significa Juan 14:6?
        </h2>
        <div class="mt-6 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
          <p>
            Jesús pronunció estas palabras la noche antes de morir, durante la última cena, mientras
            consolaba a unos discípulos asustados por saber que Él se iba. Tomás acababa de preguntar:
            <em>"¿cómo podemos saber el camino?"</em>, y la respuesta de Jesús quedó como una de las
            frases más profundas de la Biblia.
          </p>
          <p>
            Cuando dice <strong class="text-slate-900">"yo soy el camino"</strong>, no habla de un
            método ni de un mapa: Él mismo, como persona viva, es el puente entre Dios y nosotros.
            Seguirle no es cumplir un manual, es caminar con Él.
          </p>
          <p>
            Al continuar con <strong class="text-slate-900">"y la verdad"</strong>, se declara la
            realidad definitiva de Dios revelada al mundo. En medio de muchas voces que proclaman
            verdades parciales, Jesús no habla <em>sobre</em> la verdad: <em>es</em> la verdad.
          </p>
          <p>
            Al añadir <strong class="text-slate-900">"y la vida"</strong>, habla de una vida nueva
            que no se mide en años ni en logros. Es vida espiritual que comienza hoy, cuando alguien
            confía en Él, y continúa más allá de la muerte.
          </p>
          <p>
            Y el cierre —
            <strong class="text-slate-900">"nadie viene al Padre, sino por mí"</strong>— no es
            arrogancia: es la razón de todo el evangelio. Jesús, como Hijo eterno hecho hombre, es
            el único puente suficiente entre un Dios santo y una humanidad herida por el pecado.
          </p>
        </div>
      </div>
    </section>

    <!-- Tres pilares -->
    <section class="mx-auto max-w-5xl px-6 pb-16">
      <p class="text-center text-xs font-semibold uppercase tracking-[0.32em] text-violet-600">
        Tres palabras que lo cambian todo
      </p>
      <h2 class="mt-3 text-center font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Camino · Verdad · Vida
      </h2>

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article
          v-for="p in pilares"
          :key="p.titulo"
          class="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-sky-500/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition group-hover:opacity-70"
            :class="p.color"
          ></div>
          <span
            class="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow-md"
            :class="p.color"
            aria-hidden="true"
          >
            {{ p.emoji }}
          </span>
          <h3 class="relative mt-5 font-display text-2xl font-bold text-slate-900">
            {{ p.titulo }}
          </h3>
          <p class="relative mt-3 text-sm leading-7 text-slate-600">
            {{ p.texto }}
          </p>
        </article>
      </div>
    </section>

    <!-- Footer minimal -->
    <footer class="border-t border-white/70 bg-white/60 py-6 text-center backdrop-blur">
      <p class="text-xs text-slate-500">
        Hecho con Vue 3 · Vite · Tailwind. Texto bíblico: Reina-Valera 1960.
      </p>
    </footer>
  </main>
</template>
