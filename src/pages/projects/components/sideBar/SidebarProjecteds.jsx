import React from "react";

import { BodyContainerProjecteds, Container } from "./SidebarProjecteds.styled";
import { MdOutlineRunCircle } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";
import { MdArrowBack } from "react-icons/md";
import Colors from "../../../../constants/Colors";
import { useNavigate } from "react-router";
import { HomeDevPath } from "../../../../constants/Path";
import { RxDashboard } from "react-icons/rx";
import { BsFillClipboard2PlusFill } from "react-icons/bs";
function SidebarProjecteds({ type }) {
  const navigate = useNavigate();

  const goToHomeDev = () => {
    navigate(HomeDevPath);
  };

  return (
    <Container>
      <MdArrowBack
        onClick={() => goToHomeDev()}
        size={56}
        style={{
          position: "absolute",
          top: 20,
          marginTop: "1rem",
          cursor: "pointer",
        }}
        color={Colors.SECONDARY_COLOR}
      />
      <BodyContainerProjecteds>
        {type === 1 ? (
          <>
            <button type="button">
              <MdOutlineRunCircle size={40} />

              <h2>Andamento</h2>
            </button>
            <button type="button">
              <AiOutlineCheckCircle size={40} color={"#20ac51"} />

              <h2 color={"#20ac51"}>Concluídos</h2>
            </button>
            <button type="button">
              <TiCancel size={40} className="icon-cancel" />

              <h2>Cancelados</h2>
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={() => navigate("/projetos")}>
              <RxDashboard size={32} />

              <h2>Projetos</h2>
            </button>
            <button type="button">
              <BsFillClipboard2PlusFill size={32} color={"#20ac51"} />

              <h2 color={"#20ac51"}>Tarefas</h2>
            </button>
          </>
        )}
      </BodyContainerProjecteds>
    </Container>
  );
}

export default SidebarProjecteds;
