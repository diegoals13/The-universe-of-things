<script setup>
import Logo from "@/components/Logo.vue";
import Filter from "@/components/Filter.vue";
import CardHome from "@/components/CardHome.vue";
import Pagebar from "@/components/Pagebar.vue";


</script>

<template>
  <main>
    <Logo></Logo>
    <Filter></Filter>
    <CardHome></CardHome>
    <Pagebar></Pagebar>

  </main>
</template>
<style lang="scss">
main {
  background-image: url("/src/assets/img/backgroundImage.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
</style>
