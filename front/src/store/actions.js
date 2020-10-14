import { postLogIn } from "@/api";

// cookie
import { setTokenCookie } from "@/utils/cookies";

export default {
  // log in data 전달
  async submitLogIn({ commit }, data) {
    try {
      commit("setErrorMessage", "");
      const { token } = await postLogIn(data);
      commit("setToken", token);
      setTokenCookie(token);
    } catch (error) {
      commit("setErrorMessage", error.response.data);
    }
  },
};
