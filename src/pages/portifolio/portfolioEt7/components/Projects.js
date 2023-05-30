import { React, useState } from "react";
import Styled from "./Projects.style";
import { MdAdd, MdStarBorder } from "react-icons/md";
import Colors from "../../../../constants/Colors";
import SideBar from "../../../../components/sidebar/SideBar";
import ImageDev from "../../../../assets/imgs/imageInitial.svg";
import { FilledButton } from "../../../../components/UI/buttons/Button";
import { useNavigate } from "react-router-dom";
import { PortfolioPath } from "../../../../constants/Path";
import CustomModal from "../../../../components/UI/modal/Modal";
import {
  ModalHeader,
  ModalTitle,
  ModalClosedButton,
} from "../../../../components/UI/modal/Modal.styled";
import Info from "../../../../assets/icons/info.svg";

function Projects() {
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenExp, setmodalIsOpenExp] = useState(false);

  function handleCellClick() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleCellClickExperience() {
    setmodalIsOpenExp(true);
  }

  function handleCloseModalExperience() {
    setmodalIsOpenExp(false);
  }

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
            <Styled.ButtonInfoDiv>
              <FilledButton
                marginLeft={"0px"}
                color={Colors.BLACK}
                width={190}
                heigth={60}
              >
                Alterar dados
              </FilledButton>
              <Styled.Info onClick={handleCellClick}>
                <img src={Info}></img>
              </Styled.Info>
            </Styled.ButtonInfoDiv>
            <Styled.ButtonInfoDiv>
              <FilledButton
                onClick={() => navigate(PortfolioPath)}
                marginRight={"0px"}
                color={Colors.PRIMARY_COLOR}
                width={190}
                heigth={60}
              >
                Experiências
              </FilledButton>
              <Styled.Info onClick={handleCellClickExperience} tamanho={"20px"}>
                <img src={Info}></img>
              </Styled.Info>
            </Styled.ButtonInfoDiv>
          </Styled.ContainerButtons>
        </Styled.ContainerContent>
      </Styled.Container>

      <CustomModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        tamanho={"545px"}
        altura={"230px"}
      >
        <ModalHeader>
          <ModalTitle>Alterar Dados</ModalTitle>
          <ModalClosedButton onClick={handleCloseModal}>x</ModalClosedButton>
        </ModalHeader>
        <Styled.InfoText>
          O botão de alterar dados é como uma varinha mágica que lhe dá o poder
          de atualizar e modificar as informações sobre você. Quando você clica
          nesse botão, uma nova janela aparece na tela, onde você pode
          adicionar, editar ou corrigir os detalhes que deseja compartilhar com
          os outros.
        </Styled.InfoText>
      </CustomModal>

      <CustomModal
        isOpen={modalIsOpenExp}
        onClose={handleCloseModalExperience}
        tamanho={"545px"}
        altura={"230px"}
      >
        <ModalHeader>
          <ModalTitle>Experiência</ModalTitle>
          <ModalClosedButton onClick={handleCloseModalExperience}>
            x
          </ModalClosedButton>
        </ModalHeader>
        <Styled.InfoText>
          O botão de Experiências é como uma porta mágica que leva você a um
          mundo repleto de aventuras profissionais. Ao clicar nesse botão, você
          será transportado para um lugar onde poderei compartilhar minhas
          vivências e conquistas ao longo da minha trajetória.
        </Styled.InfoText>
      </CustomModal>
    </>
  );
}

export default Projects;
