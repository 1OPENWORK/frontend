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
  DevsPath,
  PortfolioPath,
} from "../../constants/Path";
import CardHelp from "../../components/UI/chatbot/Landbot";
import { getEmail, getIsDev } from "../../hooks/Cookies.js";
import { AmbienteBackend } from "../../hooks/Ambiente";

const HomeCompany = () => {
  const navigate = useNavigate();
  const [showCardHelp, setShowCardHelp] = useState(false);

  console.log(getEmail());
  console.log(getIsDev());
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
  const goToDevs = () => {
    navigate(DevsPath);
  };
  const goToComunidade = () => {
    navigate(ComunidadePath);
  };

  const placeholder = "Digite o quer encontrar no site";

  return (
    <>
      <GeneralContainer>
        <>
          <NavBar nav={2} />
          <Container>
            <Input placeholder={placeholder}></Input>
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

              <Card onClick={() => goToDevs()}>
                <CardImg src={imgCard} />
                <FlexCard>
                  <TitleCard>{"Desenvolvedores"}</TitleCard>
                  <DescPara>
                    {
                      "É nessa tela onde você, empresa, terá acesso aos nossos desenvolvedores cadastrados, prontos para receberem um projeto"
                    }
                  </DescPara>
                </FlexCard>
              </Card>

              <Card onClick={() => goToComunidade()}>
                <CardImg src={imgCard} />
                <FlexCard>
                  <TitleCard>{"Comunidade"}</TitleCard>
                  <DescPara>
                    {
                      "Veja, publique, comente e curta na nossa comunidade. O lugar ideial para troca de conhecimento entre os nossos usuários"
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

export default HomeCompany;
