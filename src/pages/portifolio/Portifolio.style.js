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
    top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 10%;
  `,

  TitlePortfolio: styled.div`
    position: absolute;
    width: auto;
    height: auto;
    top: 0;
    left: 0px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 49px;
    color: ${Colors.PRIMARY_COLOR};
  `,
};

export default PortifolioStyle;
