<template>
  <div class="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
    <Navbar />
    
    <main class="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-cyan-500/20 to-transparent blur-[120px] -z-10 rounded-full opacity-50 pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
        <!-- Hero Section -->
        <h1 class="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8">
          Bienvenido al<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-sm">
            Futuro del Desarrollo
          </span>
        </h1>
        <p class="mt-6 max-w-2xl text-xl text-gray-400 mx-auto">
          Hemos construido esta experiencia deslumbrante utilizando Vue 3, Vite y la flexibilidad inigualable de Tailwind CSS.
        </p>
        
        <div class="mt-10 flex justify-center gap-4">
          <button class="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            Comenzar
          </button>
          <button class="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105">
            Código Fuente
          </button>
        </div>

        <!-- Components Grid Section -->
        <div class="mt-40 pt-16 border-t border-white/10 relative">
          <!-- Subtle glow behind components -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
          
          <h2 class="text-3xl sm:text-4xl font-bold mb-16 text-center text-white">Componentes Interactivos</h2>
          <div class="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24">
            <InteractiveCard />
            <Flashcard />
          </div>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import InteractiveCard from './components/InteractiveCard.vue';
import Flashcard from './components/Flashcard.vue';
</script>
<style>
/* Custom fonts or global styles could go here if needed */
body {
  margin: 0;
  padding: 0;
  background-color: #020617; /* slate-950 */
}
</style>
