// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
import Styled from "./List.styled";
import ListJobs from "./ListJobs";
import ListAvaliacao from './listAvaliacao/ListAvaliacao'
import { useNavigate } from 'react-router-dom';
import { AvaliarPath } from "../../constants/Path";

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
const List = ({ type }) => {
  const navigate = useNavigate();

  return (
    <>
      <Styled.ContainerList>
        <Styled.TitleList>
          <Styled.ContainerButtonTitleList>
            {type === 1 ? (
              <Styled.Button1TitleList
                index={0}
              >
                Usuários
              </Styled.Button1TitleList>
            ) : type === 2 ? (
              <>
              <Styled.Button1TitleList
                index={0}
              >
                Avaliações
              </Styled.Button1TitleList>

              <Styled.Button1TitleList
              index={1}
              >
              Avaliar
              </Styled.Button1TitleList>
              </>
            ) : type === 3 ? (
              <>
                <Styled.Button1TitleList
                  index={0}
                  onClick={() => {
                  navigate('/dashboard');
                  }}
                >
                  Dashboard
                </Styled.Button1TitleList>

                <Styled.Button1TitleList
                  index={1}
                  onClick={() => {
                  navigate('/financeira');
                  }}
                >
                  Financeira

                </Styled.Button1TitleList>
              </>
            ) : (
              <Styled.Button1TitleList
                index={0}
                onClick={() => {
                navigate(AvaliarPath)}}
              >
                Jobs
              </Styled.Button1TitleList>
            )}

            {type !== 2 ? (
              <Styled.Button1TitleList
                index={1}
              >
                Filtros
              </Styled.Button1TitleList>
            ) : (
              ""
            )}
          </Styled.ContainerButtonTitleList>
        </Styled.TitleList>

        {type === 1 ? <ListJobs type={1}></ListJobs> : type === 2 ? <ListAvaliacao type={1}></ListAvaliacao> : ""}
      </Styled.ContainerList>
    </>
  );
};

export default List;
