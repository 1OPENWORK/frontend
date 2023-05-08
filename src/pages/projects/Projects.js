import React from "react";
import { ContainerMain, ContainerContent } from "./Projects.styled";
import CardProject from "./components/cardProject/CardProject";
import SidebarProjecteds from "./components/sideBar/SidebarProjecteds";

function Projects() {
  return (
    <>
      <SidebarProjecteds type={2} />
      <ContainerMain>
        <ContainerContent>
          <h1>Projetos</h1>

          <CardProject now={100} checked={false}/>
          <CardProject now={100} checked={false}/>
        </ContainerContent>
      </ContainerMain>
    </>
  );
}

export default Projects;
