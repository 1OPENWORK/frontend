import React from "react";
import Header from "./components/navBar/Header";
import { ContainerMain, ContainerContent } from "./Projects.styled";
import CardProject from "./components/cardProject/CardProject";

function Projects() {


  return (
    <>
      <Header />
      <ContainerMain>
        <ContainerContent>
          <h1>Projetos</h1>

          <CardProject ></CardProject>
          <CardProject></CardProject>
        </ContainerContent>
      </ContainerMain>
    </>
  );
}

export default Projects;
