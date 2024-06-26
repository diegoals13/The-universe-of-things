<script setup>
import { ref, onMounted, computed, watch, onBeforeMount } from "vue";
import { usePageStore } from "@/stores/usePageStore";

const planets = ref([]);
const pageStore = usePageStore();
const currentPage = computed(() => pageStore.currentPage)

const fetchCharacters = async (page) => {
  try {
    const apiUrl = `https://dragonball-api.com/api/planets?page=${currentPage.value}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    planets.value = data.items;
  } catch (error) {
    console.error("Error fetching planets:", error);
  }
};

onMounted(() => {
  fetchCharacters(currentPage.value);
})

watch(currentPage, (newPage) => {
  fetchCharacters(newPage);
})
</script>

<template>
  <div class="row justify-content-center">
    <div id="cardcontainer" v-for="(planets, index) in planets" :key="index"
      class="row col-2 row-cols-1 row-cols-md-1 g-4">
      <div class="col">
        <div class="card h-100" id="cardcontent">
          <div id="contentimg">
            <img :src="planets.image" class="card-img-top" alt="..." />
          </div>
          <div class="card-body">
            <h5 class="card-title">Name</h5>
            <p class="card-text">{{ planets.name }}</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">destroyed</h5>
            <p class="card-text">{{ planets.isDestroyed }}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 325px;
  height: 290px;
  border: 8px solid rgba(55, 58, 64, 0.75);
}

#cardcontainer {
  background-color: rgba(78, 82, 88, 0.7);
  border: 3px solid rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  margin: 20px;
  width: 420px;
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
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 450px) {
  #cardcontainer {
    width: 150px;
    height: auto;
  }

  img {
    width: 100px;
    height: 80px;
    border: 4px solid rgba(55, 58, 64, 0.75);
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

  .card-body {
    padding: 5px;
    text-align: center;
  }

  .col {
    margin-top: 12px;
  }
}
</style>
