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
    setSelecionado(participants.some((d) => d.id === dados.id));
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
        {type === 2 ? "" : <label>{dados.nome}</label>}
      </Styled.Divisor>
      <Styled.Divisor>
        <Styled.ButtonCheck
          selected={selecionado}
          disabled={type !== 2 && selecionado ? true : false}
          onClick={() => {
            type !== 2 ? handleUser(true, dados) : handleUser(false, dados.id);
          }}
          type={type}
        >
          {type === 2 ? (
            <>
              <ion-icon
                name="person-remove-outline"
                style={{ fontSize: 25 }}
              ></ion-icon>
              <label
                style={{
                  fontSize: 10,
                }}
              >
                Remover
              </label>
            </>
          ) : selecionado ? (
            "Adicionado"
          ) : (
            "Adicionar"
          )}
        </Styled.ButtonCheck>
      </Styled.Divisor>
    </Styled.Container>
  );
};

export default CardConexao;
