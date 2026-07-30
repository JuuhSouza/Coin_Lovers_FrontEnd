<template>
  <div class="container">
    <div class="texto-section">
      <Texto />
    </div>

    <div class="ranking-section">
      <Ranking />
    </div>
  </div>
</template>

<script setup>
import Ranking from '../components/HomePage/Ranking.vue'
import Texto from '../components/HomePage/Texto.vue'
</script>

<style scoped>
.container {
  display: flex;
/*   justify-content: space-between; */
  align-items: center;
  min-height: calc(100vh - 80px);
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  gap: 4rem;
}

.texto-section {
  flex: 1;
  min-width: 0;
}

.ranking-section {
  width: 700px;
  flex-shrink: 0;
}
</style>