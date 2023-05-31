import { React, useState } from "react";
import SideBar from "../components/SideBar";
import Styled from "./About.style";
import { MdAdd } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { MdCircle } from "react-icons/md";
import Colors from "../../../constants/Colors";
import { FilledButton } from "../../../components/UI/buttons/Button";
import { useNavigate } from "react-router-dom";
import {
  PortfolioExperiencia,
  PortfolioProjectsPath,
} from "../../../constants/Path";
import CustomModal from "../../../components/UI/modal/Modal";
import {
  ModalHeader,
  ModalTitle,
  ModalClosedButton,
} from "../../../components/UI/modal/Modal.styled";
import Info from "../../../assets/icons/info.svg";

function About({ isAbout }) {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenProject, setmodalIsOpenProject] = useState(false);
  const [modalIsOpenExp, setmodalIsOpenExp] = useState(false);

  function handleCellClick() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleCellClickProject() {
    setmodalIsOpenProject(true);
  }

  function handleCloseModalProject() {
    setmodalIsOpenProject(false);
  }

  function handleCellClickExperience() {
    setmodalIsOpenExp(true);
  }

  function handleCloseModalExperience() {
    setmodalIsOpenExp(false);
  }

  return (
    <Styled.Container>
      {!isAbout === true ? (
        <>
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

            <Styled.ContainerData>
              <Styled.ContainerAboutMe>
                <Styled.Title>Sobre mim</Styled.Title>
                <Styled.Content>
                  Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor, Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor ,Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor
                  ,Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor, Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor
                  ,Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor ,Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor,
                  Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor ,Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor ,Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor
                </Styled.Content>
              </Styled.ContainerAboutMe>

              <Styled.ContainerWhatLook>
                <Styled.Title>O que procuro</Styled.Title>
                <Styled.Content>
                  Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor, Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor ,Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor
                  ,Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor
                </Styled.Content>
              </Styled.ContainerWhatLook>

              <Styled.ContainerPreferences>
                <Styled.Title>Preferências</Styled.Title>

                <Styled.ContentPreferences>
                  <Styled.ItemContent>
                    <MdCircle size={16} />
                    <Styled.Itens>Trabalho remoto</Styled.Itens>
                  </Styled.ItemContent>

                  <Styled.ItemContent>
                    <MdCircle size={16} />
                    <Styled.Itens>Trabalho remoto</Styled.Itens>
                  </Styled.ItemContent>

                  <Styled.ItemContent>
                    <MdCircle size={16} />
                    <Styled.Itens>Trabalho remoto</Styled.Itens>
                  </Styled.ItemContent>

                  <Styled.ItemContent>
                    <MdCircle size={16} />
                    <Styled.Itens>Trabalho remoto</Styled.Itens>
                  </Styled.ItemContent>
                </Styled.ContentPreferences>
              </Styled.ContainerPreferences>
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
                  <img src={Info} alt="info"></img>
                </Styled.Info>
              </Styled.ButtonInfoDiv>

              <FilledButton
                marginRight={"0px"}
                color={Colors.PRIMARY_COLOR}
                width={190}
                heigth={60}
                onClick={() => navigate(PortfolioExperiencia)}
              >
                Próximo
              </FilledButton>
            </Styled.ContainerButtons>
          </Styled.ContainerContent>
        </>
      ) : (
        <>
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

            <Styled.ContainerData>
              <Styled.ContainerAboutMe>
                <Styled.ButtonInfoDiv>
                  <Styled.Title>Experiência</Styled.Title>
                  <Styled.Info
                    onClick={handleCellClickExperience}
                    tamanho={"20px"}
                  >
                    <img src={Info} alt="info"></img>
                  </Styled.Info>
                </Styled.ButtonInfoDiv>
                <Styled.Content>
                  Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor, Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor ,Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor
                  ,Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor, Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor
                  ,Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor ,Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor,
                  Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor ,Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor ,Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor
                </Styled.Content>
              </Styled.ContainerAboutMe>

              <Styled.ContainerWhatLook>
                <Styled.Title>Formação</Styled.Title>
                <Styled.Content>
                  Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor, Primeiro passos. Cadastre informações
                  pessoais para conhecermos você melhor ,Primeiro passos.
                  Cadastre informações pessoais para conhecermos você melhor
                  ,Primeiro passos. Cadastre informações pessoais para
                  conhecermos você melhor
                </Styled.Content>
              </Styled.ContainerWhatLook>

              <Styled.ContainerPreferences>
                <Styled.Title>Cursos</Styled.Title>

                <Styled.ContentPreferences>
                  <Styled.ItemContent>
                    <MdCircle size={16} />
                    <Styled.Itens>Trabalho remoto</Styled.Itens>
                  </Styled.ItemContent>

                  <Styled.ItemContent>
                    <MdCircle size={16} />
                    <Styled.Itens>Trabalho remoto</Styled.Itens>
                  </Styled.ItemContent>

                  <Styled.ItemContent>
                    <MdCircle size={16} />
                    <Styled.Itens>Trabalho remoto</Styled.Itens>
                  </Styled.ItemContent>

                  <Styled.ItemContent>
                    <MdCircle size={16} />
                    <Styled.Itens>Trabalho remoto</Styled.Itens>
                  </Styled.ItemContent>
                </Styled.ContentPreferences>
              </Styled.ContainerPreferences>
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
                  <img src={Info} alt="info"></img>
                </Styled.Info>
              </Styled.ButtonInfoDiv>
              <Styled.ButtonInfoDiv>
                <FilledButton
                  marginRight={"0px"}
                  color={Colors.PRIMARY_COLOR}
                  width={190}
                  heigth={60}
                  onClick={() => navigate(PortfolioProjectsPath)}
                >
                  Projetos
                </FilledButton>
                <Styled.Info onClick={handleCellClickProject} tamanho={"20px"}>
                  <img src={Info} alt="info"></img>
                </Styled.Info>
              </Styled.ButtonInfoDiv>
            </Styled.ContainerButtons>
          </Styled.ContainerContent>
        </>
      )}

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
        isOpen={modalIsOpenProject}
        onClose={handleCloseModalProject}
        tamanho={"545px"}
        altura={"230px"}
      >
        <ModalHeader>
          <ModalTitle>Projetos</ModalTitle>
          <ModalClosedButton onClick={handleCloseModalProject}>
            x
          </ModalClosedButton>
        </ModalHeader>
        <Styled.InfoText>
          O botão de Projetos é como um portal mágico que revela os trabalhos
          incríveis que você realizou ou está realizando. Ao clicar nesse botão,
          uma janela se abre, revelando uma galeria de projetos que você deseja
          compartilhar com o mundo.
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
          Suas experiências são como uma carta pessoal escrita especialmente para quem quer te conhecer.
          Nesse bloco, compartilhe histórias emocionantes e valiosas sobre sua
          trajetória profissional e pessoal, revelando momentos marcantes e
          aprendizados ao longo do caminho.
        </Styled.InfoText>
      </CustomModal>
    </Styled.Container>
  );
}

export default About;
