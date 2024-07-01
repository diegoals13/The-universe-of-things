<template>
  <main>
    <div class="row justify-content-center">
      <div
        id="cardcontainer"
        v-for="(character, index) in favorites"
        :key="index"
        class="row col-2 row-cols-1 row-cols-md-1 g-4"
      >
        <div class="col">
          <div class="card h-100" id="cardcontent">
            <div id="contentimg">
              <img
                :src="character.image"
                class="card-img-top"
                alt="Imagen del personaje"
              />
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
              <button @click="removeFromFavorites(character)">
                Eliminar de Favoritos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useFavoritesStore } from "@/stores/useFavoritesStore";

const favoritesStore = useFavoritesStore();
const favorites = computed(() => favoritesStore.favorites);

const removeFromFavorites = (character) => {
  favoritesStore.removeFavorite(character);
};
</script>

<style lang="scss" scoped>
main {
  background-image: url("../assets/img/backgroundImage.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  min-height: 960px;
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
  height: 650px;
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
  padding: 0;
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
#butonbox {
  width: 100%;
  display: flex;
  justify-content: end;
  #favorites {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    #star {
      width: 30px;
      height: 30px;
      margin: 0;
    }
  }
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
