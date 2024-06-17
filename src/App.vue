<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <header>
    <Header></Header>
    
  </header>
  
  <RouterView />
  <Footer></Footer>
</template>

