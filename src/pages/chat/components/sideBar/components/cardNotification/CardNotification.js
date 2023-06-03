import React from "react";
import Styled from "./CardNotification.styled";
import { useState } from "react";
import { getS3 } from "../../../../../../store/actions/MicroService";
import { useEffect } from "react";
import styled from "styled-components";
import CardGroup from "./components/cardGroup/CardGroup";

const CardNotification = ({ dados, socket }) => {
  const [img, setImage] = useState("");

  const fetchImage = async () => {
    if (dados.type === "GROUP") {
      const imagem = await getS3(dados.img);

      setImage(imagem);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Styled.Container >
      {dados.type === "SERVER" && (
        <CardGroup dados={dados} img={img} socket={socket} />
      )}
    </Styled.Container>
  );
};

export default CardNotification;
