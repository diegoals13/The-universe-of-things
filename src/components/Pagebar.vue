<script setup>

import { usePageStore } from '@/stores/usePageStore';

const pageStore = usePageStore();

function changePage(number) {
  pageStore.setPage(number);
}
</script>
<template>
  <nav class="pagebar">
    <ul class="pagination">
      <li class="page-item"><a class="page-link text-center" @click="changePage(1)" href="#">1</a></li>
      <li class="page-item"><a class="page-link text-center" @click="changePage(2)" href="#">2</a></li>
      <li class="page-item"><a class="page-link text-center" @click="changePage(3)" href="#">3</a></li>
      <li class="page-item"><a class="page-link text-center" @click="changePage(4)" href="#">4</a></li>
      <li class="page-item"><a class="page-link text-center" @click="changePage(5)" href="#">5</a></li>
      <li class="page-item"><a class="page-link text-center" @click="changePage(6)" href="#">6</a></li>
      <li class="page-item"><a class="page-link text-center" @click="changePage(7)" href="#">7</a></li>
      <li class="page-item"><a class="page-link text-center" @click="changePage(8)" href="#">8</a></li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
.pagebar {
  width: 100%;
  height: 50px;

  ul {
    justify-content: center;
  }

  a {
    width: 80px;
    color: white;
    background-color: rgba(104, 109, 118, 0.8);
  }

  a:hover {
    transition-duration: 0.1ms !important;
    color: #ffb800;
  }
}
@media only screen and (max-width: 450px) {
  .pagebar {
  width: 20%;
  height: 50px;
  }
}
</style>
