<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'

const form = ref({ nombre: '', email: '', mensaje: '', motivo: 'duda' })
const enviado = ref(false)

function enviar() {
  enviado.value = true
  setTimeout(() => {
    enviado.value = false
    form.value = { nombre: '', email: '', mensaje: '', motivo: 'duda' }
  }, 4000)
}
</script>

<template>
  <PageHeader
    eyebrow="Contacto"
    title="Escríbenos, nos encanta leerte"
    description="¿Una duda, una sugerencia o una historia que compartir? Completa el formulario y volveremos a ti."
    image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80"
  />

  <section class="mx-auto max-w-7xl px-6 py-14 sm:px-8">
    <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <form class="surface-card space-y-5" @submit.prevent="enviar">
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="section-heading text-slate-500">Nombre</span>
            <input
              v-model="form.nombre"
              required
              type="text"
              placeholder="Tu nombre"
              class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-4 focus:ring-sky-100"
            />
          </label>
          <label class="block">
            <span class="section-heading text-slate-500">Email</span>
            <input
              v-model="form.email"
              required
              type="email"
              placeholder="tu@correo.com"
              class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-4 focus:ring-sky-100"
            />
          </label>
        </div>

        <fieldset>
          <legend class="section-heading text-slate-500">Motivo</legend>
          <div class="mt-2 flex flex-wrap gap-2">
            <label
              v-for="opt in ['duda', 'sugerencia', 'oración', 'colaborar']"
              :key="opt"
              class="cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition"
              :class="
                form.motivo === opt
                  ? 'border-sky-300 bg-sky-500 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:text-sky-700'
              "
            >
              <input v-model="form.motivo" class="hidden" type="radio" :value="opt" />
              {{ opt }}
            </label>
          </div>
        </fieldset>

        <label class="block">
          <span class="section-heading text-slate-500">Mensaje</span>
          <textarea
            v-model="form.mensaje"
            required
            rows="5"
            placeholder="Cuéntanos cómo podemos ayudarte..."
            class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-4 focus:ring-sky-100"
          ></textarea>
        </label>

        <div class="flex flex-wrap items-center gap-3">
          <button type="submit" class="btn-primary">
            Enviar mensaje
            <span aria-hidden="true">→</span>
          </button>
          <span v-if="enviado" class="text-sm font-semibold text-emerald-600">
            ¡Gracias! Recibimos tu mensaje.
          </span>
        </div>
      </form>

      <aside class="space-y-5">
        <div class="surface-card">
          <span class="chip">Respuesta rápida</span>
          <h3 class="font-display mt-4 text-2xl font-bold text-slate-900">Respondemos en 48 h</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">
            Este formulario es una demo: en producción puede conectarse con cualquier servicio
            (correo, formspree, una API propia, etc.).
          </p>
        </div>
        <div class="surface-card">
          <span class="chip-amber">Motivos comunes</span>
          <ul class="mt-4 space-y-3 text-sm text-slate-700">
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-sky-400"></span>
              Dudas sobre pasajes bíblicos.
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-violet-400"></span>
              Ideas para nuevas flashcards o quizzes.
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
              Peticiones de oración.
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-1 h-2 w-2 rounded-full bg-rose-400"></span>
              Colaboraciones educativas.
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>
