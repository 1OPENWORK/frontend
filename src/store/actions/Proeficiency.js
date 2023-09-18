import { AmbienteBackend } from "../../hooks/Ambiente";
import axiosInstance from "../../services/Axios";

const URI = AmbienteBackend();

export const handleProeficiency = async () => {
  return await axiosInstance.get(URI + "/api/especializacoes");
};
