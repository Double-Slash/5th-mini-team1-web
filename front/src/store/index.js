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
    registerError: "", // 회원가입 서버 에러
    logInError: "" // log in 서버 에러
  },
  getters,
  mutations,
  actions
});
