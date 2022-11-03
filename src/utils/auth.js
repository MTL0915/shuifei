// import Cookies from 'js-cookie'

const TokenKey =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODkyMzIzNjY4MyIsImV4cCI6MTY2NzQ3MjkwNywiaWF0IjoxNjY3NDY1NzA3fQ.GLaV9WtFYf3lXg0on79-tl1xHpVUffOGvvSEQIJjQGJ8tBAZJyer1IpFSTw2hNt3ovVFL54fR_seFNSMaz8RVA";
let lsToken = {};

export function getToken() {
//   return lsToken[TokenKey] || localStorage.getItem(TokenKey)
    return TokenKey
}

export function setToken(token, rememberMe) {
  lsToken[TokenKey] = token
  if (rememberMe) {
    return localStorage.setItem(TokenKey, token)
  } else return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  lsToken[TokenKey] = "";
  delete lsToken[TokenKey];
  return localStorage.removeItem(TokenKey)
}
