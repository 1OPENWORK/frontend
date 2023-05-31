import { AmbienteBackend } from "../../hooks/Ambiente";
import { get, post } from "../../services/Generected";

export const handleLogin = async (body) => {
  return await post(AmbienteBackend() + `/api/usuarios/login`, body);
};

export const handleInformationsUser = async (id) => {
  return await get(AmbienteBackend() + `/api/usuarios/perfil/${id}`);
};
