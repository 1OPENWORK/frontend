import React from "react";
import SidebarProjecteds from "../../components/sideBar/SidebarProjecteds";
import { ContainerContent, ContainerMain } from "../../Projects.styled";
import CardProject from "../../components/cardProject/CardProject";

const Progress = () => {
  return (
    <>
      <SidebarProjecteds type={1} />
      <ContainerMain>
        <ContainerContent>
          <h1>Projetos</h1>

          <CardProject now={20} checked={false}/>
        </ContainerContent>
      </ContainerMain>
    </>
  );
};

export default Progress;
