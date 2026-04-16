<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  questions: { type: Array, required: true },
})

const index = ref(0)
const selected = ref(null)
const answered = ref(false)
const score = ref(0)
const finished = ref(false)

const q = computed(() => props.questions[index.value])
const progress = computed(() => Math.round(((index.value + (answered.value ? 1 : 0)) / props.questions.length) * 100))

function choose(i) {
  if (answered.value) return
  selected.value = i
  answered.value = true
  if (i === q.value.correct) score.value += 1
}

function next() {
  if (index.value + 1 >= props.questions.length) {
    finished.value = true
    return
  }
  index.value += 1
  selected.value = null
  answered.value = false
}

function restart() {
  index.value = 0
  selected.value = null
  answered.value = false
  score.value = 0
  finished.value = false
}

const grade = computed(() => {
  const pct = score.value / props.questions.length
  if (pct >= 0.9) return { label: '¡Excelente!', emoji: '🌟', text: 'Tu conocimiento bíblico es muy sólido.' }
  if (pct >= 0.7) return { label: '¡Muy bien!', emoji: '📖', text: 'Buen camino: sigue explorando las Escrituras.' }
  if (pct >= 0.4) return { label: 'Vas avanzando', emoji: '🌱', text: 'Revisa las lecciones y vuelve a intentarlo.' }
  return { label: 'Comienza tu viaje', emoji: '✨', text: 'Empieza por la sección "La Biblia" y vuelve al quiz.' }
})
</script>

<template>
  <div class="surface-card p-6 sm:p-8">
    <div v-if="!finished">
      <div class="flex items-center justify-between gap-4">
        <span class="chip-violet">Pregunta {{ index + 1 }} de {{ questions.length }}</span>
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Aciertos: <span class="text-sky-700">{{ score }}</span>
        </span>
      </div>

      <div class="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          class="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-500 transition-all"
          :style="{ width: progress + '%' }"
        ></div>
      </div>

      <h3 class="font-display mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
        {{ q.text }}
      </h3>

      <div class="mt-6 grid gap-3">
        <button
          v-for="(opt, i) in q.options"
          :key="opt"
          type="button"
          class="flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition"
          :class="[
            answered
              ? i === q.correct
                ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                : selected === i
                  ? 'border-rose-300 bg-rose-50 text-rose-800'
                  : 'border-slate-200 bg-white text-slate-500'
              : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:shadow',
          ]"
          :disabled="answered"
          @click="choose(i)"
        >
          <span class="flex items-center gap-3">
            <span
              class="grid h-8 w-8 place-items-center rounded-full border text-xs font-bold"
              :class="
                answered && i === q.correct
                  ? 'border-emerald-400 bg-emerald-500 text-white'
                  : answered && selected === i
                    ? 'border-rose-400 bg-rose-500 text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-500'
              "
            >
              {{ ['A', 'B', 'C', 'D'][i] }}
            </span>
            {{ opt }}
          </span>
          <span v-if="answered && i === q.correct" aria-hidden="true">✓</span>
          <span v-else-if="answered && selected === i" aria-hidden="true">✗</span>
        </button>
      </div>

      <div v-if="answered" class="mt-6 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
        <p class="font-semibold text-slate-900">
          {{ selected === q.correct ? '¡Correcto!' : 'Respuesta correcta: ' + q.options[q.correct] }}
        </p>
        <p class="mt-1">{{ q.explanation }}</p>
        <button class="btn-primary mt-4" type="button" @click="next">
          {{ index + 1 === questions.length ? 'Ver resultado' : 'Siguiente pregunta' }}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>

    <div v-else class="text-center">
      <p class="text-5xl" aria-hidden="true">{{ grade.emoji }}</p>
      <h3 class="font-display mt-4 text-3xl font-bold text-slate-900">{{ grade.label }}</h3>
      <p class="mt-2 text-slate-600">{{ grade.text }}</p>
      <p class="mt-4 text-lg font-semibold text-sky-700">
        Puntaje final: {{ score }} / {{ questions.length }}
      </p>
      <button class="btn-primary mt-6" type="button" @click="restart">
        Reintentar
        <span aria-hidden="true">↻</span>
      </button>
    </div>
  </div>
</template>
