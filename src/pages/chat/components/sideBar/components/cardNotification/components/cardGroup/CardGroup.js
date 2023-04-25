import React from "react";
import Styled from "./CardGroup.styled";
import { Avatar } from "@mui/material";

const CardGroup = ({ dados, img }) => {
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
        <Styled.Divisor justifyContent={"center"} >
            <Styled.Button success={true}><ion-icon name="checkmark-outline"></ion-icon> Aceitar</Styled.Button>
            <Styled.Button> <ion-icon name="close-outline"></ion-icon> Recusar</Styled.Button>
        </Styled.Divisor>
    </Styled.Container>
  );
};

export default CardGroup;
