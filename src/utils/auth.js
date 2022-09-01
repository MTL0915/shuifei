// import Cookies from 'js-cookie'

const TokenKey = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODkyMzIzNjY4MyIsImV4cCI6MTY2MjAzMjM2MiwiaWF0IjoxNjYyMDI1MTYyfQ.oiedgSvgSGmVNaahRBylGwBI_VKTHEjlJ-0L0XWdgE07Yj1QDUB-U2_YSOYTo8ej7Kk9Zwz0F89xUkxrIwSbvw"
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
