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
  BarSearchImg,
} from "./HomeDev.styled";

import imgCard from "../../assets/imgs/card-img.svg";
import imgBot from "../../assets/imgs/chat-bot-img.svg";
import imgBarSearch from "../../assets/icons/searchIcon.svg";

const HomeDev = () => {
  return (
    <>
      <GeneralContainer>
        <NavBar />
        <Container>
          <Input>
            <BarSearchImg src={imgBarSearch} />
          </Input>

            <Aside>
            <Card>
              <CardImg src={imgCard} />

              <FlexCard>
                <TitleCard>{"Portifólio"}</TitleCard>
                <DescPara>
                  {
                    "Primeiro passos. Cadastre informações pessoais para conhecermos você melhor"
                  }
                </DescPara>
              </FlexCard>
            </Card>

            <Card>
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

            <Card>
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

            <Card>
              <CardImg src={imgCard} />
              <FlexCard>
                <TitleCard>{"Cursos"}</TitleCard>
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
              <GenericSolidButton>{"Iniciar"}
              </GenericSolidButton>
            </ChatBot>
          </Article>
        </Container>
      </GeneralContainer>
    </>
  );
};

export default HomeDev;
