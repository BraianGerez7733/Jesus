<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  align: { type: String, default: 'left' },
})
</script>

<template>
  <section
    class="relative overflow-hidden border-b border-white/60 bg-gradient-to-b from-white/80 via-sky-50/70 to-transparent"
  >
    <div class="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
      <svg
        class="cloud-drift absolute -top-10 left-[-5%] w-[50vw] text-white"
        viewBox="0 0 600 200"
        fill="currentColor"
      >
        <path d="M60 130c-22 0-40-16-40-38s18-38 40-38c4 0 8 .5 12 1.4C80 36 107 18 140 18c38 0 69 26 76 60h8c22 0 40 16 40 38s-18 38-40 38H60z" />
      </svg>
    </div>

    <div
      class="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 sm:py-20"
      :class="image ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-1'"
    >
      <div :class="align === 'center' ? 'text-center mx-auto max-w-3xl' : ''">
        <p class="section-heading text-sky-600">{{ eyebrow }}</p>
        <h1 class="font-display mt-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          {{ title }}
        </h1>
        <p v-if="description" class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {{ description }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3" :class="align === 'center' ? 'justify-center' : ''">
          <slot name="actions" />
        </div>
      </div>

      <div v-if="image" class="relative">
        <div class="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-300/40 via-violet-300/30 to-amber-200/40 blur-2xl"></div>
        <img
          :src="image"
          alt=""
          loading="lazy"
          class="relative w-full rounded-[2rem] object-cover shadow-xl shadow-sky-500/20"
        />
      </div>
    </div>
  </section>
</template>
