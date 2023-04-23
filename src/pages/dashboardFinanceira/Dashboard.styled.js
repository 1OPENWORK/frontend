import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
//   margin-bottom: 20px;
  font-family: "Nunito";
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Cards = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Filter = styled.div`
  flex: 1;
  margin-right: 40px;
  width: 100%;
  @media (min-width: 768px) {
    /* adicionada media query */
    margin-right: 0;
    width: 40%;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 46%;
  height: 123px;
  padding: 20px;
  text-align: center;
  margin-left: 25px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  border-radius: 30px;
  @media (min-width: 768px) {
    /* adicionada media query */
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ContentCard = styled.div`
  margin-top: 20px; /* adicionado margin-top */
  font-family: "Nunito";
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    /* adicionada media query */
    margin-left: 20px;
    align-items: flex-start;
  }
`;

export const Paragraph = styled.p`
  font-size: 88%;
`;

export const GraphicBar = styled.div`
  width: 95%;
  height: 347px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  border-radius: 30px;
  margin-left: 25px;
  padding-block: 20px;
  margin-top: 30px;
`;

export const GraphicDisk = styled.div`  
  width: 95%;
  height: 263px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  border-radius: 30px;
  margin-top: 30px;
  padding-block: 10px;
`;

export const GraphicContainer = styled.div`
  width:100%
`

export const ContainerFilter = styled.div`
  margin-top: 50px;
  width: 95%;
  height: 201px;
  background: #161616;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  flex-direction: column; /* alterado de row para column */
  justify-content: space-evenly;
  padding: 20px;
  font-family: "Nunito";
  @media (min-width: 768px) {
    /* adicionada media query */
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ContentFilter = styled.div`
  font-family: "Nunito";
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-rigth: 20px;

  @media (min-width: 768px) {
    /* adicionada media query */
    margin-left: 20px;
    align-items: flex-start;
  }
`;

export const TitleH2 = styled.h2`
  color: white;
  margin-bottom: 20px;
  font-family: "Nunito";
`;

export const InputDate = styled.input`
  background: #20ac69;
  border-radius: 16px;
  color: #fff;
  padding: 26px;
  border: none;
  margin-top: 20px;
  width: 180px;
  height: 57px;
  text-align: center;
  font-family: "Nunito";
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
    font-size: 1.3em;
  }
`;
