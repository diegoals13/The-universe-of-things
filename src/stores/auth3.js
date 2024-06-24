import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    users: [], // Lista de usuarios registrados
    user: null,
    token: null,
  }),
  actions: {
    register(username, password) {
      // Verifica si el usuario ya está registrado
      const userExists = this.users.some((user) => user.username === username);
      if (userExists) {
        throw new Error("User already exists");
      }

      // Agrega el nuevo usuario a la lista
      this.users.push({ username, password });
    },
    async login(username, password) {
      // Verifica las credenciales contra los usuarios registrados
      const user = this.users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
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
