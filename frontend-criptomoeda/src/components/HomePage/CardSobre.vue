<template>
  <section class="services" data-aos="fade-up">
    <h1 class="services_title">Conheça nossos serviços</h1>

    <div class="container-box">
      <article
        v-for="(item, index) in services"
        :key="item.title"
        class="card"
        :class="{ 'card-raised': index === 1 }"
      >
        <div class="card_top">
          <div class="card_badge">
            <i :class="item.icon"></i>
          </div>
        </div>

        <h2 class="card_title">{{ item.title }}</h2>
        <p class="card_desc">{{ item.desc }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "Ranking em tempo real",
    desc: "Acompanhe as criptomoedas mais quentes do momento, atualizadas direto do mercado.",
    icon: "fa-solid fa-ranking-star",
    
  },
  {
    title: "Conversor instantâneo",
      desc: "Converta entre moedas e criptoativos sem sair da página, com cotação sempre atual.",
      icon: "fa-solid fa-arrow-right-arrow-left",
  },
  {
    title: "Carteira exclusiva",
    desc: "Monte sua carteira personalizada e acompanhe sua posição com segurança.",
    icon: "fa-solid fa-wallet",
  },
];
</script>

<style scoped>
.services {
  padding: 4rem 2rem;
  margin-top: -10rem;
  background-color: transparent;
}

.services_title {
  font-size: 2.6em;
  margin: 0 32rem;
  color: var(--color-card-title);
  background-color: transparent;
  text-align: center;
  margin-bottom: 3rem;
}

.container-box {
  display: flex;
  background-color: transparent;
  align-items: flex-end;
  justify-content: center;
  gap: 1.5em;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 280px;
  max-width: 320px;
  padding: 2em;
  border: 1px solid var(--border-card);
  border-radius: 20px;
  transition: all .3s ease;
  background: var(--background-color-card);
  text-align: center;
}

.card-raised {
    margin-bottom: 5em;
}

.card_badge{
  background: var(--background-color-ranking);
}

.card_badge i {
  background:var(--background-color-card);
  font-size: 3rem;
  color: var(--color-icon-card);
  margin: 0 auto 12px;
  display: block;
}

.card_title {
  background: transparent;
  color: var(--color-card-title);
  margin: 12px 0;
  font-weight: 550;
  font-size: 1.3em;
}

.card_desc {
  background: transparent;
  color: var(--color-card-p);
  font-size: 0.95em;
  padding: 0 0.5em;
}

@media (max-width: 1341px){
  .services_title {
  margin: 0 2rem;
  margin-bottom: 2rem;
}

 .services {
  padding: 1rem 2rem;
}

.card {
  flex: 1 1 200px;
  max-width: 320px;
  padding: 2em;
}
}

@media (max-width: 992px){
  .services {
  padding: 1rem 2rem;
  margin-top: 12rem;
}

.services_title {
  margin: 0 2rem;
  margin-bottom: 4rem;
}

.card {
  flex: 1 1 200px;
  max-width: 320px;
  padding: 2em;
}

.card_desc {
  font-size: 1em;
}
}

@media (max-width: 924px){
.services {
  padding: 2rem 2rem;
  margin-top: 14rem;
  background-color: transparent;
}

.services_title {
  font-size: 3em;
  margin: 0 2rem;
  margin-top: -5rem;
  margin-bottom: 2rem;
}

.container-box {
  flex-direction: row;
}

.card {
  flex: 1 1 200px;
  max-width: 320px;
  padding: 2em;

}

.card-raised {
    margin-bottom: 0;
}

.card_badge i {
  font-size: 4rem;
  color: var(--color-icon-card);
  margin: 0 auto 12px;
  display: block;
}

.card_title {
  font-size: 1.5em;
}

.card_desc {
  font-size: 1.2em;
}
}

@media (max-width: 624px){
.services {
  padding: 2em 2em;
  margin-top: 18rem;
}

.services_title {
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 2rem;
}
}

</style>