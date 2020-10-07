import Vue from "vue";
import Vuex from "vuex";
import { getTokenCookie } from "@/utils/cookies";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    token: getTokenCookie() || "" // jwt token
  },
  getters,
  mutations,
  actions
});
