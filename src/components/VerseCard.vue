<script setup>
defineProps({
  text: { type: String, required: true },
  reference: { type: String, required: true },
  theme: { type: String, default: 'sky' },
})

const themeMap = {
  sky: 'from-sky-50 to-white border-sky-100',
  violet: 'from-violet-50 to-white border-violet-100',
  amber: 'from-amber-50 to-white border-amber-100',
  rose: 'from-rose-50 to-white border-rose-100',
  emerald: 'from-emerald-50 to-white border-emerald-100',
}
</script>

<template>
  <figure
    class="hover-lift relative overflow-hidden rounded-3xl border bg-gradient-to-br p-6 shadow-sm"
    :class="themeMap[theme] ?? themeMap.sky"
  >
    <span
      class="absolute -left-4 top-2 font-display text-[8rem] leading-none text-slate-900/5"
      aria-hidden="true"
      >“</span
    >
    <blockquote class="font-display relative text-xl leading-8 text-slate-800">
      {{ text }}
    </blockquote>
    <figcaption class="relative mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
      <span>{{ reference }}</span>
      <span class="text-sky-600">RVR 1960</span>
    </figcaption>
  </figure>
</template>
