<template>
  <div class="particles-bg">
    <vue-particles id="tsparticles" :options="particlesOptions" />
  </div>
</template>

<script setup>
const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    number: { value: 50 },
    color: { value: "#FA9B00" },
    links: { enable: true, color: "#9ca3af" },
    move: { enable: true, speed: 0.3 },
  },
};
</script>

<style scoped>
.particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.particles-bg :deep(canvas) {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
</style>