<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  religions: { type: Array, required: true },
  rows: { type: Array, required: true },
})

const active = ref(props.religions.map((r) => r.key))

function toggle(key) {
  if (active.value.includes(key)) {
    if (active.value.length > 1) {
      active.value = active.value.filter((k) => k !== key)
    }
  } else {
    active.value = [...active.value, key]
  }
}

const visibleReligions = computed(() => props.religions.filter((r) => active.value.includes(r.key)))
</script>

<template>
  <div class="surface-card p-6 sm:p-8">
    <div class="mb-6 flex flex-wrap items-center gap-2">
      <span class="section-heading text-slate-500">Filtrar religiones</span>
      <button
        v-for="r in religions"
        :key="r.key"
        type="button"
        class="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition"
        :class="
          active.includes(r.key)
            ? 'border-sky-300 bg-sky-500 text-white shadow-sm'
            : 'border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:text-sky-700'
        "
        @click="toggle(r.key)"
      >
        <span aria-hidden="true">{{ r.emoji }}</span>
        {{ r.nombre }}
      </button>
    </div>

    <div class="overflow-x-auto rounded-2xl border border-slate-100">
      <table class="min-w-full text-left text-sm">
        <thead class="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
          <tr>
            <th class="px-4 py-3 font-semibold">Criterio</th>
            <th
              v-for="r in visibleReligions"
              :key="r.key"
              class="px-4 py-3 font-semibold text-slate-700"
            >
              <span class="flex items-center gap-2">
                <span aria-hidden="true">{{ r.emoji }}</span>
                {{ r.nombre }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in rows"
            :key="row.label"
            class="border-t border-slate-100 transition hover:bg-sky-50/60"
            :class="i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'"
          >
            <th scope="row" class="whitespace-nowrap px-4 py-4 text-left text-sm font-semibold text-slate-700">
              <span class="flex items-center gap-2">
                <span aria-hidden="true" class="text-sky-500">{{ row.emoji ?? '•' }}</span>
                {{ row.label }}
              </span>
            </th>
            <td
              v-for="r in visibleReligions"
              :key="r.key"
              class="px-4 py-4 align-top text-sm text-slate-700"
            >
              {{ row.values[r.key] ?? '—' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
