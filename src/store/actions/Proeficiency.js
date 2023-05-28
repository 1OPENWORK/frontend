import { get } from "../../services/Generected";

const URI = "http://localhost:9090/api";


export const handleProeficiency = async () => {
  return await get(URI + '/especializacoes')
}
