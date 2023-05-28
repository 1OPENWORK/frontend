import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import {
  ContainerComponents,
  Container,
  Header,
  Img,
  NameGrade,
  Name,
  ContainerGrade,
  Grade,
  ContainerNameProject,
  ContentText,
  CardProject,
  NameProject,
  HourDificulty,
  Title,
  SubTitle,
  Content,
  ContainerLanguages,
  Languages,
  IconAndName,
  Aside,
  Article,
  ContainerCard,
  ContainerProposal,
  ContainerImgEnviarProposta,
} from "./SendContract.styled";
import { MdStarBorder } from "react-icons/md";
import { FilledButton } from "../../components/UI/buttons/Button";
import ImgEnviarProposta from "../../assets/imgs/img-enviar-proposta.svg";
import Colors from "../../constants/Colors";

const SendContract = () => {
  return (
    <>
      <Container>
        <SideBar />
        <ContainerComponents>
          <Header>
            <Img />
            <NameGrade>
              <Name>OpenWork</Name>
              <ContainerGrade>
                <MdStarBorder size={24} />
                <Grade>4,5</Grade>
              </ContainerGrade>
            </NameGrade>
          </Header>

          <ContainerNameProject>
            <ContentText>ola otário</ContentText>
          </ContainerNameProject>

          <CardProject>
            <NameProject>Importação de arquivo</NameProject>
            <ContainerCard>
              <Aside>
                <HourDificulty>
                  <Content>
                    <Title>Nível de dificuldade</Title>
                    <SubTitle>Sênior</SubTitle>
                  </Content>
                  <Content>
                    <Title>Carga horária</Title>
                    <SubTitle>20 horas</SubTitle>
                  </Content>
                </HourDificulty>

                <ContainerLanguages>
                  <Title>Linguagens</Title>
                  <Languages>
                    <IconAndName>
                      <MdStarBorder size={40} />
                      <SubTitle>React</SubTitle>
                    </IconAndName>

                    <IconAndName>
                      <MdStarBorder size={40} />
                      <SubTitle>React</SubTitle>
                    </IconAndName>

                    <IconAndName>
                      <MdStarBorder size={40} />
                      <SubTitle>React</SubTitle>
                    </IconAndName>
                  </Languages>
                </ContainerLanguages>

                <FilledButton
                  heigth={41}
                  width={106}
                  marginTop={"2.5rem"}
                  marginLeft={"0px"}
                  color={Colors.PRIMARY_COLOR}
                >
                  Chat
                </FilledButton>
              </Aside>

              <Article>
                <ContainerProposal>
                  <ContainerImgEnviarProposta src={ImgEnviarProposta} />
                  <FilledButton
                    color={Colors.BLACK}
                    heigth={41}
                    marginTop={"2.5rem"}
                  >
                    Enviar proposta
                  </FilledButton>
                </ContainerProposal>
              </Article>
            </ContainerCard>
          </CardProject>
        </ContainerComponents>
      </Container>
    </>
  );
};

export default SendContract;
