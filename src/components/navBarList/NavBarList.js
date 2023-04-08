// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import NavBar from "../navBar/NavBar";
import Styled, { BackgroundNavBar, BackgroundNavBarList, ContainerNavBarList } from "./NavBarList.styled";


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
const NavBarList = ({}) => {
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
        <NavBar/>
      </BackgroundNavBar>
      <ContainerNavBarList>Jobs Disponiveis</ContainerNavBarList>
    </BackgroundNavBarList>

    

  );
};

export default NavBarList;
