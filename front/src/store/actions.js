import { postRegister, postLocalLogIn, postGoogleLogIn } from "@/api";

// cookie
import { setToken } from "@/utils/jwtToken";

export default {
  // 회원가입
  async submitRegister({ commit }, registerData) {
    let response = "";
    try {
      const { data } = await postRegister(registerData);
      // to do...회원가입 결과 값 받고 난 후
      response = data;
      return data;
    } catch (error) {
      commit("setRegisterError", "존재하지 않은 사용자입니다.");
      response = "";
    }
    return response;
  },
  // local login, google login
  async submitLogIn({ commit }, logInData) {
    let response = "";
    try {
      if (logInData.username) {
        const { data } = await postLocalLogIn(logInData);
        response = data;
      } else {
        const { data } = await postGoogleLogIn(logInData);
        response = data;
      }
      commit("setToken", response.token);
      setToken(response.token);
    } catch (error) {
      commit("setLogInError", "존재하지 않은 사용자입니다.");
      response = "";
    }
    return response;
  },
};
