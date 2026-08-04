<template>
  <div class="container">
      <AnimacaoFundo />

    <div class="texto-section">
      <Texto />
    </div>
    
    <div class="Banner-section">
      <Banner />
    </div>
  </div>

  <div class="Waves-section">
      <!-- <WavesSessoes /> -->
    </div>

  <div class="Card-section">
      <CardSobre />
    </div>
    
  <div class="ranking-section">
      <Ranking />
    </div>

  <div class="Criadores-section">
      <Criadores />
  </div>
</template>

<script setup>
import Ranking from '../components/HomePage/Ranking.vue'
import Texto from '../components/HomePage/Texto.vue'
import CardSobre from '../components/HomePage/CardSobre.vue'
import Criadores from '../components/Sobre/Criadores.vue';
import AnimacaoFundo from '../components/AnimacaoFundo.vue'
import Banner from '../components/HomePage/Banner.vue';
import WavesSessoes from '../components/HomePage/WavesSessoes.vue';
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
  background: transparent;
}

.texto-section {
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  background: transparent;
}

.Banner-section {
  position: relative;
  z-index: 1;
  width:700px;
  flex-shrink: 0;
}

.ranking-section {
  position: relative;
  z-index: 1;
  width: 98%;
  flex-shrink: 0;
}

.Waves-section {
  position: relative;
  margin-top: -15rem;
  z-index: 1;
  background: transparent;
}

.Card-section {
  position: relative;
  z-index: 1;
  background: transparent;
}

.Criadores-section{
  position: relative;
  z-index: 1;
  background: transparent;
}
</style>