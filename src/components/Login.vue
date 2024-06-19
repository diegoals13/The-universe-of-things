<!-- src/components/Login.vue -->
<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  
  export default {
    name: 'Login',
    setup() {
      const username = ref('');
      const password = ref('');
      const error = ref('');
  
      const authStore = useAuthStore();
  
      const handleLogin = () => {
        if (!authStore.login(username.value, password.value)) {
          error.value = 'Invalid username or password';
        } else {
          error.value = '';
        }
      };
  
      return { username, password, error, handleLogin };
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  