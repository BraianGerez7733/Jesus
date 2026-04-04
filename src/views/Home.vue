<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-blue-900 via-slate-800 to-purple-900">

    <h1 class="text-5xl md:text-6xl font-bold text-yellow-300 mb-1">
      Jesús es el Rey
    </h1>

    <h2 class="text-4xl md:text-5xl font-semibold text-white mb-6">
      La Biblia · RVR 1960
    </h2>

    <p class="text-lg text-gray-200 max-w-2xl mb-8">
      Un espacio claro y accesible para leer, estudiar y meditar en las Escrituras,
      centrado en Jesucristo.
    </p>

    <div class="flex gap-4">
      <button class="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition">
        Comenzar lectura
      </button>

      <button class="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition">
        Explorar evangelios
      </button>

      <RouterLink
        to="/diferencias"
        class="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition"
      >
        Diferencias con otras religiones
      </RouterLink>
    </div>

  </main>
</template>
