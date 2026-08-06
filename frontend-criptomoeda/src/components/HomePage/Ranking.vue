<template>
  <section class="ranking-section" data-aos="fade-left">
    <div class="container">
      <div class="box-button">
        <h2 class="title">Ranking de Criptomoedas</h2>

        <button type="button" class="atualizar" @click="carregarRanking">
          Atualizar Ranking
        </button>
      </div>

      <div class="ranking-table">
        <div class="ranking-header">
          <span>#</span>
          <span>Nome</span>
          <span>Preço</span>
          <span>7d %</span>
          <span>Capitalização</span>
          <span>Volume 24h</span>
          <span>Gráfico 7d</span>
        </div>

        <div
          class="ranking-row"
          v-for="(coin, index) in top10"
          :key="coin.id"
        >
          <span class="posicao">
            {{ index + 1 }}
          </span>

          <div class="coin-name">
              <img
                :src="coin.icone"
                :alt="coin.nome"
                class="coin-icone">
              </img>

            <div class="coin-text">
              <strong>{{ coin.nome }}</strong>
              <small>{{ coin.sigla }}</small>
            </div>
          </div>

          <span class="preco">
            {{ formatarMoeda(coin.preco) }}
          </span>

          <span
            class="variacao"
            :class="coin.variacao7d >= 0 ? 'positivo' : 'negativo'"
          >
            {{ coin.variacao7d >= 0 ? '▲' : '▼' }}
            {{ coin.variacao7d }}%
          </span>

          <span class="market-cap">
            {{ coin.marketCap }}
          </span>

          <span class="volume">
            {{ coin.volume24h }}
          </span>

          <div class="mini-grafico">
            <span
              v-for="(ponto, i) in coin.sparkline"
              :key="i"
              class="barra"
              :class="coin.variacao7d >= 0 ? 'barra-positiva' : 'barra-negativa'"
              :style="{ height: `${ponto}px` }"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { getRanking } from "../../services/rankingService";

const ranking = ref([]);
const loading = ref(false);

const top10 = computed(() => ranking.value.slice(0, 10));

let interval = null;

const formatarMoeda = (valor) => {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const carregarRanking = async () => {
  try {
    loading.value = true;

    const response = await getRanking();

    ranking.value = response.data.sort(
      (a, b) => b.usuarios - a.usuarios
    );
  } catch (error) {
    console.error("Erro ao carregar ranking:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  carregarRanking();

  interval = setInterval(carregarRanking, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>


<style scoped>
.ranking-section {
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.container {
  max-width: 1600px;
  padding: 1.5rem 2rem;
  overflow-x: auto;
}

.box-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.title {
  color: var(--color-ranking);
  font-size: 2rem;
  margin: 0;
}

.atualizar {
  background-color: var(--button-background-color-ranking);
  color: var(--button-color-atualizar);
  font-size: 1rem;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
}

.atualizar:hover {
  opacity: 0.8;
  transform: translateY(-2px);
}

.ranking-table {
  min-width: 1100px;
  display: flex;
  flex-direction: column;
}

.ranking-header,
.ranking-row {
  display: grid;
  grid-template-columns: 50px 220px 140px 90px 90px 90px 160px 150px 130px;
  align-items: center;
  gap: 6rem;
}

.ranking-header {
  color: var(--title-table);
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.ranking-row {
  color: var(--color-ranking);
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  transition: 0.3s ease;
}

.posicao {
  color: var(--color-position);
}

.coin-name {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.coin-icone {
  width: 34px;
  height: 34px;
  object-fit: contain;
}

.coin-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.coin-text strong {
  font-size: 1rem;
  letter-spacing: 2px;
  color: var(--color-ranking);
}

.coin-text small {
  font-size: 1rem;
  color: var(--color-sigla);
}

.preco,
.market-cap,
.volume {
  color: var(--color-ranking);
}

.variacao {
  font-size: 1rem;
}

.positivo {
  color: var(--color-positivo);
}

.negativo {
  color: var(--color-negativo);
}

.mini-grafico {
  height: 42px;
  display: flex;
  align-items: end;
  gap: 3px;
}

.barra {
  width: 5px;
  border-radius: 8px;
  opacity: 0.9;
}

.barra-positiva {
  background: var(--color-positivo);
}

.barra-negativa {
  background: var(--color-negativo);
}
</style>