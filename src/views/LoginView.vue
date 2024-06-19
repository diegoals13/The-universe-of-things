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
      <!-- <h2>Login</h2> -->
      <form @submit.prevent="handleSubmit">
        <div>
          <input v-model="username" type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div>
          <input v-model="password" type="password" id="password" placeholder="password" />
        </div>
        <button type="submit" @click="showError" class="login-btn">Login</button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}

/* Estilos para el login */
.error {
  color: rgb(185, 36, 36);
  font-weight: 600;
  text-shadow: 1px 2px black;
}

.login {
  color: brown;
  background-color: rgba(128, 128, 128, 0.462);
  height: 521px;
  width: 467px;
  padding: 25px;
  border: 6px solid rgb(71, 71, 71);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* gap: 50px; */
  font-size: 20px;
  height: 75%;
  /* font-weight: 800;
  color: black; */
}

::placeholder {
  color: black;
  font-weight: 700;
}


.login-btn {
  padding: 10px 25px;
  background-color: #ffb800;
  font-size: 24px;
  font-weight: 700;
  border-radius: 15px;
  width: 200px;
  border: 3px solid black;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #d6a11a;
}

.login-btn:active {
  background-color: #917326;
}

input {
  padding: 7px 13px;
  border-radius: 13px;
  border: 3px solid black;
  width: 360px;
}

input:focus {
  outline: 3px solid rgba(255, 183, 0, 0);
  animation: party 5000ms infinite;
}

@keyframes party {
  50% {
    outline: 3px solid rgb(255, 183, 0);
  }
}

@keyframes partyText {
  50% {
    opacity: 0;
  }
}

@media only screen and (max-width: 600px) {
  .login {
    width: 80%;
    height: 60%;
  }

  input {
    width: 100%;
  }

  .login-btn {
    margin-top: 25px;
  }
}
</style>