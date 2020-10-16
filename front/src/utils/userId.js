function setUserId(id) {
  sessionStorage.setItem("userId", id);
}

function getUserId() {
  return sessionStorage.getItem("userId");
}

export { setUserId, getUserId };
