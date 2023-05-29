import axios from "axios";
import { useSelector } from "react-redux";
import { selectedAuth } from "../../../store/reducers/AuthSlice";
import { AmbienteBackend } from "../../../hooks/Ambiente";

const URI = AmbienteBackend();

const updade = async (id, dados, token) => {
  const response = await axios.put(`${URI}/api/usuarios/${id}`, dados, {
    Authorization: `Bearer ${token}`,
  });

  return response
};

const PortifolioService = {
  updade,
};

export default PortifolioService;
