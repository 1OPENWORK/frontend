import styled from "styled-components";

export const ContainerDepoiments = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #161616;
  width: 100%;
  height: 950px;
`;

export const Paragrafo = styled.p`
  text-align: center;
  color: white;
  font-family: nunito;
  font-weight: ${props => (props.fw > 0 ? props.fw : 400)};
  font-size: 18px;
  width: 490px;
  margin-bottom: 48px;
`;

export const ContainerImags = styled.div`
  display: flex;
`;
