// import Cookies from 'js-cookie'

const TokenKey =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODkyMzIzNjY4MyIsImV4cCI6MTY2MjM3OTQyNywiaWF0IjoxNjYyMzcyMjI3fQ.TUgZvEeFbE3F58KV5hQ2j19FxINOjocpOokyK8qEITqPMKY3CkM-O46Y1d2737I2HDYZxY6NmT6jlq6GYajwvw";
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
