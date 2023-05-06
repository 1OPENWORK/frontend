import styled from "styled-components";
import Colors from "../../../constants/Colors";

const ListAvaliarStyle = {
    DivTitleJobs: styled.div`
    background-color: ${Colors.WHITE};
    height: 7vh;
    border-bottom: 3.4px solid #d3d3d3a6;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  Title: styled.div`
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 148.4%;
    letter-spacing: 0.22em;
  `,

    CardJobs: styled.div`
    background-color: ${Colors.WHITE};
    height: 16vh;
    display: flex;
    align-items: center;
    gap: 8.1vw;
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
    font-size: 1.5rem;
    line-height: 33px;
    text-align: center;
    text-decoration-line: underline;
    `,

    T2: styled.div`
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 148.4%;
    letter-spacing: 0.22em;
    width: 24%;
    padding-top: 0;
    `,

    T3: styled.div`
    width: auto;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 33px;
    text-align: center;
    margin-left: 3vh;
    `,

    T3Img: styled.div`
    width: auto;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 33px;
    text-align: center;
    margin-left: 16vh;
    `,
}

export default ListAvaliarStyle;