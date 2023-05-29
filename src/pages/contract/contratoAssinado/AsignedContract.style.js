import styled from "styled-components";
import Colors from "../../../constants/Colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  overflow: hidden;
  font-family: nunito;
`;

export const ContainerModelContract = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.5rem;
  background-color: ${Colors.PRIMARY_COLOR};
  padding-top: 3rem;
`;

export const ContainerImgModelContract = styled.img`
  width: 160px;
  height: 180px;
  display: flex;
  margin: auto;
`;

export const ContainerButton = styled.div`
  margin-bottom: 2.5rem;
`;

export const ContainerButtons = styled.div`
  width: 60%;
  height: fit-content;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
