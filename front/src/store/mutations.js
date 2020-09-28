export default {
  // jwt token 설정
  setToken(state, token) {
    state.token = token;
  },
  // 네트워크 에러 메시지 설정
  setErrorMessage(state, errorMessage) {
    state.errorMessage = errorMessage;
  }
};
