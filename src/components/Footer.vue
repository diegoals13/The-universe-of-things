<script setup></script>

<template>
  <main>
    <footer class="text-center text-white" style="background-color: #45637d">
      <!-- Grid container -->

      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2024 Copyright
      </div>
      <!-- Copyright -->
    </footer>
    <TheWelcome />
  </main>
</template>
<style lang="scss">
footer {
  background-color: #373a40;
  border: rgba(0, 0, 0, 0.8) 2px solid;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;

  a {
    color: white;
    text-decoration: none;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000,
      1px -1px 0 #000, 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000;
    font-size: 15px;
    font-weight: 500;
  }

  a:hover {
    color: #ffb800;
    cursor: pointer;
  }
}
</style>
