<template>
  <div>
    <button @click="loadCharacters">Load Characters</button>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="character in characters" q :key="character.id">
          {{ character.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useCharacterStore } from "@/stores/character";

const characterStore = useCharacterStore();
const { characters, isLoading, get } = characterStore;

const loadCharacters = async () => {
  await get();
};

onMounted(() => {
  loadCharacters();
});
</script>
