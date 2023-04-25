import React from "react";
import SideBar from "./components/SideBar";
import RegisterEt1 from "../auth/register/etapas/et1/RegisterEt1";
import Styled from "./Portifolio.style";

const Portifolio = () => {
  return (
    <>
      <Styled.Container>
        <Styled.ContainerSideBarPortifolio>
          <SideBar />
        </Styled.ContainerSideBarPortifolio>

        <Styled.ContainerInputs>
          <RegisterEt1 />
        </Styled.ContainerInputs>
      </Styled.Container>
    </>
  );
};

export default Portifolio;
