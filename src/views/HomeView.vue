<script setup>
import Logo from "@/components/Logo.vue";
import Filter from "@/components/Filter.vue";
import CardHome from "@/components/CardHome.vue";
import Pagebar from "@/components/Pagebar.vue";

/*  import { userCharacterStore } from "@/stores/superheroes";  */
/* 
 const characterStore = userCharacterStore();
characterStore.get()  */
</script>

<template>
  <main>
    <Logo></Logo>
    <Filter></Filter>
    <CardHome></CardHome>
    <Pagebar></Pagebar>

    <!--   <div v-if="characterStore.isLoading">

      <div>{{ characterStore.character.name}}</div>

      <ul>

  <li v-for="character in characterStore.character">

    <img :src="character.images.xs" alt=""> 
     {{ character.name }}; 
  
    
   </li>
  
      </ul>


    </div>
    <div v-else>Loading</div> -->
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
