<template>
  <div class="row justify-content-center">
    <div id="cardcontainer" v-for="(character, index) in characters" :key="index" class="row col-2 row-cols-1 row-cols-md-1 g-4">
      <div class="col ">
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
 import { ref, onMounted } from 'vue';

const characters = ref([]);

onMounted(async () => {
  const apiUrl = 'https://dragonball-api.com/api/characters';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    characters.value = data.items; 
  } catch (error) {
    console.error('Error fetching characters:', error);
  } 
}); 
</script>

<style lang="scss" scoped>
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
}
#cardcontent {
  background-color: rgba(78, 82, 88, 0.0);
  border: 0;
}
.card-title {
  color: #FFB800;
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
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 100px;
  border-radius: 20px;
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
    color: #FFB800;
  }
  p {
    color: white;
    font-weight: 600;
    font-size: 24px;
  }
}
</style>