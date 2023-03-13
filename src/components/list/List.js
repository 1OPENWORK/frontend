// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import Styled from "./List.styled";

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
const List = ({}) => {

  const [onMenu, setOnMenu] = useState(0);

  return (
        <Styled.ContainerList>
        <Styled.titleList>
            <Styled.containerButtonTitleList>
            <Styled.Button1TitleList
            index = {0}
            onMenu = {onMenu}
            onClick = {() => setOnMenu(0)}
            >JOBS</Styled.Button1TitleList>
            <Styled.Button1TitleList 
            index = {1}
            onMenu = {onMenu}
            onClick = {() => setOnMenu(1)}
            >FILTROS</Styled.Button1TitleList>
            </Styled.containerButtonTitleList>
        </Styled.titleList>
        
        {onMenu === 0 ? () : ()}

        </Styled.ContainerList>
  );
};

export default List;