import { getImagem, postImage } from "../../services/Generected";

const URI = process.env.REACT_APP_MICROSERVICE_PRODUCAO;

export const handleImgGroup = async (dados) => {
  return await postImage(URI + "/newImgGroup", dados);
};

export const getS3 = async (type, img) => {
  return await getImagem(URI + "/imagem/" + type + "/" + img);
};
