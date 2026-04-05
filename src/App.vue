<template>
  <div class="min-h-screen">
    <router-view />
    <FloatingChat />
  </div>
</template>

<script setup>
import FloatingChat from './components/FloatingChat.vue'
</script>
