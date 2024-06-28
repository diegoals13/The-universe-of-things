// src/stores/useFavoritesStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);

  const addFavorite = (character) => {
    if (!favorites.value.some((fav) => fav.id === character.id)) {
      favorites.value.push(character);
    }
  };

  const removeFavorite = (character) => {
    favorites.value = favorites.value.filter((fav) => fav.id !== character.id);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
});
