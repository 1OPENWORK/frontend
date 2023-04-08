import { get } from "../../services/Generected";

const URI = "http://localhost:8080/api";


export const handleProeficiency = async () => {
    return await get(URI + "/auth/especializacoes");
}