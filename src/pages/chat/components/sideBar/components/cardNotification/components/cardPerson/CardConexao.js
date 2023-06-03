import React from "react";
import Styled from "./CardConexao.styled";
import { MdOutlineAdd } from "react-icons/md";

const CardNewConexao = ({ dados, handleClick }) => {
  return (
    <Styled.Container>
      <Styled.Div>
        <Styled.ImgPerson src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <span>{dados.nome}</span>
      </Styled.Div>
      <Styled.ButtonAdd onClick={handleClick}><MdOutlineAdd /></Styled.ButtonAdd>
    </Styled.Container>
  );
};

export default CardNewConexao;
