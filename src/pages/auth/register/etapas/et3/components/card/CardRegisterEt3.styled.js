import styled from "styled-components";
import Colors from "../../../../../../../constants/Colors";

export const Information = styled.div`
  position: relative;
  top: 500px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  width: 100%;
  border-radius: 30px 30px 0px 0px;
  height: 50%;
  background-color: transparent;
  z-index: 2;
  transition: all 1s;
  animation-duration: 0.5s;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;
  height: 100%;
  background-image: url(${(props) => (props.img ? props.img : "")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%);
  transition: all 1.2s;
  cursor: pointer;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.07);
    z-index: 1;

    ${Information}:first-child {
      display: flex;
      background-color: ${props => props.isDark ? Colors.black : Colors.white};
      color: ${props => props.isDark ? Colors.white : Colors.black};
      top: 0px;
    }
  }

  box-sizing: border-box;
`;
