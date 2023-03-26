import styled from "styled-components";
import Colors from "../../../../constants/Colors";

export const ContainerFooter = styled.div`
display: flex;
align-items: center;
flex-direction: row;
background-color: #161616;
width: 100%;
padding-top: 50px;
padding-bottom: 10px;
`;

export const ContainerBodyFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center
  padding-top: 120px;
  width: 100%;
  margin-inline: 58px;
`;

export const TitleDivInformation = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  width: 50%;
  line-height: 65px;
  color: ${(props) => (props.color ? props.color : Colors.white)};
`;


export const Paragrafo = styled.p`
  text-align: ${props => (props.ta ? props.ta : 'left')};
  color: white;
  font-weight: ${props => (props.fw > 0 ? props.fw : 400)};
  font-size: ${props => (props.fontSize ? props.fontSize : "18px")};
  width: ${props => (props.width ? props.width : "200px")};
  margin-bottom: 30px;
`;

export const DivSocialMedia = styled.p`
display: flex;
justify-content: left;
flex-direction: row;
margin-inline:0;
`;