<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Logo from "@/components/Logo.vue";
import CardPlanet from '../components/CardPlanet.vue'
</script>
<template>

<Header></Header>
  <main>
  <Logo></Logo>
 <CardPlanet></CardPlanet>
   
 
  
  </main>
  <Footer></Footer>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
