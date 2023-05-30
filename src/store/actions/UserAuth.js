import { get, post } from "../../services/Generected";

const URI = "http://localhost:9090/api";

export const handleLogin = async (body) => {
  return await post(`${URI}/usuarios/login`, body);
};


