import React from "react";
import { ContainerMain, ContainerContent } from "./Projects.styled";
import CardProject from "./components/cardProject/CardProject.jsx";
import SidebarProjecteds from "./components/sideBar/SidebarProjecteds.jsx";

function Projects() {
  return (
    <>
      <SidebarProjecteds type={1} />
      <ContainerMain>
        <ContainerContent>
          <h1>Projetos</h1>

          <CardProject />
          <CardProject />
        </ContainerContent>
      </ContainerMain>
    </>
  );
}

export default Projects;
