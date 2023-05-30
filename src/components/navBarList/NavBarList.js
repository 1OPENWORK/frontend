// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
import NavBar from "../navBar/NavBar";
import Styled, {
  BackgroundNavBar,
  BackgroundNavBarList,
} from "./NavBarList.styled";

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
const NavBarList = ({ type }) => {
  // --------------------------------------------------------
  // NavBar PRIVATE DECLARATIONS
  // ------------------------------

  // --------------------------------------------------------

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <BackgroundNavBarList>
      <BackgroundNavBar>
        <NavBar nav={1} />
      </BackgroundNavBar>
      <Styled.ContainerNavBarList>
        {
          type === 1
          ? "Desenvolvedores disponíveis"
          : type === 2
          ? "Avaliações"
          : type === 3
          ? "Jobs disponíveis"
          : type === 4
          ? "Comunidade"
          : "Financeira"}
      </Styled.ContainerNavBarList>
    </BackgroundNavBarList>
  );
};

export default NavBarList;
