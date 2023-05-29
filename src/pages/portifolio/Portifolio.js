import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import RegisterEt1 from "../auth/register/etapas/et1/RegisterEt1";
import Styled from "./Portifolio.style";
import Formulario from "./components/formulario/Formulario";
import { useState } from "react";
import PortifolioSobre from "./sobre/PortifolioSobre";
import { useSelector } from "react-redux";
import { selectedPerfil } from "../../store/reducers/PerfilSlice";
import { useEffect } from "react";
import Address from "./address/Address";

const Portifolio = () => {
  const [abaActive, setAbaActive] = useState(1);

  return (
    <>
      <Styled.Container>
        <SideBar tabActive={setAbaActive} />
        {abaActive === 1 ? (
          <Styled.ContainerInputs>
            <Styled.TitlePortfolio>Informações pessoais</Styled.TitlePortfolio>
            <Formulario />
            <Styled.Divisor />
            <Styled.TitlePortfolio>Seu cantinho</Styled.TitlePortfolio>
            <Address />
            <Styled.Divisor />
          </Styled.ContainerInputs>
        ) : abaActive === 2 ? (
          <PortifolioSobre />
        ) : (
          <></>
        )}
      </Styled.Container>
    </>
  );
};

export default Portifolio;
