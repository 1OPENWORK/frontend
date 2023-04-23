// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import Styled from "./List.styled";
import ListJobs from "./ListJobs";
import { useNavigate } from 'react-router-dom';

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
  const [onMenu, setOnMenu] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <Styled.ContainerList>
        <Styled.titleList>
          <Styled.containerButtonTitleList>
            {type === 1 ? (
              <Styled.Button1TitleList
                index={0}
                onMenu={onMenu}
                onClick={() => setOnMenu(1)}
              >
                Usuários
              </Styled.Button1TitleList>
            ) : type === 2 ? (
              <Styled.Button1TitleList
                index={0}
                onMenu={onMenu}
                onClick={() => setOnMenu(2)}
              >
                Minhas avaliações
              </Styled.Button1TitleList>
            ) : type === 3 ? (
              <>
                <Styled.Button1TitleList
                  index={0}
                  onMenu={onMenu}
                  onClick={() => {
                    setOnMenu(0)
                    navigate('/dashboard');
                  }}
                >
                  Dashboard
                </Styled.Button1TitleList>

                <Styled.Button1TitleList
                  index={1}
                  onMenu={onMenu}
                  onClick={() => {
                    setOnMenu(1)
                    navigate('/financeira');
                  }}
                >
                  Financeira

                </Styled.Button1TitleList>
              </>
            ) : (
              <Styled.Button1TitleList
                index={0}
                onMenu={onMenu}
                onClick={() => setOnMenu(0)}
              >
                Jobs
              </Styled.Button1TitleList>
            )}

            {type !== 3 ? (
              <Styled.Button1TitleList
                index={1}
                onMenu={onMenu}
                onClick={() => setOnMenu(3)}
              >
                Filtros
              </Styled.Button1TitleList>
            ) : (
              ""
            )}
          </Styled.containerButtonTitleList>
        </Styled.titleList>

        {type === 1 ? <ListJobs type={1}></ListJobs> : type !== 3 ? <ListJobs></ListJobs> : ""}
      </Styled.ContainerList>
    </>
  );
};

export default List;
