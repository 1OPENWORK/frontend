import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";
import Colors from "../../constants/Colors";
import NavBar from "../navBar/NavBar";

export const BackgroundNavBar = styled.div`
  margin-top: -10%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
`;

export const BackgroundNavBarList = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: ${Colors.PRIMARY_COLOR};

  &:hover {
    ${BackgroundNavBar}:first-child {
      display: flex;
      opacity: 1;
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

