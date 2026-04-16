<script setup>
defineProps({
  religion: { type: Object, required: true },
})
</script>

<template>
  <article
    class="hover-lift group relative flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-lg shadow-sky-500/10 backdrop-blur-md"
  >
    <div class="relative h-48 w-full overflow-hidden">
      <img
        :src="religion.image"
        :alt="religion.nombre"
        loading="lazy"
        class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent"></div>
      <div class="absolute inset-x-4 bottom-3 flex items-center justify-between">
        <span class="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
          {{ religion.origen }}
        </span>
        <span class="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 shadow">
          {{ religion.seguidores }}
        </span>
      </div>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <div class="flex items-center gap-3">
        <span class="text-3xl" aria-hidden="true">{{ religion.emoji }}</span>
        <h3 class="font-display text-2xl font-bold text-slate-900">{{ religion.nombre }}</h3>
      </div>
      <p class="mt-3 text-sm leading-7 text-slate-600">{{ religion.resumen }}</p>

      <dl class="mt-5 grid gap-3 text-xs">
        <div class="flex items-start gap-2">
          <dt class="w-24 shrink-0 font-semibold uppercase tracking-[0.18em] text-slate-400">Dios</dt>
          <dd class="text-slate-700">{{ religion.dios }}</dd>
        </div>
        <div class="flex items-start gap-2">
          <dt class="w-24 shrink-0 font-semibold uppercase tracking-[0.18em] text-slate-400">Libro</dt>
          <dd class="text-slate-700">{{ religion.libro }}</dd>
        </div>
        <div class="flex items-start gap-2">
          <dt class="w-24 shrink-0 font-semibold uppercase tracking-[0.18em] text-slate-400">Salvación</dt>
          <dd class="text-slate-700">{{ religion.salvacion }}</dd>
        </div>
      </dl>

      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tag in religion.tags"
          :key="tag"
          class="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>
