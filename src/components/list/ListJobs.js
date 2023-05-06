// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
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
        <Styled.DivTitleJobs>
          <Styled.H2>Nome</Styled.H2>
          <Styled.H2>Descrição</Styled.H2>
          <Styled.H2>Projeto Concluido</Styled.H2>
          <Styled.H2>Valor hora</Styled.H2>
        </Styled.DivTitleJobs>
      ) : (
        <Styled.DivTitleJobs>
          <Styled.H2>Empresa</Styled.H2>
          <Styled.H2>Descrição</Styled.H2>
          <Styled.H2>Tempo Aproximado</Styled.H2>
          <Styled.H2>Pessoas Necessárias</Styled.H2>
        </Styled.DivTitleJobs>
      )}

      <Styled.CardJobs>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "14px" }}
              />
              <Styled.H2>4,50</Styled.H2>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>1 ano</Styled.T3>
        <Styled.T3>6 pessoas</Styled.T3>
      </Styled.CardJobs>

      <Styled.CardJobs style={{ backgroundColor: "#eaeaea" }}>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "14px" }}
              />
              <Styled.H2>4,50</Styled.H2>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>1 ano</Styled.T3>
        <Styled.T3>6 pessoas</Styled.T3>
      </Styled.CardJobs>

      <Styled.CardJobs>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "14px" }}
              />
              <Styled.H2>4,50</Styled.H2>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>1 ano</Styled.T3>
        <Styled.T3>6 pessoas</Styled.T3>
      </Styled.CardJobs>

      <Styled.CardJobs style={{ backgroundColor: "#eaeaea" }}>
        <Styled.ContainerT1>
          <img src={logo} alt="logo da empresa" />
          <Styled.ContainerT1small>
            <Styled.T1>OpenWork</Styled.T1>
            <Styled.ContainerRollT1Small>
              <img
                src={stars}
                alt="img stars"
                style={{ width: "16px", height: "16px" }}
              />
              <Styled.H2>4,50</Styled.H2>
            </Styled.ContainerRollT1Small>
          </Styled.ContainerT1small>
        </Styled.ContainerT1>
        <Styled.T2>
          Criar plataforma freelancer do zero, backend, frontend, bd conectado
          na nuvem, e aplicação mobile.
        </Styled.T2>
        <Styled.T3>1 ano</Styled.T3>
        <Styled.T3>6 pessoas</Styled.T3>
      </Styled.CardJobs>
    </>
  );
};

export default ListJobs;
