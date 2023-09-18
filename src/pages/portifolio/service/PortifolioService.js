import axios from "axios";
import { AmbienteBackend } from "../../../hooks/Ambiente";
import { get } from "../../../services/Generected";
import axiosInstance from "../../../services/Axios";

const URI = AmbienteBackend();

const updade = async (id, dados, token) => {
  const response = await axiosInstance.put(`${URI}/api/usuarios/${id}`, dados);

  return response;
};

const updadeAddress = async (id, dados, token) => {
  const response = await axiosInstance.put(
    `${URI}/api/address/usuario/${id}`,
    dados
  );

  return response;
};

const fetchMyInformations = async (id, token) => {
  const response = await axiosInstance.get(
    `${URI}/api/usuarios/sobre-mim/${id}`
  );

  return response;
};

const updateAboutMe = async (id, dados, token) => {
  const response = await axiosInstance.put(
    `${URI}/api/usuarios/sobre-mim/${id}`,
    dados
  );

  return response;
};

const fetchMyExperiencie = async (id, token) => {
  const response = await axiosInstance.get(
    `${URI}/api/usuarios/experiencia/${id}`
  );

  return response;
};

const updateExperiencie = async (id, dados, token) => {
  const response = await axiosInstance.put(
    `${URI}/api/usuarios/experiencia/${id}`,
    dados
  );

  return response;
};

const uploadImg = async (id, img, token) => {
  const formData = new FormData();
  formData.append("file", img);

  const response = await axiosInstance.post(
    `${URI}/fileS3/upload/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response;
};

const buscarMyProjects = async (id, url, token) => {
  const response = await get(`${URI}${url}${id}`);

  return response;
};

const deleteContaUser = async (id, token) => {
  const response = await axiosInstance.delete(`${URI}/api/usuarios/deletar/${id}`);

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
  buscarMyProjects,
  deleteContaUser,
};

export default PortifolioService;
