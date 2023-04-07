import React from "react";
import Styled from "./CardNotification.styled";
import { useState } from "react";
import { getS3 } from "../../../../../../store/actions/MicroService";
import { useEffect } from "react";
import styled from "styled-components";

const CardNotification = ({ dados }) => {
  const [img, setImage] = useState("");

  const fetchImage = async () => {
    if (dados.type === 1) {
      const imagem = await getS3("perfil", dados.img);
      console.log(
        "🚀 ~ file: CardNotification.js:13 ~ fetchImage ~ imagem:",
        imagem
      );

      setImage(URL.createObjectURL(imagem.data));
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Styled.Container>
      {dados.type === 1 && <Styled.Banner src={img} />}
    </Styled.Container>
  );
};

export default CardNotification;
