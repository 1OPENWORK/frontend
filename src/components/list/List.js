// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
import Styled from "./List.styled";
import ListJobs from "./ListJobs";
import { useNavigate } from "react-router-dom";
import {
  AvaliarPath,
  DashboardFinanceiraPath,
  FinanceiraPath,
} from "../../constants/Path";

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
              <Styled.Button1TitleList index={0}>
                Usuários
              </Styled.Button1TitleList>
            ) : type === 2 ? (
              <>
                <Styled.Button1TitleList index={0}>
                  Avaliações
                </Styled.Button1TitleList>

                <Styled.Button1TitleList
                  index={1}
                  onClick={() => {
                    navigate(AvaliarPath);
                  }}
                >
                  Avaliar
                </Styled.Button1TitleList>
              </>
            ) : type === 3 ? (
              <>
                <Styled.Button1TitleList
                  index={0}
                  onClick={() => {
                    navigate(DashboardFinanceiraPath);
                  }}
                >
                  Dashboard
                </Styled.Button1TitleList>

                <Styled.Button1TitleList
                  index={1}
                  onClick={() => {
                    navigate(FinanceiraPath);
                  }}
                >
                  Financeira
                </Styled.Button1TitleList>
              </>
            ) : (
              <Styled.Button1TitleList index={0}>Jobs</Styled.Button1TitleList>
            )}

            {type !== 2 ? (
              <Styled.Button1TitleList index={1}>
                Filtros
              </Styled.Button1TitleList>
            ) : (
              ""
            )}
          </Styled.ContainerButtonTitleList>
        </Styled.TitleList>

        {type === 1 ? (
          <ListJobs type={1}></ListJobs>
        ) : (
          <ListJobs type={1}></ListJobs>
        )}
      </Styled.ContainerList>
    </>
  );
};

export default List;
