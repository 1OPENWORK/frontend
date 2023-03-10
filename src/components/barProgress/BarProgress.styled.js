import styled from "styled-components";
import Colors from "../../constants/Colors";

const StyledBarProgress = {
  Container: styled.div`
    height: 7px;
    width: ${props => props.porcent ? props.porcent : "0px"};
    background-color: ${Colors.SECONDARY_COLOR};
    display: flex;
    align-items: center;
    justify-content: end;
    transition: all 0.10s;
  `,

  Porcentend: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    font-size: 20px;
    font-weight: 700;
    color: ${Colors.PRIMARY_COLOR};
    -webkit-box-shadow: 10px 10px 19px -7px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: 10px 10px 19px -7px rgba(0, 0, 0, 0.41);
    box-shadow: 10px 10px 19px -7px rgba(0, 0, 0, 0.41);
    background-color: white;
  `,
};

export default StyledBarProgress;
