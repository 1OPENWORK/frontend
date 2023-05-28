import styled from "styled-components";
import Colors from "../../constants/Colors";

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
  border-top-right-radius: 1.875rem;
  border-top-left-radius: 1.875rem;
  background-color: ${Colors.PRIMARY_COLOR};

  &:hover {
    ${BackgroundNavBar}:nth-child(1) {
      margin-top: -7.5rem;
    }
  }
`;

const StyledNavBarList = {
  TitleNavBarList: styled.h1`
    font-weight: 900;
    font-size: ${(props) => (props.size > 0 ? props.size + "px" : "1.5rem")};
    line-height: 10px;
    color: ${Colors.PRIMARY_COLOR};
    cursor: pointer;
    transition: all 0.3s;
    font-family: nunito;
    font-style: normal;
    line-height: 33px;
    margin: 40px;

    :hover {
      color: ${Colors.SECONDARY_COLOR};
    }
  `,

  ContainerNavBarList: styled.div`
    width: 100%;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 2.25rem;
    text-align: center;
    color: ${Colors.WHITE};
  `,
};

export default StyledNavBarList;
