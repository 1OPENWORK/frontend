import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Styled from "./Portifolio.style";
import Formulario from "./components/formulario/Formulario";
import { useState } from "react";
import PortifolioSobre from "./sobre/PortifolioSobre";

import Address from "./address/Address";
import { ToastContainer } from "react-toastify";
import Experiencia from "./experiencia/Experiencia";
import CompletedProjects from "./projectsPort/CompletedProjects";

const Portifolio = () => {
  const [abaActive, setAbaActive] = useState(1);

  return (
    <>
      <Styled.Container>
        <SideBar tabActive={setAbaActive} />
        <ToastContainer />
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
        ) : abaActive === 3 ? (
          <Experiencia />
        ) : (
          <CompletedProjects />
        )}
      </Styled.Container>
    </>
  );
};

export default Portifolio;
