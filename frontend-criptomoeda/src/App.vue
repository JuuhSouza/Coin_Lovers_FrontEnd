<template>
  <Header />

  <main class="content">
    <router-view />
  </main>
</template>

<script setup>
import Header from './components/HomePage/Header.vue'
</script>

<style>
.content {
  margin-top: 80px;
}
</style>