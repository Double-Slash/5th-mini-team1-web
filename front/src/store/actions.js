import { postLogIn } from "@/api";

// cookie
import { setTokenCookie } from "@/utils/cookies";

export default {
  // log in data 전달
  async submitLogIn({ commit }, data) {
    const {
      data: { token }
    } = await postLogIn(data);
    commit("setToken", token);
    setTokenCookie(token);
    return token;
  }
};
