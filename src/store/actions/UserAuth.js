import { AmbienteBackend } from "../../hooks/Ambiente";
import { get, post } from '../../services/Generected'

const URI = AmbienteBackend();

export const handleLogin = async (body) => {
  return await post(`${URI}/api/usuarios/login`, body);
};

export const handleInformationsUser = async (id) => {
  return await get(`${URI}/api/usuarios/perfil/${id}`);
};


