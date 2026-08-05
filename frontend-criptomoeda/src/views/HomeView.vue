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
  min-width: 490px;
  background: transparent;
}

.Banner-section {
  width:900px;
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

@media (max-width: 1208px){
  .container {
  margin: 0;
  padding: 0;
}

.Banner-section {
/*   width: 100%; */
  margin-left: -5rem;
}
}

/* @media (max-width: 1026px){
  .container {
  margin: 0;
  padding: 0;
  gap: 0 0 2rem;
}

.Banner-section {
  margin-left: -5rem;
}
} */

@media (max-width: 992px){
  .container {
  display: flex;
  flex-direction: column;
}

.texto-section {
  min-width: 490px;
}

 .Banner-section {
  display: none;
}

.Card-section{
  margin-top: -36rem;
 }
}

@media (max-width: 848px){
 .Banner-section {
  display: none;
}

.Card-section{
  margin-top: -36rem;
 }
}

@media (max-width: 624px){
  .Banner-section {
  display: none;
}

 .Card-section{
  margin-top: -42rem;
 }
}
</style>