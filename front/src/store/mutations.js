export default {
  // jwt token 설정
  setToken(state, token) {
    state.token = token;
  },
  // 회원가입 에러 메시지
  setRegisterError(state, error) {
    state.registerError = error;
  },
  // 로그인 에러 메시지
  setLogInError(state, error) {
    state.logInError = error;
  },
  // 유저 정보
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  },
  setContestView(state, data) {
    state.contest = data;
  },
  setCrewView(state, data) {
    state.crew = data;
  },
};
