<template>
  <section class="services" data-aos="fade-up">
    <h1 class="services_title">Desenvolvedores</h1>

    <div class="container-box">
      <article
        v-for="(item, index) in dev"
        :key="item.name"
        class="card"
        :class="{ 'card-raised': index === 1 }"
      >
        <div class="card_top">
          <div class="card_badge"
          >
            <img
              :src="item.img"
              :alt
            />
          </div>
        </div>

        <h2 class="card_title">{{ item.name }}</h2>
        <p class="card_desc">{{ item.desc }}</p>
        <a :href="item.github"
        target="_blank" class="github"> <i class="fa-brands fa-github"></i> </a>
      </article>
    </div>
  </section>
</template>

<script setup>
import logo from '../../assets/img/icon-page.png'

const dev = [
  {
    name: "Júlia Souza",
    desc: "Desenvolvedora Front-end",
    github: "https://github.com/JuuhSouza",
    img: logo,
  },
  {
    name: "Marcos Yuri",
    desc: "Desenvolvedor Back-end",
    github: "https://github.com/JuuhSouza",
    img : logo,
  },
  {
    name: "Kaillany Fontana",
    desc: "Desenvolvedora Back-end",
    github: "https://github.com/JuuhSouza",
    img : logo,
  }
];
</script>

<style scoped>
.services {
  padding: 4rem 2rem;
  background-color: transparent;

}

.services_title {
  font-size: 2.6em;
  color: var(--color-dev-title);
  text-align: center;
  margin-bottom: 3rem;
}

.container-box {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1.5em;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 280px;
  max-width: 220px;
  padding: 2em;
  border: 1px solid var(--border-dev);
  border-radius: 20px;
  transition: all .3s ease;
  background: var(--background-color-dev);
  text-align: center;
}

.card_badge{
    background: var(--background-color-dev);
}

.card_badge img{
    width: 8rem;
    background: red;
    border-radius: 50%;
}

.card_title {
background: transparent;
  color: var(--color-dev-name);
  margin: 10px 0;
  font-weight: 550;
  font-size: 1.6em;
}

.card_desc {
background: transparent;
  color: var(--color-dev-p);
  font-size: 0.95em;
}

.github{
  background: var(--background-color-dev);
}

.github i{
margin: 1rem 0 0;
  background: var(--background-color-dev);
  color: var(--color-icon-dev);
  font-size: 2rem;
  transition: all .2s ease;

}

.github i:hover{
    transform: translateY(-5px);
    color: var(--color-dev-hover);
}
</style>