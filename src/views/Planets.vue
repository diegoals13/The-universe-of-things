<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>
<template>

  <main>
    
   <Header></Header>
   <H1>PLANETS</H1>
   <Footer></Footer>
    <TheWelcome />
  </main>

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
