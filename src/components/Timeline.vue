<script setup>
defineProps({
  events: { type: Array, required: true },
})
</script>

<template>
  <ol class="relative space-y-8 border-l-2 border-dashed border-sky-200 pl-8">
    <li
      v-for="event in events"
      :key="event.title"
      class="hover-lift group relative rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-md"
    >
      <span
        class="absolute -left-[2.4rem] top-6 grid h-10 w-10 place-items-center rounded-full border-4 border-white bg-gradient-to-br from-sky-400 to-violet-400 text-sm font-bold text-white shadow"
        aria-hidden="true"
      >
        {{ event.icon ?? '✦' }}
      </span>
      <p class="chip-violet">{{ event.period }}</p>
      <h3 class="font-display mt-3 text-2xl font-bold text-slate-900">
        {{ event.title }}
      </h3>
      <p class="mt-2 text-sm leading-7 text-slate-600">{{ event.text }}</p>
      <p v-if="event.verse" class="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
        {{ event.verse }}
      </p>
    </li>
  </ol>
</template>
