// --------------------------------------------------------
// Home - Home
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
import React, { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { GeneralContainer } from "../../components/UI/generalLayout/Layout.styled";
import {
  ContainerBodyMetricaHome,
  DivUpInformation,
  HomeText,
  HomeTextLink,
  TitleDivInformation,
} from "./Home.styled";
import ImgBanner from "../../assets/imgs/imageInitial.svg";
import Colors from "../../constants/Colors";
import HomeButton from "./components/HomeButton/HomeButton";
import CardMetrica from "./components/CardMetrica/CardMetrica";
import bolsaIcon from "../../assets/icons/bolsaIcon.svg";
import computadorIcon from "../../assets/icons/computadorIcon.svg";
import mapaIcon from "../../assets/icons/mapaIcon.svg";
import Depoiments from "./components/Depoiments/Depoiments";
import BePartToo from "./components/BePartToo/BePartToo";
import Footer from "./components/Footer/Footer";
import AceptedAll from "./components/AceptedAll/AceptedAll";
import { useNavigate } from "react-router-dom";
import { AuthPath, RegisterPath } from "../../constants/Path";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { changeLGPD, selectedLGPD } from "../../store/reducers/LgpdSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import VLibras from "@djpfs/react-vlibras";

// --------------------------------------------------------
// Home INTERFACE
// --------------------------------------------------------
/**
 * A component that renders a Screen.
 *
 * @param props Properties
 * @param props.route The route
 * @param props.navigation The navigator
 * @returns The component JSX.
 */
const Home = () => {
  // --------------------------------------------------------
  // Home PRIVATE DECLARATIONS
  // --------------------------------------------------------

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { dadosLgpd } = useSelector(selectedLGPD);
  const dispatch = useDispatch();
  const goToAuth = () => {
    navigate(AuthPath);
  };

  const handleAccept = () => {
    dispatch(
      changeLGPD({
        accepty: true,
      })
    );
    setShow(false);
  };
  const handleDecline = () => {
    setShow(false);
  };

  const goToRegister = () => {
    navigate(RegisterPath);
  };

  useEffect(() => {
    if (!dadosLgpd.accepty) {
      setShow(true);
    }
  }, []);

  return (
    <GeneralContainer>
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

      <NavBar />
      <ContainerBodyMetricaHome>
        <DivUpInformation
          isImg={false}
          background={Colors.PRIMARY_COLOR}
          directionColumn={true}
          center={true}
          padding={"50px"}
        >
          <TitleDivInformation>
            {
              "Tenha a liberdade de trabalhar de qualquer lugar, com o seu próprio horário de serviço"
            }
          </TitleDivInformation>
          <HomeButton title="Saiba mais" onClick={() => goToAuth()} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 32,
              marginBottom: 80,
            }}
          >
            <HomeText>Você está querendo contratar? </HomeText>
            <HomeTextLink onClick={() => goToRegister()}>
              Contrate desenvolvedores
            </HomeTextLink>
          </div>
        </DivUpInformation>
        <DivUpInformation
          isImg={true}
          background={ImgBanner}
          directionColumn={false}
          spaceBettewen={true}
          padding={"48px"}
          isFlexEnd={true}
        >
          <CardMetrica metrica={5000} title={"Jobs"} icon={bolsaIcon} />
          <CardMetrica metrica={2000} title={"Devs"} icon={computadorIcon} />
          <CardMetrica metrica={80} title={"Países"} icon={mapaIcon} />
        </DivUpInformation>
      </ContainerBodyMetricaHome>
      <AceptedAll />
      <Depoiments />
      <BePartToo />
      <Footer />
      {/* <VLibras /> */}
    </GeneralContainer>
  );
};

export default Home;
