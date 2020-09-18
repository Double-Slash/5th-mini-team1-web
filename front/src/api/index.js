import axios from "axios";

const baseurl = ""; // OR axios baseurl settings

const api = {
  info: `${baseurl}`,
  login: `${baseurl}/login`,
};

function examplefunc(id) {
  return axios.get(`${api.info}/${id}`);
}
function examplefunc2(userInfo) {
  return axios.get(`${api.login}/${userInfo}`);
}
export { examplefunc, examplefunc2 };

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
