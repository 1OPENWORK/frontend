import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";
import Colors from "../../constants/Colors";
import NavBar from "../navBar/NavBar";

export const BackgroundNavBar = styled.div`
  height: 0px;
  margin-top: -350px;
  transition: margin-top 1350ms;
  transition: margin-top 1s ease-in-out;
  /* transition: opacity 0.6s ease-in-out;
  transition: visibility 0.6s ease-in-out;*/

`;

export const BackgroundNavBarList = styled.div`
  height: 120px;
  display: flex;
  align-items: center;

  background-color: ${Colors.PRIMARY_COLOR};

  &:hover {
    ${BackgroundNavBar}:nth-child(1) {
      
      margin-top: -120px;
    }
  }
  
`;

export const ContainerNavBarList = styled.div`
  width: 100%;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  color: ${Colors.white};
`;
