<script setup>
import { RouterLink } from 'vue-router'
import VerseCard from '../components/VerseCard.vue'

const pilares = [
  {
    titulo: 'El camino',
    emoji: '🧭',
    color: 'from-sky-400 to-cyan-300',
    texto:
      'Jesús no dijo “muestro” un camino ni “enseño” un camino: dijo “yo soy”. Él mismo es el puente entre Dios y el ser humano. Seguirle no es adoptar una filosofía, sino caminar con una persona viva.',
    versiculo: 'Juan 14:6a',
  },
  {
    titulo: 'La verdad',
    emoji: '💡',
    color: 'from-amber-400 to-orange-300',
    texto:
      'En un mundo con muchas voces, Jesús se presenta como la verdad. No es una opinión entre otras, sino la realidad misma de Dios revelada. Creerle es dejar que su palabra ilumine nuestra manera de pensar y de vivir.',
    versiculo: 'Juan 14:6b',
  },
  {
    titulo: 'La vida',
    emoji: '🌿',
    color: 'from-emerald-400 to-teal-300',
    texto:
      'La vida no empieza ni termina con el latido del corazón. Jesús promete una vida nueva, abundante y eterna a quien confía en Él. Es vida que comienza hoy y continúa más allá de la muerte.',
    versiculo: 'Juan 14:6c',
  },
]

const contexto = [
  {
    etapa: 'La última cena',
    texto:
      'Jesús está con sus discípulos en Jerusalén, pocas horas antes de ser arrestado. Les lava los pies, comparte el pan y el vino, y les anuncia que va a morir.',
  },
  {
    etapa: 'La angustia de los discípulos',
    texto:
      'Los discípulos están confundidos. Jesús les dice: “Voy a prepararos lugar” en la casa de mi Padre. Promete regresar por ellos.',
  },
  {
    etapa: 'La pregunta de Tomás',
    texto:
      'Tomás le responde: “Señor, no sabemos a dónde vas; ¿cómo, pues, podemos saber el camino?”. Es una duda honesta y humana.',
  },
  {
    etapa: 'La respuesta inolvidable',
    texto:
      'Jesús responde con una de las afirmaciones más profundas de la Biblia: “Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí”.',
  },
]

const aplicaciones = [
  {
    emoji: '🧭',
    titulo: 'Cuando no sabes qué decidir',
    texto:
      'Antes de elegir por impulso, pregúntate qué camino se parece más al de Jesús. Él muestra la dirección con su ejemplo y con su palabra.',
  },
  {
    emoji: '📖',
    titulo: 'Cuando dudas de lo que es verdad',
    texto:
      'Regresa a los Evangelios. Lee despacio cómo habla Jesús, cómo trata a la gente, qué promete y qué cumple. La verdad se hace clara cuando se le escucha directamente.',
  },
  {
    emoji: '💞',
    titulo: 'Cuando sientes que la vida se apaga',
    texto:
      'La vida en Jesús no depende de tu ánimo ni de tus circunstancias. Es un don que Él sostiene. Pídele que te la devuelva, incluso en silencio.',
  },
  {
    emoji: '🙏',
    titulo: 'Cuando te sientes lejos de Dios',
    texto:
      'Nadie llega al Padre por méritos propios, pero todos pueden llegar por medio de Jesús. No necesitas limpiarte primero: ven como estás, y Él te limpia.',
  },
]

const relacionados = [
  {
    text: 'Yo soy la puerta; el que por mí entrare, será salvo; y entrará, y saldrá, y hallará pastos.',
    reference: 'Juan 10:9',
    theme: 'sky',
  },
  {
    text: 'Jesucristo es la piedra reprobada por vosotros los edificadores, la cual ha venido a ser cabeza del ángulo. Y en ningún otro hay salvación.',
    reference: 'Hechos 4:11-12',
    theme: 'amber',
  },
  {
    text: 'Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre.',
    reference: '1 Timoteo 2:5',
    theme: 'violet',
  },
]
</script>

<template>
  <!-- Hero centrado -->
  <section class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg class="cloud-drift absolute -top-10 left-[5%] w-[45vw] text-white/80" viewBox="0 0 600 200" fill="currentColor">
        <path d="M60 130c-22 0-40-16-40-38s18-38 40-38c4 0 8 .5 12 1.4C80 36 107 18 140 18c38 0 69 26 76 60h8c22 0 40 16 40 38s-18 38-40 38H60z" />
      </svg>
      <svg class="cloud-drift-slow absolute top-20 right-[0%] w-[40vw] text-sky-200/70" viewBox="0 0 600 200" fill="currentColor">
        <path d="M60 130c-22 0-40-16-40-38s18-38 40-38c4 0 8 .5 12 1.4C80 36 107 18 140 18c38 0 69 26 76 60h8c22 0 40 16 40 38s-18 38-40 38H60z" />
      </svg>
    </div>

    <div class="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center sm:px-8 sm:py-28">
      <span class="chip">
        <span aria-hidden="true">✝️</span>
        Juan 14:6
      </span>
      <h1 class="font-display mt-6 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 drop-shadow-[0_6px_24px_rgba(56,189,248,0.25)] sm:text-6xl lg:text-7xl">
        Jesús es el
        <span class="text-white drop-shadow-[0_6px_22px_rgba(15,23,42,0.4)]">camino</span>
      </h1>

      <p class="font-display mt-8 max-w-3xl text-2xl italic leading-relaxed text-slate-700 sm:text-3xl">
        “Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.”
      </p>
      <p class="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
        Juan 14:6 · Reina-Valera 1960
      </p>

      <div class="mt-10 flex flex-wrap justify-center gap-3">
        <RouterLink to="/jesus" class="btn-primary">
          Conocer más a Jesús
          <span aria-hidden="true">→</span>
        </RouterLink>
        <RouterLink to="/biblia" class="btn-ghost">Leer la Biblia</RouterLink>
      </div>
    </div>
  </section>

  <!-- Contexto: el momento en que Jesús lo dijo -->
  <section class="mx-auto max-w-6xl px-6 py-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-sky-600">El contexto</p>
      <h2 class="section-title mt-3">¿En qué momento Jesús dijo esto?</h2>
      <p class="section-lead">
        Las palabras ganan fuerza cuando entendemos cuándo y por qué se dijeron. Estas frases
        fueron pronunciadas la noche antes de la crucifixión.
      </p>
    </div>

    <ol class="mt-10 grid gap-5 lg:grid-cols-2">
      <li
        v-for="(c, i) in contexto"
        :key="c.etapa"
        class="hover-lift relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-md"
      >
        <span
          class="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-violet-400 text-sm font-bold text-white shadow"
          aria-hidden="true"
        >
          {{ i + 1 }}
        </span>
        <h3 class="font-display mt-4 text-2xl font-bold text-slate-900">
          {{ c.etapa }}
        </h3>
        <p class="mt-3 text-sm leading-7 text-slate-600">{{ c.texto }}</p>
      </li>
    </ol>
  </section>

  <!-- Tres pilares: camino, verdad, vida -->
  <section class="mx-auto max-w-6xl px-6 py-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-violet-600">Tres palabras que lo cambian todo</p>
      <h2 class="section-title mt-3">Camino · Verdad · Vida</h2>
      <p class="section-lead">
        En una sola oración, Jesús responde las preguntas más hondas del ser humano:
        <em>¿por dónde ir?</em>, <em>¿qué es verdad?</em> y <em>¿qué es vivir?</em>.
      </p>
    </div>

    <div class="mt-10 grid gap-5 lg:grid-cols-3">
      <article
        v-for="p in pilares"
        :key="p.titulo"
        class="hover-lift group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-7 shadow-sm backdrop-blur-md"
      >
        <div
          class="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition group-hover:opacity-70"
          :class="p.color"
        ></div>
        <span
          class="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-3xl text-white shadow-md"
          :class="p.color"
          aria-hidden="true"
        >
          {{ p.emoji }}
        </span>
        <h3 class="font-display relative mt-5 text-3xl font-bold text-slate-900">
          {{ p.titulo }}
        </h3>
        <p class="relative mt-3 text-sm leading-7 text-slate-600">
          {{ p.texto }}
        </p>
        <p class="relative mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          {{ p.versiculo }}
        </p>
      </article>
    </div>
  </section>

  <!-- La cláusula final: nadie viene al Padre sino por mí -->
  <section class="mx-auto max-w-6xl px-6 py-14 sm:px-8">
    <div
      class="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-10 text-white shadow-2xl shadow-slate-900/30 sm:p-14"
    >
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg class="cloud-drift absolute -right-10 top-0 w-96 opacity-20" viewBox="0 0 600 200" fill="currentColor">
          <path d="M60 130c-22 0-40-16-40-38s18-38 40-38c4 0 8 .5 12 1.4C80 36 107 18 140 18c38 0 69 26 76 60h8c22 0 40 16 40 38s-18 38-40 38H60z" />
        </svg>
      </div>
      <div class="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p class="section-heading text-sky-200">La cláusula final</p>
          <h2 class="font-display mt-3 text-3xl font-bold sm:text-4xl">
            “Nadie viene al Padre, sino por mí.”
          </h2>
          <p class="mt-5 text-sm leading-7 text-white/85 sm:text-base">
            Esta afirmación no es arrogancia: es la respuesta a Tomás. Jesús no está diciendo
            que los demás no puedan intentar acercarse a Dios, sino que
            <strong class="text-white">solo en Él se abre realmente ese acceso</strong>.
          </p>
          <p class="mt-4 text-sm leading-7 text-white/85 sm:text-base">
            Él puede decirlo porque es el Hijo eterno hecho hombre, el que muere por los
            pecados del mundo y resucita. El acceso al Padre no depende de rituales,
            apellidos ni esfuerzos: depende de su obra en la cruz, recibida por fe.
          </p>
        </div>

        <ul class="space-y-4 text-sm leading-7 text-white/90">
          <li class="flex gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
            <span class="text-xl" aria-hidden="true">🌉</span>
            <span>
              <strong class="text-white">No somos nosotros</strong> los que construimos
              el puente hacia Dios. Jesús mismo es el puente.
            </span>
          </li>
          <li class="flex gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
            <span class="text-xl" aria-hidden="true">🕊️</span>
            <span>
              <strong class="text-white">No es una religión más,</strong> sino una
              relación personal con el Dios que vino a buscarnos.
            </span>
          </li>
          <li class="flex gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
            <span class="text-xl" aria-hidden="true">🏡</span>
            <span>
              <strong class="text-white">El destino es el Padre.</strong> Jesús no es el
              final del viaje: nos lleva de regreso a casa.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Aplicaciones para hoy -->
  <section class="mx-auto max-w-6xl px-6 py-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-amber-600">Para hoy</p>
      <h2 class="section-title mt-3">¿Qué hago con esto?</h2>
      <p class="section-lead">
        Juan 14:6 no es solo una declaración teológica: es una invitación concreta. Aquí hay
        cuatro formas de vivirla en la vida diaria.
      </p>
    </div>

    <div class="mt-10 grid gap-5 sm:grid-cols-2">
      <article
        v-for="a in aplicaciones"
        :key="a.titulo"
        class="hover-lift group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-md"
      >
        <div class="flex items-center gap-3">
          <span
            class="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-2xl text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white"
            aria-hidden="true"
          >
            {{ a.emoji }}
          </span>
          <h3 class="font-display text-xl font-bold text-slate-900">{{ a.titulo }}</h3>
        </div>
        <p class="mt-4 text-sm leading-7 text-slate-600">{{ a.texto }}</p>
      </article>
    </div>
  </section>

  <!-- Versículos relacionados -->
  <section class="mx-auto max-w-6xl px-6 py-14 sm:px-8">
    <div class="max-w-2xl">
      <p class="section-heading text-rose-600">Versículos relacionados</p>
      <h2 class="section-title mt-3">La Biblia insiste en lo mismo</h2>
      <p class="section-lead">
        Este tema no aparece solo en Juan 14:6. Otros pasajes confirman que la salvación y
        el acceso al Padre vienen únicamente por medio de Jesús.
      </p>
    </div>

    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <VerseCard
        v-for="v in relacionados"
        :key="v.reference"
        :text="v.text"
        :reference="v.reference"
        :theme="v.theme"
      />
    </div>
  </section>

  <!-- CTA final -->
  <section class="mx-auto max-w-6xl px-6 pb-20 sm:px-8">
    <div
      class="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500 p-10 text-white shadow-2xl shadow-sky-500/30 sm:p-14"
    >
      <div class="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p class="section-heading text-white/80">Sigue explorando</p>
          <h2 class="font-display mt-3 text-3xl font-bold sm:text-4xl">
            ¿Quieres conocer más sobre la vida y las palabras de Jesús?
          </h2>
          <p class="mt-4 max-w-xl text-white/90">
            Mira la línea de tiempo de su vida, sus “yo soy”, sus parábolas y sus milagros.
          </p>
        </div>
        <div class="flex flex-wrap gap-3 lg:justify-end">
          <RouterLink to="/jesus" class="btn-accent">
            Página de Jesús
            <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink to="/parabolas" class="btn-ghost bg-white/15 text-white hover:bg-white/25">
            Sus parábolas
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
