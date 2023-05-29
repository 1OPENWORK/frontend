import React from "react";
import Styled from "./CardGroup.styled";

const CardGroup = ({ dados, img, socket }) => {
  console.log("🚀 ~ file: CardGroup.js:6 ~ CardGroup ~ dados:", dados.id)
  const handleClick = (value) => {
    const isAccpty = value ? true : false;

    socket.emit("eventGroup", { id: dados.id, isAccpty }, (callback) => {
      console.log(
        "🚀 ~ file: CardGroup.js:11 ~ socket.emit ~ callback:",
        callback
      );
    });
  };

  return (
    <Styled.Container>
      <Styled.Imagem img={img} />
      <Styled.Divisor paddingLeft={"16px"} paddingTop={"16px"}>
        <Styled.ImgUser src={dados.imgSender} />
        <Styled.Title>{dados.nomeSender}, te convidou.</Styled.Title>
      </Styled.Divisor>
      <Styled.Divisor width={"60%"} justifyContent={"center"}>
        <Styled.Title>{dados.description}</Styled.Title>
      </Styled.Divisor>
      <Styled.Divisor justifyContent={"center"}>
        <Styled.Button onClick={() => handleClick(true)} success={true}>
          <ion-icon name="checkmark-outline"></ion-icon> Aceitar
        </Styled.Button>
        <Styled.Button onClick={() => handleClick(false)}>
          <ion-icon name="close-outline"></ion-icon> Recusar
        </Styled.Button>
      </Styled.Divisor>
    </Styled.Container>
  );
};

export default CardGroup;
