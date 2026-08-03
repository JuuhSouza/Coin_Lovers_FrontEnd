<template>
  <footer class="footer">
    <div class="footer-fade"></div>

    <div class="footer-content">
      <div class="footer-brand">
        <img src="/img/logo.png" alt="logo" class="footer-logo" />
        <p class="footer-text">
          Acompanhe o mercado de criptomoedas em tempo real.
        </p>
      </div>

      <div class="footer-links">
        <div class="footer-column">
          <h4>Navegação</h4>
          <router-link to="/">Home</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
          <router-link to="/carteira">Carteira</router-link>
          <router-link to="/comprar">Comprar</router-link>
        </div>

        <div class="footer-column">
          <h4>Sobre</h4>
          <a href="#">Quem somos</a>
          <a href="#">Criadores</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ anoAtual }} Coin Lovers. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
const anoAtual = new Date().getFullYear();
</script>

<style scoped>
.footer {
  position: relative;
  padding: 4rem 2rem 1.5rem;
  color: var(--color-year-footer);
  overflow: hidden;
  background-color: transparent;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: transparent;
  gap: 3rem;
}

.footer-brand {
  max-width: 300px;
}

.footer-logo {
  height: 40px;
  margin-bottom: 1rem;
}

.footer-text {
  color: var(--color-text-footer);
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 1px;
}

.footer-links {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-column h4 {
  color: var(--color-title-footer);
  margin-bottom: 0.5rem;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.footer-column a {
  color: var(--color-link-footer);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease, transform 0.3s ease;
  width: fit-content;
}

.footer-column a:hover {
  color: var(--color-link-footer-hover);
  transform: translateX(4px);
}

.footer-bottom {
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-line-footer);
  text-align: center;
}

.footer-bottom p {
  color: var( --color-text-footer);
  font-size: 1rem;
  letter-spacing: .5px;
}
</style>