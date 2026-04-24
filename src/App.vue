<script setup>
import { ref } from 'vue'

const copiado = ref(false)
const mostrarRespuesta = ref(false)
const tareaActual = ref(0)
const versiculoActual = ref(0)

const recursos = [
  {
    icono: '📖',
    titulo: 'Versículo diario',
    descripcion: 'Una palabra bíblica para leer, meditar y guardar durante el día.',
  },
  {
    icono: '🙏',
    titulo: 'Oración breve',
    descripcion: 'Una oración sencilla para comenzar el día poniendo la mirada en Dios.',
  },
  {
    icono: '✨',
    titulo: 'Flashcards bíblicas',
    descripcion: 'Preguntas y respuestas para aprender de Jesús de forma interactiva.',
  },
  {
    icono: '🌿',
    titulo: 'Reflexión familiar',
    descripcion: 'Un pensamiento corto para conversar en casa y fortalecer la fe.',
  },
]

const tareasDiarias = [
  {
    etiqueta: 'Tarea diaria 1',
    titulo: 'Antiguo Testamento',
    texto: 'Leer un versículo, pensar qué enseña sobre Dios y escribir una idea simple.',
    imagen: '🌄',
  },
  {
    etiqueta: 'Tarea diaria 2',
    titulo: 'Nuevo Testamento',
    texto: 'Mirar a Jesús en el Evangelio y reconocer una enseñanza para aplicar hoy.',
    imagen: '✝️',
  },
  {
    etiqueta: 'Tarea diaria 3',
    titulo: 'Oración del día',
    texto: 'Hablar con Dios con gratitud, pedir dirección y cerrar con una decisión concreta.',
    imagen: '🕊️',
  },
  {
    etiqueta: 'Tarea diaria 4',
    titulo: 'Aprender en familia',
    texto: 'Compartir una frase bíblica clara, amable y fácil de recordar.',
    imagen: '👨‍👩‍👧‍👦',
  },
]

const versiculos = [
  {
    referencia: 'Juan 14:6',
    texto: 'Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.',
    tema: 'Jesús es el camino',
    icono: '✝️',
  },
  {
    referencia: 'Salmos 23:1',
    texto: 'Jehová es mi pastor; nada me faltará.',
    tema: 'Dios cuida de nosotros',
    icono: '🌿',
  },
  {
    referencia: 'Filipenses 4:13',
    texto: 'Todo lo puedo en Cristo que me fortalece.',
    tema: 'Fortaleza en Cristo',
    icono: '🕊️',
  },
  {
    referencia: 'Romanos 8:31',
    texto: 'Si Dios es por nosotros, ¿quién contra nosotros?',
    tema: 'Confianza y seguridad',
    icono: '🛡️',
  },
  {
    referencia: 'Jeremías 29:11',
    texto: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.',
    tema: 'Esperanza en Dios',
    icono: '✨',
  },
]

function siguienteTarea() {
  tareaActual.value = (tareaActual.value + 1) % tareasDiarias.length
}

function tareaAnterior() {
  tareaActual.value = tareaActual.value === 0 ? tareasDiarias.length - 1 : tareaActual.value - 1
}

function siguienteVersiculo() {
  versiculoActual.value = (versiculoActual.value + 1) % versiculos.length
}

function versiculoAnterior() {
  versiculoActual.value = versiculoActual.value === 0 ? versiculos.length - 1 : versiculoActual.value - 1
}

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
  <main class="min-h-screen text-black font-sans relative overflow-hidden bg-[#f3f0df] brutal-page">
    <!-- Fondo full screen con video -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      <iframe
        class="youtube-bg opacity-50 saturate-[1.35] contrast-[1.25]"
        src="https://www.youtube.com/embed/G52dUQLxPzg?autoplay=1&mute=1&loop=1&playlist=G52dUQLxPzg&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
        title="Forest drone background"
        frameborder="0"
        allow="autoplay; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div class="absolute inset-0 brutal-grid"></div>
      <div class="absolute inset-0 bg-[#f3f0df]/58 mix-blend-screen"></div>
    </div>

    <div class="relative z-10 min-h-screen px-4 sm:px-6 lg:px-10">
      <section class="mx-auto flex max-w-7xl flex-col items-start pt-20 text-left sm:pt-24">
        <div class="inline-flex border-[5px] border-black bg-[#ffea00] px-5 py-3 text-xl font-black uppercase tracking-[0.24em] shadow-[10px_10px_0_#000] rotate-[-1deg]">
          Biblia · Fe · Verdad
        </div>

        <h1 class="mt-10 max-w-7xl text-[4.5rem] font-black uppercase leading-[0.78] tracking-[-0.08em] text-black sm:text-[7rem] lg:text-[11rem] xl:text-[13rem]">
          Jesús<br />es el<br />camino
        </h1>

        <p class="mt-10 max-w-5xl border-[5px] border-black bg-white px-6 py-5 text-2xl font-black uppercase leading-tight shadow-[12px_12px_0_#000] sm:text-4xl">
          Aprende una verdad bíblica de forma simple, visual e interactiva. Cada respuesta te ayuda a recordar quién es Jesús y por qué podemos confiar en Él.
        </p>

        <div class="mt-12 grid w-full max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="border-[6px] border-black bg-[#ff4d00] p-6 shadow-[14px_14px_0_#000] rotate-[0.6deg] sm:p-8">
            <div class="flex items-center justify-between gap-4 border-b-[5px] border-black pb-5">
              <p class="text-2xl font-black uppercase tracking-[-0.03em] sm:text-4xl">Flashcard bíblica</p>
              <span class="text-5xl">✨</span>
            </div>

            <h2 class="mt-8 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-black sm:text-6xl">
              ¿Qué quiso decir Jesús cuando dijo: “Yo soy el camino”?
            </h2>

            <button
              type="button"
              class="mt-8 border-[5px] border-black bg-white px-7 py-4 text-xl font-black uppercase text-black shadow-[8px_8px_0_#000] transition hover:-translate-y-1 hover:shadow-[12px_12px_0_#000] active:translate-y-1 active:shadow-[4px_4px_0_#000]"
              @click="mostrarRespuesta = !mostrarRespuesta"
            >
              {{ mostrarRespuesta ? 'Ocultar respuesta' : 'Ver respuesta' }}
            </button>

            <div v-if="mostrarRespuesta" class="mt-8 border-[5px] border-black bg-[#f3f0df] p-6 text-2xl font-black leading-tight text-black shadow-[8px_8px_0_#000]">
              Jesús enseña que Él es quien nos acerca al Padre. No solo muestra una dirección: Él mismo es el camino seguro para conocer a Dios, recibir perdón y vivir con esperanza.
            </div>
          </div>

          <div id="significado" class="border-[6px] border-black bg-[#00d084] p-6 shadow-[14px_14px_0_#000] rotate-[-0.5deg] sm:p-8">
            <p class="text-xl font-black uppercase tracking-[0.25em]">¿Qué significa?</p>
            <h2 class="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl">Una sola puerta.</h2>
            <p class="mt-8 text-2xl font-black leading-tight text-black sm:text-3xl">
              Jesús dijo: “Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.” Con estas palabras nos muestra que Él es la única manera de tener una relación verdadera con Dios.
            </p>
            <a
              href="#dashboard"
              class="mt-8 inline-block border-[5px] border-black bg-black px-7 py-4 text-xl font-black uppercase text-white shadow-[8px_8px_0_#ffea00] transition hover:-translate-y-1"
            >
              Ver recursos
            </a>
          </div>
        </div>
      </section>

      <section class="mx-auto mt-24 max-w-7xl pb-20 sm:mt-28 lg:mt-32">
        <div class="border-[7px] border-black bg-[#111] text-white shadow-[16px_16px_0_#000]">
          <div class="flex flex-col gap-5 border-b-[7px] border-black bg-[#ffea00] px-6 py-5 text-black sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div class="flex items-center gap-4">
              <div class="flex h-20 w-20 items-center justify-center border-[5px] border-black bg-white text-5xl shadow-[7px_7px_0_#000]">📖</div>
              <div>
                <p class="text-4xl font-black uppercase tracking-[-0.06em] sm:text-6xl">Biblia RVR1960</p>
                <p class="mt-1 text-lg font-black uppercase tracking-[0.28em]">Meditación diaria</p>
              </div>
            </div>
            <div class="text-5xl font-black">☀️ ↻</div>
          </div>

          <div class="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="border-b-[7px] border-black bg-[#f3f0df] px-7 py-8 text-black lg:border-b-0 lg:border-r-[7px] lg:px-9 lg:py-10">
              <p class="inline-block border-[4px] border-black bg-[#ff4d00] px-4 py-2 text-lg font-black uppercase tracking-[0.25em]">✣ Palabra viva</p>
              <h3 class="mt-8 text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em] sm:text-8xl">
                Salmos<br />139:7-10
              </h3>

              <p class="mt-8 text-3xl font-black leading-tight text-black">
                ¿A dónde me iré de tu Espíritu? ¿Y a dónde huiré de tu presencia? Si subiere a los cielos, allí estás tú; y si en el Seol hiciere mi cama, he aquí, allí tú estás. Si tomare las alas del alba, y habitare en el extremo del mar, aun allí me guiará tu mano, y me asirá tu diestra.
              </p>

              <button
                type="button"
                class="mt-10 border-[5px] border-black bg-black px-8 py-4 text-xl font-black uppercase tracking-[0.12em] text-white shadow-[8px_8px_0_#ffea00] transition hover:-translate-y-1 active:translate-y-1"
                @click="copiarVersiculo"
              >
                ✝ {{ copiado ? '¡Copiado!' : 'Presencia de Dios' }}
              </button>
            </div>

            <div class="bg-[#00d084] px-7 py-8 text-black lg:px-8 lg:py-10">
              <div class="overflow-hidden border-[6px] border-black shadow-[10px_10px_0_#000]">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Cielo luminoso sobre las nubes"
                  class="h-[320px] w-full object-cover grayscale contrast-125 sm:h-[390px]"
                />
              </div>

              <div class="mt-8 border-[5px] border-black bg-white p-6 text-center shadow-[8px_8px_0_#000]">
                <div class="text-6xl">❝</div>
                <p class="mx-auto mt-4 max-w-md text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em]">
                  Él nunca te deja.
                </p>
                <p class="mt-5 text-2xl font-black leading-tight">Está contigo en todo lugar y en todo momento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" class="mx-auto max-w-7xl pb-24">
        <div class="border-[7px] border-black bg-[#f3f0df] p-5 text-black shadow-[16px_16px_0_#000] sm:p-8 lg:p-10">
          <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="inline-block border-[4px] border-black bg-[#ffea00] px-4 py-2 text-lg font-black uppercase tracking-[0.25em]">Panel de recursos</p>
              <h2 class="mt-6 text-6xl font-black uppercase leading-[0.85] tracking-[-0.08em] sm:text-8xl lg:text-9xl">Dashboard bíblico</h2>
              <p class="mt-6 max-w-4xl text-2xl font-black leading-tight">
                Un espacio preparado para seguir agregando recursos, actividades, reflexiones y contenido visual para las tareas diarias de la página.
              </p>
            </div>

            <div class="grid grid-cols-3 gap-3 text-center sm:min-w-[360px]">
              <div class="border-[5px] border-black bg-[#ff4d00] p-4 shadow-[7px_7px_0_#000]">
                <p class="text-5xl font-black">4</p>
                <p class="mt-1 text-sm font-black uppercase tracking-[0.16em]">Recursos</p>
              </div>
              <div class="border-[5px] border-black bg-[#00d084] p-4 shadow-[7px_7px_0_#000]">
                <p class="text-5xl font-black">4</p>
                <p class="mt-1 text-sm font-black uppercase tracking-[0.16em]">Tareas</p>
              </div>
              <div class="border-[5px] border-black bg-[#ffea00] p-4 shadow-[7px_7px_0_#000]">
                <p class="text-5xl font-black">2</p>
                <p class="mt-1 text-sm font-black uppercase tracking-[0.16em]">Carruseles</p>
              </div>
            </div>
          </div>

          <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="recurso in recursos"
              :key="recurso.titulo"
              class="border-[5px] border-black bg-white p-6 shadow-[9px_9px_0_#000] transition hover:-translate-y-1 hover:shadow-[13px_13px_0_#000]"
            >
              <div class="text-6xl">{{ recurso.icono }}</div>
              <h3 class="mt-5 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em]">{{ recurso.titulo }}</h3>
              <p class="mt-4 text-xl font-black leading-tight">{{ recurso.descripcion }}</p>
            </article>
          </div>

          <div class="mt-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div class="border-[5px] border-black bg-black p-6 text-white shadow-[9px_9px_0_#000]">
              <p class="text-lg font-black uppercase tracking-[0.3em] text-[#ffea00]">Carrusel visual</p>
              <h3 class="mt-4 text-5xl font-black uppercase leading-[0.86] tracking-[-0.07em] sm:text-7xl">Tareas diarias</h3>
              <p class="mt-5 text-2xl font-black leading-tight">
                Tarjetas visuales pensadas para acompañar el devocional diario: lectura, reflexión, oración y aprendizaje familiar.
              </p>

              <div class="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  class="border-[4px] border-white bg-black px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[6px_6px_0_#ffea00] transition hover:-translate-y-1"
                  @click="tareaAnterior"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  class="border-[4px] border-black bg-[#ffea00] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-black shadow-[6px_6px_0_#fff] transition hover:-translate-y-1"
                  @click="siguienteTarea"
                >
                  Siguiente
                </button>
              </div>
            </div>

            <div class="border-[6px] border-black bg-[#ff4d00] p-5 shadow-[12px_12px_0_#000]">
              <div class="daily-card brutal-card min-h-[390px] border-[5px] border-black p-8 text-center text-black">
                <p class="text-lg font-black uppercase tracking-[0.28em]">{{ tareasDiarias[tareaActual].etiqueta }}</p>
                <div class="mt-8 text-9xl">
                  {{ tareasDiarias[tareaActual].imagen }}
                </div>
                <h4 class="mt-8 text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em]">{{ tareasDiarias[tareaActual].titulo }}</h4>
                <p class="mx-auto mt-6 max-w-2xl text-2xl font-black leading-tight">
                  {{ tareasDiarias[tareaActual].texto }}
                </p>
              </div>

              <div class="mt-6 flex justify-center gap-3">
                <button
                  v-for="(_, index) in tareasDiarias"
                  :key="index"
                  type="button"
                  class="h-5 border-[3px] border-black transition-all"
                  :class="index === tareaActual ? 'w-16 bg-black' : 'w-5 bg-white'"
                  @click="tareaActual = index"
                  :aria-label="`Ver tarea ${index + 1}`"
                ></button>
              </div>
            </div>
          </div>

          <div class="mt-16 border-[6px] border-black bg-[#00d084] p-5 shadow-[12px_12px_0_#000] sm:p-8">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p class="inline-block border-[4px] border-black bg-[#ffea00] px-4 py-2 text-lg font-black uppercase tracking-[0.25em]">Carrusel bíblico</p>
                <h3 class="mt-5 text-5xl font-black uppercase leading-[0.86] tracking-[-0.07em] sm:text-8xl">Versículos para meditar</h3>
                <p class="mt-5 max-w-3xl text-2xl font-black leading-tight">
                  Cinco pasajes breves para leer, recordar y usar como base de oración durante el día.
                </p>
              </div>

              <div class="flex flex-wrap gap-3">
                <button
                  type="button"
                  class="border-[4px] border-black bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-black shadow-[6px_6px_0_#000] transition hover:-translate-y-1"
                  @click="versiculoAnterior"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  class="border-[4px] border-black bg-black px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[6px_6px_0_#ffea00] transition hover:-translate-y-1"
                  @click="siguienteVersiculo"
                >
                  Siguiente
                </button>
              </div>
            </div>

            <div class="mt-9 border-[6px] border-black bg-white p-7 text-center shadow-[10px_10px_0_#000] sm:p-10">
              <div class="text-8xl">
                {{ versiculos[versiculoActual].icono }}
              </div>
              <p class="mt-7 text-xl font-black uppercase tracking-[0.28em] text-[#ff4d00]">
                {{ versiculos[versiculoActual].tema }}
              </p>
              <blockquote class="mx-auto mt-7 max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-black sm:text-7xl">
                “{{ versiculos[versiculoActual].texto }}”
              </blockquote>
              <p class="mt-8 inline-block border-[4px] border-black bg-[#ffea00] px-5 py-3 text-2xl font-black uppercase text-black shadow-[6px_6px_0_#000]">
                {{ versiculos[versiculoActual].referencia }} · RVR1960
              </p>
            </div>

            <div class="mt-7 flex justify-center gap-3">
              <button
                v-for="(_, index) in versiculos"
                :key="index"
                type="button"
                class="h-5 border-[3px] border-black transition-all"
                :class="index === versiculoActual ? 'w-16 bg-black' : 'w-5 bg-white'"
                @click="versiculoActual = index"
                :aria-label="`Ver versículo ${index + 1}`"
              ></button>
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

.brutal-page {
  text-rendering: geometricPrecision;
}

.brutal-grid {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.18) 2px, transparent 2px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.18) 2px, transparent 2px);
  background-size: 46px 46px;
}

.daily-card {
  background:
    radial-gradient(circle at top left, rgba(255, 234, 0, 0.95), transparent 36%),
    radial-gradient(circle at bottom right, rgba(0, 208, 132, 0.9), transparent 38%),
    linear-gradient(135deg, #f3f0df, #ffffff);
}

.brutal-card {
  box-shadow: inset 0 0 0 8px rgba(0, 0, 0, 0.08);
}
</style>
