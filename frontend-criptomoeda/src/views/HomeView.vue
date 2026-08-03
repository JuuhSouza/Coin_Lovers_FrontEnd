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

  <div class="Card-section">
      <CardSobre />
    </div>
</template>

<script setup>
import Ranking from '../components/HomePage/Ranking.vue'
import Texto from '../components/HomePage/Texto.vue'
import CardSobre from '../components/HomePage/CardSobre.vue'
import AnimacaoFundo from '../components/AnimacaoFundo.vue'
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 80px);
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  gap: 4rem;
  background: transparent; /* deixa a animação aparecer atrás */
}

.texto-section {
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  background: transparent;
}

.ranking-section {
  position: relative;
  z-index: 1;
  width: 700px;
  flex-shrink: 0;
  /* pode ter background sólido no card interno — normal cobrir a animação ali */
}

.Card-section {
  position: relative;
  z-index: 1;
  background: transparent;
}
</style>