<script setup>
import PlanetCard from '@/components/PlanetCard.vue'

</script>
<template>

  <main>
   <H1>PLANETS</H1>
   <PlanetCard/>
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
main{
  background-color: darkcyan;
}
</style>

