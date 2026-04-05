<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  intervalMs: {
    type: Number,
    default: 5000,
  },
})

const activeIndex = ref(0)
let timerId = null

const normalizedSlides = computed(() =>
  props.slides.map((slide, index) => ({
    id: slide.id ?? `slide-${index}`,
    eyebrow: slide.eyebrow ?? '',
    title: slide.title ?? '',
    text: slide.text ?? '',
    ctaLabel: slide.ctaLabel ?? '',
    ctaHref: slide.ctaHref ?? '#',
    ctaTo: slide.ctaTo ?? '',
    align: slide.align ?? 'left',
    overlayClass:
      slide.overlayClass ??
      'bg-[linear-gradient(135deg,_rgba(15,23,42,0.82),_rgba(30,41,59,0.38),_rgba(245,158,11,0.22))]',
    accentClass:
      slide.accentClass ??
      'bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.42),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.3),_transparent_34%)]',
  })),
)

const goTo = (index) => {
  const total = normalizedSlides.value.length

  if (!total) {
    activeIndex.value = 0
    return
  }

  activeIndex.value = (index + total) % total
}

const nextSlide = () => {
  goTo(activeIndex.value + 1)
}

const prevSlide = () => {
  goTo(activeIndex.value - 1)
}

const stopAutoPlay = () => {
  if (timerId) {
    window.clearInterval(timerId)
    timerId = null
  }
}

const startAutoPlay = () => {
  stopAutoPlay()

  if (normalizedSlides.value.length <= 1) {
    return
  }

  timerId = window.setInterval(() => {
    nextSlide()
  }, props.intervalMs)
}

watch(
  () => props.slides,
  () => {
    if (activeIndex.value >= normalizedSlides.value.length) {
      activeIndex.value = 0
    }

    startAutoPlay()
  },
  { deep: true },
)

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  stopAutoPlay()
})
</script>

<template>
  <section
    class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 shadow-[0_40px_120px_rgba(2,6,23,0.42)] backdrop-blur-sm"
    aria-label="Carrusel principal"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
    @focusin="stopAutoPlay"
    @focusout="startAutoPlay"
  >
    <div class="relative min-h-[380px] sm:min-h-[430px] lg:min-h-[500px]">
      <article
        v-for="(slide, index) in normalizedSlides"
        :key="slide.id"
        class="absolute inset-0 transition-opacity duration-700 ease-out"
        :class="index === activeIndex ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
        :aria-hidden="index === activeIndex ? 'false' : 'true'"
      >
        <div class="absolute inset-0 bg-[linear-gradient(180deg,_rgba(2,6,23,0.08),_rgba(2,6,23,0.78))]"></div>
        <div class="absolute inset-0" :class="slide.accentClass"></div>
        <div class="absolute inset-0" :class="slide.overlayClass"></div>

        <div
          class="relative flex h-full items-end px-6 py-8 sm:px-8 lg:px-12 lg:py-12"
          :class="slide.align === 'center' ? 'justify-center text-center' : slide.align === 'right' ? 'justify-end text-right' : 'justify-start text-left'"
        >
          <div class="max-w-2xl">
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/90 sm:text-sm">
              {{ slide.eyebrow }}
            </p>

            <h2 class="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              {{ slide.title }}
            </h2>

            <p class="mt-4 max-w-xl text-sm leading-7 text-slate-100 sm:text-base sm:leading-8">
              {{ slide.text }}
            </p>

            <component
              v-if="slide.ctaLabel"
              :is="slide.ctaTo ? RouterLink : 'a'"
              :to="slide.ctaTo || undefined"
              :href="slide.ctaTo ? undefined : slide.ctaHref"
              class="mt-6 inline-flex items-center rounded-full border border-amber-200/30 bg-amber-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-200"
            >
              {{ slide.ctaLabel }}
            </component>
          </div>
        </div>
      </article>
    </div>

    <button
      type="button"
      class="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/45 text-xl text-white backdrop-blur-md transition hover:bg-slate-900/75"
      aria-label="Slide anterior"
      @click="prevSlide"
    >
      ‹
    </button>

    <button
      type="button"
      class="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/45 text-xl text-white backdrop-blur-md transition hover:bg-slate-900/75"
      aria-label="Siguiente slide"
      @click="nextSlide"
    >
      ›
    </button>

    <div class="absolute inset-x-0 bottom-5 z-10 flex items-center justify-center gap-3 px-6">
      <button
        v-for="(slide, index) in normalizedSlides"
        :key="`${slide.id}-dot`"
        type="button"
        class="h-3 rounded-full transition-all duration-300"
        :class="index === activeIndex ? 'w-10 bg-amber-300' : 'w-3 bg-white/45 hover:bg-white/70'"
        :aria-label="`Ir al slide ${index + 1}`"
        :aria-current="index === activeIndex ? 'true' : 'false'"
        @click="goTo(index)"
      ></button>
    </div>
  </section>
</template>
