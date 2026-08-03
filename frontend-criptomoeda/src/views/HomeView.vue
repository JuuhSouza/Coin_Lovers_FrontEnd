<template>
  <div class="container">
    <AnimacaoFundo />
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
/* import Conversor from '../components/Conversor/Conversor.vue' */
import AnimacaoFundo from '../components/AnimacaoFundo.vue'
</script>

<style scoped>
.container {
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 80px);
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  gap: 4rem;
  background: transparent;
}

.texto-section {
  position: relative;
  z-index: 1;
  flex: 1;
  background: transparent;
  min-width: 0;
}

.ranking-section {
  position: relative;
  z-index: 1;
  width: 700px;
  flex-shrink: 0;
  background: transparent;
}

.hero {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>