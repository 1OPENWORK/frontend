// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React, { useState } from "react";
import Colors from "../../constants/Colors";
import { FilledButton } from "../UI/buttons/Button";
import Logo from "../../assets/imgs/logo.svg";
import Styled from "./NavBar.styled";
import { useNavigate } from "react-router-dom";
import { deleteId, deleteIsDev, deleteToken } from "../../hooks/Cookies";
import Cookies from "js-cookie";
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
const NavBar = ({ nav }) => {
  // --------------------------------------------------------
  // NavBar PRIVATE DECLARATIONS
  // --------------------------------------------------------

  // --------------------------------------------------------
  const navigate = useNavigate();
  const [type] = useState("logado");

  const deslogar = () => {
    deleteToken();
    deleteId();
    deleteIsDev();
    navigate("/login");
  };

  // --------------------------------------------------------
  // REACT RETURN FUNCTION
  // --------------------------------------------------------
  return (
    <Styled.ContainerNavBar nav={1}>
      {nav === 1 ? (
        <>
          <Styled.Divisor>
            <Styled.LogoImg
              src={Logo}
              onClick={() => navigate("/desenvolvedor")}
            />
          </Styled.Divisor>

          <Styled.NavigateNavBar>
            <Styled.TitleNavBar onClick={() => navigate("/projetos")} size={24}>
              {"Projetos"}
            </Styled.TitleNavBar>
            <Styled.TitleNavBar
              onClick={() => navigate("/comunidade")}
              size={24}
            >
              {"Comunidade"}
            </Styled.TitleNavBar>
            <Styled.TitleNavBar
              onClick={() => navigate("/dashboard")}
              size={24}
            >
              {"Financeiro"}
            </Styled.TitleNavBar>
          </Styled.NavigateNavBar>
          <FilledButton
            onClick={() => deslogar()}
            color={Colors.BLACK}
            width={190}
            heigth={60}
            marginRight={"1.5rem"}
          >
            {"Sair"}
          </FilledButton>
        </>
      ) : nav === 2 ? (
        <>
          <Styled.Divisor>
            <Styled.LogoImg src={Logo} />
          </Styled.Divisor>

          <Styled.NavigateNavBar>
            <Styled.TitleNavBar onClick={() => navigate("/projetos")} size={24}>
              {"Projetos"}
            </Styled.TitleNavBar>
            <Styled.TitleNavBar
              onClick={() => navigate("/dashboard")}
              size={24}
            >
              {"Financeiro"}
            </Styled.TitleNavBar>
          </Styled.NavigateNavBar>
          <FilledButton
            onClick={() => deslogar()}
            color={Colors.BLACK}
            width={190}
            heigth={60}
            marginRight={"1.5rem"}
          >
            {"Sair"}
          </FilledButton>
        </>
      ) : (
        <>
          <Styled.Divisor>
            <Styled.LogoImg src={Logo} onClick={() => navigate("/")} />
            <Styled.TitleNavBarLogo size={32}>
              {"Open Work"}
            </Styled.TitleNavBarLogo>
          </Styled.Divisor>

          <Styled.NavigateNavBar>
            <Styled.TitleNavBar size={24}>
              {"Como contratamos"}
            </Styled.TitleNavBar>
            <Styled.TitleNavBar size={24}>{"Depoimentos"}</Styled.TitleNavBar>
            <Styled.TitleNavBar size={24}>{"Empresas"}</Styled.TitleNavBar>
            <FilledButton
              onClick={() => navigate("/login")}
              color={Colors.BLACK}
              width={190}
              heigth={60}
              marginRight={"0px;"}
            >
              {"Entrar"}
            </FilledButton>
            <FilledButton
              onClick={() => navigate("/cadastro")}
              color={Colors.SECONDARY_COLOR}
              width={190}
              heigth={60}
              marginRight={"0px;"}
            >
              {"Junte-se a nós"}
            </FilledButton>
          </Styled.NavigateNavBar>
        </>
      )}
    </Styled.ContainerNavBar>
  );
  // --------------------------------------------------------
};

export default NavBar;
