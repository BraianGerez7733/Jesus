<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import CloudBackdrop from './components/CloudBackdrop.vue'
</script>

<template>
  <div class="relative flex min-h-screen flex-col">
    <CloudBackdrop />
    <TheNavbar />
    <main class="relative z-10 flex-1">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>
