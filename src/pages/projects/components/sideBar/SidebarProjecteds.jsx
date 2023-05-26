import React from "react";

import { BodyContainerProjecteds, Container } from "./SidebarProjecteds.styled";
import { MdOutlineRunCircle } from "react-icons/md";
import { AiOutlineCheckCircle, AiFillFolderAdd } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";
import { MdArrowBack } from "react-icons/md";
import Colors from "../../../../constants/Colors";
import { useNavigate } from "react-router";
import {
  HomeDevPath,
  CreateProjectPath,
  ProgressPath,
  ProjectsPath,
  canceledPath,
} from "../../../../constants/Path";
import { RxDashboard } from "react-icons/rx";
import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { useState } from "react";

import ButtonCompleted from "./components/ButtonCompleted";
import { getIsDev } from "../../../../hooks/Cookies";

function SidebarProjecteds({ type }) {
  const navigate = useNavigate();

  const [color, setColor] = useState("#fff");
  const [typeUse, setType] = useState(type);

  const isDev = getIsDev();

  const goToHomeDev = () => {
    navigate(HomeDevPath);
  };

  const goToProgress = () => {
    navigate(ProgressPath);
    setType(1);
  };
  const goToCompleted = () => {
    navigate(ProjectsPath);
    setType(2);
  };

  const goToCanceled = () => {
    navigate(canceledPath);
    setType(3);
  };

  const goToCreateProject = () => {
    navigate(CreateProjectPath);
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
        color={Colors.WHITE}
        active={Colors.SECONDARY_COLOR}
      />
      <BodyContainerProjecteds>
        {type === 3 ? (
          <>
            <ButtonCompleted
              type={1}
              desc={"Andamento"}
              onClick={() => goToProgress()}
            />
            <ButtonCompleted
              type={2}
              desc={"Concluídos"}
              onClick={() => goToCompleted()}
            />
            <ButtonCompleted
              color={"rgb(77, 255, 126)"}
              type={3}
              desc={"Cancelados"}
              onClick={() => goToCanceled()}
            />

            {!isDev ? (
              <>
                <button type="button" onClick={() => goToCreateProject()}>
                  <AiFillFolderAdd size={40} className="icon-cancel" />

                  <h2>Criar Projeto</h2>
                </button>
              </>
            ) : (
              ""
            )}
          </>
        ) : type === 2 ? (
          <>
            <ButtonCompleted
              type={1}
              desc={"Andamento"}
              onClick={() => goToProgress()}
            />
            <ButtonCompleted
              color={"rgb(77, 255, 126)"}
              type={2}
              desc={"Concluídos"}
              onClick={() => goToCompleted()}
            />
            <ButtonCompleted
              type={3}
              desc={"Cancelados"}
              onClick={() => goToCanceled()}
            />

            {!isDev ? (
              <>
                <button type="button" onClick={() => goToCreateProject()}>
                  <AiFillFolderAdd size={40} className="icon-cancel" />

                  <h2>Criar Projeto</h2>
                </button>
              </>
            ) : (
              ""
            )}
          </>
        ) : type === 1 ? (
          <>
            <ButtonCompleted
              color={"rgb(77, 255, 126)"}
              type={1}
              desc={"Andamento"}
              onClick={() => goToProgress()}
            />
            <ButtonCompleted
              type={2}
              desc={"Concluídos"}
              onClick={() => goToCompleted()}
            />
            <ButtonCompleted
              type={3}
              desc={"Cancelados"}
              onClick={() => goToCanceled()}
            />
            {!isDev ? (
              <>
                <button type="button" onClick={() => goToCreateProject()}>
                  <AiFillFolderAdd size={40} className="icon-cancel" />

                  <h2>Criar Projeto</h2>
                </button>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <ButtonCompleted
              type={4}
              desc={"Projetos"}
              onClick={() => goToProgress()}
            />
            <ButtonCompleted
              color={"rgb(77, 255, 126)"}
              type={5}
              desc={"Tarefas"}
            />
          </>
        )}
      </BodyContainerProjecteds>
    </Container>
  );
}

export default SidebarProjecteds;
