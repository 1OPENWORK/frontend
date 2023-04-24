import React from "react";
import SideBar from "../../portifolio/components/SideBar";
import RegisterEt2 from "../../auth/register/etapas/et2/RegisterEt2";
import Styled from "../Portifolio.style";

const Portifolio2 = () => {
  return (
    <>
      <Styled.Container>
        <Styled.ContainerSideBarPortifolio>
          <SideBar />
        </Styled.ContainerSideBarPortifolio>

        <Styled.ContainerInputs>
          <RegisterEt2 />
        </Styled.ContainerInputs>
      </Styled.Container>
    </>
  );
};

export default Portifolio2;
