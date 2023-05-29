import axios from "axios";
import { useSelector } from "react-redux";
import { selectedAuth } from "../../../store/reducers/AuthSlice";

const updade = async (id, dados, token) => {

  const response = await axios.put(
    `${process.env.REACT_APP_BACKEND_LOCAL_HOST}/api/usuarios/${id}`,
    dados,
    {
      Authorization: `Bearer ${token}`,
    }
  );

  console.log(
    "🚀 ~ file: PortifolioService.js:7 ~ updade ~ response:",
    response
  );
};

const PortifolioService = {
  updade,
};

export default PortifolioService;
