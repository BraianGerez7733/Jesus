<template>
  <div class="group w-80 h-96 [perspective:1000px] cursor-pointer">
    <div class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      
      <!-- Front of card -->
      <div class="absolute inset-0 w-full h-full bg-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center border border-white/5 shadow-xl [backface-visibility:hidden]">
        <div class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 rotate-12">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white text-center">¿Qué es Vue 3?</h3>
        <p class="mt-4 text-sm text-gray-400 font-medium tracking-wider uppercase">Pasa el cursor ➔</p>
      </div>

      <!-- Back of card -->
      <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <h3 class="text-2xl font-black text-white mb-4">Vue.js 3</h3>
        <p class="text-blue-50 text-base leading-relaxed">
          Es un framework progresivo de JavaScript utilizado para construir interfaces de usuario e interfaces de aplicaciones web de una sola página (SPA).
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
</script>
