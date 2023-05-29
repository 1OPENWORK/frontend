import React from "react";
import Styled from "./CardNotification.styled";
import { useState } from "react";
import { getS3 } from "../../../../../../store/actions/MicroService";
import { useEffect } from "react";
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Container>
      {dados.type === "GROUP" && (
        <CardGroup dados={dados} img={img} socket={socket} />
      )}
    </Styled.Container>
  );
};

export default CardNotification;
