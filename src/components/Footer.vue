<template>
  <footer class="bg-slate-950 border-t border-white/5 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex justify-center md:justify-start">
          <span class="text-2xl tracking-tighter font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            NUEVO PROYECTO
          </span>
        </div>
        <div class="mt-8 md:mt-0">
          <p class="text-center text-gray-400 text-sm">
            &copy; {{ new Date().getFullYear() }} Creado con Vue 3 y Tailwind CSS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
