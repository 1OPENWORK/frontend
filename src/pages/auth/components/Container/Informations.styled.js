import styled from "styled-components";
import Colors from "../../../../constants/Colors";

const StyledContainerInformarion = {
  Container: styled.div`
    width: 37%;
    height: 100vh;
    background-color: ${Colors.PRIMARY_COLOR};
    border-radius: 0px 30px 30px 0px;
    color: white;
    -webkit-box-shadow: 9px 5px 22px -9px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 9px 5px 22px -9px rgba(0, 0, 0, 0.5);
    box-shadow: 9px 5px 22px -9px rgba(0, 0, 0, 0.5);
  `,

  DivInformation: styled.div`
    height: 100%;
    padding: 50px;
  `,

  DivInformationCenter: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    row-gap: 50px;
  `,

  DivHomeBack: styled.div`
    display: flex;
    justify-content: space-between;

    padding-right: 24px;
  `,

  Imglogo: styled.img``,

  Title: styled.h2`
    font-weight: 900;
    font-size: 32px;
    align-self: center;
  `,

  SubTitle: styled.h3`
    letter-spacing: 0.22em;
    font-weight: 400;
    font-size: 24px;
  `,

  BtnRetorno: styled.a`
    display: flex;
    align-items: center;
    grid-gap: 1rem;
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;
    color: ${Colors.WHITE};

    &:hover {
      color: ${Colors.BLACK};
    }
  `,
};

export default StyledContainerInformarion;
