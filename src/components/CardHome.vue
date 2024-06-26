<template>
  <div class="row justify-content-center">
    <div id="cardcontainer" v-for="(character, index) in characters" :key="index"
      class="row col-2 row-cols-1 row-cols-md-1 g-4">
      <div class="col">
        <div class="card h-100" id="cardcontent">
          <div id="contentimg">
            <img :src="character.image" class="card-img-top" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title">Name</h5>
            <p class="card-text">{{ character.name }}</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Race</h5>
            <p class="card-text">{{ character.race }}</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Max Ki</h5>
            <p class="card-text">{{ character.maxKi }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script setup>
import { ref, onMounted, computed, watch, onBeforeMount } from "vue";
import { usePageStore } from "@/stores/usePageStore";

const characters = ref([]);
const pageStore = usePageStore();
const currentPage = computed(() => pageStore.currentPage)

const fetchCharacters = async (page) => {
  try {
    const apiUrl = `https://dragonball-api.com/api/characters?page=${currentPage.value}&limit=8`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    characters.value = data.items;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};

onMounted(() => {
  fetchCharacters(currentPage.value);
})

watch(currentPage, (newPage) => {
  fetchCharacters(newPage);
})
</script>

<style lang="scss" scoped>
.cardBack {
  float: left;
  font-size: 1.2em;
  margin: 1% 0 0 1%;
  perspective: 800px;
  transition: all 0.3s ease 0s;
  width: 23.7%;
}

.cardBack :hover {
  transform: rotateY(180deg);
}

.card {
  background: #222;
  cursor: pointer;
  height: 300px;
  transform-style: preserve-3d;
  transition: transform 0.4s ease 0s;
  width: 100%;
  -webkit-animation: giro 1s 1;
  animation: giro 1s 1;
}

img {
  width: 120px;
  height: 300px;
  margin: auto;
}

#cardcontainer {

  background-color: rgba(78, 82, 88, 0.7);
  border: 3px solid rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  margin: 20px;
  width: 420px;

  transform-style: preserve-3d;
  transition: transform 0.4s ease 0s;
  -webkit-animation: giro 1s 1;
  animation: giro 1s 1;
}

#cardcontent {
  background-color: rgba(78, 82, 88, 0);
  border: 0;
}

.card-title {
  color: #ffb800;
  font-weight: 600;
  font-size: 24px;
}

p {
  color: white;
  font-weight: 600;
  font-size: 24px;
}

.card-body {
  padding: 10px;
  text-align: center;
}

#contentimg {
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 100px;
  border-radius: 20px;
}

.cardBox {
  float: left;
  font-size: 1.2em;
  margin: 1% 0 0 1%;
  perspective: 800px;
  transition: all 0.3s ease 0s;
  width: 23.7%;


}


@media only screen and (max-width: 450px) {
  #cardcontainer {
    width: 150px;
    height: auto;
  }

  img {
    width: 60px;
    height: 150px;
    margin: auto;
  }

  .card-title {
    color: #ffb800;
    font-size: 12px;
    margin-bottom: 5px;
  }

  p {
    color: white;
    font-size: 12px;
  }

  #contentimg {
  margin: auto;
  padding: 5px 20px;
  border-radius: 20px;
  }
  
  .card-body {
    padding: 5px;
    text-align: center;
  }
  .col {
    margin-top: 12px;
  }
}
</style>
