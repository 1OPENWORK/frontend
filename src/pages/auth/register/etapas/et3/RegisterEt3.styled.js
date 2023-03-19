import styled from "styled-components";
import Colors from "../../../../../constants/Colors";

const StyledRegisterEt3 = {
  Container: styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
  `,

  Title: styled.h1`
    font-weight: 900;
    font-size: 32px;
    line-height: 44px;
    color: ${Colors.PRIMARY_COLOR};
    font-family: "Nunito";
    font-style: normal;
  `,

  Description: styled.label`
    text-align: center;
    width: 450px;
    font-weight: 400;
    font-size: 18px;
    line-height: 148.4%;
    letter-spacing: 0.22em;
    margin-top: 10px;
    margin-bottom: 50px;
  `,
};

export default StyledRegisterEt3;
