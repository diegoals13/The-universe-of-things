import { useAuthStore } from "./auth3";

// Obtener la instancia del store
const authStore = useAuthStore();

// Registrar un usuario
try {
  authStore.register("felipe", "12345");
  console.log("User registered successfully");
} catch (error) {
  console.error(error.message);
}

// Iniciar sesión
try {
  await authStore.login("felipe", "12345");
  console.log("Login successful");
} catch (error) {
  console.error(error.message);
}

// Verificar si el usuario está autenticado
if (authStore.isAuthenticated) {
  console.log("User is authenticated");
} else {
  console.log("User is not authenticated");
}

// Cerrar sesión
authStore.logout();
console.log("User logged out");
