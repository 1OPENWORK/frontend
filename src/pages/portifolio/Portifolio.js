import React from "react";
import SideBar from "./components/SideBar";
import RegisterEt1 from "../auth/register/etapas/et1/RegisterEt1";
import Styled from "./Portifolio.style";
import Formulario from "./components/formulario/Formulario";
import { useState } from "react";
import Portifolio2 from "./portfolioEt2/PortifolioEt2";

const Portifolio = () => {
  const [abaActive, setAbaActive] = useState(1);

  return (
    <>
      <Styled.Container>
        <SideBar tabActive={setAbaActive} />

        <Styled.ContainerInputs>
          <Styled.TitlePortfolio>Informações pessoais</Styled.TitlePortfolio>
          <Formulario />
          <Styled.Divisor />
          <Styled.TitlePortfolio>Seu cantinho</Styled.TitlePortfolio>
          <Portifolio2 />
          <Styled.Divisor />
        </Styled.ContainerInputs>
      </Styled.Container>
    </>
  );
};

export default Portifolio;
