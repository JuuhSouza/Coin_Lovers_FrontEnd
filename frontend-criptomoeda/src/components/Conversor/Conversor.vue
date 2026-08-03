<template>
  <div class="conversor">
    <div class="form">
      <div class="campo">
        <label>Valor</label>
        <input
          type="number"
          v-model.number="valor"
          min="0"
          placeholder="0.00"
        />
      </div>

      <div class="linha-moedas">
        <div class="campo">
          <label>De</label>
          <SeletorMoeda
            v-model="moedaOrigem"
            :opcoes="todasAsOpcoes"
            placeholder="Buscar moeda de origem..."
          />
        </div>

        <button class="btn-inverter" @click="inverter">⇅</button>

        <div class="campo">
          <label>Para</label>
          <SeletorMoeda
            v-model="moedaDestino"
            :opcoes="todasAsOpcoes"
            placeholder="Buscar moeda de destino..."
          />
        </div>
      </div>

      <div class="resultado">
        {{ valor || 0 }} {{ labelMoeda(moedaOrigem) }} =
        <strong>{{ resultado }} {{ labelMoeda(moedaDestino) }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
  getCotacoes,
  CRIPTOMOEDAS,
  MOEDAS_FIAT,
} from "../../services/conversorService";
import SeletorMoeda from "./SeletorMoeda.vue";

const cotacoes = ref({});

// Junta cripto + fiat num formato único pro autocomplete
const todasAsOpcoes = computed(() => [
  ...CRIPTOMOEDAS,
  ...MOEDAS_FIAT.map((f) => ({ id: f, nome: f.toUpperCase(), sigla: f.toUpperCase() })),
]);

const valor = ref(1);
const moedaOrigem = ref("bitcoin");
const moedaDestino = ref("usd");

async function carregarCotacoes() {
  try {
    cotacoes.value = await getCotacoes();
  } catch (e) {
    console.error("Erro ao carregar cotações:", e);
  }
}

function precoEmUsd(moeda) {
  if (moeda === "usd") return 1;
  if (MOEDAS_FIAT.includes(moeda)) {
    return cotacoes.value.bitcoin?.usd / cotacoes.value.bitcoin?.[moeda];
  }
  return cotacoes.value[moeda]?.usd ?? 0;
}

const resultado = computed(() => {
  if (!valor.value) return "0.00";

  const origemEmUsd = precoEmUsd(moedaOrigem.value);
  const destinoEmUsd = precoEmUsd(moedaDestino.value);

  if (!origemEmUsd || !destinoEmUsd) return "0.00";

  const valorEmUsd = valor.value * origemEmUsd;
  const convertido = valorEmUsd / destinoEmUsd;

  return convertido.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  });
});

function labelMoeda(moeda) {
  const encontrada = todasAsOpcoes.value.find((o) => o.id === moeda);
  return encontrada ? encontrada.sigla : moeda.toUpperCase();
}

function inverter() {
  [moedaOrigem.value, moedaDestino.value] = [
    moedaDestino.value,
    moedaOrigem.value,
  ];
}

onMounted(carregarCotacoes);
</script>

<style scoped>
.conversor {
  background: #1e1e2f;
  border-radius: 12px;
  padding: 2rem;
  max-width: 700px;
  color: white;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.campo label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
}

input[type="number"] {
  background: #13131f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: white;
  font-size: 1rem;
}

.btn-inverter {
  flex-shrink: 0;
  margin-bottom: 0.1rem;
  background: #ff9f0a;
  border: none;
  border-radius: 8px;
  margin-left: -2rem;
  width: 36px;
  height: 36px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
}

.resultado {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.resultado strong {
  color: #ff9f0a;
  font-size: 1.2rem;
}

.linha-moedas {
  display: flex;
  align-items: flex-end;
  gap: 0.75rem;
}

.linha-moedas .campo {
  flex: 1;
  min-width: 0;
}

</style>