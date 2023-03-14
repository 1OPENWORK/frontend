import styled from "styled-components";
import Colors from "../../constants/Colors";

const StyledNavBar = {
  ContainerNavBar: styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    justify-content: space-between;

    height: 120px;
    width: 100%;
    position: fixed;
    border-bottom: 5px solid ${Colors.SECONDARY_COLOR};
    background-color: ${Colors.white};
    z-index: 1000;
  `,

  TitleNavBar: styled.h1`
    font-weight: 700;
    font-size: ${(props) => (props.size > 0 ? props.size + "px" : "28px")};
    line-height: 10px;
    color: ${Colors.PRIMARY_COLOR};
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      color: ${Colors.SECONDARY_COLOR};
    }
  `,

  FlexList: styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    gap: 1.5rem;
  `,

  NavigateNavBar: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-right: 50px;
  
  `,

  LogoImg: styled.img``,

  Divisor: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default StyledNavBar;
