import Vue from "vue";
import Vuex from "vuex";
import { getToken } from "@/utils/jwtToken";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    token: getToken() || "", // jwt token
    registerMessage: "", // 회원가입 결과 메시지
    logInError: "", // log in 서버 에러
  },
  getters,
  mutations,
  actions,
});
