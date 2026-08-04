<template>
  <div class="hero">
    <svg
      viewBox="0 0 1200 400"
      class="wave-svg"
      preserveAspectRatio="none"
    >
      <path
        v-for="(wave, i) in waves"
        :key="i"
        :d="wave.path"
        class="wave"
        :style="{ animationDelay: `${i * 0.5}s` }"
      />
    </svg>
  </div>
</template>

<script setup>
const waves = [
  {
    path:
      "M0 200 C150 100 300 300 450 200 S750 100 900 200 S1050 300 1200 200"
  },
  {
    path:
      "M0 230 C150 130 300 330 450 230 S750 130 900 230 S1050 330 1200 230"
  },
  {
    path:
      "M0 260 C150 160 300 360 450 260 S750 160 900 260 S1050 360 1200 260"
  }
]
</script>

<style scoped>
.hero {
  height: 250px;
  overflow: hidden;
  background: transparent;
}

.wave-svg {
  width: 100%;
  height: 100%;
}

.wave {
  fill: none;
  stroke: #ff9d39;
  stroke-width: 2;
  opacity: 0.8;
  filter: drop-shadow(0 0 5px #ff9d39)
          drop-shadow(0 0 12px #ff9d39);
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;

  animation: drawWave 8s linear infinite;
}

@keyframes drawWave {
  from {
    stroke-dashoffset: 2000;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>