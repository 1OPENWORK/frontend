import { getImagem, postImage } from "../../services/Generected";

const URI = "http://20.226.66.121:80";

export const handleImgGroup = async (dados) => {
  return await postImage(URI + "/newImgGroup", dados);
};

export const getS3 = async (type, img) => {
  return await getImagem(URI + "/imagem/" + type + "/" + img);
};
