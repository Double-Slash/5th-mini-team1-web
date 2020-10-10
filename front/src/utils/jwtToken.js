function setToken(token) {
  sessionStorage.setItem("token", token);
}

function getToken() {
  return sessionStorage.getItem("token");
}

export { setToken, getToken };
