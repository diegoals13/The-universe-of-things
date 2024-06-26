<script></script>

<template>
  <div>
    <button type="submit">
      <img src="../assets/img/filter-right.svg" alt="" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: flex-end;

  button {
    background-color: rgba(217, 217, 217, 0.75);
    border-color: #373a40;
    border-radius: 12px;
    width: 150px;
    height: 40px;
    margin-right: 50px;
    justify-content: end;

    img {
      height: 35px;
      width: 50px;
      margin-left: 90px;
    }
  }
}

@media only screen and (max-width: 450px) {
  button {
    width: 100px !important;
    height: 30px !important;
    margin-right: 20px !important;
  }

  img {
    width: 40px !important;
    height: 25px !important;
    margin-left: 50px !important;
  }
}
</style>
