import styled from "styled-components";
import Colors from "../../constants/Colors";

const PortifolioStyle = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  `,
  ContainerSideBarPortifolio: styled.div`
    width: 425px;
    height: 100vh;
  `,

  ContainerInputs: styled.div`
    position: relative;
    width: auto;
    height: auto;
    top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 540px;
  `,

  TitlePortfolio: styled.div`
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 49px;
    width: 100%;
    color: ${Colors.PRIMARY_COLOR};
    margin-top: 2rem;
  `,

  Divisor: styled.div`
    width: 100%;
    height: 3px;
    background-color: ${Colors.PRIMARY_COLOR};
    margin-top: 2rem;
  `,

  Row: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-gap: 2.5rem;
  `,

  Form: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
    font-family: nunito;
  `,

  TitleForm: styled.h2`
    display: flex;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 49px;
    color: ${Colors.PRIMARY_COLOR};
    margin-top: 2rem;
    margin-bottom: 2rem;
  `,

  RowJustifyEnd: styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
  `,
};

export default PortifolioStyle;
