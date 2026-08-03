<template>
  <header>
    <nav>
      <img src="/img/logo.png" alt="logo" class="logo" />
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house nav-icon"></i>
            <span class="nav-text">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/comprar">
            <i class="fa-solid fa-coins nav-icon"></i>
            <span class="nav-text">Comprar</span>
          </router-link>
        </li>
        <li>
          <a href="#conversor">
            <i class="fa-solid fa-arrow-right-arrow-left nav-icon"></i>
            <span class="nav-text">Conversor</span>
          </a>
        </li>
        <li>
          <router-link to="/dashboard">
            <i class="fa-solid fa-chart-bar nav-icon"></i>
            <span class="nav-text">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <i class="fa-solid fa-arrow-right-to-bracket nav-icon"></i>
            <span class="nav-text">Login</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  border-bottom: 1px solid var(--color-line-header);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: 0.5rem 0;
}

nav {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
  height: 45px;
  width: auto;
  object-fit: contain;
}

nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

nav ul a {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--color-link-header);
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

nav ul a:hover {
  color: var(--color-link-header-hover);
}

.nav-icon {
  opacity: 0;
  font-size: 0.9rem;
  transform: translateX(-15px) scale(0.5);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: var(--color-icon-header);
}

nav ul a:hover .nav-icon {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.nav-text {
  display: inline-block;
  transition: transform 0.3s ease;
}

nav ul a:hover .nav-text {
  transform: translateX(3px);
}

.cart-link {
  padding: 0.6rem 1rem;
  position: relative;
}

.cart-link i {
  font-size: 1.2rem;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.cart-link:hover i {
  transform: translateY(-4px) rotate(-12deg);
}
</style>