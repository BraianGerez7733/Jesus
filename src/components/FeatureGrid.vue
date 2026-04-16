<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <article
      v-for="item in items"
      :key="item.title"
      class="hover-lift group relative overflow-hidden rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm backdrop-blur-md"
    >
      <span
        class="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-2xl text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white"
        aria-hidden="true"
      >
        {{ item.emoji }}
      </span>
      <h3 class="font-display mt-5 text-xl font-bold text-slate-900">{{ item.title }}</h3>
      <p class="mt-2 text-sm leading-7 text-slate-600">{{ item.text }}</p>
    </article>
  </div>
</template>
