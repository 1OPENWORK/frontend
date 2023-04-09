// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
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
        <NavBar isLogin={true} />
      </BackgroundNavBar>
      <Styled.ContainerNavBarList>
        {type === 1
          ? "Desenvolvedores disponíveis"
          : type === 2
          ? "Avaliações"
          : "Jobs disponíveis"}
      </Styled.ContainerNavBarList>
    </BackgroundNavBarList>
  );
};

export default NavBarList;
