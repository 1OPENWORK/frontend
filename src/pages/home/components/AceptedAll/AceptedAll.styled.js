import styled from "styled-components";



export const Paragrafo = styled.p`
  text-align: left;
  color: black;
  font-weight: ${props => (props.fw > 0 ? props.fw : 400)};
  font-size: 18px;
  width: 500px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const DivSocialMedia = styled.p`
display: flex;
justify-content: left;
flex-direction: row;
margin-inline:0;
`;