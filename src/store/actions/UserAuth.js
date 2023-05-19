import { post } from "../../services/Generected";

const URI = "http://localhost:8080/api";

export const handleLogin = async (body) => {
  return await post(`${URI}/usuarios/login`, body);
};
