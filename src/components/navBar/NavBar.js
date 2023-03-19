// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import { FilledButton } from "../UI/buttons/Button";
import Logo from "../../assets/imgs/logo.svg";
import Styled from "./NavBar.styled";
import { useNavigate } from "react-router-dom";

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
const NavBar = ({}) => {
  // --------------------------------------------------------
  // NavBar PRIVATE DECLARATIONS
  // --------------------------------------------------------
  const nagivate = useNavigate();

  // --------------------------------------------------------

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <Styled.ContainerNavBar>
      <Styled.Divisor>
        <Styled.LogoImg src={Logo} />
        <Styled.TitleNavBarLogo size={32}> {"Open Work"} </Styled.TitleNavBarLogo>
      </Styled.Divisor>

      <Styled.NavigateNavBar>
        <Styled.TitleNavBar size={24}> {"Como contratamos"} </Styled.TitleNavBar>
        <Styled.TitleNavBar size={24}>{"Depoimentos"}</Styled.TitleNavBar>
        <Styled.TitleNavBar size={24}>{"Empresas"}</Styled.TitleNavBar>
        <FilledButton onClick={() => nagivate("/auth")} color={Colors.black} width={190} heigth={60}> {"Entrar"} </FilledButton>
        <FilledButton onClick={() => nagivate("/register")} color={Colors.SECONDARY_COLOR} width={190} heigth={60}> {"Junte-se a nós"}
        </FilledButton>
      </Styled.NavigateNavBar>
    </Styled.ContainerNavBar>
  );
  // --------------------------------------------------------
};

export default NavBar;
