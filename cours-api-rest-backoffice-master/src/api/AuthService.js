import { useUserStore } from "../store/user";
import AxiosInstance from "./AxiosInstance";

class AuthService {
  async login(email, password) {
    try {
      const { data } = await AxiosInstance.post(`/login`, {
        email,
        password,
      });

      // Assurez-vous que userStore est correctement initialisé
      const userStore = useUserStore();
      userStore.accessToken = data.accessToken;

      return data.accessToken;
    } catch (error) {
      console.error("Error during login:", error.message);
      throw error;
    }
  }

  logout() {
    const userStore = useUserStore();
    userStore.logout();
  }
}

export default new AuthService();