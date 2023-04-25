import React from "react";
import Styled from "./CardNotification.styled";
import { useState } from "react";
import { getS3 } from "../../../../../../store/actions/MicroService";
import { useEffect } from "react";
import styled from "styled-components";
import CardGroup from "./components/cardGroup/CardGroup";

const CardNotification = ({ dados }) => {
  const [img, setImage] = useState("");

  const fetchImage = async () => {
    if (dados.type === "GROUP") {
      const imagem = await getS3("perfil", dados.img);

      setImage(URL.createObjectURL(imagem.data));
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Styled.Container>
      {dados.type === "GROUP" && <CardGroup dados={dados} img={img} />}
    </Styled.Container>
  );
};

export default CardNotification;
