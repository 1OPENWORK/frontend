// --------------------------------------------------------
// NavBar - NavBar interface
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from "react";
import Colors from "../../constants/Colors";
import { FilledButton } from "../UI/buttons/Button";
import Logo from "../../assets/imgs/logo.svg";
import Styled from "./NavBar.styled";
import { useNavigate } from "react-router-dom";
import { deleteId, deleteIsDev, deleteToken } from "../../hooks/Cookies";
import {
  HomeDevPath,
  ProgressPath,
  DashboardFinanceiraPath,
  HomePagePath,
  AuthPath,
  RegisterPath,
  ChatPath,
  HomeCompanyPath,
} from "../../constants/Path";
import { useSelector } from "react-redux";
import { selectedPerfil } from "../../store/reducers/PerfilSlice";
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
  const { dadosPerfil } = useSelector(selectedPerfil);

  const deslogar = () => {
    deleteToken();
    deleteId();
    deleteIsDev();
    navigate(AuthPath);
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
              onClick={() =>
                navigate(
                  dadosPerfil.perfil.tipo !== "EMPRESA"
                    ? HomeDevPath
                    : HomeCompanyPath
                )
              }
            />
          </Styled.Divisor>

          <Styled.NavigateNavBar>
            <Styled.TitleNavBar
              onClick={() => navigate(ProgressPath)}
              size={24}
            >
              {"Projetos"}
            </Styled.TitleNavBar>
            <Styled.TitleNavBar
              onClick={() => navigate(DashboardFinanceiraPath)}
              size={24}
            >
              {"Financeiro"}
            </Styled.TitleNavBar>

            <Styled.TitleNavBar onClick={() => navigate(ChatPath)} size={24}>
              {"Chat"}
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
            <Styled.LogoImg src={Logo} onClick={() => navigate(HomePagePath)} />
            <Styled.TitleNavBarLogo size={32}>
              {"Open Work"}
            </Styled.TitleNavBarLogo>
          </Styled.Divisor>

          <Styled.NavigateNavBar>
            <FilledButton
              onClick={() => navigate(AuthPath)}
              color={Colors.BLACK}
              width={190}
              heigth={60}
              marginRight={"0px;"}
            >
              {"Entrar"}
            </FilledButton>
            <FilledButton
              onClick={() => navigate(RegisterPath)}
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
