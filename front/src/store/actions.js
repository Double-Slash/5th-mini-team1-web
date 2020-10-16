import { postRegister, postLocalLogIn, postGoogleLogIn, getLoadUserInfo, contestId, crewId, crewW } from "@/api";
import { setToken } from "@/utils/jwtToken";
import { setUserId } from "@/utils/userId";

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
  async submitLogIn({ commit, dispatch }, logInData) {
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
      setUserId(response.pk);
      await dispatch("loadUserInfo", response.pk);
    } catch (error) {
      commit("setLogInError", "존재하지 않은 사용자입니다.");
      response = "";
    }
    return response;
  },
  // 유저 정보 불러오기
  async loadUserInfo({ commit }, id) {
    let response = "";
    try {
      const { data } = await getLoadUserInfo(id);
      commit("setUserInfo", data);
      response = data;
    } catch (error) {
      response = error;
    }
    return response;
  },
  async contestView({ commit }) {
    let response = "";
    try {
      const { data } = await contestId();
      response = data;
      commit("setContestView", response);
    } catch (error) {
      response = error;
    } finally {
      return response;
    }
  },
  async crewView({ commit }, id) {
    let response = "";
    try {
      const { data } = await crewId(id);
      response = data;
      commit("setCrewView", response);
    } catch (error) {
      response = error;
    } finally {
      return response;
    }
  },
  async crewBoardWrite({}, data) {
    let response = "";
    try {
      const test = await crewW(data);
      response = test;
    } catch (error) {
      response = error;
    }
    return response;
  },
};
