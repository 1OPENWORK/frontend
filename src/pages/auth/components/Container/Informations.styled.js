import styled from "styled-components";
import Colors from "../../../../constants/Colors";

const StyledContainerInformarion = {
  Container: styled.div`
    width: 37%;
    height: 100vh;
    background-color: ${Colors.PRIMARY_COLOR};
    color: white;
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
      color: ${Colors.SECONDARY_COLOR};
    }
  `,
};

export default StyledContainerInformarion;
