// --------------------------------------------------------
// Home - Home
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { GeneralContainer } from "../../components/UI/generalLayout/Layout.styled";
import { ContainerAceptedAll, ContainerBodyMetricaHome, DivHome, DivUpInformation, HomeText, HomeTextLink, ImgHome, TitleDivInformation,} from "./Home.styled";
import ImgBanner from "../../assets/imgs/imageInitial.svg";
import Colors from "../../constants/Colors";
import HomeButton from "./components/HomeButton/HomeButton";
import CardMetrica from "./components/CardMetrica/CardMetrica";
import bolsaIcon from "../../assets/icons/bolsaIcon.svg";
import computadorIcon from "../../assets/icons/computadorIcon.svg";
import mapaIcon from "../../assets/icons/mapaIcon.svg";
import imgInitial from "../../assets/imgs/imageInitial2.svg";
import Depoiments from "./components/Depoiments/Depoiments";
import BePartToo from "./components/BePartToo/BePartToo";
import Footer from "./components/Footer/Footer";
import AceptedAll from "./components/AceptedAll/AceptedAll";

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


  return (
    <GeneralContainer>
      <NavBar />
      <ContainerBodyMetricaHome>
        <DivUpInformation
          isImg={false}
          background={Colors.PRIMARY_COLOR}
          directionColumn={true}
          center={true}
          padding={"50px"}>

          <TitleDivInformation> {"Tenha a liberdade de trabalhar de qualquer lugar, com o seu próprio horário de serviço"} </TitleDivInformation>
          <HomeButton title="Saiba mais" />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 32,
              marginBottom: 80,
            }}
          >
            <HomeText>Você está querendo contratar? </HomeText>
            <HomeTextLink>Contrate desenvolvedores</HomeTextLink>
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
    </GeneralContainer>
  );
};

export default Home;
