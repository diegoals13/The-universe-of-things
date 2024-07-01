<template>
  <div class="wrapper">
    <div class="modall" :class="{ 'visible': isOpen }">
      <p v-if="isOpen">{{ characters[currentCharecterIndex].description }}</p>
      <div class="btn btn-warning col-3" @click="openModal">Close</div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 mb-3" id="contprincipal">
      <div class="input-group mb-3" id="containersearch">
        <input v-model="filterName" type="text" id="search" class="form-control" placeholder="Filter by Name" />
      </div>
      <div class="input-group mb-3" id="containersearch">
        <input v-model="filterRace" type="text" id="search" class="form-control" placeholder="Filter by Race" />
      </div>
    </div>
    <div id="cardcontainer" v-for="(character, index) in filteredCharacters" :key="index"
      class="row col-2 row-cols-1 row-cols-md-1 g-4">
      <div class="col">
        <div class="card h-100" id="cardcontent">
          <div id="contentimg">
            <img :src="character.image" class="card-img-top" alt="Imagen del personaje" />
          </div>
          <div class="card-body">
            <h5 class="card-title">Nombre</h5>
            <p class="card-text">{{ character.name }}</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Raza</h5>
            <p class="card-text">{{ character.race }}</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">Máximo Ki</h5>
            <p class="card-text">{{ character.maxKi }}</p>
          </div>
          <div class="card-body">
            <button class="btn btn-warning col-5 mb-2 readBTN" @click="openModal(index)">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { usePageStore } from "@/stores/usePageStore";

const characters = ref([]);
const isOpen = ref(false);
const filterName = ref("");
const filterRace = ref("");
const filteredCharacters = ref([]);
const pageStore = usePageStore();
const currentPage = computed(() => pageStore.currentPage);
const currentCharecterIndex = ref(0);

const fetchCharacters = async (page) => {
  try {
    const apiUrl = `https://dragonball-api.com/api/characters?page=${currentPage.value}&limit=8`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    characters.value = data.items;
    applyFilter();
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
  }
};

const applyFilter = () => {
  filteredCharacters.value = characters.value.filter((character) => {
    const nameMatch = filterName.value
      ? character.name.toLowerCase().includes(filterName.value.toLowerCase())
      : true;
    const raceMatch = filterRace.value
      ? character.race.toLowerCase().includes(filterRace.value.toLowerCase())
      : true;
    return nameMatch && raceMatch;
  });
};

onMounted(() => {
  fetchCharacters(currentPage.value);
});

watch(currentPage, (newPage) => {
  fetchCharacters(newPage);
});

watch(characters, () => {
  applyFilter();
});

watch(filterName, () => {
  applyFilter();
});

watch(filterRace, () => {
  applyFilter();
});
const openModal = (index) => {
  isOpen.value = !isOpen.value;
  currentCharecterIndex.value = index;
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
}

.modall {
  opacity: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 3px solid black;
  border-radius: 15px;
  background-color: #222;
  color: rgb(204, 204, 204);
  text-shadow: 2px 2px 5px black;
  font-size: 25px;
  font-weight: 600;
  max-width: 750px;
  gap: 10px;
  padding: 30px 25px;
  box-shadow: 10px 6px 12px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.visible {
  opacity: 1;
}

.modall-content {
  // z-index: 999;
  width: 50%;
}

.btn {
  text-shadow: none;
}

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

#containersearch {
  border-radius: 12px !important;
  width: 150px !important;
  height: 40px !important;
  margin-right: 100px !important;
}

#search {
  background-color: rgba(217, 217, 217, 0.75) !important;
  border-color: #373a40 !important;
  border-radius: 12px !important;
}

#contprincipal {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
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

  #containersearch {
    border-radius: 12px !important;
    width: 100px !important;
    height: 30px !important;
    margin-right: 20px !important;
  }

  #search {
    width: 100px !important;
    height: 30px !important;
  }
}
</style>
