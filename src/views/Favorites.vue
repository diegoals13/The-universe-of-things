<!-- <script setup>
import Logo from "@/components/Logo.vue";
import CardHome from "@/components/CardHome.vue";
import Pagebar from "@/components/Pagebar.vue";
</script>

<template>
  <main>
    
    <Logo></Logo>
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
</style> -->

<!-- FavoritesView.vue -->
<template>
  <div>
    <h2>Personajes Favoritos</h2>
    <div v-for="(character, index) in favorites" :key="index">
      <img :src="character.image" alt="Imagen del personaje" />
      <p>{{ character.name }}</p>
      <button @click="removeFromFavorites(character)">
        Eliminar de Favoritos
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from "@/stores/useFavoritesStore";

const favoritesStore = useFavoritesStore();
const favorites = favoritesStore.favorites;

const removeFromFavorites = (character) => {
  favoritesStore.removeFavorite(character);
};
</script>
