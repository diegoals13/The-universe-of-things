

import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useCharacterStore = defineStore('planets', () => {
  const uri = 'https://dragonball-api.com/api/planets/'; // URL correcta para la API de personajes

  const planets = ref([]);
  const isLoading = ref(false);

  async function get() {
    try {
      isLoading.value = true;
      const response = await fetch(uri); // Fetch sin 'all.json' al final
      const data = await response.json();

      if (response.status == 200) {
        planets.value = data;
      }
    } catch (error) {
      throw new Error("Error loading api:" + error);
    } finally {
      isLoading.value = false;
    }
  }

  return { planets, isLoading, get };
});
