// import Cookies from 'js-cookie'

const TokenKey = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODkyMzIzNjY4MyIsImV4cCI6MTY2MDgxNTUzMSwiaWF0IjoxNjYwODA4MzMxfQ.OZbamiKUxuzTm5tRPeIBjCopS0AYfvYI4fc7slnpqcS5PmwfkKi3W8aLvBz3dKJqak363VO8SOyERlQNGOo-cw"

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
