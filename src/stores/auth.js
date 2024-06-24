// src/stores/auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth2", {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(username, password) {
      // Aquí simulas una autenticación
      // Puedes reemplazar esto con una llamada a una API real
      // Puedes reemplazar esto con una llamada a una API real
      if (username === "felipe" && password === "12345") {
        this.user = { username };
        this.token = "example-token";
      } else if (username === "oscar" && password === "12345") {
        this.user = { username };
        this.token = "example-token";
      } else if (username === "diego" && password === "12345") {
        this.user = { username };
        this.token = "example-token";
      } else if (username === "aitor" && password === "12345") {
        this.user = { username };
        this.token = "example-token";
      } else if (username === "danil" && password === "12345") {
        this.user = { username };
        this.token = "example-token";
      } else {
        throw new Error("Invalid credentials");
      }
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
