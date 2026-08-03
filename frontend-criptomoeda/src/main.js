import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import './assets/Variables/variables.css'

import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(Particles, {
    init: async (engine) => {
        await loadSlim(engine); 
    },
});

app.use(router);
app.mount("#app");

AOS.init({
    duration: 800,   // duração da animação em ms
    once: true,      // anima só uma vez (não repete ao rolar de novo)
    offset: 100,     // distância em px antes do elemento entrar na tela pra disparar
});
