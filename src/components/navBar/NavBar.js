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
import {
  HomeDevPath,
  ProgressPath,
  DashboardFinanceiraPath,
  HomePagePath,
  AuthPath,
  RegisterPath,
  HomeCompanyPath,
} from "../../constants/Path";
import { useSelector } from "react-redux";
import { selectedPerfil } from "../../store/reducers/PerfilSlice";
import appdownload from "../../download/openwork-install-1.0.0.rar";
import { changeLGPD, selectedLGPD } from "../../store/reducers/LgpdSlice";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
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
  const { dadosLgpd } = useSelector(selectedLGPD);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const deslogar = () => {
    deleteToken();
    deleteId();
    deleteIsDev();
    navigate(AuthPath);
  };

  const handleDecline = () => {
    setShow(false);
  };

  const handleAccept = () => {
    dispatch(
      changeLGPD({
        accepty: true,
      })
    );
    setShow(false);
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

            <a href={appdownload} download={true}>
              <Styled.TitleNavBar size={24}>{"Instalar"}</Styled.TitleNavBar>
            </a>
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

            {!dadosLgpd.accepty ? (
              <>
                <FilledButton
                  onClick={() => setShow(true)}
                  color={Colors.BLACK}
                  width={190}
                  heigth={60}
                  marginRight={"0px;"}
                >
                  {"Politica de Privacidade"}
                </FilledButton>
              </>
            ) : (
              <>
                <FilledButton
                  disabled={!dadosLgpd.accepty}
                  onClick={() => navigate(RegisterPath)}
                  color={Colors.SECONDARY_COLOR}
                  width={190}
                  heigth={60}
                  marginRight={"0px;"}
                >
                  {"Junte-se a nós"}
                </FilledButton>
              </>
            )}
          </Styled.NavigateNavBar>
        </>
      )}

      <Modal size="xl" show={show} centered>
        <Modal.Header>
          <Modal.Title>Política de Privacidade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Nós nos preocupamos com a proteção dos seus dados pessoais. Ao
            utilizar este serviço, você concorda com a coleta, o processamento e
            o armazenamento dos seus dados conforme descrito em nossa Política
            de Privacidade. Informamos que os dados fornecidos serão utilizados
            para os seguintes propósitos: (listar os propósitos, ex:
            personalização de conteúdo, análise de uso do serviço, etc.). Seus
            dados não serão compartilhados com terceiros sem o seu
            consentimento, exceto quando necessário para cumprir com obrigações
            legais. Você tem o direito de acessar, corrigir, atualizar ou
            deletar suas informações pessoais a qualquer momento. Para exercer
            esses direitos ou caso tenha dúvidas sobre nossa política de
            privacidade, entre em contato conosco. Ao clicar em "Aceitar", você
            concorda com nossa política de privacidade e com o processamento dos
            seus dados pessoais de acordo com os termos apresentados.
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* Botões para aceitar ou recusar */}
          <Button variant="secondary" onClick={handleDecline}>
            Recusar
          </Button>
          <Button
            style={{
              background: Colors.PRIMARY_COLOR,
              width: 200,
              border: "none",
            }}
            onClick={handleAccept}
          >
            Aceitar
          </Button>
        </Modal.Footer>
      </Modal>
    </Styled.ContainerNavBar>
  );
  // --------------------------------------------------------
};

export default NavBar;
