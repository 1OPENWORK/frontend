import {  postImage } from "../../services/Generected";

const URI = "http://localhost:3333";

export const handleImgGroup = async (dados) => {
  return await postImage(URI + "/newImgGroup", dados);
};
