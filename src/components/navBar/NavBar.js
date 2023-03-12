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

  // --------------------------------------------------------

  const [type] = useState("logado");

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <Styled.ContainerNavBar>
      <Styled.Divisor>
        <Styled.LogoImg src={Logo} />
        <Styled.TitleNavBar size={0}>{"Open Work"}</Styled.TitleNavBar>
      </Styled.Divisor>

      {type === "logado" ? (
        <Styled.NavigateNavBar>
          <Styled.FlexList>
            <Styled.TitleNavBar size={24}>{"Projetos"}</Styled.TitleNavBar>
            <Styled.TitleNavBar size={24}>{"Comunidade"}</Styled.TitleNavBar>
            <Styled.TitleNavBar size={24}>{"Financeiro"}</Styled.TitleNavBar>
          </Styled.FlexList>

          <FilledButton color={Colors.black} width={190} heigth={60}>
            {"Sair"}
          </FilledButton>
        </Styled.NavigateNavBar>
      ) : (
        <Styled.NavigateNavBar>
          <Styled.TitleNavBar size={24}>
            {"Como contratamos"}
          </Styled.TitleNavBar>
          <Styled.TitleNavBar size={24}>{"Depoimentos"}</Styled.TitleNavBar>
          <Styled.TitleNavBar size={24}>{"Empresas"}</Styled.TitleNavBar>
          <FilledButton color={Colors.black} width={190} heigth={60}>
            {"Entrar"}
          </FilledButton>
          <FilledButton color={Colors.SECONDARY_COLOR} width={190} heigth={60}>
            {"Junte-se a nós"}
          </FilledButton>
        </Styled.NavigateNavBar>
      )}
    </Styled.ContainerNavBar>
  );
  // --------------------------------------------------------
};

export default NavBar;
