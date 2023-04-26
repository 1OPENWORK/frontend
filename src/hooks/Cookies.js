import Cookies from "js-cookie";

export function getToken() {
  return Cookies.get("token");
}

export function deleteToken() {
  Cookies.remove("token", { path: "" });
}

export function getId() {
  return Cookies.get("id");
}

export function deleteId() {
  Cookies.remove("id", { path: "" });
}

export function getIsDev() {
  return Cookies.get("isDev");
}

export function deleteIsDev() {
  Cookies.remove("isDev", { path: "" });
}
