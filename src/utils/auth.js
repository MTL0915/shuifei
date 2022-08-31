// import Cookies from 'js-cookie'

const TokenKey = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODkyMzIzNjY4MyIsImV4cCI6MTY2MTk0Nzk4MywiaWF0IjoxNjYxOTQwNzgzfQ.eGMAUc2Lnc5YhO1YvpoLqtfbosjZ0Y6Y2cVtRJftcqaFMWD0OmnSbvybrWphXVATj4nLH02nqnZltOjSEVUt-A"
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
