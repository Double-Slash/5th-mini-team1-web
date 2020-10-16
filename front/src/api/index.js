/* eslint no-param-reassign: "error" */
import axios from "axios";
import { getToken } from "@/utils/jwtToken";

const baseurl = "http://52.141.62.35:8080"; // OR axios baseurl settings

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Token ${getToken()}`;
  return config;
});

const api = {
  info: `${baseurl}`,
  accounts: `${baseurl}/accounts`,
  contest: `${baseurl}/postings/contests`,
  crew: `${baseurl}/postings/`,
};

function examplefunc(id) {
  return axios.get(`${api.info}/${id}`);
}
function examplefunc2(userInfo) {
  return axios.get(`${api.login}/${userInfo}`);
}

// 회원가입
function postRegister(data) {
  return axios.post(`${api.accounts}/`, data);
}

// 로그인 post
function postLocalLogIn(data) {
  const instance = axios.create();
  return instance.post(`${api.accounts}/login/`, data);
}

// 구글 로그인 post
function postGoogleLogIn(token) {
  return axios.post(`${api.accounts}/login`, "_", {
    headers: {
      Authorization: token,
    },
  });
}

// 유저 정보 불러오기
function getLoadUserInfo(id) {
  return axios.get(`${api.accounts}/${id}/`);
}

// contest/id
function contestId() {
  return axios.get(`${api.contest}`);
}
// crew/id
function crewId(id) {
  return axios.get(`${api.crew}${id}`);
}
// crew/write
function crewW(data) {
  const input = data[1];
  const input2 = data[0];
  return axios.post(`${api.crew}`, input, {
    headers: {
      Authorization: input2,
    },
  });
}

// 유저 정보 수정
function patchUserInfo(id, data) {
  return axios.patch(`${api.accounts}/${id}/`, data);
}

export { 
  examplefunc, 
  examplefunc2, 
  postLocalLogIn, 
  postGoogleLogIn, 
  postRegister, 
  contestId, 
  crewId, 
  crewW, 
  getLoadUserInfo, 
  patchUserInfo 
};

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
