<script setup>
import { ref } from 'vue'
import DailyMeditation from './components/DailyMeditation.vue'

const pilares = [
  {
    titulo: 'El camino',
    emoji: '🧭',
    color: 'from-sky-400 to-indigo-500',
    texto:
      'Jesús no mostró un camino ni enseñó un método: dijo "yo soy". Él mismo, como persona viva, es el puente entre Dios y nosotros.',
  },
  {
    titulo: 'La verdad',
    emoji: '💡',
    color: 'from-amber-400 to-orange-400',
    texto:
      'En un mundo con muchas voces, Jesús no habla sobre la verdad: es la verdad. Escucharle ordena cómo pensamos y cómo vivimos.',
  },
  {
    titulo: 'La vida',
    emoji: '🌿',
    color: 'from-emerald-400 to-teal-500',
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
  <!-- Claro, aireado, elegante (Light Theme) con fondo de nubes -->
  <main class="min-h-screen text-slate-600 font-sans selection:bg-indigo-500/20 relative">
    
    <!-- Fondo Fijo de Nubes -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://esferacomunicacional.ar/wp-content/uploads/2021/03/cumulus_tipos-de-nubes.jpg');"
      ></div>
      <!-- Capa overlay retirada temporalmente para ver la imagen cruda -->
    </div>

    <!-- Contenedor principal que se eleva sobre el fondo -->
    <div class="relative z-10 flex flex-col min-h-screen w-full">

    <!-- Hero -->
    <section class="relative overflow-hidden w-full">

      <div class="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32 relative z-10 pt-16 sm:pt-20">

        <h1
          class="mt-10 font-display text-5xl font-black leading-[1.05] tracking-tight text-slate-800 drop-shadow-sm sm:text-6xl lg:text-7xl"
        >
          Jesús es el
          <span class="bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">camino</span>
        </h1>

        <figure class="mt-10 max-w-2xl">
          <blockquote class="font-display text-xl w-full mx-auto italic leading-relaxed text-slate-600 sm:text-2xl border-l-[3px] border-indigo-200 pl-6 text-left">
            "Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí."
          </blockquote>
          <figcaption class="mt-5 text-sm font-bold uppercase tracking-[0.24em] text-indigo-400 text-left pl-6">
            Juan 14:6
          </figcaption>
        </figure>

        <div class="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#significado"
            class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(0,0,0,0.15)] hover:bg-slate-800"
          >
            Ver el significado
            <span aria-hidden="true">↓</span>
          </a>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600"
            @click="copiarVersiculo"
          >
            <span aria-hidden="true">⎘</span>
            {{ copiado ? '¡Copiado!' : 'Copiar versículo' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Cloud Banner -->
    <div class="mx-auto max-w-5xl px-6 py-8 relative z-10">
      <div class="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 relative group">
        <!-- Reemplaza esta URL de Unsplash por tu archivo local si lo deseas (ej: src="/tu-foto.jpg") -->
        <img 
          src="https://images.unsplash.com/photo-1611928482473-7b27d24eab80?auto=format&fit=crop&w=2000&q=80" 
          alt="Cielo azul con nubes blancas" 
          class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ease-out"
        />
      </div>
    </div>

    <!-- Explicación -->
    <section id="significado" class="relative mx-auto max-w-3xl px-6 py-16">
      <div class="rounded-[2.5rem] border border-white bg-white/70 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl sm:p-12 relative overflow-hidden">
        
        <!-- Subtle accent en tarjeta blanca -->
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-indigo-50 blur-[60px] rounded-full pointer-events-none"></div>

        <p class="text-xs font-bold uppercase tracking-[0.32em] text-indigo-500 relative z-10">
          El versículo, explicado
        </p>
        <h2 class="mt-4 font-display text-3xl font-black tracking-tight text-slate-800 sm:text-4xl relative z-10">
          ¿Qué significa Juan 14:6?
        </h2>
        <div class="mt-8 space-y-6 text-base leading-relaxed text-slate-600 sm:text-lg relative z-10 font-normal">
          <p>
            Jesús pronunció estas palabras la noche antes de morir, durante la última cena, mientras
            consolaba a unos discípulos asustados por saber que Él se iba. Tomás acababa de preguntar:
            <em class="text-slate-500 font-serif italic text-xl">"¿cómo podemos saber el camino?"</em>, y la respuesta de Jesús quedó como una de las
            frases más profundas de la Biblia.
          </p>
          <p>
            Cuando dice <strong class="text-slate-900 font-bold tracking-wide">"yo soy el camino"</strong>, no habla de un
            método ni de un mapa: Él mismo, como persona viva, es el puente entre Dios y nosotros.
            Seguirle no es cumplir un manual, es caminar con Él.
          </p>
          <p>
            Al continuar con <strong class="text-slate-900 font-bold tracking-wide">"y la verdad"</strong>, se declara la
            realidad definitiva de Dios revelada al mundo. En medio de muchas voces que proclaman
            verdades parciales, Jesús no habla <em>sobre</em> la verdad: <em>es</em> la verdad.
          </p>
          <p>
            Al añadir <strong class="text-slate-900 font-bold tracking-wide">"y la vida"</strong>, habla de una vida nueva
            que no se mide en años ni en logros. Es vida espiritual que comienza hoy, cuando alguien
            confía en Él, y continúa más allá de la muerte.
          </p>
          <p class="bg-gradient-to-r from-indigo-50 to-transparent p-6 rounded-2xl border-l-4 border-indigo-400 mt-6 text-slate-700">
            Y el cierre —
            <strong class="text-indigo-700 font-bold tracking-wide">"nadie viene al Padre, sino por mí"</strong>— no es
            arrogancia: es la razón de todo el evangelio. Jesús, como Hijo eterno hecho hombre, es
            el único puente suficiente entre un Dios santo y una humanidad herida por el pecado.
          </p>
        </div>
      </div>
    </section>

    <!-- Tres pilares -->
    <section class="relative mx-auto max-w-5xl px-6 pb-24 pt-10">
      <p class="text-center text-xs font-bold uppercase tracking-[0.32em] text-pink-500">
        Tres palabras que lo cambian todo
      </p>
      <h2 class="mt-4 text-center font-display text-3xl font-black tracking-tight text-slate-800 sm:text-5xl">
        Camino · Verdad · Vida
      </h2>

      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <article
          v-for="p in pilares"
          :key="p.titulo"
          class="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)]"
        >
          <div
            class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br opacity-10 blur-2xl transition duration-700 group-hover:opacity-20"
            :class="p.color"
          ></div>
          
          <span
            class="relative flex h-14 w-14 items-center justify-center rounded-[1rem] bg-gradient-to-br text-3xl shadow-sm text-white"
            :class="p.color"
            aria-hidden="true"
          >
            {{ p.emoji }}
          </span>
          <h3 class="relative mt-8 font-display text-2xl font-black text-slate-800 tracking-wide">
            {{ p.titulo }}
          </h3>
          <p class="relative mt-4 text-sm leading-relaxed text-slate-500 font-medium">
            {{ p.texto }}
          </p>
        </article>
      </div>
    </section>

    <!-- Daily Meditation Component -->
    <section class="relative mx-auto max-w-5xl px-6 pb-24 z-10">
      <DailyMeditation />
    </section>

    <!-- Footer minimal -->
    <footer class="border-t border-white/40 bg-white/60 py-10 text-center relative z-10 w-full mt-auto backdrop-blur-md">
      <p class="text-[11px] text-slate-500 font-semibold tracking-widest uppercase">
        Hecho con Vue 3 · Vite · Tailwind. Texto bíblico: Reina-Valera 1960.
      </p>
    </footer>
    
    </div>
  </main>
</template>
