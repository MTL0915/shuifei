// import Cookies from 'js-cookie'

const TokenKey = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODkyMzIzNjY4MyIsImV4cCI6MTY2MTQyODYwNywiaWF0IjoxNjYxNDIxNDA3fQ.DLeh2bFCTT2yPH49Vrw14fetvMLYl2iEenHDliuiDozRqhHPL9pW6M6bsc0jRBFFIIdAEE0xwEKcg8-nTDpCeQ"
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
