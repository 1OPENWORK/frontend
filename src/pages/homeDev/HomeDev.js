import {React, useState} from "react";
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
  ChatbotDiv,
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
import CardHelp from '../../components/UI/chatbot/Landbot'

const HomeDev = () => {
  const navigate = useNavigate();

  const [showCardHelp, setShowCardHelp] = useState(false);

  function handleButtonClick() {
    setShowCardHelp(true);
  }

  // useScript(
  //   "https://static.zdassets.com/ekr/snippet.js?key=f2ba511b-7b3f-4227-9be2-de2152e5677e"
  // )

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

  const placeholder = "Digite o quer encontrar no site";

  return (
    <>
      <GeneralContainer>
        <NavBar nav={1} />
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

            <Card onClick={() => goToDevs()}>
              <CardImg src={imgCard} />
              <FlexCard>
                <TitleCard>{"Desenvolvedores"}</TitleCard>
                <DescPara>
                  {
                    "Aqui é onde todos os desenvolvedores cadastrados em nosso site estão. Também é possível acessar o seu portfólio"
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
            
              <GenericSolidButton onClick={handleButtonClick}>Iniciar</GenericSolidButton>
             
              
              <ChatbotDiv> </ChatbotDiv>
             
            </ChatBot>

      

            
          </Article>
     
          
        </Container>
      </GeneralContainer>
     
      
    </>
  );
};

export default HomeDev;
