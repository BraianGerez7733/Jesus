<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

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
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
})

const sectionRef = ref(null)
const isVisible = ref(false)
let observer

const itemClasses = computed(() =>
  props.items.map((item) => {
    const base = [
      'visual-stage-item',
      'absolute',
      'left-1/2',
      'top-1/2',
      'w-[min(100%,20rem)]',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'overflow-hidden',
      'rounded-[1.75rem]',
      'border',
      'border-white/10',
      'bg-slate-950/80',
      'shadow-2xl',
      'shadow-slate-950/35',
      'backdrop-blur-xl',
      'transition-[opacity,transform,box-shadow]',
      'duration-700',
      'ease-[cubic-bezier(0.22,1,0.36,1)]',
      'motion-reduce:transform-none',
      'motion-reduce:transition-none',
    ]

    const directionOffset = {
      left: '-translate-x-[calc(50%+2.5rem)] -translate-y-1/2',
      right: 'translate-x-[calc(-50%+2.5rem)] -translate-y-1/2',
      bottom: '-translate-x-1/2 translate-y-[calc(-50%+2.5rem)]',
    }

    const hiddenState = directionOffset[item.enterFrom] || directionOffset.bottom
    const visibilityState = isVisible.value
      ? `${item.positionClass} opacity-100`
      : `${hiddenState} opacity-0`

    return `${base.join(' ')} ${visibilityState}`
  }),
)

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry) {
        return
      }

      if (entry.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    },
    {
      threshold: 0.28,
      rootMargin: '0px 0px -10% 0px',
    },
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <section ref="sectionRef" class="section-shell border-t-0 pt-0">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-2xl text-center">
        <p class="section-heading text-cyan-200">
          {{ eyebrow }}
        </p>
        <h2 class="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          {{ description }}
        </p>
      </div>

      <div
        class="visual-stage relative mx-auto mt-12 min-h-[28rem] max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.12),_transparent_32%),linear-gradient(180deg,_rgba(15,23,42,0.88),_rgba(2,6,23,0.95))] px-4 py-8 shadow-2xl shadow-slate-950/30 sm:min-h-[34rem] sm:px-6 lg:min-h-[42rem]"
      >
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.08),_transparent_40%)]"></div>

        <div class="relative hidden h-full min-h-[24rem] md:block">
          <article
            v-for="(item, index) in items"
            :key="item.title"
            class="hover-lift-soft"
            :class="itemClasses[index]"
          >
            <div
              class="aspect-[4/5] h-full w-full"
              :class="item.surfaceClass"
              :style="item.image ? { backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined"
            >
              <div class="flex h-full flex-col justify-end bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent p-6">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  {{ item.kicker }}
                </p>
                <p class="mt-3 text-2xl font-bold text-white">
                  {{ item.title }}
                </p>
                <p class="mt-3 text-sm leading-6 text-slate-100">
                  {{ item.text }}
                </p>
                <div
                  v-if="item.verse"
                  class="mt-4 rounded-[1.25rem] border border-white/15 bg-slate-950/35 p-4 backdrop-blur-md"
                >
                  <p class="text-sm leading-6 text-white/95">
                    {{ item.verse }}
                  </p>
                  <p class="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-fuchsia-200/90">
                    {{ item.verseRef }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="relative grid gap-4 md:hidden">
          <article
            v-for="item in items"
            :key="item.title"
            class="hover-lift-soft overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/75 shadow-xl shadow-slate-950/25"
          >
            <div
              class="aspect-[16/10] w-full"
              :class="item.surfaceClass"
              :style="item.image ? { backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined"
            >
              <div class="flex h-full flex-col justify-end bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  {{ item.kicker }}
                </p>
                <p class="mt-2 text-xl font-bold text-white">
                  {{ item.title }}
                </p>
                <p class="mt-2 text-sm leading-6 text-slate-100">
                  {{ item.text }}
                </p>
                <div
                  v-if="item.verse"
                  class="mt-4 rounded-[1.25rem] border border-white/15 bg-slate-950/40 p-4 backdrop-blur-md"
                >
                  <p class="text-sm leading-6 text-white/95">
                    {{ item.verse }}
                  </p>
                  <p class="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-fuchsia-200/90">
                    {{ item.verseRef }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
