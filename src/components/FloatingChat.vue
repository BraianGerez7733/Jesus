<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const isOpen = ref(false)
const panelRef = ref(null)

// Cambia esta base para dirigir el chat a un numero real de WhatsApp.
// Ejemplo con numero: 'https://wa.me/5491100000000'
const whatsappBaseUrl = 'https://wa.me/'

// Cambia aqui los textos y mensajes precargados de cada opcion.
const quickActions = [
  {
    label: 'Consulta general',
    message: 'Hola, quiero hacer una consulta general sobre el sitio.',
  },
  {
    label: 'Oración',
    message: 'Hola, necesito apoyo en oración.',
  },
  {
    label: 'Hablar por WhatsApp',
    message: 'Hola, quiero comunicarme por WhatsApp.',
  },
]

const buildWhatsAppUrl = (message) =>
  `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`

const actions = computed(() =>
  quickActions.map((action) => ({
    ...action,
    href: buildWhatsAppUrl(action.message),
  })),
)

const handleClickOutside = (event) => {
  if (!isOpen.value || !panelRef.value?.contains(event.target)) {
    isOpen.value = false
  }
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    ref="panelRef"
    class="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
  >
    <transition name="chat-fade">
      <div
        v-if="isOpen"
        class="w-[min(20rem,calc(100vw-2rem))] rounded-[1.5rem] border border-white/15 bg-slate-950/92 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur-xl"
      >
        <p class="pr-8 text-sm font-semibold text-white">
          Hola 👋 ¿En qué puedo ayudarte?
        </p>

        <div class="mt-4 flex flex-col gap-2">
          <a
            v-for="action in actions"
            :key="action.label"
            :href="action.href"
            target="_blank"
            rel="noreferrer"
            class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-emerald-300/40 hover:bg-emerald-400/10"
          >
            {{ action.label }}
          </a>
        </div>
      </div>
    </transition>

    <button
      type="button"
      class="chat-trigger inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-emerald-500 text-slate-950 shadow-xl shadow-emerald-950/30 transition hover:scale-[1.03] hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200/70"
      :aria-expanded="isOpen"
      aria-label="Abrir chat de WhatsApp"
      @click.stop="toggleChat"
    >
      <span class="sr-only">Abrir chat</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        class="h-7 w-7"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
      >
        <path d="M7 17.5 3.5 20l1.2-4.5A8.5 8.5 0 1 1 7 17.5Z" />
        <path d="M8.75 10.5h6.5" />
        <path d="M8.75 13.5h4.5" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.chat-trigger {
  transform: translateZ(0);
}

.chat-fade-enter-active,
.chat-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.chat-fade-enter-from,
.chat-fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}
</style>
