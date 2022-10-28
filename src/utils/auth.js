// import Cookies from 'js-cookie'

const TokenKey =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODkyMzIzNjY4MyIsImV4cCI6MTY2Njk0NTc0MiwiaWF0IjoxNjY2OTM4NTQyfQ.z0BFFHOFgBGNgwrqLdcxmNhS4zAhU4rneCZIiJRH86HoYuqdZ8wAWKViZzxujqHLV2Fn0HCO1GMrXz6A9ZM9Vw";
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
