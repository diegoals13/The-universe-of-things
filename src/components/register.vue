<script setup>
import { useAuthStore } from '../stores/authStore'; // Asegúrate de que la ruta sea correcta
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');
const router = useRouter();

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match';
    return;
  }

  try {
    authStore.register(username.value, password.value);
    error.value = 'User registered successfully';
    router.push('/login'); // Redirigir al usuario a la página de login
  } catch (err) {
    error.value = err.message;
  }
};
</script>

<template>
  <main>
    <div class="login">
      <form @submit.prevent="handleSubmit">
        <div>
          <input
            v-model="username"
            type="text"
            id="username"
            placeholder="Enter new username"
            required
          />
        </div>
        <div>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <input
            v-model="confirmPassword"
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            required
          />
        </div>
        <button type="submit" class="login-btn">Register</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </main>
</template>

<style scoped>
/* Tus estilos */
</style>
