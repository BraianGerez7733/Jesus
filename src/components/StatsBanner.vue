<script setup>
defineProps({
  stats: { type: Array, required: true },
})
</script>

<template>
  <dl
    class="grid divide-y divide-white/60 overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-lg shadow-sky-500/10 backdrop-blur-md sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
  >
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="group flex flex-col items-center gap-1 px-6 py-7 text-center transition hover:bg-sky-50"
    >
      <span class="text-3xl" aria-hidden="true">{{ stat.emoji }}</span>
      <dt class="section-heading text-slate-500">{{ stat.label }}</dt>
      <dd class="font-display text-3xl font-bold text-slate-900 transition group-hover:text-sky-700">
        {{ stat.value }}
      </dd>
      <p class="text-xs text-slate-500">{{ stat.hint }}</p>
    </div>
  </dl>
</template>
