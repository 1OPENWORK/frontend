import React from "react";
import Styled from "./SideBar.styled";
import IconPlus from "../../../assets/icons/icon-plus.svg";
import IconProfile from "../../../assets/icons/icon-profile.svg";
import IconAbout from "../../../assets/icons/icon-about.svg";
import IconSpecialyts from "../../../assets/icons/icon-specialtys.svg";
import IconExperiences from "../../../assets/icons/icon-experiences.svg";

const SideBar = () => {
  return (
    <>
      <Styled.Container>
        <Styled.ContainerPhotograph>
          <Styled.IconPlus isImg={true} background={IconPlus}></Styled.IconPlus>
        </Styled.ContainerPhotograph>

        <Styled.AddPhotograph>Adicionar foto</Styled.AddPhotograph>

        <Styled.ContainerSideBarOption>
          <Styled.SideBarOption>
            <Styled.IconSideBarOption
              isImg={true}
              background={IconProfile}
            ></Styled.IconSideBarOption>
            <Styled.TextSideBarOption>Perfil</Styled.TextSideBarOption>
          </Styled.SideBarOption>
          <Styled.SideBarOption>
            <Styled.IconSideBarOption
              isImg={true}
              background={IconAbout}
            ></Styled.IconSideBarOption>
            <Styled.TextSideBarOption>Sobre</Styled.TextSideBarOption>
          </Styled.SideBarOption>
          <Styled.SideBarOption>
            <Styled.IconSideBarOption
              isImg={true}
              background={IconSpecialyts}
            ></Styled.IconSideBarOption>
            <Styled.TextSideBarOption>Especialidades</Styled.TextSideBarOption>
          </Styled.SideBarOption>
          <Styled.SideBarOption>
            <Styled.IconSideBarOption
              isImg={true}
              background={IconExperiences}
            ></Styled.IconSideBarOption>
            <Styled.TextSideBarOption>Experiências</Styled.TextSideBarOption>
          </Styled.SideBarOption>
        </Styled.ContainerSideBarOption>
      </Styled.Container>
    </>
  );
};

export default SideBar;