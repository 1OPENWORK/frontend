import React from "react";
import SideBar from "../../../components/sidebar/SideBar";
import RegisterEt5 from "../../auth/register/etapas/et5/RegisterEt5";
import Styled from "../Portifolio.style";

const Portifolio4 = () => {
  return (
    <>
      <Styled.Container>
        <Styled.ContainerSideBarPortifolio>
          <SideBar />
        </Styled.ContainerSideBarPortifolio>

        <Styled.ContainerInputs>
          <RegisterEt5 />
        </Styled.ContainerInputs>
      </Styled.Container>
    </>
  );
};

export default Portifolio4;
