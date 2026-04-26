<script setup>
import { ref } from 'vue'

const copiado = ref(false)
const mostrarRespuesta = ref(false)
const mostrarEstudio = ref(false)
const tareaActual = ref(0)
const versiculoActual = ref(0)
const mostrarVideo = ref(false)

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
        src="https://www.youtube.com/embed/xH9E6LbXCnA?start=6&end=38&autoplay=1&mute=1&loop=1&playlist=xH9E6LbXCnA&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
        title="Video background"
        frameborder="0"
        allow="autoplay; fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div class="absolute inset-0 bg-[#070806]/18"></div>
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
            <button type="button" class="rounded-full border border-[#d8b56d]/70 bg-[#d8b56d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#0b0c09] transition hover:bg-[#f0d38b]" @click="mostrarEstudio = true">
              Ver significado
            </button>
            <a href="#dashboard" class="rounded-full border border-[#f8f3e7]/25 bg-white/8 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f8f3e7] backdrop-blur transition hover:bg-white/14">
              Recursos
            </a>
          </div>
        </div>
      </section>
    </div>

    <div v-if="mostrarEstudio" class="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4" @click.self="mostrarEstudio = false">
      <div class="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#d8b56d]/30 p-7 shadow-2xl sm:p-10">
        <img
          src="/src/assets/file_00000000c1f071f5a4f4d28bc73d3922.png"
          alt="Bosque con luz del sol"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-[#070806]/70"></div>
        <div class="relative z-10">
          <button type="button" class="absolute right-0 top-0 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-black" @click="mostrarEstudio = false">
            Cerrar
          </button>
          <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]">Examen bíblico</p>
          <h2 class="mt-4 font-serif text-4xl leading-tight text-[#fff7e7] sm:text-5xl">Juan 14:6</h2>
          <p class="mt-5 text-xl leading-relaxed text-[#f8f3e7]/90">
            “Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.”
          </p>

          <div class="mt-8 grid gap-5 md:grid-cols-3">
            <div class="rounded-2xl border border-white/15 bg-[#111a11]/72 p-5 backdrop-blur-sm">
              <h3 class="font-serif text-2xl text-[#d8b56d]">Camino</h3>
              <p class="mt-3 text-[#f8f3e7]/88">Jesús no solo enseña una dirección: Él es el acceso al Padre.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-[#111a11]/72 p-5 backdrop-blur-sm">
              <h3 class="font-serif text-2xl text-[#d8b56d]">Verdad</h3>
              <p class="mt-3 text-[#f8f3e7]/88">En Jesús se revela con claridad quién es Dios y cuál es su voluntad.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-[#111a11]/72 p-5 backdrop-blur-sm">
              <h3 class="font-serif text-2xl text-[#d8b56d]">Vida</h3>
              <p class="mt-3 text-[#f8f3e7]/88">La vida eterna y espiritual se recibe por medio de Él.</p>
            </div>
          </div>

          <div class="mt-8 rounded-2xl border border-[#d8b56d]/35 bg-[#111a11]/76 p-6 backdrop-blur-sm">
            <h3 class="font-serif text-3xl text-[#fff7e7]">Concordancia con otros versículos</h3>
            <ul class="mt-5 space-y-4 text-lg leading-relaxed text-[#f8f3e7]/90">
              <li><strong>Hechos 4:12:</strong> no hay otro nombre dado a los hombres en que podamos ser salvos.</li>
              <li><strong>1 Timoteo 2:5:</strong> hay un solo mediador entre Dios y los hombres: Jesucristo hombre.</li>
              <li><strong>Hebreos 10:19-20:</strong> tenemos entrada al Lugar Santísimo por el camino nuevo y vivo abierto por Cristo.</li>
              <li><strong>Juan 10:9:</strong> Jesús dice: “Yo soy la puerta”; el que entra por Él será salvo.</li>
            </ul>
          </div>

          <div class="mt-8 rounded-2xl border border-white/15 bg-[#111a11]/76 p-6 backdrop-blur-sm">
            <h3 class="font-serif text-3xl text-[#fff7e7]">Conclusión</h3>
            <p class="mt-4 text-lg leading-relaxed text-[#f8f3e7]/90">
              Los estudiosos suelen leer este versículo como una declaración exclusiva de Jesús: Él es el único camino hacia el Padre, la revelación plena de la verdad de Dios y la fuente de la vida verdadera.
            </p>
          </div>
        </div>
      </div>
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
