import React from "react";
import {
  DivCard,
  DivLeft,
  DivRight,
  DivFooterCard,
  TitleImg,
  UserImg,
  ConfigImg,
  DivData,
  AlertData,
} from "./CardProject.styled";
import { Logo } from "../navBar/Header.styled";
import LogoLink from "../navBar/img/logo.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import PointLink from "../../assets/pontis-config.png";

function CardProject() {
  const now = 100;
  return (
    <>
      <DivCard>
        <DivLeft>
          <div className="div-pro">
            <Logo height={"32px"} src={LogoLink} />
            <h2>Open Work</h2>
          </div>
          <h2>Sistema Freelancer</h2>
          <p>
            Criar plataforma freelancer do zero, backend, frontend, bd conectado
            na nuvem, e aplicação mobile.
          </p>
        </DivLeft>

        <DivRight>
          <div className="div-row">
            <div className="progress-bar">
              <h2>Progresso</h2>
              <ProgressBar
                max={"100"}
                variant={"success"}
                now={now}
                label={`${now}%`}
              />
            </div>
            <div className="div-user-config">
              <UserImg>
                <TitleImg>{"T"}</TitleImg>
              </UserImg>

              <ConfigImg src={PointLink} />
            </div>
          </div>

          <DivFooterCard>
            <div className="div-row">
              <DivData>
                <h2>Data Início</h2>
                <h3>01/02/2023</h3>
              </DivData>
              <DivData>
                <h2>Fim estimado</h2>
                <h3>31/12/2023</h3>
              </DivData>
            </div>
            <AlertData>
              <h2>Faltam 8 meses</h2>
            </AlertData>
          </DivFooterCard>
        </DivRight>
      </DivCard>
    </>
  );
}

export default CardProject;
