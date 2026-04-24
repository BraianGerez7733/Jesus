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
  <main class="min-h-screen text-white font-sans relative overflow-hidden">
    <!-- Fondo full screen con video -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-sky-300">
      <iframe
        class="youtube-bg"
        src="https://www.youtube.com/embed/G52dUQLxPzg?autoplay=1&mute=1&loop=1&playlist=G52dUQLxPzg&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
        title="Forest drone background"
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

        <p class="mt-8 max-w-3xl text-xl leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)] sm:text-2xl">
          Aprende una verdad bíblica de forma simple, visual e interactiva. Cada respuesta te ayuda a recordar quién es Jesús y por qué podemos confiar en Él.
        </p>

        <div class="mt-10 w-full max-w-2xl rounded-[2rem] border border-white/20 bg-white/12 p-6 text-left shadow-[0_18px_55px_rgba(2,8,30,0.35)] backdrop-blur-md sm:p-8">
          <div class="flex items-center gap-3">
            <span class="text-3xl">✨</span>
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-amber-200">Flashcard bíblica</p>
          </div>

          <h2 class="mt-5 text-2xl font-extrabold leading-snug text-white sm:text-3xl">
            ¿Qué quiso decir Jesús cuando dijo: “Yo soy el camino”?
          </h2>

          <button
            type="button"
            class="mt-7 rounded-full bg-white px-7 py-3 text-base font-extrabold text-[#071847] shadow-[0_10px_28px_rgba(0,0,0,0.22)] transition hover:scale-[1.02]"
            @click="mostrarRespuesta = !mostrarRespuesta"
          >
            {{ mostrarRespuesta ? 'Ocultar respuesta' : 'Ver respuesta' }}
          </button>

          <div v-if="mostrarRespuesta" class="mt-6 rounded-3xl border border-amber-200/35 bg-[#071847]/75 p-5 text-lg leading-relaxed text-white/95">
            Jesús enseña que Él es quien nos acerca al Padre. No solo muestra una dirección: Él mismo es el camino seguro para conocer a Dios, recibir perdón y vivir con esperanza.
          </div>
        </div>

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

      <section class="mx-auto max-w-6xl pb-24">
        <div class="rounded-[2rem] border border-white/15 bg-[#04113a]/90 p-6 shadow-[0_20px_70px_rgba(2,8,30,0.55)] backdrop-blur-md sm:p-8 lg:p-10">
          <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="text-sm font-bold uppercase tracking-[0.35em] text-amber-200">Panel de recursos</p>
              <h2 class="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">Dashboard bíblico</h2>
              <p class="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
                Un espacio preparado para seguir agregando recursos, actividades, reflexiones y contenido visual para las tareas diarias de la página.
              </p>
            </div>

            <div class="grid grid-cols-3 gap-3 text-center sm:min-w-[320px]">
              <div class="rounded-3xl border border-white/10 bg-white/10 p-4">
                <p class="text-3xl font-black text-white">4</p>
                <p class="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/55">Recursos</p>
              </div>
              <div class="rounded-3xl border border-white/10 bg-white/10 p-4">
                <p class="text-3xl font-black text-white">4</p>
                <p class="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/55">Tareas</p>
              </div>
              <div class="rounded-3xl border border-white/10 bg-white/10 p-4">
                <p class="text-3xl font-black text-white">2</p>
                <p class="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/55">Carruseles</p>
              </div>
            </div>
          </div>

          <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="recurso in recursos"
              :key="recurso.titulo"
              class="rounded-[1.75rem] border border-white/12 bg-white/10 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:bg-white/15"
            >
              <div class="text-4xl">{{ recurso.icono }}</div>
              <h3 class="mt-5 text-2xl font-extrabold text-white">{{ recurso.titulo }}</h3>
              <p class="mt-3 text-base leading-relaxed text-white/75">{{ recurso.descripcion }}</p>
            </article>
          </div>

          <div class="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p class="text-sm font-bold uppercase tracking-[0.35em] text-indigo-300">Carrusel visual</p>
              <h3 class="mt-4 text-3xl font-black text-white sm:text-4xl">Tareas diarias</h3>
              <p class="mt-5 text-lg leading-relaxed text-white/78">
                Tarjetas visuales pensadas para acompañar el devocional diario: lectura, reflexión, oración y aprendizaje familiar.
              </p>

              <div class="mt-7 flex gap-3">
                <button
                  type="button"
                  class="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/20"
                  @click="tareaAnterior"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  class="rounded-full bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#071847] transition hover:scale-[1.02]"
                  @click="siguienteTarea"
                >
                  Siguiente
                </button>
              </div>
            </div>

            <div class="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
              <div class="daily-card min-h-[360px] rounded-[1.6rem] p-8 text-center">
                <p class="text-sm font-black uppercase tracking-[0.3em] text-white/70">{{ tareasDiarias[tareaActual].etiqueta }}</p>
                <div class="mt-10 text-8xl drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                  {{ tareasDiarias[tareaActual].imagen }}
                </div>
                <h4 class="mt-8 text-4xl font-black text-white">{{ tareasDiarias[tareaActual].titulo }}</h4>
                <p class="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-white/90">
                  {{ tareasDiarias[tareaActual].texto }}
                </p>
              </div>

              <div class="mt-5 flex justify-center gap-2">
                <button
                  v-for="(_, index) in tareasDiarias"
                  :key="index"
                  type="button"
                  class="h-3 rounded-full transition-all"
                  :class="index === tareaActual ? 'w-10 bg-white' : 'w-3 bg-white/35'"
                  @click="tareaActual = index"
                  :aria-label="`Ver tarea ${index + 1}`"
                ></button>
              </div>
            </div>
          </div>

          <div class="mt-14 rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] sm:p-7 lg:p-8">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p class="text-sm font-bold uppercase tracking-[0.35em] text-amber-200">Carrusel bíblico</p>
                <h3 class="mt-4 text-3xl font-black text-white sm:text-4xl">Versículos para meditar</h3>
                <p class="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
                  Cinco pasajes breves para leer, recordar y usar como base de oración durante el día.
                </p>
              </div>

              <div class="flex gap-3">
                <button
                  type="button"
                  class="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/20"
                  @click="versiculoAnterior"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  class="rounded-full bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#071847] transition hover:scale-[1.02]"
                  @click="siguienteVersiculo"
                >
                  Siguiente
                </button>
              </div>
            </div>

            <div class="mt-8 overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#071847]/80 p-7 text-center shadow-[0_14px_45px_rgba(0,0,0,0.3)] sm:p-10">
              <div class="text-7xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
                {{ versiculos[versiculoActual].icono }}
              </div>
              <p class="mt-6 text-sm font-black uppercase tracking-[0.35em] text-indigo-200">
                {{ versiculos[versiculoActual].tema }}
              </p>
              <blockquote class="mx-auto mt-7 max-w-4xl font-serif text-3xl font-black leading-tight text-white sm:text-5xl">
                “{{ versiculos[versiculoActual].texto }}”
              </blockquote>
              <p class="mt-7 text-2xl font-extrabold text-amber-200">
                {{ versiculos[versiculoActual].referencia }} · RVR1960
              </p>
            </div>

            <div class="mt-6 flex justify-center gap-2">
              <button
                v-for="(_, index) in versiculos"
                :key="index"
                type="button"
                class="h-3 rounded-full transition-all"
                :class="index === versiculoActual ? 'w-10 bg-amber-200' : 'w-3 bg-white/35'"
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

.daily-card {
  background:
    radial-gradient(circle at top left, rgba(251, 191, 36, 0.38), transparent 34%),
    radial-gradient(circle at bottom right, rgba(99, 102, 241, 0.45), transparent 36%),
    linear-gradient(135deg, rgba(4, 17, 58, 0.95), rgba(7, 24, 71, 0.82));
}
</style>
