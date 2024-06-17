<script setup>

import LoginForm from '../components/LoginForm.vue'
</script>

<template>

  <h1>login</h1>
  <main>
    
    <TheWelcome />
    <div class="container">
    <LoginForm />
    </div>
  </main>
  
</template>

<style scoped>
main{
  border: 1px solid black;
  display: flex;
  
  justify-content: center;
  align-items: center;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box
}
.container{
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>