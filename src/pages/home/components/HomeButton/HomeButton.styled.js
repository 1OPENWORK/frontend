import styled from "styled-components";
import Colors from "../../../../constants/Colors";

export const HomeButtonContainer = styled.button`
  font-family: nunito;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 24.5px;
  width: 372px;
  height: 58px;
  padding: 20px;
  left: 201px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  cursor: pointer;
  border: none;
  margin-top: 32px;
  transition: all 0.5s;

  :hover{
    background-color: ${Colors.black};
    color: ${Colors.white};
  }

`;
