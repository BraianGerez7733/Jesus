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
  } catch {}
}
</script>

<template>
  <main class="min-h-screen text-slate-600 font-sans relative">

    <!-- YOUTUBE VIDEO BACKGROUND FULLSCREEN -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-sky-200">
      <iframe
        class="youtube-bg"
        src="https://www.youtube.com/embed/2xeQsAyT5-c?autoplay=1&mute=1&loop=1&playlist=2xeQsAyT5-c&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
        frameborder="0"
        allow="autoplay; fullscreen"
      ></iframe>

      <div class="absolute inset-0 bg-white/10"></div>
    </div>

    <div class="relative z-10 flex flex-col min-h-screen w-full">

      <section class="relative overflow-hidden w-full">
        <div class="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">

          <h1 class="mt-10 text-5xl font-black text-white">
            Jesús es el camino
          </h1>

          <div class="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#significado" class="bg-slate-900 text-white px-6 py-3 rounded-full">
              Ver el significado
            </a>
          </div>
        </div>
      </section>

      <section class="relative mx-auto max-w-5xl px-6 pb-24 z-10">
        <DailyMeditation />
      </section>

    </div>
  </main>
</template>

<style scoped>
.youtube-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 177.77vh;
  height: 100vh;
  min-width: 100vw;
  min-height: 56.25vw;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
