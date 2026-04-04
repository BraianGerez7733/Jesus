<script setup>
import { RouterLink } from 'vue-router'
import cloudsBg from '@/assets/images/clouds.jpg'
</script>

<template>
  <main 
    class="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-cover bg-center"
    :style="{ backgroundImage: `url(${cloudsBg})` }"
    role="main"
  >
    <!-- Overlay para mejor contraste -->
    <div class="absolute inset-0 bg-black/20"></div>
    
    <!-- Contenido con z-index -->
    <div class="relative z-10">

    <h1 class="text-5xl md:text-6xl font-bold text-yellow-300 mb-1">
      Jesús es el Rey
    </h1>

    <h2 class="text-4xl md:text-5xl font-semibold text-white mb-6">
      La Biblia · RVR 1960
    </h2>

    <p class="text-lg text-gray-100 max-w-2xl mb-8">
      Un espacio claro y accesible para leer, estudiar y meditar en las Escrituras,
      centrado en Jesucristo.
    </p>

    <div class="flex gap-4 flex-wrap justify-center">
      <RouterLink 
        to="/lectura" 
        class="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-semibold"
      >
        Comenzar lectura
      </RouterLink>

      <RouterLink 
        to="/evangelios" 
        class="px-6 py-3 rounded-xl border-2 border-white text-white hover:bg-white/20 transition font-semibold"
      >
        Explorar evangelios
      </RouterLink>

      <RouterLink
        to="/diferencias"
        class="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition font-semibold"
      >
        Diferencias con otras religiones
      </RouterLink>
    </div>
    </div>

  </main>
</template>
