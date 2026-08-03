<template>
  <section class="ranking-section" data-aos="fade-left">
    <div class="container">
      <div class="box-button">
        <h2 class="title">Ranking de Criptomoedas</h2>
        <button class="atualizar" @click="carregarRanking">
          Atualizar Ranking
        </button>
      </div>

      <div class="ranking-list">
        <div
          class="ranking-box"
          v-for="(coin, index) in top10"
          :key="coin.id"
        >
          <span class="posicao"># {{ index + 1 }}</span>
          <span class="nome">{{ coin.nome }}</span>
          <span class="sigla">({{ coin.sigla }})</span>
          <span class="usuarios">{{ coin.variacao24h }}%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { getRanking } from "../../services/rankingService";

const ranking = ref([]);

// Pega só os 10 primeiros do array já ordenado
const top10 = computed(() => ranking.value.slice(0, 10));

let interval;

const carregarRanking = async () => {
  const response = await getRanking();

  ranking.value = response.data.sort(
    (a, b) => b.usuarios - a.usuarios
  );
};

onMounted(() => {
  carregarRanking();

  interval = setInterval(() => {
    carregarRanking();
  }, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});

</script>

<style scoped>
.ranking-section {
  padding: 2rem;
  margin-top: -5rem;
  display: flex;
  justify-content: flex-end;
}

.container {
  width: 100%;
  max-width: 1900px;
  background-color: #1e1e2f;
  border-radius: 12px;
  padding: 1.5rem 2rem;
}

.box-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.title {
  color: var(--color-ranking);
  font-size: 1.5rem;
  margin: 0;
}

.atualizar {
  background-color: var(--background-color-ranking);
  color: var(--button-color-atualizar);
  font-size: 1rem;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition:all .3s ease;
}

.atualizar:hover {
  opacity: .3;
}

.ranking-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ranking-box {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: var(--color-ranking);
}

.posicao {
  color: var(--color-position);
  min-width: 30px;
}

.nome {
  font-weight: 400;
  letter-spacing: 1px;
}

.sigla {
  color: var(--color-sigla);
}

.usuarios {
  margin-left: auto;
  color: var(--color-usuarios);
  font-weight: 200;
  letter-spacing: 1px;
}
</style>