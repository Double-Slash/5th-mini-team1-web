/* eslint no-param-reassign: "error" */
import axios from "axios";

const instance = axios.create({});

instance.interceptors.request.use(config => {
  config.headers.Authorization = this.$store.state.token;
  return config;
});

const baseurl = "http://52.141.62.35:8080"; // OR axios baseurl settings

const api = {
  info: `${baseurl}`,
  accounts: `${baseurl}/accounts`
};

function examplefunc(id) {
  return axios.get(`${api.info}/${id}`);
}
function examplefunc2(userInfo) {
  return axios.get(`${api.accounts}/${userInfo}`);
}

// 회원가입
function postRegister(data) {
  return axios.post(`${api.accounts}/`, data);
}

// 로그인 post
function postLocalLogIn(data) {
  return axios.post(`${api.accounts}/login`, data);
}

// 구글 로그인 post
function postGoogleLogIn(toekn) {
  return axios.post(`${api.accounts}/login`, "_", {
    headers: {
      Authorization: toekn
    }
  });
}

export { examplefunc, examplefunc2, postLocalLogIn, postGoogleLogIn, postRegister };

/*
스토어에서 다음과 같이 불러오면 좋을 것 같습니다.
import {
    examplefunc
} from "../api/index.js";
async FETCH_RELEASE_INFO_RAFFLE({ commit }, id) {
        try {
            const response = await examplefunc(id);
            console.log(response.data); // production시 삭제 [strict 모드]
            commit("SET_RELEASE_INFO_RAFFLE", response.data);
            return response;
        } catch (error) {
            console.error(error);
        }
    },
*/
