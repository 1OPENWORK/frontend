import { AmbienteBackend } from "../../hooks/Ambiente";
import { get } from "../../services/Generected";

const URI = AmbienteBackend();

export const handleProeficiency = async () => {
  return await get(URI + "/api/especializacoes");
};
