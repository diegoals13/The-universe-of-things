<script setup></script>

<template>
  <div id="containerlogo">
    <img src="../assets/img/logodragonBall.png" alt="logodragonBall" />
  </div>
</template>
<style lang="scss">
#containerlogo {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 500px;
  max-height: 200px;
}
@media only screen and (max-width: 450px) {
  img {
    max-width: 200px;
    max-height: 80px;
  }
}
</style>
