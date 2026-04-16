<script setup>
import { computed, ref } from 'vue'

const verses = [
  {
    text: 'Jehová es mi pastor; nada me faltará.',
    reference: 'Salmos 23:1',
  },
  {
    text: 'Todo lo puedo en Cristo que me fortalece.',
    reference: 'Filipenses 4:13',
  },
  {
    text: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.',
    reference: 'Juan 3:16',
  },
  {
    text: 'Encomienda a Jehová tu camino, y confía en él; y él hará.',
    reference: 'Salmos 37:5',
  },
  {
    text: 'Esfuérzate y sé valiente; no temas, ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.',
    reference: 'Josué 1:9',
  },
  {
    text: 'Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.',
    reference: 'Mateo 6:33',
  },
  {
    text: 'Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.',
    reference: '1 Pedro 5:7',
  },
  {
    text: 'El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.',
    reference: 'Salmos 91:1',
  },
  {
    text: 'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien.',
    reference: 'Romanos 8:28',
  },
  {
    text: 'Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.',
    reference: 'Juan 14:6',
  },
  {
    text: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.',
    reference: 'Efesios 2:8',
  },
  {
    text: 'Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas.',
    reference: 'Isaías 40:31',
  },
]

function dayOfYearIndex(date) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0)
  const now = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  const day = Math.floor((now - start) / 86_400_000)
  return day % verses.length
}

const today = new Date()
const index = ref(dayOfYearIndex(today))
const fade = ref(true)

const current = computed(() => verses[index.value])
const formattedDate = computed(() =>
  today.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }),
)

function shuffle() {
  fade.value = false
  let next = index.value
  while (next === index.value) {
    next = Math.floor(Math.random() * verses.length)
  }
  setTimeout(() => {
    index.value = next
    fade.value = true
  }, 180)
}

async function copyVerse() {
  const payload = `"${current.value.text}" — ${current.value.reference}`
  try {
    await navigator.clipboard.writeText(payload)
  } catch {
    // clipboard API may be unavailable; silently ignore
  }
}
</script>

<template>
  <section class="section-shell border-t-0 pt-0">
    <div class="mx-auto max-w-5xl">
      <div class="mb-8 max-w-2xl">
        <p class="section-heading text-amber-200">Versículo del día</p>
        <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Un texto breve para meditar hoy
        </h2>
        <p class="mt-4 text-sm leading-7 text-slate-300">
          La selección cambia cada día de forma automática. También puedes pedir otro
          versículo o copiarlo para compartirlo.
        </p>
      </div>

      <article
        class="relative overflow-hidden rounded-[1.75rem] border border-amber-200/20 bg-slate-950/70 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-md sm:p-10"
      >
        <div
          class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_34%)]"
        ></div>

        <div class="relative flex flex-col gap-6">
          <div class="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">
            <span class="inline-flex items-center rounded-full border border-amber-200/30 bg-amber-300/10 px-3 py-1">
              Reina Valera 1960
            </span>
            <span class="text-slate-300">{{ formattedDate }}</span>
          </div>

          <transition name="verse-fade" mode="out-in">
            <div v-if="fade" :key="current.reference" class="space-y-4">
              <blockquote class="text-2xl leading-9 text-white sm:text-3xl">
                {{ current.text }}
              </blockquote>
              <p class="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                {{ current.reference }}
              </p>
            </div>
          </transition>

          <div class="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              class="inline-flex items-center rounded-2xl bg-amber-300 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-amber-200"
              @click="shuffle"
            >
              Otro versículo
            </button>
            <button
              type="button"
              class="inline-flex items-center rounded-2xl border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              @click="copyVerse"
            >
              Copiar texto
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.verse-fade-enter-active,
.verse-fade-leave-active {
  transition: opacity 200ms ease, transform 200ms ease;
}

.verse-fade-enter-from,
.verse-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
