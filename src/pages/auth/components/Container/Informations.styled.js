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
    font-family: nunito;
  `,

  DivInformation: styled.div`
    height: 100%;
    padding: 3.125rem;
  `,

  DivInformationCenter: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,

  DivHomeBack: styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 1.5rem;
  `,

  Imglogo: styled.img`
    margin-top: 1rem;
    margin-left: -1.875rem;
  `,

  Title: styled.h2`
    font-weight: 900;
    font-size: 2rem;
    align-self: center;
    margin-top: 4rem;
  `,

  SubTitle: styled.h3`
    width: 24.563rem;
    height: 11.25rem;
    letter-spacing: 0.22em;
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 4rem;
  `,

  BtnRetorno: styled.a`
    display: flex;
    align-items: center;
    grid-gap: 0.5rem;
    text-decoration: none;
    font-weight: 900;
    font-size: 1.125rem;
    cursor: pointer;
    margin-bottom: 2rem;
    color: ${Colors.WHITE};

    &:hover {
      color: ${Colors.BLACK};
    }
  `,
};

export default StyledContainerInformarion;
