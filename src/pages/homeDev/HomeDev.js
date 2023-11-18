import { React, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { GeneralContainer } from "../../components/UI/generalLayout/Layout.styled";
import Colors from "../../constants/Colors";
import { post } from "../../services/Generected";
import {
  Container,
  Aside,
  Input,
  Card,
  ChatBot,
  Article,
  TitleCard,
  DescPara,
  DescParaBot,
  CardImg,
  BootImg,
  FlexCard,
  GenericSolidButton,
  ChatbotDiv,
} from "./HomeDev.styled";

import imgCard from "../../assets/imgs/card-img.svg";
import imgBot from "../../assets/imgs/chat-bot-img.svg";
import { useNavigate } from "react-router";
import {
  AvaliacoesPath,
  ComunidadePath,
  InstallAppChat,
  JobsPath,
  PortfolioPath,
} from "../../constants/Path";
import CardHelp from "../../components/UI/chatbot/Landbot";
import { getEmail, getIsDev } from "../../hooks/Cookies.js";
import { AmbienteBackend } from "../../hooks/Ambiente";

const HomeDev = () => {
  const navigate = useNavigate();
  const [showCardHelp, setShowCardHelp] = useState(false);

  function handleButtonClick() {
    setShowCardHelp(true);
    try {
      const URI = AmbienteBackend() + "/api/queue/cadastroFila";
      const dados = {
        email: getEmail(),
        tipo: getIsDev() ? "DESENVOLVEDOR" : "EMPRESA",
      };

      post(URI, dados);
    } catch (error) {
      console.error("Erro ao cadastrar campos:", error);
    }
  }

  const goToPortfolio = () => {
    navigate(PortfolioPath);
  };
  const goToAvaliation = () => {
    navigate(AvaliacoesPath);
  };
  const goToJogs = () => {
    navigate(JobsPath);
  };
  const goToIntallOpenchat = () => {
    navigate(InstallAppChat);
  };

  const placeholder = "Digite o quer encontrar no site";

  return (
    <>
      <GeneralContainer>
        <>
          <NavBar nav={1} />
          <Container>
            <Aside>
              <Card onClick={() => goToPortfolio()}>
                <CardImg src={imgCard} />

                <FlexCard>
                  <TitleCard>{"Portfólio"}</TitleCard>
                  <DescPara>
                    {
                      "No menu portfólio você terá todas as informações que fez em nosso cadastro. Caso queira, poderá também alterar seus dados"
                    }
                  </DescPara>
                </FlexCard>
              </Card>

              <Card onClick={() => goToAvaliation()}>
                <CardImg src={imgCard} />

                <FlexCard>
                  <TitleCard>{"Avaliação"}</TitleCard>
                  <DescPara>
                    {
                      "Na página de avaliação, poderá realizar uma avaliação dos projetos em que participou"
                    }
                  </DescPara>
                </FlexCard>
              </Card>

              <Card onClick={() => goToJogs()}>
                <CardImg src={imgCard} />
                <FlexCard>
                  <TitleCard>{"Jobs"}</TitleCard>
                  <DescPara>
                    {
                      "É nessa tela onde você, desenvolvedor, terá acesso aos trabalhos anunciados pelas empresas"
                    }
                  </DescPara>
                </FlexCard>
              </Card>

              <Card onClick={() => goToIntallOpenchat()}>
                <CardImg src={imgCard} />
                <FlexCard>
                  <TitleCard>{"Aplicativo OpenChat"}</TitleCard>
                  <DescPara>
                    {
                      "Esse aplicativo ajuda a você a se comunicar com os demais usuários da plataforma. Disponivél para Windows, Linux, MacOS"
                    }
                  </DescPara>
                </FlexCard>
              </Card>
            </Aside>

            <Article>
              <ChatBot>
                {showCardHelp && <CardHelp />}
                <BootImg src={imgBot} />
                <TitleCard color={Colors.WHITE}>{"ChatBot"}</TitleCard>
                <DescParaBot>
                  {
                    "Como podemos te ajudar? Tire suas dúvidas com o nosso bot virtual"
                  }
                </DescParaBot>

                <GenericSolidButton onClick={handleButtonClick}>
                  Iniciar
                </GenericSolidButton>

                <ChatbotDiv> </ChatbotDiv>
              </ChatBot>
            </Article>
          </Container>
        </>
      </GeneralContainer>
    </>
  );
};

export default HomeDev;
