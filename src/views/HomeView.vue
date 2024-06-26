<script setup>
import Logo from "@/components/Logo.vue";

import CardHome from "@/components/CardHome.vue";
import Pagebar from "@/components/Pagebar.vue";
import ButtonScroll from "@/components/ButtonScroll.vue";

</script>

<template>
  <main>
    <Logo></Logo>
   
    <CardHome></CardHome>
    <ButtonScroll></ButtonScroll>
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
