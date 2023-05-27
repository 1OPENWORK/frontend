import { Ambiente } from "../../hooks/Ambiente";
import { getImagem, post, postImage } from "../../services/Generected";

const URI = Ambiente();

export const handleImgGroup = async dados => {
  return await postImage(URI + "/newImgGroup", dados);
};

export const getS3 = async (img) => {
  const response = await getImagem(URI + "/imagem/" + img);
  return URL.createObjectURL(response.data);
};

export const addNewUser = async dados => {
  return await post(URI + "/adduser", dados);
};
