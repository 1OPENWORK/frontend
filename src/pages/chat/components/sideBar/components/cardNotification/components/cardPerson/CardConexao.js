import React, { useEffect, useState } from "react";
import Styled from "./CardConexao.styled";
import { MdOutlineAdd } from "react-icons/md";
import axios from "axios";
import { AmbienteBackend } from "../../../../../../../../hooks/Ambiente";

const CardNewConexao = ({ dados, handleClick }) => {
  const [imgPerfil, setImgPerfil] = useState("");

  useEffect(() => {
    axios
      .get(AmbienteBackend() + "/api/usuarios/imagem/" + dados.idRelacionado)
      .then((response) => {
        if (response.data.image !== null) {
          setImgPerfil(response.data.image);
        } else {
          setImgPerfil(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/640px-Windows_10_Default_Profile_Picture.svg.png"
          );
        }
      })
      .catch((error) => {
        setImgPerfil(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/640px-Windows_10_Default_Profile_Picture.svg.png"
        );
      });
  }, [dados]);

  return (
    <Styled.Container>
      <Styled.Div>
        <Styled.ImgPerson src={imgPerfil} />
        <span>{dados.nome}</span>
      </Styled.Div>
      <Styled.ButtonAdd onClick={handleClick}>
        <MdOutlineAdd />
      </Styled.ButtonAdd>
    </Styled.Container>
  );
};

export default CardNewConexao;
