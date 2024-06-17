<script setup>
</script>

<template>
  <main>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/"><a class="nav-link active" aria-current="page" href="#">Home</a></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/planets"> <a class="nav-link" href="#">Planets</a></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/login"> <a class="nav-link" href="#">Login</a></RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/favorites"> <a class="nav-link" href="#">Favorites</a></RouterLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    <TheWelcome />
  </main>
</template>