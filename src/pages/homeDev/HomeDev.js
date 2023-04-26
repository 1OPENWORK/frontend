import React from "react";
import NavBar from "../../components/navBar/NavBar";

import { GeneralContainer } from "../../components/UI/generalLayout/Layout.styled";
import Colors from "../../constants/Colors";
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
} from "./HomeDev.styled";

import imgCard from "../../assets/imgs/card-img.svg";
import imgBot from "../../assets/imgs/chat-bot-img.svg";
import { useNavigate } from "react-router";
import {
  AvaliacoesPath,
  DevsPath,
  JobsPath,
  PortfolioPath,
} from "../../constants/Path";

const HomeDev = () => {
  const navigate = useNavigate();

  const goToPortfolio = () => {
    navigate(PortfolioPath);
  };
  const goToAvaliation = () => {
    navigate(AvaliacoesPath);
  };
  const goToJogs = () => {
    navigate(JobsPath);
  };
  const goToDevs = () => {
    navigate(DevsPath);
  };

  return (
    <>
      <GeneralContainer>
        <NavBar nav={1} />
        <Container>
          <Input></Input>
          <Aside>
            <Card onClick={() => goToPortfolio()}>
              <CardImg src={imgCard} />

              <FlexCard>
                <TitleCard>{"Portfólio"}</TitleCard>
                <DescPara>
                  {
                    "Primeiro passos. Cadastre informações pessoais para conhecermos você melhor"
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
                    "Primeiro passos. Cadastre informações pessoais para conhecermos você melhor"
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
                    "Primeiro passos. Cadastre informações pessoais para conhecermos você melhor"
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
                    "Primeiro passos. Cadastre informações pessoais para conhecermos você melhor"
                  }
                </DescPara>
              </FlexCard>
            </Card>
          </Aside>

          <Article>
            <ChatBot>
              <BootImg src={imgBot} />
              <TitleCard color={Colors.WHITE}>{"ChatBot"}</TitleCard>
              <DescParaBot>
                {
                  "Como podemos te ajudar, tire suas dúvidas com o nosso bot Yuca"
                }
              </DescParaBot>
              <GenericSolidButton>{"Iniciar"}</GenericSolidButton>
            </ChatBot>
          </Article>
        </Container>
      </GeneralContainer>
    </>
  );
};

export default HomeDev;
