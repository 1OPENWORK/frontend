// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import Styled from "./ListJobs.styled";
import stars from "../../assets/imgs/stars.svg";
import logo from "../../assets/icons/logoIcon.svg";

// -----------------------------------------------------

// --------------------------------------------------------
// NavBar INTERFACE
// --------------------------------------------------------

/**
/**
 * A component that renders a Component description here.
 *
 * @param props The component props.
 * @returns The component JSX.
 */
const ListJobs = ({ type }) => {
  return (
    <>
      {type === 1 ? (
        <Styled.divTitleJobs>
          <Styled.h2>Nome</Styled.h2>
          <Styled.h2>Descrição</Styled.h2>
          <Styled.h2>Projeto Concluido</Styled.h2>
          <Styled.h2>Valor hora</Styled.h2>
        </Styled.divTitleJobs>
      ) : (
        <Styled.divTitleJobs>
          <Styled.h2>Empresa</Styled.h2>
          <Styled.h2>Descrição</Styled.h2>
          <Styled.h2>Tempo Aproximado</Styled.h2>
          <Styled.h2>Pessoas Necessárias</Styled.h2>
        </Styled.divTitleJobs>
      )}

      <Styled.cardJobs>
        <Styled.containerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.containerT1small>
            <Styled.t1>OpenWork</Styled.t1>
            <Styled.containerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "14px" }}
              />
              <Styled.h2>4,50</Styled.h2>
            </Styled.containerRollT1Small>
          </Styled.containerT1small>
        </Styled.containerT1>
        <Styled.t2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.t2>
        <Styled.t3>1 ano</Styled.t3>
        <Styled.t3>6 pessoas</Styled.t3>
      </Styled.cardJobs>

      <Styled.cardJobs style={{ backgroundColor: "#eaeaea" }}>
        <Styled.containerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.containerT1small>
            <Styled.t1>OpenWork</Styled.t1>
            <Styled.containerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "14px" }}
              />
              <Styled.h2>4,50</Styled.h2>
            </Styled.containerRollT1Small>
          </Styled.containerT1small>
        </Styled.containerT1>
        <Styled.t2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.t2>
        <Styled.t3>1 ano</Styled.t3>
        <Styled.t3>6 pessoas</Styled.t3>
      </Styled.cardJobs>

      <Styled.cardJobs>
        <Styled.containerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.containerT1small>
            <Styled.t1>OpenWork</Styled.t1>
            <Styled.containerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "14px" }}
              />
              <Styled.h2>4,50</Styled.h2>
            </Styled.containerRollT1Small>
          </Styled.containerT1small>
        </Styled.containerT1>
        <Styled.t2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.t2>
        <Styled.t3>1 ano</Styled.t3>
        <Styled.t3>6 pessoas</Styled.t3>
      </Styled.cardJobs>

      <Styled.cardJobs style={{ backgroundColor: "#eaeaea" }}>
        <Styled.containerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.containerT1small>
            <Styled.t1>OpenWork</Styled.t1>
            <Styled.containerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "16px" }}
              />
              <Styled.h2>4,50</Styled.h2>
            </Styled.containerRollT1Small>
          </Styled.containerT1small>
        </Styled.containerT1>
        <Styled.t2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.t2>
        <Styled.t3>1 ano</Styled.t3>
        <Styled.t3>6 pessoas</Styled.t3>
      </Styled.cardJobs>
    </>
  );
};

export default ListJobs;
