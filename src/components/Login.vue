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
import { ref } from "vue";
import { useUserStore } from "../store";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const error = ref(null);
    const userStore = useUserStore();

    const login = () => {
      const success = userStore.loginUser(username.value, password.value);
      if (!success) {
        error.value = "Invalid username or password";
      } else {
        error.value = null;
      }
    };

    return {
      username,
      password,
      login,
      error,
    };
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
