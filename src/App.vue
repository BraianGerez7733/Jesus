<template>
  <div class="app-bg min-h-screen">
    <router-view />
  </div>
</template>

<style>
.app-bg {
  min-height: 100vh;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)),
    url('./assets/fondo-nubes.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>