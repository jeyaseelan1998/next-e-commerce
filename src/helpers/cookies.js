import Cookies from "universal-cookie";

const cookies = new Cookies();

export function setCookie(key, value, days = 1) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days); // expires in 1 day
  cookies.set(key, value, { expires: expirationDate, path: "/" });
}

export function getCookie(key) {
  return cookies.get(key);
}

export function removeCookie(key) {
  return cookies.remove(key);
}
