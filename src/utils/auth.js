// import Cookies from 'js-cookie'

const TokenKey =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODkyMzIzNjY4MyIsImV4cCI6MTY2MjQ2MjY4MSwiaWF0IjoxNjYyNDU1NDgxfQ.ysyDJJ3sevBKunMJSVpw9FogmgY8IWoffQD_VjMlFHXX1wyEBOWS9fB-8eeNBpAppIbj6FN1oW85WivjrweAvw";
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
