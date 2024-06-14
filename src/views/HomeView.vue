<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Logo from "@/components/Logo.vue";
import Filter from "@/components/Filter.vue";
import CardHome from "@/components/CardHome.vue";
</script>

<template>
  <Header></Header>
  <main>
    <Logo></Logo>
    <Filter></Filter>
    <CardHome></CardHome>
  </main>
  <Footer></Footer>
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
