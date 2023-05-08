import React from "react";
import SidebarProjecteds from "../../components/sideBar/SidebarProjecteds";
import { ContainerContent, ContainerMain } from "../../Projects.styled";
import CardProject from "../../components/cardProject/CardProject";

function Canceled() {
  return (
    <>
      <SidebarProjecteds type={3} />
      <ContainerMain>
        <ContainerContent>
          <h1>Projetos</h1>

          <CardProject now={70} checked={true} />
          <CardProject now={40} checked={true} />
        </ContainerContent>
      </ContainerMain>
    </>
  );
}

export default Canceled;
