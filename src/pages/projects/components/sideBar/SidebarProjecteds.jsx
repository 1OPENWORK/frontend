import React from "react";

import { BodyContainerProjecteds, Container } from "./SidebarProjecteds.styled";
import { AiFillFolderAdd } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import Colors from "../../../../constants/Colors";
import { useNavigate } from "react-router";
import {
  HomeDevPath,
  CreateProjectPath,
  ProgressPath,
  ProjectsPath,
  canceledPath,
  HomeCompanyPath,
} from "../../../../constants/Path";

import { useState } from "react";

import ButtonCompleted from "./components/ButtonCompleted";
import { getIsDev } from "../../../../hooks/Cookies";

function SidebarProjecteds({ type }) {
  const navigate = useNavigate();

  const isDev = getIsDev();

  // eslint-disable-next-line no-unused-vars
  const [typeUse, setType] = useState(type);

  const goToHomeDev = () => {
    navigate(HomeDevPath);
  };

  const goToHomeCompany = () => {
    navigate(HomeCompanyPath);
  };

  const goToProgress = () => {
    navigate(ProgressPath);
    setType(1);
    console.log(typeof isDev);
  };
  const goToCompleted = () => {
    navigate(ProjectsPath);
    setType(2);
    console.log(typeof isDev);
  };

  const goToCanceled = () => {
    navigate(canceledPath);
    setType(3);
    console.log(typeof isDev);
  };

  const goToCreateProject = () => {
    navigate(CreateProjectPath);
  };

  return (
    <Container>
      {isDev === "true" ? (
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
      ) : (
        <MdArrowBack
          onClick={() => goToHomeCompany()}
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
      )}

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

            {isDev === "false" && (
              <>
                <button type="button" onClick={() => goToCreateProject()}>
                  <AiFillFolderAdd size={40} className="icon-cancel" />
                  <h2>Criar Projeto</h2>
                </button>
              </>
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

            {isDev === "false" && (
              <>
                <button type="button" onClick={() => goToCreateProject()}>
                  <AiFillFolderAdd size={40} className="icon-cancel" />

                  <h2>Criar Projeto</h2>
                </button>
              </>
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
            {isDev === "false" && (
              <>
                <button type="button" onClick={() => goToCreateProject()}>
                  <AiFillFolderAdd size={40} className="icon-cancel" />

                  <h2>Criar Projeto</h2>
                </button>
              </>
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
