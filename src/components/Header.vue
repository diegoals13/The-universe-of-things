<!-- src/components/Header.vue -->
<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand">
    <div class="container-fluid justify-content-center">
      <ul class="navbar-nav mt-3 mb-3">
        <li class="nav-item me-5 ms-5">
          <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink>
        </li>
        <li class="nav-item me-5 ms-5">
          <RouterLink to="/planets" class="nav-link">Planets</RouterLink>
        </li>
        <li class="nav-item me-5 ms-5">
          <RouterLink to="/register" class="nav-link">Register</RouterLink>
        </li>
        <li class="nav-item me-5 ms-5">
          <RouterLink to="/login" class="nav-link">Login</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  background-color: #373a40 !important;
  border: 2px solid rgba(0, 0, 0, 0.8);
  max-height: 60px;

  .nav-link {
    color: white;
    text-decoration: none;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000,
      1px -1px 0 #000, 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      color: #ffb800;
    }

    &.activated {
      color: #ffb800;
    }
  }
}
</style>
