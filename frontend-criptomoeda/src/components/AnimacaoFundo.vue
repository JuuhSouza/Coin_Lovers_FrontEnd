<template>
  <vue-particles id="tsparticles" :options="particlesOptions" />
</template>

<script setup>
const particlesOptions = {
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 60,
  particles: {
    number: { value: 40 },
    color: { value: "#ffffff" },
    links: { enable: true, color: "#ffffff" },
    move: { enable: true, speed: 1 },
  },
};
</script>

<style scoped>
:deep(#tsparticles) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: -1 !important;
}
</style>