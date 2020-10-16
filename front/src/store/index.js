import Vue from "vue";
import Vuex from "vuex";
import { getToken } from "@/utils/jwtToken";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import initialCrewCardList from "../assets/dummy/initialCrewCardList";
import initialPartnerCardList from "../assets/dummy/initialPartnerCardList";
import initialEventCardList from "../assets/dummy/initialEventCardList";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    token: getToken() || "", // jwt token
    registerMessage: "", // 회원가입 결과 메시지
    logInError: "", // log in 서버 에러
    userInfo: {}, // 유저 정보
    contest: "", // contest data
    crew: "", // crew data
    crewAll: "",
    bookmarkedContest: initialEventCardList, // 공모전 북마크 정보
    bookmarkedPost: initialCrewCardList, // 크루 북마크 정보
    bookmarkedPartner: initialPartnerCardList, // 파트너 북마크 정보
  },
  getters,
  mutations,
  actions,
});
