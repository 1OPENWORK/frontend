import React from "react";
import Styled from "./PortifolioSobre.styled";
import { FilledButton } from "../../../components/UI/buttons/Button";
import { MdAdd, MdCircle, MdStarBorder } from "react-icons/md";
import Colors from "../../../constants/Colors";

const PortifolioSobre = () => {
  return (
    <Styled.Container>
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
          <Styled.ContentBox>
            Primeiro passos. Cadastre informações pessoais para conhecermos você
            melhor, Primeiro passos. Cadastre informações pessoais para
            conhecermos você melhor ,Primeiro passos. Cadastre informações
            pessoais para conhecermos você melhor ,Primeiro passos. Cadastre
            informações pessoais para conhecermos você melhor Primeiro passos.
            Cadastre informações pessoais para conhecermos você melhor, Primeiro
            passos. Cadastre informações pessoais para conhecermos você melhor
            ,Primeiro passos. Cadastre informações pessoais para conhecermos
            você melhor ,Primeiro passos. Cadastre informações pessoais para
            conhecermos você melhor Primeiro passos. Cadastre informações
            pessoais para conhecermos você melhor, Primeiro passos. Cadastre
            informações pessoais para conhecermos você melhor ,Primeiro passos.
            Cadastre informações pessoais para conhecermos você melhor ,Primeiro
            passos. Cadastre informações pessoais para conhecermos você melhor
          </Styled.ContentBox>
        </Styled.ContainerAboutMe>

        <Styled.DivRow>
          <Styled.ContainerWhatLook>
            <Styled.Title>O que procuro</Styled.Title>
            <Styled.ContentBox style={{ height: 200 }}>
              Primeiro passos. Cadastre informações pessoais para conhecermos
              você melhor, Primeiro passos. Cadastre informações pessoais para
              conhecermos você melhor ,Primeiro passos. Cadastre informações
              pessoais para conhecermos você melhor ,Primeiro passos. Cadastre
              informações pessoais para conhecermos você melhor
            </Styled.ContentBox>
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
        </Styled.DivRow>
      </Styled.ContainerData>

      <Styled.ContainerButtons>
        <FilledButton
          marginLeft={"0px"}
          color={Colors.BLACK}
          width={190}
          heigth={60}
        >
          Salvar Dados
        </FilledButton>

        <FilledButton
          marginRight={"0px"}
          color={Colors.PRIMARY_COLOR}
          width={190}
          heigth={60}
          onClick={() => ""}
        >
          Próximo
        </FilledButton>
      </Styled.ContainerButtons>
    </Styled.Container>
  );
};

export default PortifolioSobre;
