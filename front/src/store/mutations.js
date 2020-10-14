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
  setContestView(state,data){
    state.contest=data;
  }
};
