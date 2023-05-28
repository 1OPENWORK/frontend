import React from "react";
import Styled from "./SideBar.styled";
import IconPlus from "../../assets/icons/icon-plus.svg";
import IconProfile from "../../assets/icons/icon-profile.svg";
import IconAbout from "../../assets/icons/icon-about.svg";
import IconExperiences from "../../assets/icons/icon-specialtys.svg";
import IconProject from "../../assets/icons/icon-projects.svg";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Colors from "../../constants/Colors";
import {
  HomeDevPath,
  PortfolioEt5Path,
  PortfolioEt6Path,
  PortfolioProjectsPath,
} from "../../constants/Path";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Styled.Container>
        <Styled.Header>
          <Styled.IconCallBack onClick={() => navigate(HomeDevPath)}>
            <MdArrowBack size={40} color={Colors.WHITE} />
          </Styled.IconCallBack>
          <Styled.ContainerPhotograph>
            <Styled.IconPlus
              isImg={true}
              background={IconPlus}
            ></Styled.IconPlus>
          </Styled.ContainerPhotograph>

          <Styled.AddPhotograph>Adicionar foto</Styled.AddPhotograph>
        </Styled.Header>

        <Styled.ContainerSideBarOption>
          <Styled.SideBarOption isSelected={true}>
            <Styled.IconSideBarOption isImg={true} background={IconProfile} />
            <Styled.TextSideBarOption isSelected={true}>
              Perfil
            </Styled.TextSideBarOption>
          </Styled.SideBarOption>

          <Styled.SideBarOption onClick={() => navigate(PortfolioEt5Path)}>
            <Styled.IconSideBarOption
              isImg={true}
              background={IconAbout}
            ></Styled.IconSideBarOption>
            <Styled.TextSideBarOption>Sobre</Styled.TextSideBarOption>
          </Styled.SideBarOption>

          <Styled.SideBarOption onClick={() => navigate(PortfolioEt6Path)}>
            <Styled.IconSideBarOption
              isImg={true}
              background={IconExperiences}
            ></Styled.IconSideBarOption>
            <Styled.TextSideBarOption>Experiências</Styled.TextSideBarOption>
          </Styled.SideBarOption>

          <Styled.SideBarOption onClick={() => navigate(PortfolioProjectsPath)}>
            <Styled.IconSideBarOption
              isImg={true}
              background={IconProject}
            ></Styled.IconSideBarOption>
            <Styled.TextSideBarOption>Projetos</Styled.TextSideBarOption>
          </Styled.SideBarOption>
        </Styled.ContainerSideBarOption>
      </Styled.Container>
    </>
  );
};

export default SideBar;
