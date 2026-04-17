<template>
  <div class="relative group w-80 h-96 bg-slate-800 rounded-3xl p-8 flex flex-col justify-end overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer border border-white/5">
    <!-- Gradient Overlay Background -->
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
    
    <!-- Hover Glow -->
    <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

    <!-- Content -->
    <div class="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <div class="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center mb-4 text-cyan-400">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-white mb-2">Interactiva</h3>
      <p class="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        Esta tarjeta revela más contenido y detalles cuando pasas el cursor. Diseño moderno y minimalista con sombras estilizadas.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>
