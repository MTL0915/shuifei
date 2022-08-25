// import Cookies from 'js-cookie'

const TokenKey = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODkyMzIzNjY4MyIsImV4cCI6MTY2MTQwNDY4MSwiaWF0IjoxNjYxMzk3NDgxfQ.r0r0zQ7ZoNKM-tY8tBdzvjbOW2LL9SZi7_3QJHpiiaF_nl7nyd-1LlVYIKQWzN2ummX7sC1fupB_-oxsOdBs3Q"
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
