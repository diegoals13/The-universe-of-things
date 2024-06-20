<script setup>
import Logo from "@/components/Logo.vue";
import CardPlanet from "../components/CardPlanet.vue";
import Pagebar from "@/components/Pagebar.vue";
</script>
<template>
  <main>
    <Logo></Logo>
    <CardPlanet></CardPlanet>
    <Pagebar></Pagebar>
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
