import styled from "styled-components";
import Colors from "../../constants/Colors";

const StyledListJobs = {
  ContainerList: styled.div`
    width: 100%;
    height: auto;
  `,
  DivTitleJobs: styled.div`
    background-color: ${Colors.white2};
    height: 7vh;
    padding-left: 14px;
    border-bottom: 3.4px solid #d3d3d3a6;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  H2: styled.div`
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 148.4%;
    /* identical to box height, or 24px */
    letter-spacing: 0.22em;
  `,
  CardJobs: styled.div`
  background-color: ${Colors.white2};
  height: 16vh;
  display: flex;
  align-items: center;
  gap: 8vw;
  padding-left: 5.2vw;
`,
ContainerT1: styled.div`
  display: flex;
  flex-direction: row;
  
`,
ContainerT1small: styled.div`
  display: flex;
  flex-direction: column;
`,
ContainerRollT1Small: styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`,

T1: styled.div`
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
T2: styled.div`
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
T3: styled.div`
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

export default StyledListJobs;
