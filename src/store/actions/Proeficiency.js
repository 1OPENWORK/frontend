import axios from "axios";
import { AmbienteBackend } from "../../hooks/Ambiente";
import { get } from "../../services/Generected";

const URI = AmbienteBackend();

export const handleProeficiency = async () => {
  return await axios.get(URI + "/api/especializacoes");
};
