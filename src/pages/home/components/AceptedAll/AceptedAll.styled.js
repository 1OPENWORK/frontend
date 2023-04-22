import styled from "styled-components";
import Colors from "../../../../constants/Colors";

export const TitleDivInformationAceptedAll = styled.p`
  font-family: nunito;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  color: ${(props) => (props.color ? props.color : Colors.white)};
  margin-top: 40px;
`;

export const Paragrafo = styled.p`
  text-align: left;
  color: black;
  font-family: nunito;
  font-weight: ${props => (props.fw > 0 ? props.fw : 400)};
  font-size: 18px;
  width: 437px;
  margin-top: 16px;
`;

export const DivSocialMedia = styled.p`
display: flex;
justify-content: left;
flex-direction: row;
margin-inline:0;
`;