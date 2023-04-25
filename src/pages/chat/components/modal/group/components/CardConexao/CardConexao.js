import React, { useEffect, useState } from "react";
import Styled from "./CardConexao.styled";
import { Avatar } from "@mui/material";
const CardConexao = ({
  type,
  dados,
  handleAdd,
  handleRemove,
  participants,
}) => {
  const [selecionado, setSelecionado] = useState(type !== 2 ? false : true);

  const handleUser = (isAdd, dados) => {
    if (isAdd) {
      handleAdd(dados);
    } else {
      handleRemove(dados);
    }
  };

  useEffect(() => {
    setSelecionado(participants.some(d => d.id === dados.id));
  }, [handleUser]);

  return (
    <Styled.Container>
      <Styled.Divisor>
        <Avatar
          style={{
            height: 60,
            width: 60,
          }}
          src={dados.img}
        />
        <label>{dados.nome}</label>
      </Styled.Divisor>
      <Styled.Divisor>
        <Styled.ButtonCheck
          selected={selecionado}
          onClick={() => {
            !selecionado
              ? handleUser(true, dados)
              : handleUser(false, dados.id);
          }}
        >
          {selecionado ? "Remover" : "Convidar"}
        </Styled.ButtonCheck>
      </Styled.Divisor>
    </Styled.Container>
  );
};

export default CardConexao;
