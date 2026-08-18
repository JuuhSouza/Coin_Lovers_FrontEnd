<template>
  <header>
    <Header />
  </header>

  <main class="content">
    <router-view />
  </main>

  <footer>
        <Footer />
  </footer>

</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.content {
  margin-top: 80px;
}
</style>