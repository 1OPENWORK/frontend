import React from "react";

import { BodyContainerProjecteds, Container } from "./SidebarProjecteds.styled";
import { MdOutlineRunCircle } from "react-icons/md";
import { AiOutlineCheckCircle, AiFillFolderAdd } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";
import { MdArrowBack } from "react-icons/md";
import Colors from "../../../../constants/Colors";
import { useNavigate } from "react-router";
import { HomeDevPath } from "../../../../constants/Path";
import { RxDashboard } from "react-icons/rx";
import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { useState } from "react";

function SidebarProjecteds({ type }) {
  const navigate = useNavigate();

  const [color, setColor] = useState("#fff");
  const [typeUse, setType] = useState(type);

  const goToHomeDev = () => {
    navigate(HomeDevPath);
  };

  const goToProgress = () => {
    navigate("/projetos-andamentos");
    setType(1);
  };
  const goToCompleted = () => {
    navigate("/projetos-concluidos");
    setType(2);
  };

  const goToCanceled = () => {
    navigate("/projetos-cancelados");
    setType(3);
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
        {type === 3 ? (
          <>
            <button type="button" onClick={() => goToProgress()}>
              <MdOutlineRunCircle size={40} />

              <h2>Andamento</h2>
            </button>
            <button type="button" onClick={() => goToCompleted()}>
              <AiOutlineCheckCircle size={40} />
              <h2>Concluídos</h2>
            </button>
            <button type="button" onClick={() => goToCanceled()}>
              <TiCancel
                size={40}
                className="icon-cancel"
                color={"rgb(77, 255, 126)"}
              />

              <h2 color={"rgb(77, 255, 126)"}>Cancelados</h2>
            </button>

            <button type="button">
              <AiFillFolderAdd size={40} className="icon-cancel" />

              <h2>Criar Projeto</h2>
            </button>
          </>
        ) : type === 2 ? (
          <>
            <button type="button" onClick={() => goToProgress()}>
              <MdOutlineRunCircle size={40} />

              <h2>Andamento</h2>
            </button>
            <button type="button" onClick={() => goToCompleted()}>
              <AiOutlineCheckCircle size={40} color={"rgb(77, 255, 126)"} />
              <h2 color={"rgb(77, 255, 126)"}>Concluídos</h2>
            </button>
            <button type="button" onClick={() => goToCanceled()}>
              <TiCancel size={40} className="icon-cancel" />

              <h2>Cancelados</h2>
            </button>

            <button type="button">
              <AiFillFolderAdd size={40} className="icon-cancel" />

              <h2>Criar Projeto</h2>
            </button>
          </>
        ) : type === 1 ? (
          <>
            <button type="button" onClick={() => goToProgress()}>
              <MdOutlineRunCircle size={40} color={"rgb(77, 255, 126)"} />

              <h2 color={"rgb(77, 255, 126)"}>
                Andamento
              </h2>
            </button>
            <button type="button" onClick={() => goToCompleted()}>
              <AiOutlineCheckCircle size={40} />
              <h2>Concluídos</h2>
            </button>
            <button type="button" onClick={() => goToCanceled()}>
              <TiCancel size={40} className="icon-cancel" />

              <h2>Cancelados</h2>
            </button>

            <button type="button">
              <AiFillFolderAdd size={40} className="icon-cancel" />

              <h2>Criar Projeto</h2>
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={() => navigate("/projetos-andamentos")}>
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
