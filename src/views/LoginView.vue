<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleSubmit = async () => {
  try {
    await authStore.login(username.value, password.value);
    router.push('/');
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>-- src/views/LoginView.vue -->
<template>
  <main>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</main>
</template>



<style scoped>
main {
  background-image: url("/src/assets/img/backgroundImage.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  
}
/* Estilos para el login */
.error {
  color: red;
}
.login{
  color: brown;
}
</style>
