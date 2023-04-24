import React from "react";
import SideBar from "../../portifolio/components/SideBar";
import RegisterEt4 from "../../auth/register/etapas/et4/RegisterEt4";
import Styled from "../Portifolio.style";

const Portifolio3 = () => {
  return (
    <>
      <Styled.Container>
        <Styled.ContainerSideBarPortifolio>
          <SideBar />
        </Styled.ContainerSideBarPortifolio>

        <Styled.ContainerInputs>
          <RegisterEt4 />
        </Styled.ContainerInputs>
      </Styled.Container>
    </>
  );
};

export default Portifolio3;
