import axios from "axios";
import { AmbienteBackend } from "../../../hooks/Ambiente";

const URI = AmbienteBackend();

const updade = async (id, dados, token) => {
  const response = await axios.put(`${URI}/api/usuarios/${id}`, dados, {
    Authorization: `Bearer ${token}`,
  });

  return response;
};

const updadeAddress = async (id, dados, token) => {
  const response = await axios.put(`${URI}/api/address/usuario/${id}`, dados, {
    Authorization: `Bearer ${token}`,
  });

  return response;
};

const fetchMyInformations = async (id, token) => {
  const response = await axios.get(`${URI}/api/usuarios/sobre-mim/${id}`, {
    Authorization: `Bearer ${token}`,
  });

  return response;
};

const updateAboutMe = async (id, dados, token) => {
  const response = await axios.put(
    `${URI}/api/usuarios/sobre-mim/${id}`,
    dados,
    {
      Authorization: `Bearer ${token}`,
    }
  );

  return response;
};

const fetchMyExperiencie = async (id, token) => {
  const response = await axios.get(`${URI}/api/usuarios/experiencia/${id}`, {
    Authorization: `Bearer ${token}`,
  });

  return response;
};

const updateExperiencie = async (id, dados, token) => {
  const response = await axios.put(
    `${URI}/api/usuarios/experiencia/${id}`,
    dados,
    {
      Authorization: `Bearer ${token}`,
    }
  );

  return response;
};

const uploadImg = async (id, img, token) => {
  const formData = new FormData();
  formData.append("file", img);

  const response = await axios.post(`${URI}/fileS3/upload/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

const buscarMyProjectsDev = async (id, token) => {
  const response = await axios.get(
    `${URI}/projetos-aceitos/completos/desenvolvedor/${id}`,
    {
      Authorization: `Bearer ${token}`,
    }
  );

  return response;
};

const deleteContaUser = async (id, token) => {
  const response = await axios.delete(`${URI}/api/usuarios/deletar/${id}`, {
    Authorization: `Bearer ${token}`,
  });

  return response;
};

const PortifolioService = {
  updade,
  updadeAddress,
  fetchMyInformations,
  updateAboutMe,
  fetchMyExperiencie,
  updateExperiencie,
  uploadImg,
  buscarMyProjectsDev,
  deleteContaUser,
};

export default PortifolioService;
