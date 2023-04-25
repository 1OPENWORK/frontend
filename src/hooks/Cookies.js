import Cookies from "js-cookie";

export function getToken() {
  return Cookies.get("token");
}

export function deleteToken() {
  Cookies.remove("token");
}
