import React from "react";
import Styled from "./Projects.style";
import { MdAdd, MdStarBorder } from "react-icons/md";
import Colors from "../../../../constants/Colors";
import SideBar from "../../../../components/sidebar/SideBar";
import ImageDev from "../../../../assets/imgs/imageInitial.svg";
import { FilledButton } from "../../../../components/UI/buttons/Button";
import { useNavigate } from "react-router-dom";
import { PortfolioPath } from "../../../../constants/Path";

function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <Styled.Container>
        <SideBar />
        <Styled.ContainerContent>
          <Styled.Header>
            <Styled.ImgUser>
              <MdAdd size={24} color={Colors.WHITE} />
            </Styled.ImgUser>

            <Styled.ContainerHeader>
              <Styled.NameUser>Andreas Rodrigues</Styled.NameUser>
              <Styled.ContainerNoteArea>
                <Styled.Note>
                  <MdStarBorder size={24} />
                  <Styled.Text>4,5</Styled.Text>
                </Styled.Note>

                <Styled.Specializations>
                  <Styled.Text>Front, back, banco, devops</Styled.Text>
                </Styled.Specializations>
              </Styled.ContainerNoteArea>
            </Styled.ContainerHeader>
          </Styled.Header>

          <Styled.Title>Projetos</Styled.Title>

          <Styled.ContainerData>
            <Styled.Content>
              <Styled.ContainerText>
                <Styled.Text>
                  Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor, Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor
                  ,Primeiro passos. Cadastre informações pessoais para
                </Styled.Text>
              </Styled.ContainerText>

              <Styled.ContainerImg isImg={true} background={ImageDev} />
            </Styled.Content>
          </Styled.ContainerData>
          <Styled.ContainerButtons>
            <FilledButton
              marginLeft={"0px"}
              color={Colors.BLACK}
              width={190}
              heigth={60}
            >
              Alterar dados
            </FilledButton>

            <FilledButton
              onClick={() => navigate(PortfolioPath)}
              marginRight={"0px"}
              color={Colors.PRIMARY_COLOR}
              width={190}
              heigth={60}
            >
              Voltar
            </FilledButton>
          </Styled.ContainerButtons>
        </Styled.ContainerContent>
      </Styled.Container>
    </>
  );
}

export default Projects;
