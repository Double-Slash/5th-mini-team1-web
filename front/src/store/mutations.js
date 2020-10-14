export default {
  // jwt token 설정
  setToken(state, token) {
    state.token = token;
  },
  // 회원가입 결과 메시지
  setRegisterMessage(state, error) {
    state.registerMessage = error;
  },
  // 로그인 에러 메시지
  setLogInError(state, error) {
    state.logInError = error;
  }
};
