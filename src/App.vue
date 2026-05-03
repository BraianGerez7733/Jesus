<script setup>
import { computed, ref } from 'vue'
import DailyMeditation from './components/DailyMeditation.vue'

const copiado = ref(false)
const mostrarEstudio = ref(false)
const tareaActual = ref(0)
const versiculoActual = ref(0)

const recursos = [
  {
    icono: '01',
    titulo: 'Versiculo diario',
    descripcion: 'Una lectura breve para arrancar el dia con enfoque y memoria biblica.',
  },
  {
    icono: '02',
    titulo: 'Oracion guiada',
    descripcion: 'Una oracion corta para agradecer, pedir direccion y responder con fe.',
  },
  {
    icono: '03',
    titulo: 'Rutina familiar',
    descripcion: 'Ideas simples para conversar en casa sobre una verdad concreta del Evangelio.',
  },
  {
    icono: '04',
    titulo: 'Repaso visual',
    descripcion: 'Tarjetas interactivas para volver al texto y fijarlo con calma.',
  },
]

const tareasDiarias = [
  {
    etiqueta: 'Bloque 1',
    titulo: 'Mirar el texto',
    texto: 'Lee el pasaje dos veces y marca una frase que muestre quien es Dios.',
    imagen: 'Lectura',
  },
  {
    etiqueta: 'Bloque 2',
    titulo: 'Entender a Jesus',
    texto: 'Anota que revela el pasaje sobre la obra, el caracter o la promesa de Jesus.',
    imagen: 'Enfoque',
  },
  {
    etiqueta: 'Bloque 3',
    titulo: 'Responder en oracion',
    texto: 'Transforma la lectura en una oracion concreta con gratitud, pedido y obediencia.',
    imagen: 'Oracion',
  },
  {
    etiqueta: 'Bloque 4',
    titulo: 'Compartir en familia',
    texto: 'Resume la idea principal en una frase facil de recordar y comentalo con alguien.',
    imagen: 'Familia',
  },
]

const versiculos = [
  {
    referencia: 'Juan 14:6',
    texto: 'Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mi.',
    tema: 'Jesus es el camino',
    icono: 'Camino',
  },
  {
    referencia: 'Salmos 23:1',
    texto: 'Jehova es mi pastor; nada me faltara.',
    tema: 'Dios cuida de nosotros',
    icono: 'Cuidado',
  },
  {
    referencia: 'Filipenses 4:13',
    texto: 'Todo lo puedo en Cristo que me fortalece.',
    tema: 'Fortaleza en Cristo',
    icono: 'Fuerza',
  },
  {
    referencia: 'Romanos 8:31',
    texto: 'Si Dios es por nosotros, quien contra nosotros?',
    tema: 'Confianza y seguridad',
    icono: 'Confianza',
  },
  {
    referencia: 'Jeremias 29:11',
    texto: 'Porque yo se los pensamientos que tengo acerca de vosotros, dice Jehova, pensamientos de paz, y no de mal.',
    tema: 'Esperanza en Dios',
    icono: 'Esperanza',
  },
]

const pasos = [
  {
    semana: 'Paso A',
    titulo: 'Leer',
    texto: 'Empieza con un pasaje corto y evita correr. La meta es entender, no acumular paginas.',
  },
  {
    semana: 'Paso B',
    titulo: 'Pensar',
    texto: 'Haz una pregunta al texto: que me muestra de Dios, del pecado o de la esperanza?',
  },
  {
    semana: 'Paso C',
    titulo: 'Aplicar',
    texto: 'Cierra cada momento con una accion puntual para hoy.',
  },
]

const versiculoVisible = computed(() => versiculos[versiculoActual.value])
const tareaVisible = computed(() => tareasDiarias[tareaActual.value])

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
  const texto = `"${versiculoVisible.value.texto}" - ${versiculoVisible.value.referencia} (RVR1960)`
  try {
    await navigator.clipboard.writeText(texto)
    copiado.value = true
    setTimeout(() => {
      copiado.value = false
    }, 2000)
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
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,181,109,0.12),transparent_38%),linear-gradient(180deg,rgba(7,8,6,0.25),rgba(7,8,6,0.92)_55%,rgba(7,8,6,1)_100%)]"></div>
    </div>

    <div class="relative z-10 min-h-screen px-5 sm:px-8 lg:px-12">
      <header class="mx-auto flex max-w-7xl items-center justify-between py-8 text-xs uppercase tracking-[0.32em] text-[#d8b56d]/85">
        <span>Jesus es el camino</span>
        <span class="hidden sm:inline">Biblia · Oracion · Meditacion</span>
      </header>

      <section class="mx-auto grid max-w-7xl items-center gap-12 pt-12 pb-20 lg:min-h-[82vh] lg:grid-cols-[1.08fr_0.92fr] lg:pt-8">
        <div>
          <p class="mb-8 text-sm uppercase tracking-[0.42em] text-[#d8b56d]">Devocional interactivo</p>
          <h1 class="font-serif text-6xl leading-[0.92] tracking-[-0.045em] text-[#fff7e7] sm:text-8xl lg:text-[8.5rem]">
            Jesus es<br />el camino
          </h1>
          <p class="mt-8 max-w-2xl text-xl leading-relaxed text-[#f8f3e7]/78 sm:text-2xl">
            Un espacio para leer, entender y responder a la Palabra con una rutina simple. La pagina ahora incluye recursos, pasos de estudio y una meditacion visual para usar cada dia.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              class="rounded-full border border-[#d8b56d]/70 bg-[#d8b56d] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#0b0c09] transition hover:bg-[#f0d38b]"
              @click="mostrarEstudio = true"
            >
              Ver significado
            </button>
            <a
              href="#dashboard"
              class="rounded-full border border-[#f8f3e7]/25 bg-white/8 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f8f3e7] backdrop-blur transition hover:bg-white/14"
            >
              Recursos
            </a>
          </div>
        </div>

        <aside class="rounded-[2rem] border border-white/10 bg-black/20 p-6 backdrop-blur-md">
          <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]">Hoy</p>
          <h2 class="mt-4 font-serif text-4xl text-[#fff7e7]">Ruta devocional</h2>
          <div class="mt-8 grid gap-4">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p class="text-xs uppercase tracking-[0.3em] text-[#d8b56d]">Lectura base</p>
              <p class="mt-3 text-2xl font-semibold text-[#fff7e7]">Juan 14</p>
              <p class="mt-2 text-[#f8f3e7]/75">Empieza mirando como Jesus se presenta a sus discipulos en medio de la inquietud.</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p class="text-xs uppercase tracking-[0.3em] text-[#d8b56d]">Pregunta clave</p>
              <p class="mt-3 text-lg text-[#fff7e7]">Que cambia en mi dia si Jesus realmente es el camino?</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p class="text-xs uppercase tracking-[0.3em] text-[#d8b56d]">Aplicacion</p>
              <p class="mt-3 text-lg text-[#fff7e7]">Sustituye una preocupacion por una oracion concreta antes de terminar la lectura.</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="dashboard" class="mx-auto max-w-7xl pb-8">
        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="recurso in recursos"
            :key="recurso.titulo"
            class="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-md"
          >
            <p class="text-sm uppercase tracking-[0.35em] text-[#d8b56d]">{{ recurso.icono }}</p>
            <h3 class="mt-4 font-serif text-3xl text-[#fff7e7]">{{ recurso.titulo }}</h3>
            <p class="mt-3 leading-relaxed text-[#f8f3e7]/78">{{ recurso.descripcion }}</p>
          </article>
        </div>
      </section>

      <section class="mx-auto grid max-w-7xl gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <article class="rounded-[2rem] border border-white/10 bg-[#10130e]/70 p-7 backdrop-blur-md">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]">{{ tareaVisible.etiqueta }}</p>
              <h2 class="mt-3 font-serif text-4xl text-[#fff7e7]">{{ tareaVisible.titulo }}</h2>
            </div>
            <span class="rounded-full border border-[#d8b56d]/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#d8b56d]">
              {{ tareaVisible.imagen }}
            </span>
          </div>
          <p class="mt-6 text-lg leading-relaxed text-[#f8f3e7]/82">{{ tareaVisible.texto }}</p>
          <div class="mt-8 flex gap-3">
            <button
              type="button"
              class="rounded-full border border-white/15 px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#f8f3e7] transition hover:bg-white/10"
              @click="tareaAnterior"
            >
              Anterior
            </button>
            <button
              type="button"
              class="rounded-full border border-[#d8b56d]/60 bg-[#d8b56d] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#0b0c09] transition hover:bg-[#f0d38b]"
              @click="siguienteTarea"
            >
              Siguiente
            </button>
          </div>
        </article>

        <article class="rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur-md">
          <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]">Como usar esta pagina</p>
          <div class="mt-6 grid gap-4">
            <div
              v-for="paso in pasos"
              :key="paso.titulo"
              class="rounded-2xl border border-white/10 bg-black/15 p-5"
            >
              <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]/90">{{ paso.semana }}</p>
              <h3 class="mt-3 font-serif text-2xl text-[#fff7e7]">{{ paso.titulo }}</h3>
              <p class="mt-3 leading-relaxed text-[#f8f3e7]/78">{{ paso.texto }}</p>
            </div>
          </div>
        </article>
      </section>

      <section class="mx-auto grid max-w-7xl gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <article class="rounded-[2rem] border border-[#d8b56d]/20 bg-[linear-gradient(180deg,rgba(216,181,109,0.08),rgba(17,26,17,0.55))] p-7 backdrop-blur-md">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]">Versiculo destacado</p>
              <h2 class="mt-3 font-serif text-4xl text-[#fff7e7]">{{ versiculoVisible.referencia }}</h2>
            </div>
            <span class="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#f8f3e7]/75">
              {{ versiculoVisible.icono }}
            </span>
          </div>
          <p class="mt-6 text-2xl leading-relaxed text-[#fff7e7]">
            "{{ versiculoVisible.texto }}"
          </p>
          <p class="mt-4 text-sm uppercase tracking-[0.3em] text-[#d8b56d]/85">{{ versiculoVisible.tema }}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              class="rounded-full border border-white/15 px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#f8f3e7] transition hover:bg-white/10"
              @click="versiculoAnterior"
            >
              Anterior
            </button>
            <button
              type="button"
              class="rounded-full border border-white/15 px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#f8f3e7] transition hover:bg-white/10"
              @click="siguienteVersiculo"
            >
              Siguiente
            </button>
            <button
              type="button"
              class="rounded-full border border-[#d8b56d]/60 bg-[#d8b56d] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#0b0c09] transition hover:bg-[#f0d38b]"
              @click="copiarVersiculo"
            >
              {{ copiado ? 'Copiado' : 'Copiar texto' }}
            </button>
          </div>
        </article>

        <article class="rounded-[2rem] border border-white/10 bg-[#10130e]/72 p-7 backdrop-blur-md">
          <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]">Reflexion familiar</p>
          <h2 class="mt-3 font-serif text-4xl text-[#fff7e7]">Una conversacion simple</h2>
          <p class="mt-5 text-lg leading-relaxed text-[#f8f3e7]/82">
            Despues de leer, pregunta en casa que atributo de Dios aparece en el pasaje y como esa verdad cambia una decision concreta del dia.
          </p>
          <div class="mt-6 rounded-2xl border border-white/10 bg-black/15 p-5">
            <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]/90">Ejemplo</p>
            <p class="mt-3 leading-relaxed text-[#f8f3e7]/78">
              Si Jesus es el camino, entonces no necesito inventar mi propia salida: puedo obedecer su palabra aunque el resultado no sea inmediato.
            </p>
          </div>
        </article>
      </section>

      <section class="mx-auto max-w-7xl py-12">
        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-6">
          <div class="mb-5 px-2">
            <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]">Meditacion visual</p>
            <h2 class="mt-3 font-serif text-4xl text-[#fff7e7]">Tarjetas para seguir repasando</h2>
            <p class="mt-3 max-w-3xl leading-relaxed text-[#f8f3e7]/78">
              Debajo tienes una experiencia interactiva para repasar otros pasajes y sostener el habito durante la semana.
            </p>
          </div>
          <DailyMeditation />
        </div>
      </section>
    </div>

    <div
      v-if="mostrarEstudio"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4"
      @click.self="mostrarEstudio = false"
    >
      <div class="modal-significado relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#d8b56d]/30 p-7 shadow-2xl sm:p-10">
        <div class="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <iframe
            class="modal-video-bg"
            src="https://www.youtube.com/embed/xH9E6LbXCnA?autoplay=1&mute=1&loop=1&playlist=xH9E6LbXCnA&controls=0&modestbranding=1&playsinline=1&rel=0"
            title="Modal video background"
            frameborder="0"
            allow="autoplay; fullscreen"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,6,0.30),rgba(8,10,6,0.58))]"></div>
          <div class="absolute inset-0 bg-[#0b0d08]/18 backdrop-blur-[1px]"></div>
        </div>
        <button
          type="button"
          class="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-black"
          @click="mostrarEstudio = false"
        >
          Cerrar
        </button>
        <div class="relative z-10">
          <p class="text-xs uppercase tracking-[0.35em] text-[#d8b56d]">Examen biblico</p>
          <h2 class="mt-4 font-serif text-4xl leading-tight text-[#fff7e7] sm:text-5xl">Juan 14:6</h2>
          <p class="mt-5 text-xl leading-relaxed text-[#f8f3e7]/90">
            "Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mi."
          </p>

          <div class="mt-8 grid gap-5 md:grid-cols-3">
            <div class="rounded-2xl border border-white/15 bg-[#111a11]/45 p-5 backdrop-blur-[1px]">
              <h3 class="font-serif text-2xl text-[#d8b56d]">Camino</h3>
              <p class="mt-3 text-[#f8f3e7]/88">Jesus no solo ensena una direccion: el mismo es el acceso al Padre.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-[#111a11]/45 p-5 backdrop-blur-[1px]">
              <h3 class="font-serif text-2xl text-[#d8b56d]">Verdad</h3>
              <p class="mt-3 text-[#f8f3e7]/88">En Jesus se revela con claridad quien es Dios y cual es su voluntad.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-[#111a11]/45 p-5 backdrop-blur-[1px]">
              <h3 class="font-serif text-2xl text-[#d8b56d]">Vida</h3>
              <p class="mt-3 text-[#f8f3e7]/88">La vida eterna y espiritual se recibe por medio de el.</p>
            </div>
          </div>

          <div class="mt-8 rounded-2xl border border-[#d8b56d]/35 bg-[#111a11]/48 p-6 backdrop-blur-[1px]">
            <h3 class="font-serif text-3xl text-[#fff7e7]">Concordancia con otros versiculos</h3>
            <ul class="mt-5 space-y-4 text-lg leading-relaxed text-[#f8f3e7]/90">
              <li><strong>Hechos 4:12:</strong> no hay otro nombre dado a los hombres en que podamos ser salvos.</li>
              <li><strong>1 Timoteo 2:5:</strong> hay un solo mediador entre Dios y los hombres: Jesucristo hombre.</li>
              <li><strong>Hebreos 10:19-20:</strong> tenemos entrada al Lugar Santisimo por el camino nuevo y vivo abierto por Cristo.</li>
              <li><strong>Juan 10:9:</strong> Jesus dice: "Yo soy la puerta"; el que entra por el sera salvo.</li>
            </ul>
          </div>

          <div class="mt-8 rounded-2xl border border-white/15 bg-[#111a11]/48 p-6 backdrop-blur-[1px]">
            <h3 class="font-serif text-3xl text-[#fff7e7]">Conclusion</h3>
            <p class="mt-4 text-lg leading-relaxed text-[#f8f3e7]/90">
              Este versiculo presenta a Jesus como el unico camino hacia el Padre, la verdad plena de Dios y la fuente de la vida verdadera.
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

.modal-significado {
  background: rgba(7, 8, 6, 0.72);
}

.modal-video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 177.77777778vh;
  height: 100vh;
  min-width: 100%;
  min-height: 56.25vw;
  transform: translate(-50%, -50%);
}
</style>
