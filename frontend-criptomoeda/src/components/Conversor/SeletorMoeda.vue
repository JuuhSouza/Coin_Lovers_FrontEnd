<!-- src/components/SeletorMoeda.vue -->
<template>
  <div class="seletor" ref="seletorRef">
    <input
      type="text"
      v-model="busca"
      @focus="aberto = true"
      :placeholder="placeholder"
      autocomplete="off"
    />

    <ul v-if="aberto && opcoesFiltradas.length" class="lista-sugestoes">
      <li
        v-for="op in opcoesFiltradas"
        :key="op.id"
        @mousedown="selecionar(op)"
      >
        {{ op.nome }} <span class="sigla">({{ op.sigla }})</span>
      </li>
    </ul>

    <div v-if="aberto && busca && !opcoesFiltradas.length" class="sem-resultado">
      Nenhuma moeda encontrada
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  modelValue: String,       
  opcoes: Array,           
  placeholder: {
    type: String,
    default: "Buscar moeda...",
  },
});

const emit = defineEmits(["update:modelValue"]);

const busca = ref("");
const aberto = ref(false);
const seletorRef = ref(null);

// Mostra o nome/sigla da moeda selecionada assim que o componente carrega
function sincronizarTexto() {
  const selecionada = props.opcoes.find((o) => o.id === props.modelValue);
  busca.value = selecionada ? `${selecionada.nome} (${selecionada.sigla})` : "";
}

onMounted(sincronizarTexto);

const opcoesFiltradas = computed(() => {
  const termo = busca.value.toLowerCase().trim();
  if (!termo) return props.opcoes;

  return props.opcoes.filter(
    (o) =>
      o.nome.toLowerCase().includes(termo) ||
      o.sigla.toLowerCase().includes(termo)
  );
});

function selecionar(opcao) {
  emit("update:modelValue", opcao.id);
  busca.value = `${opcao.nome} (${opcao.sigla})`;
  aberto.value = false;
}

// Fecha a lista se o usuário clicar fora do componente
function aoClicarFora(event) {
  if (seletorRef.value && !seletorRef.value.contains(event.target)) {
    aberto.value = false;
    sincronizarTexto();
  }
}

onMounted(() => document.addEventListener("click", aoClicarFora));
onUnmounted(() => document.removeEventListener("click", aoClicarFora));
</script>

<style scoped>
.seletor {
  position: relative;
}

input {
  width: 80%;
  background: #ff0101;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: white;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #ff9f0a;
}

.lista-sugestoes {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: #13131f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  max-height: 220px;
  overflow-y: auto;
  z-index: 10;
  list-style: none;
  margin: 0;
  padding: 0.4rem 0;
}

.lista-sugestoes li {
  padding: 0.6rem 1rem;
  cursor: pointer;
  color: white;
}

.lista-sugestoes li:hover {
  background: rgba(255, 159, 10, 0.15);
}

.sigla {
  color: rgba(255, 255, 255, 0.5);
}

.sem-resultado {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: #13131f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}
</style>