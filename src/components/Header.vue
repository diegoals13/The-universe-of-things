<script setup></script>

<template>
  <nav class="navbar navbar-expand">
    <div class="container-fluid justify-content-center">
      <ul class="navbar-nav mt-3 mb-3">
        <li class="nav-item me-5 ms-5">
          <RouterLink to="/"
            ><a class="nav-link activated" aria-current="page" href="#"
              >Home</a
            ></RouterLink
          >
        </li>
        <li class="nav-item me-5 ms-5">
          <RouterLink to="/planets">
            <a class="nav-link" href="#">Planets</a></RouterLink
          >
        </li>
        <li class="nav-item me-5 ms-5">
          <RouterLink to="/login">
            <a class="nav-link" href="#">Login</a></RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
  <TheWelcome />
</template>

<style lang="scss">
.navbar {
  background-color: #373a40 !important;
  border: 2px solid rgba(0, 0, 0, 0.8);
  max-height: 60px;

  a {
    color: white;
    text-decoration: none;
    text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000,
      1px -1px 0 #000, 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000;
    font-size: 20px;
    font-weight: bold;
  }

  a :hover {
    color: #ffb800;
  }

  .activated {
    color: #ffb800;
  }
}
</style>
