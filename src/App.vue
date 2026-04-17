<script setup>
import { ref } from 'vue'

const pilares = [
  {
    titulo: 'El camino',
    emoji: '🧭',
    color: 'from-fuchsia-500 to-rose-500',
    texto:
      'Jesús no mostró un camino ni enseñó un método: dijo "yo soy". Él mismo, como persona viva, es el puente entre Dios y nosotros.',
  },
  {
    titulo: 'La verdad',
    emoji: '💡',
    color: 'from-amber-400 to-orange-500',
    texto:
      'En un mundo con muchas voces, Jesús no habla sobre la verdad: es la verdad. Escucharle ordena cómo pensamos y cómo vivimos.',
  },
  {
    titulo: 'La vida',
    emoji: '🌿',
    color: 'from-emerald-400 to-teal-400',
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
  <main class="min-h-screen bg-slate-950 text-slate-200 selection:bg-fuchsia-500/30 font-sans">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-white/5">
      <!-- Glow backgrounds -->
      <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32 relative z-10">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-fuchsia-300 backdrop-blur-md shadow-[0_0_15px_rgba(217,70,239,0.3)]"
        >
          <span aria-hidden="true">✝️</span>
          Juan 14:6 · RVR 1960
        </span>

        <h1
          class="mt-8 font-display text-5xl font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl"
        >
          Jesús es el
          <span class="bg-gradient-to-r from-fuchsia-400 via-rose-500 to-amber-500 bg-clip-text text-transparent">camino</span>
        </h1>

        <figure class="mt-10 max-w-2xl">
          <blockquote class="font-display text-xl w-full mx-auto italic leading-relaxed text-slate-300 sm:text-2xl border-l-[3px] border-fuchsia-500/50 pl-6 text-left">
            "Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí."
          </blockquote>
          <figcaption class="mt-4 text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-400 text-left pl-6">
            Juan 14:6
          </figcaption>
        </figure>

        <div class="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#significado"
            class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-rose-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(225,29,72,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(225,29,72,0.6)]"
          >
            Ver el significado
            <span aria-hidden="true">↓</span>
          </a>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-bold text-slate-300 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-fuchsia-400/50 hover:bg-white/10 hover:text-white"
            @click="copiarVersiculo"
          >
            <span aria-hidden="true">⎘</span>
            {{ copiado ? '¡Copiado!' : 'Copiar versículo' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Explicación -->
    <section id="significado" class="relative mx-auto max-w-3xl px-6 py-20">
      <div class="rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-xl sm:p-12 relative overflow-hidden">
        <!-- Glow accent -->
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>

        <p class="text-xs font-bold uppercase tracking-[0.32em] text-cyan-400 relative z-10">
          El versículo, explicado
        </p>
        <h2 class="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-4xl relative z-10">
          ¿Qué significa Juan 14:6?
        </h2>
        <div class="mt-8 space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg relative z-10 font-light">
          <p>
            Jesús pronunció estas palabras la noche antes de morir, durante la última cena, mientras
            consolaba a unos discípulos asustados por saber que Él se iba. Tomás acababa de preguntar:
            <em class="text-slate-400 font-serif italic text-xl">"¿cómo podemos saber el camino?"</em>, y la respuesta de Jesús quedó como una de las
            frases más profundas de la Biblia.
          </p>
          <p>
            Cuando dice <strong class="text-white font-bold tracking-wide">"yo soy el camino"</strong>, no habla de un
            método ni de un mapa: Él mismo, como persona viva, es el puente entre Dios y nosotros.
            Seguirle no es cumplir un manual, es caminar con Él.
          </p>
          <p>
            Al continuar con <strong class="text-white font-bold tracking-wide">"y la verdad"</strong>, se declara la
            realidad definitiva de Dios revelada al mundo. En medio de muchas voces que proclaman
            verdades parciales, Jesús no habla <em>sobre</em> la verdad: <em>es</em> la verdad.
          </p>
          <p>
            Al añadir <strong class="text-white font-bold tracking-wide">"y la vida"</strong>, habla de una vida nueva
            que no se mide en años ni en logros. Es vida espiritual que comienza hoy, cuando alguien
            confía en Él, y continúa más allá de la muerte.
          </p>
          <p class="bg-white/5 p-6 rounded-2xl border border-white/5 mt-6 shadow-inner">
            Y el cierre —
            <strong class="text-fuchsia-400 font-bold tracking-wide">"nadie viene al Padre, sino por mí"</strong>— no es
            arrogancia: es la razón de todo el evangelio. Jesús, como Hijo eterno hecho hombre, es
            el único puente suficiente entre un Dios santo y una humanidad herida por el pecado.
          </p>
        </div>
      </div>
    </section>

    <!-- Tres pilares -->
    <section class="relative mx-auto max-w-5xl px-6 pb-24">
      <p class="text-center text-xs font-bold uppercase tracking-[0.32em] text-rose-400">
        Tres palabras que lo cambian todo
      </p>
      <h2 class="mt-4 text-center font-display text-3xl font-black tracking-tight text-white sm:text-5xl">
        Camino · Verdad · Vida
      </h2>

      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <article
          v-for="p in pilares"
          :key="p.titulo"
          class="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-white/10"
        >
          <div
            class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-[0.10] blur-3xl transition duration-700 group-hover:opacity-40"
            :class="p.color"
          ></div>
          
          <!-- Glow underlying border effect -->
          <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100" :class="p.color"></div>
          
          <span
            class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-3xl shadow-lg border border-white/10"
            :class="p.color"
            aria-hidden="true"
          >
            {{ p.emoji }}
          </span>
          <h3 class="relative mt-8 font-display text-2xl font-black text-white tracking-wide">
            {{ p.titulo }}
          </h3>
          <p class="relative mt-4 text-sm leading-relaxed text-slate-400 font-medium">
            {{ p.texto }}
          </p>
        </article>
      </div>
    </section>

    <!-- Footer minimal -->
    <footer class="border-t border-white/5 bg-slate-950 py-8 text-center relative z-10">
      <p class="text-xs text-slate-500 font-medium tracking-widest uppercase">
        Hecho con Vue 3 · Vite · Tailwind. Texto bíblico: Reina-Valera 1960.
      </p>
    </footer>
  </main>
</template>
