import styled from "styled-components";
import Colors from "../../constants/Colors";

const PortifolioStyle = {
  Container: styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: row;
  `,

  ContainerSideBarPortifolio: styled.div`
    width: 425px;
    height: 100vh;
  `,

  ContainerInputs: styled.div`
    width: 110vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10rem;
  `,

  Title: styled.div`
    width: auto;
    height: auto;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: ${Colors.PRIMARY_COLOR};
  `,
};

export default PortifolioStyle;
