<script setup>
const props = defineProps({
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  verses: {
    type: Array,
    required: true,
  },
  accent: {
    type: String,
    default: 'amber',
  },
})

const accentMap = {
  amber: {
    eyebrow: 'text-amber-200',
    badge: 'text-amber-100',
    border: 'border-amber-200/20',
    glow: 'bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.12),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,0.86),_rgba(2,6,23,0.95))]',
  },
  cyan: {
    eyebrow: 'text-cyan-200',
    badge: 'text-cyan-100',
    border: 'border-cyan-200/20',
    glow: 'bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,0.86),_rgba(2,6,23,0.95))]',
  },
}

const accentClasses = accentMap[props.accent] ?? accentMap.amber
</script>

<template>
  <section class="section-shell border-t-0 pt-0">
    <div class="mx-auto max-w-6xl">
      <div class="mb-8 max-w-3xl">
        <p class="section-heading" :class="accentClasses.eyebrow">
          {{ eyebrow }}
        </p>
        <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {{ title }}
        </h2>
        <p v-if="description" class="mt-4 text-sm leading-7 text-slate-300">
          {{ description }}
        </p>
      </div>

      <div class="grid gap-5 lg:grid-cols-12">
        <article
          v-for="verse in verses"
          :key="`${verse.reference}-${verse.text}`"
          class="relative overflow-hidden rounded-[1.75rem] border bg-slate-950/55 p-6 shadow-xl shadow-slate-950/25 backdrop-blur-md"
          :class="[
            accentClasses.border,
            accentClasses.glow,
            verse.layout === 'wide' ? 'lg:col-span-7' : verse.layout === 'stacked' ? 'lg:col-span-5' : 'lg:col-span-4',
          ]"
        >
          <div
            v-if="verse.layout === 'stacked'"
            class="absolute inset-y-6 left-6 w-1 rounded-full bg-gradient-to-b from-white/70 via-white/25 to-transparent"
          ></div>

          <div
            v-if="verse.layout === 'corner'"
            class="absolute right-4 top-4 h-16 w-16 rounded-full border border-white/10 bg-white/5 blur-[2px]"
          ></div>

          <p class="relative text-xs font-semibold uppercase tracking-[0.24em]" :class="accentClasses.badge">
            Reina Valera 1960
          </p>
          <blockquote
            class="relative mt-4 text-lg leading-8 text-white sm:text-xl"
            :class="verse.layout === 'stacked' ? 'pl-5' : ''"
          >
            {{ verse.text }}
          </blockquote>
          <p
            class="relative mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-200"
            :class="verse.layout === 'pill' ? 'inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1' : ''"
          >
            {{ verse.reference }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
