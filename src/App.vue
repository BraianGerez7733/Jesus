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
  <main class="relative min-h-screen overflow-hidden bg-[#070806] text-[#f8f3e7] font-sans">
    <div class="fixed inset-0 z-0 overflow-hidden bg-[#070806] pointer-events-none">
      <iframe
        class="youtube-bg opacity-90 saturate-[1.05] contrast-[1.02] brightness-[1]"
        src="https://www.youtube.com/embed/xH9E6LbXCnA?autoplay=1&mute=1&loop=1&playlist=xH9E6LbXCnA&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0"
        title="Video background"
        frameborder="0"
        allow="autoplay; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

    <div class="relative z-10 min-h-screen px-5 sm:px-8 lg:px-12">
      <header class="mx-auto flex max-w-7xl items-center justify-between py-8 text-xs uppercase tracking-[0.32em] text-[#d8b56d]/85">
        <span>Jesús es el camino</span>
        <span class="hidden sm:inline">Biblia · Oración · Meditación</span>
      </header>

      <section class="mx-auto grid max-w-7xl items-center gap-12 pt-12 pb-24 lg:min-h-[82vh] lg:grid-cols-[1.08fr_0.92fr] lg:pt-8">
        <div>
          <p class="mb-8 text-sm uppercase tracking-[0.42em] text-[#d8b56d]">Devocional interactivo</p>
          <h1 class="font-serif text-6xl leading-[0.92] tracking-[-0.045em] text-[#fff7e7] sm:text-8xl lg:text-[8.5rem]">
            Jesús es<br />el camino
          </h1>
          <p class="mt-8 max-w-2xl text-xl leading-relaxed text-[#f8f3e7]/78 sm:text-2xl">
            Aprende una verdad bíblica de forma simple, visual e interactiva. Cada respuesta te ayuda a recordar quién es Jesús y por qué podemos confiar en Él.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <a href="#significado" class="rounded-full border border-[#d8b56d]/70 bg-[#d8b56d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#0b0c09] transition hover:bg-[#f0d38b]">
              Ver significado
            </a>
            <a href="#dashboard" class="rounded-full border border-[#f8f3e7]/25 bg-white/8 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f8f3e7] backdrop-blur transition hover:bg-white/14">
              Explorar recursos
            </a>
          </div>
        </div>

        <div class="rounded-[2rem] border border-white/15 bg-[#0d120d]/72 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8">
          <div class="overflow-hidden rounded-[1.5rem] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
              alt="Bosque con luz dorada"
              class="h-[280px] w-full object-cover sm:h-[360px]"
            />
          </div>
          <div class="mt-7 flex items-start justify-between gap-6">
            <div>
              <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]">Flashcard bíblica</p>
              <h2 class="mt-3 max-w-xl font-serif text-3xl leading-tight text-[#fff7e7] sm:text-4xl">
                ¿Qué quiso decir Jesús cuando dijo: “Yo soy el camino”?
              </h2>
            </div>
            <span class="text-4xl">✨</span>
          </div>

          <button
            type="button"
            class="mt-7 rounded-full bg-[#f8f3e7] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#10110d] transition hover:bg-[#d8b56d]"
            @click="mostrarRespuesta = !mostrarRespuesta"
          >
            {{ mostrarRespuesta ? 'Ocultar respuesta' : 'Ver respuesta' }}
          </button>

          <div v-if="mostrarRespuesta" class="mt-6 rounded-3xl border border-[#d8b56d]/25 bg-[#f8f3e7]/9 p-5 text-lg leading-relaxed text-[#f8f3e7]/86">
            Jesús enseña que Él es quien nos acerca al Padre. No solo muestra una dirección: Él mismo es el camino seguro para conocer a Dios, recibir perdón y vivir con esperanza.
          </div>
        </div>
      </section>

      <section id="significado" class="mx-auto max-w-7xl pb-24">
        <div class="grid overflow-hidden rounded-[2.25rem] border border-white/12 bg-[#0d120d]/76 shadow-[0_28px_90px_rgba(0,0,0,0.48)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]">
          <div class="relative min-h-[360px]">
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80"
              alt="Camino dentro de un bosque"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#070806]/70 to-transparent"></div>
          </div>
          <div class="p-8 sm:p-12 lg:p-16">
            <p class="text-sm uppercase tracking-[0.42em] text-[#d8b56d]">¿Qué significa?</p>
            <h2 class="mt-5 font-serif text-5xl leading-tight text-[#fff7e7] sm:text-6xl">Una vida orientada hacia Dios.</h2>
            <p class="mt-7 text-xl leading-relaxed text-[#f8f3e7]/78 sm:text-2xl">
              Jesús dijo: “Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.” Con estas palabras nos muestra que Él es la única manera de tener una relación verdadera con Dios.
            </p>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl pb-24">
        <div class="rounded-[2.25rem] border border-white/12 bg-[#0d120d]/78 shadow-[0_28px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div class="flex flex-col gap-6 border-b border-white/10 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.42em] text-[#d8b56d]">Biblia RVR1960</p>
              <h2 class="mt-3 font-serif text-4xl text-[#fff7e7] sm:text-5xl">Meditación diaria</h2>
            </div>
            <button
              type="button"
              class="w-fit rounded-full border border-[#d8b56d]/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8b56d] transition hover:bg-[#d8b56d] hover:text-[#10110d]"
              @click="copiarVersiculo"
            >
              {{ copiado ? '¡Copiado!' : 'Copiar versículo' }}
            </button>
          </div>

          <div class="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div class="p-8 sm:p-10 lg:p-14">
              <p class="text-sm uppercase tracking-[0.36em] text-[#d8b56d]">Palabra viva</p>
              <h3 class="mt-5 font-serif text-5xl leading-tight text-[#fff7e7] sm:text-7xl">Salmos 139:7-10</h3>
              <p class="mt-8 text-xl leading-relaxed text-[#f8f3e7]/82 sm:text-2xl">
                ¿A dónde me iré de tu Espíritu? ¿Y a dónde huiré de tu presencia? Si subiere a los cielos, allí estás tú; y si en el Seol hiciere mi cama, he aquí, allí tú estás. Si tomare las alas del alba, y habitare en el extremo del mar, aun allí me guiará tu mano, y me asirá tu diestra.
              </p>
            </div>
            <div class="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0">
              <div class="overflow-hidden rounded-[1.5rem] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Cielo luminoso sobre las nubes"
                  class="h-[330px] w-full object-cover"
                />
              </div>
              <p class="mt-7 font-serif text-3xl leading-tight text-[#fff7e7]">Él nunca te deja.</p>
              <p class="mt-3 text-lg leading-relaxed text-[#f8f3e7]/72">Está contigo en todo lugar y en todo momento.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" class="mx-auto max-w-7xl pb-28">
        <div class="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.42em] text-[#d8b56d]">Panel de recursos</p>
            <h2 class="mt-4 font-serif text-5xl leading-tight text-[#fff7e7] sm:text-7xl">Dashboard bíblico</h2>
          </div>
          <p class="max-w-xl text-lg leading-relaxed text-[#f8f3e7]/70">
            Un espacio preparado para seguir agregando recursos, actividades, reflexiones y contenido visual para las tareas diarias de la página.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="recurso in recursos"
            :key="recurso.titulo"
            class="rounded-[1.75rem] border border-white/12 bg-[#0d120d]/78 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#d8b56d]/40"
          >
            <div class="text-4xl">{{ recurso.icono }}</div>
            <h3 class="mt-6 font-serif text-3xl leading-tight text-[#fff7e7]">{{ recurso.titulo }}</h3>
            <p class="mt-4 text-base leading-relaxed text-[#f8f3e7]/68">{{ recurso.descripcion }}</p>
          </article>
        </div>

        <div class="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div class="rounded-[2rem] border border-white/12 bg-[#0d120d]/78 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <p class="text-sm uppercase tracking-[0.42em] text-[#d8b56d]">Carrusel visual</p>
            <h3 class="mt-4 font-serif text-5xl leading-tight text-[#fff7e7]">Tareas diarias</h3>
            <p class="mt-5 text-lg leading-relaxed text-[#f8f3e7]/70">
              Tarjetas visuales pensadas para acompañar el devocional diario: lectura, reflexión, oración y aprendizaje familiar.
            </p>
            <div class="mt-8 flex gap-3">
              <button type="button" class="rounded-full border border-white/18 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f8f3e7] transition hover:bg-white/10" @click="tareaAnterior">Anterior</button>
              <button type="button" class="rounded-full bg-[#d8b56d] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#10110d] transition hover:bg-[#f0d38b]" @click="siguienteTarea">Siguiente</button>
            </div>
          </div>

          <div class="rounded-[2rem] border border-white/12 bg-[#11160f]/82 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl">
            <div class="daily-card min-h-[360px] rounded-[1.5rem] p-8 text-center">
              <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]">{{ tareasDiarias[tareaActual].etiqueta }}</p>
              <div class="mt-8 text-7xl">{{ tareasDiarias[tareaActual].imagen }}</div>
              <h4 class="mt-7 font-serif text-5xl leading-tight text-[#fff7e7]">{{ tareasDiarias[tareaActual].titulo }}</h4>
              <p class="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-[#f8f3e7]/78">{{ tareasDiarias[tareaActual].texto }}</p>
            </div>
            <div class="mt-5 flex justify-center gap-2">
              <button
                v-for="(_, index) in tareasDiarias"
                :key="index"
                type="button"
                class="h-2 rounded-full transition-all"
                :class="index === tareaActual ? 'w-10 bg-[#d8b56d]' : 'w-2 bg-white/30'"
                @click="tareaActual = index"
                :aria-label="`Ver tarea ${index + 1}`"
              ></button>
            </div>
          </div>
        </div>

        <div class="mt-16 rounded-[2.25rem] border border-white/12 bg-[#0d120d]/78 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-10">
          <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.42em] text-[#d8b56d]">Carrusel bíblico</p>
              <h3 class="mt-4 font-serif text-5xl leading-tight text-[#fff7e7] sm:text-6xl">Versículos para meditar</h3>
              <p class="mt-4 max-w-2xl text-lg leading-relaxed text-[#f8f3e7]/70">
                Cinco pasajes breves para leer, recordar y usar como base de oración durante el día.
              </p>
            </div>
            <div class="flex gap-3">
              <button type="button" class="rounded-full border border-white/18 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f8f3e7] transition hover:bg-white/10" @click="versiculoAnterior">Anterior</button>
              <button type="button" class="rounded-full bg-[#d8b56d] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#10110d] transition hover:bg-[#f0d38b]" @click="siguienteVersiculo">Siguiente</button>
            </div>
          </div>

          <div class="mt-10 rounded-[1.75rem] border border-[#d8b56d]/18 bg-[#f8f3e7]/6 p-8 text-center sm:p-12">
            <div class="text-6xl">{{ versiculos[versiculoActual].icono }}</div>
            <p class="mt-6 text-xs uppercase tracking-[0.36em] text-[#d8b56d]">{{ versiculos[versiculoActual].tema }}</p>
            <blockquote class="mx-auto mt-7 max-w-5xl font-serif text-4xl leading-tight text-[#fff7e7] sm:text-6xl">
              “{{ versiculos[versiculoActual].texto }}”
            </blockquote>
            <p class="mt-7 text-xl font-semibold text-[#d8b56d]">{{ versiculos[versiculoActual].referencia }} · RVR1960</p>
          </div>

          <div class="mt-6 flex justify-center gap-2">
            <button
              v-for="(_, index) in versiculos"
              :key="index"
              type="button"
              class="h-2 rounded-full transition-all"
              :class="index === versiculoActual ? 'w-10 bg-[#d8b56d]' : 'w-2 bg-white/30'"
              @click="versiculoActual = index"
              :aria-label="`Ver versículo ${index + 1}`"
            ></button>
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
    radial-gradient(circle at top left, rgba(216, 181, 109, 0.16), transparent 34%),
    linear-gradient(135deg, rgba(248, 243, 231, 0.08), rgba(216, 181, 109, 0.06));
}
</style>
