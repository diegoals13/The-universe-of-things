<script setup></script>

<template>
  <main>
    <footer class="text-center text-white p-3">
      <a
        href="https://web.dragonball-api.com/"
        class="text-center"
        target="_blank"
        >DRAGON BALL Z ©</a
      >
    </footer>
    <TheWelcome />
  </main>
</template>
<style lang="scss">
footer {
  background-color: #373a40;
  border: rgba(0, 0, 0, 0.8) 2px solid;
  position: relative;
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
