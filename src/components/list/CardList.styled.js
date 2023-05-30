import styled from "styled-components";
import Colors from "../../constants/Colors";

const StyledCardList = {
  ContainerList: styled.div`
    width: 100%;
    height: auto;
  `,
  cardJobs: styled.div`
    background-color: ${Colors.WHITE02};
    height: 16vh;
    display: flex;
    align-items: center;
    gap: 8vw;
    padding-left: 5.2vw;
  `,
  containerT1: styled.div`
    display: flex;
    flex-direction: row;
    
  `,
  containerT1small: styled.div`
    display: flex;
    flex-direction: column;
  `,
  containerRollT1Small: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
  `,

  t1: styled.div`
    color: ${Colors.AZUL_LINK};
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */
    text-align: center;
    text-decoration-line: underline;
  `,
  t2: styled.div`
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 148.4%;
    /* or 24px */
    letter-spacing: 0.22em;
    width: 24%;
    padding-top: 1%;
    
  `,
  t3: styled.div`
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */
    text-align: center;
    width: auto;
    padding-right: 13vw;    
  `,
};

export default StyledCardList;
