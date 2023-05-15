import React from 'react';
import SideBar from '../components/SideBar';
import Styled from "./About.style";
import {MdAdd} from "react-icons/md";
import {MdStarBorder} from "react-icons/md";
import {MdCircle} from "react-icons/md";
import Colors from '../../../constants/Colors';
import { FilledButton }from '../../../components/UI/buttons/Button';
import { useNavigate } from 'react-router-dom';
import { PortfolioEt6Path, PortfolioProjectsPath } from '../../../constants/Path';

function About({isAbout}) {

  const navigate = useNavigate();

  return (
    <Styled.Container>
    {!isAbout === true ? (
    <>
        <SideBar />
        <Styled.ContainerContent>
          <Styled.Header>
            <Styled.ImgUser>
              <MdAdd size={24} color={Colors.WHITE}/>
            </Styled.ImgUser>

            <Styled.ContainerHeader>
              <Styled.NameUser>Andreas Rodrigues</Styled.NameUser>
              <Styled.ContainerNoteArea>
                <Styled.Note>
                  <MdStarBorder size={24}/>
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
                Primeiro passos. Cadastre informações pessoais para conhecermos você melhor, Primeiro passos. Cadastre informações pessoais
                 para conhecermos você melhor ,Primeiro passos. Cadastre informações pessoais para conhecermos você melhor ,Primeiro passos. Cadastre 
                 informações pessoais para conhecermos você melhor
                 Primeiro passos. Cadastre informações pessoais para conhecermos você melhor, Primeiro passos. Cadastre informações pessoais
                 para conhecermos você melhor ,Primeiro passos. Cadastre informações pessoais para conhecermos você melhor ,Primeiro passos. Cadastre 
                 informações pessoais para conhecermos você melhor
                 Primeiro passos. Cadastre informações pessoais para conhecermos você melhor, Primeiro passos. Cadastre informações pessoais
                 para conhecermos você melhor ,Primeiro passos. Cadastre informações pessoais para conhecermos você melhor ,Primeiro passos. Cadastre 
                 informações pessoais para conhecermos você melhor
              </Styled.Content>
            </Styled.ContainerAboutMe>

            <Styled.ContainerWhatLook>
            <Styled.Title>O que procuro</Styled.Title>
            <Styled.Content>
                Primeiro passos. Cadastre informações pessoais para conhecermos você melhor, Primeiro passos. Cadastre informações pessoais
                 para conhecermos você melhor ,Primeiro passos. Cadastre informações pessoais para conhecermos você melhor ,Primeiro passos. Cadastre 
                 informações pessoais para conhecermos você melhor
              </Styled.Content>
            </Styled.ContainerWhatLook>

            <Styled.ContainerPreferences>
              <Styled.Title>Preferências</Styled.Title>

              <Styled.ContentPreferences>
                <Styled.ItemContent>
                  <MdCircle size={16}/>
                  <Styled.Itens>Trabalho remoto</Styled.Itens>
                </Styled.ItemContent>

                <Styled.ItemContent>
                  <MdCircle size={16}/>
                  <Styled.Itens>Trabalho remoto</Styled.Itens>
                </Styled.ItemContent>

                <Styled.ItemContent>
                  <MdCircle size={16}/>
                  <Styled.Itens>Trabalho remoto</Styled.Itens>
                </Styled.ItemContent>

                <Styled.ItemContent>
                  <MdCircle size={16}/>
                  <Styled.Itens>Trabalho remoto</Styled.Itens>
                </Styled.ItemContent>
              </Styled.ContentPreferences>
            </Styled.ContainerPreferences>
          </Styled.ContainerData>

          <Styled.ContainerButtons>
            <FilledButton marginLeft={"0px"} color={Colors.BLACK} width={190} heigth={60}>
              Alterar dados
            </FilledButton>

            <FilledButton marginRight={"0px"} color={Colors.PRIMARY_COLOR} width={190} heigth={60} onClick={() => navigate(PortfolioEt6Path)}>
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
              <MdAdd size={24} color={Colors.WHITE}/>
            </Styled.ImgUser>

            <Styled.ContainerHeader>
              <Styled.NameUser>Andreas Rodrigues</Styled.NameUser>
              <Styled.ContainerNoteArea>
                <Styled.Note>
                  <MdStarBorder size={24}/>
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
              <Styled.Title>Experiência</Styled.Title>
              <Styled.Content>
                Primeiro passos. Cadastre informações pessoais para conhecermos você melhor, Primeiro passos. Cadastre informações pessoais
                 para conhecermos você melhor ,Primeiro passos. Cadastre informações pessoais para conhecermos você melhor ,Primeiro passos. Cadastre 
                 informações pessoais para conhecermos você melhor
                 Primeiro passos. Cadastre informações pessoais para conhecermos você melhor, Primeiro passos. Cadastre informações pessoais
                 para conhecermos você melhor ,Primeiro passos. Cadastre informações pessoais para conhecermos você melhor ,Primeiro passos. Cadastre 
                 informações pessoais para conhecermos você melhor
                 Primeiro passos. Cadastre informações pessoais para conhecermos você melhor, Primeiro passos. Cadastre informações pessoais
                 para conhecermos você melhor ,Primeiro passos. Cadastre informações pessoais para conhecermos você melhor ,Primeiro passos. Cadastre 
                 informações pessoais para conhecermos você melhor
              </Styled.Content>
            </Styled.ContainerAboutMe>

            <Styled.ContainerWhatLook>
            <Styled.Title>Formação</Styled.Title>
            <Styled.Content>
                Primeiro passos. Cadastre informações pessoais para conhecermos você melhor, Primeiro passos. Cadastre informações pessoais
                 para conhecermos você melhor ,Primeiro passos. Cadastre informações pessoais para conhecermos você melhor ,Primeiro passos. Cadastre 
                 informações pessoais para conhecermos você melhor
              </Styled.Content>
            </Styled.ContainerWhatLook>

            <Styled.ContainerPreferences>
              <Styled.Title>Cursos</Styled.Title>

              <Styled.ContentPreferences>
                <Styled.ItemContent>
                  <MdCircle size={16}/>
                  <Styled.Itens>Trabalho remoto</Styled.Itens>
                </Styled.ItemContent>

                <Styled.ItemContent>
                  <MdCircle size={16}/>
                  <Styled.Itens>Trabalho remoto</Styled.Itens>
                </Styled.ItemContent>

                <Styled.ItemContent>
                  <MdCircle size={16}/>
                  <Styled.Itens>Trabalho remoto</Styled.Itens>
                </Styled.ItemContent>

                <Styled.ItemContent>
                  <MdCircle size={16}/>
                  <Styled.Itens>Trabalho remoto</Styled.Itens>
                </Styled.ItemContent>
              </Styled.ContentPreferences>
            </Styled.ContainerPreferences>
          </Styled.ContainerData>

          <Styled.ContainerButtons>
            <FilledButton marginLeft={"0px"} color={Colors.BLACK} width={190} heigth={60}>
              Alterar dados
            </FilledButton>

            <FilledButton marginRight={"0px"} color={Colors.PRIMARY_COLOR} width={190} heigth={60} onClick={() => navigate(PortfolioProjectsPath)}>
              Próximo
            </FilledButton>
          </Styled.ContainerButtons>
        </Styled.ContainerContent>
      </>
    )}
  </Styled.Container>
  );
}

export default About;