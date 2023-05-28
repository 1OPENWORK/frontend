import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  font-family: nunito;

`;

const ContainerLeft = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-color: #161616;
  padding: 3%;
`;

const ContainerRight = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-color: "#F5F5F5";
  padding: 3%;
  
`;

const ContainerTitle = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 9%;
`;

const inputText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7%;
`;

const Input = styled.input`
  background: rgba(32, 172, 105, 0.05);
  border: 1px solid #20ac69;
  border-radius: 12px;
  width: 550px;
  padding: 14px;
  color: white;
`;

const InputMore = styled.textarea`
  background: rgba(32, 172, 105, 0.05);
  border: 1px solid #20ac69;
  border-radius: 12px;
  width: 550px;
  padding: 10px;
  resize: vertical;
  color: white;
`;

const buttonLeft = styled.button`
  background: ${(props) => (props.primary ? "#FFFFFF" : "#20AC69")};
  border-radius: 8px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: ${(props) => (props.primary ? "#161616" : "#FFFFFF")};
  padding: 20px 130px;
  margin-bottom: 4%;
  border-color: transparent;
`;

const H1 = styled.h1`
  display: flex;
  align-items: flex-start;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #ffffff;
`;

const ContainerTitle2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20%;
`;

const ContainerText2 = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: #000000;
`;

const ContainerRole = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10%;
`;


const textRole1 = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #20ac69;
`;

const textRole2 = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #20ac69;
`;


const ContainerTableRole = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const ContainerTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 8%;
  padding-right: 8%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  overflow-y: scroll;
  margin-bottom: 1vh;
  min-height: 12vh; /* Define uma altura mínima */
  &.highlighted {
    background-color: #F34B4B;
    /* Outros estilos para o elemento destacado */
  }
`;


const textTable1 = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #161616;
`;

const textTable2 = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #161616;
`;
const ExcluirText = styled.span`
  color: white;
  font-weight: bold;
`;

const StyledHomeAnalista = {
  Container,
  ContainerTitle,
  ContainerLeft,
  ContainerRight,
  inputText,
  Input,
  InputMore,
  H1,
  buttonLeft,
  ContainerTitle2,
  ContainerText2,
  ContainerRole,
  textRole1,
  textRole2,
  ContainerTable,
  textTable1,
  textTable2,
  ContainerTableRole,
  ExcluirText,
};

export default StyledHomeAnalista;
