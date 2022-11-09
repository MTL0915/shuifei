// import Cookies from 'js-cookie'

const TokenKey =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODkyMzIzNjY4MyIsImV4cCI6MTY2NzkwMjMzNiwiaWF0IjoxNjY3ODk1MTM2fQ.T_twZZ2yR-9CTn7ukISwKKAkaONVLJuMFwODVDmTLID66PGbo2ibJP_gCmgz12-2lmEW5A4Z6M2F70KMrhXLnQ";
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
