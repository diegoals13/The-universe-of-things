<script setup>
import { ref, onMounted } from "vue";

const planets = ref([]);

onMounted(async () => {
  const apiUrl = "https://dragonball-api.com/api/planets";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    planets.value = data.items;
  } catch (error) {
    console.error("Error fetching planets:", error);
  }
});
</script>

<template>
  <div class="row justify-content-center">
    <div
      id="cardcontainer"
      v-for="(planets, index) in planets"
      :key="index"
      class="row col-2 row-cols-1 row-cols-md-1 g-4"
    >
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
  max-width: 325px;
  max-height: 290px;
  min-width: 325px;
  min-height: 290px;
  margin: auto;
  justify-content: center;
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
  margin-left: 30px;
}
#contentimg {
  // background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 100px;
  border-radius: 20px;
  display:flex;
  justify-content: center;
  margin: 0 auto;
  width: 320px;
  height: 310px;

  
}

@media only screen and (max-width: 450px) {
  #cardcontainer {
    width: 180px;
    height: auto;
  }
  img {
    width: 80px;
    height: 180px;
    margin: auto;
  }
  .card-title {
    color: #ffb800;
  }
  p {
    color: white;
    font-weight: 600;
    font-size: 24px;
  }
}
</style>
