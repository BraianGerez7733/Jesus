<script setup>
import { ref } from 'vue'

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
  <main class="min-h-screen text-white font-sans relative overflow-hidden">
    <!-- Fondo full screen con video -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-sky-300">
      <iframe
        class="youtube-bg"
        src="https://www.youtube.com/embed/2xeQsAyT5-c?autoplay=1&mute=1&loop=1&playlist=2xeQsAyT5-c&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
        title="Moving clouds background"
        frameborder="0"
        allow="autoplay; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,18,48,0.18),rgba(7,18,48,0.34),rgba(7,18,48,0.25))]"></div>
    </div>

    <div class="relative z-10 min-h-screen px-5 sm:px-6 lg:px-8">
      <section class="mx-auto flex max-w-6xl flex-col items-center pt-28 text-center sm:pt-32">
        <h1 class="text-5xl font-black leading-none tracking-tight text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.22)] sm:text-6xl lg:text-8xl">
          Jesús es el camino
        </h1>

        <a
          href="#significado"
          class="mt-10 inline-flex items-center justify-center rounded-full bg-[#071847] px-10 py-4 text-xl font-medium text-white shadow-[0_10px_30px_rgba(5,16,53,0.38)] transition hover:scale-[1.02]"
        >
          Ver el significado
        </a>

        <div id="significado" class="mt-20 max-w-3xl text-center">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">¿Qué significa?</h2>
          <div class="mx-auto mt-3 h-1 w-16 rounded-full bg-indigo-500"></div>
          <p class="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/95 sm:text-2xl">
            Jesús dijo: “Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.”
            Con estas palabras nos muestra que Él es la única manera de tener una relación verdadera con Dios.
          </p>
        </div>
      </section>

      <section class="mx-auto mt-24 max-w-6xl pb-20 sm:mt-28 lg:mt-32">
        <div class="overflow-hidden rounded-[2rem] border border-white/15 bg-[#04113a]/92 shadow-[0_20px_70px_rgba(2,8,30,0.55)] backdrop-blur-md">
          <div class="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
            <div class="flex items-center gap-4">
              <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-[0_0_30px_rgba(99,102,241,0.45)]">
                <span class="text-3xl">📖</span>
              </div>
              <div>
                <p class="text-2xl font-extrabold tracking-wide text-white">BIBLIA RV1960</p>
                <p class="mt-1 text-sm font-medium uppercase tracking-[0.28em] text-white/45">Meditación diaria</p>
              </div>
            </div>

            <div class="flex items-center gap-5 text-3xl text-amber-300/95">
              <span>☀️</span>
              <span class="text-white/70">↻</span>
            </div>
          </div>

          <div class="grid gap-0 lg:grid-cols-[1.15fr_0.95fr]">
            <div class="border-b border-white/10 px-7 py-8 lg:border-b-0 lg:border-r lg:border-white/10 lg:px-9 lg:py-10">
              <p class="text-sm font-bold uppercase tracking-[0.35em] text-indigo-400">✣ Palabra viva</p>
              <h3 class="mt-7 font-serif text-5xl font-black leading-tight text-white sm:text-6xl">
                Salmos 139:7-10
              </h3>

              <p class="mt-8 text-2xl leading-relaxed text-white/94">
                ¿A dónde me iré de tu Espíritu? ¿Y a dónde huiré de tu presencia? Si subiere a los cielos,
                allí estás tú; y si en el Seol hiciere mi cama, he aquí, allí tú estás. Si tomare las alas del alba,
                y habitare en el extremo del mar, aun allí me guiará tu mano, y me asirá tu diestra.
              </p>

              <div class="mt-10">
                <button
                  type="button"
                  class="inline-flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-4 text-lg font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_35px_rgba(79,70,229,0.45)] transition hover:scale-[1.02]"
                  @click="copiarVersiculo"
                >
                  <span>✝</span>
                  {{ copiado ? '¡Copiado!' : 'Presencia de Dios' }}
                </button>
              </div>
            </div>

            <div class="px-7 py-8 lg:px-8 lg:py-10">
              <div class="overflow-hidden rounded-[1.75rem] shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Cielo luminoso sobre las nubes"
                  class="h-[320px] w-full object-cover sm:h-[360px]"
                />
              </div>

              <div class="mt-8 text-center">
                <div class="text-3xl text-indigo-400">❝</div>
                <p class="mx-auto mt-4 max-w-md text-2xl leading-relaxed text-white/95">
                  Él nunca te deja, está contigo en todo lugar y en todo momento.
                </p>
                <div class="mx-auto mt-6 h-1 w-14 rounded-full bg-indigo-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.youtube-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 177.77777778vh;
  height: 100vh;
  min-width: 100vw;
  min-height: 56.25vw;
  transform: translate(-50%, -50%);
}
</style>
