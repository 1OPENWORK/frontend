import React from "react";
import Styled from "./SideBar.styled";
import IconPlus from "../../assets/icons/icon-plus.svg";
import IconProfile from "../../assets/icons/icon-profile.svg";
import IconAbout from "../../assets/icons/icon-about.svg";
import IconExperiences from "../../assets/icons/icon-specialtys.svg";
import IconProject from "../../assets/icons/icon-projects.svg";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdNewspaper } from "react-icons/md";
import Colors from "../../constants/Colors";
import {
  HomeDevPath,
  PortfolioEt5Path,
  PortfolioEt6Path,
  PortfolioProjectsPath,
} from "../../constants/Path";

import { useState } from "react";
import { BsPersonCircle, BsStarFill } from "react-icons/bs";
import { AiOutlineProfile } from "react-icons/ai";

const SideBar = ({ tabActive }) => {
  const [tabSelection, setSelection] = useState(1);

  const handleClick = (value) => {
    setSelection(value);
    tabActive(value);
  };

  return (
    <>
      <Styled.Container>
        <Styled.Header>
          <Styled.IconCallBack
            onClick={() => {
              handleClick(1);
            }}
          >
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
          <Styled.SideBarOption
            isSelected={tabSelection === 1}
            onClick={() => {
              handleClick(1);
            }}
          >
            <Styled.IconSideBarOption>
              <BsPersonCircle
                size={35}
                color={tabSelection === 1 ? Colors.PRIMARY_COLOR : Colors.WHITE}
              />
            </Styled.IconSideBarOption>
            <Styled.TextSideBarOption isSelected={tabSelection === 1}>
              Perfil
            </Styled.TextSideBarOption>
          </Styled.SideBarOption>

          <Styled.SideBarOption
            isSelected={tabSelection === 2}
            onClick={() => {
              handleClick(2);
            }}
          >
            <Styled.IconSideBarOption>
              <AiOutlineProfile
                size={35}
                color={tabSelection === 2 ? Colors.PRIMARY_COLOR : Colors.WHITE}
              />
            </Styled.IconSideBarOption>
            <Styled.TextSideBarOption isSelected={tabSelection === 2}>
              Sobre
            </Styled.TextSideBarOption>
          </Styled.SideBarOption>

          <Styled.SideBarOption
            isSelected={tabSelection === 3}
            onClick={() => {
              handleClick(3);
            }}
          >
            <Styled.IconSideBarOption>
              <BsStarFill
                size={30}
                color={tabSelection === 3 ? Colors.PRIMARY_COLOR : Colors.WHITE}
              />
            </Styled.IconSideBarOption>
            <Styled.TextSideBarOption isSelected={tabSelection === 3}>
              Experiências
            </Styled.TextSideBarOption>
          </Styled.SideBarOption>

          <Styled.SideBarOption
            isSelected={tabSelection === 4}
            onClick={() => handleClick(4)}
          >
            <Styled.IconSideBarOption>
              <MdNewspaper
                size={30}
                color={tabSelection === 4 ? Colors.PRIMARY_COLOR : Colors.WHITE}
              />
            </Styled.IconSideBarOption>
            <Styled.TextSideBarOption isSelected={tabSelection === 4}>
              Projetos
            </Styled.TextSideBarOption>
          </Styled.SideBarOption>
        </Styled.ContainerSideBarOption>
      </Styled.Container>
    </>
  );
};

export default SideBar;
