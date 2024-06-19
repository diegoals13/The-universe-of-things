<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>


<style>
/* Estilos globales */
</style>
