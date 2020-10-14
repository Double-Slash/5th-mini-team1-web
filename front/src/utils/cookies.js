function setTokenCookie(value) {
  document.cookie = `token=${value}`;
}

function getTokenCookie() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/, "$1");
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export { setTokenCookie, getTokenCookie, deleteCookie };
