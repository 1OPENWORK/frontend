import styled from "styled-components";

export const LineSubMenu = styled.div`
  width: 100%;
  height: 3px;
  background-color: rgba(211, 211, 211, 0.65);
`;

export const ContainerFinance = styled.div`
  margin-left: 40px;
  margin-top: 24px;
  margin-right: 40px;
  font-family: nunito;
`;

export const HeaderFinancer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BodyFinance = styled.div``;

export const InputSearch = styled.input`
  width: 617px;
  height: 58px;
  background-color: transparent;
  border: 1px solid #20ac69;
  border-radius: 1rem;
  color: black;
  padding-left: 20px;
  padding-right: 20px;
  font-family: nunito;
  background: rgba(32, 172, 105, 0.05);
`;

export const Wallet = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  width: 350px;
  height: 68px;
  align-items: center;
`;

export const Cash = styled.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 148.4%;
  letter-spacing: 0.22em;
  margin-bottom: 0;
`;

export const TableFinance = styled.table`
  width: 100%;
  margin-top: 40px;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
`;

export const TableHead = styled.thead`
  background: #20ac69;
  color: #fff;
`;

export const TableHeadTh = styled.th`
  padding: 20px;
`;

export const TableHeadThFirst = styled.th`
  border-radius: 16px 0px 0px 0px;
`;

export const TableHeadThLast = styled.th`
  border-radius: 0px 16px 0px 0px;
  padding-right: 20px;
`;

export const TableBodyTr = styled.tr`
  background-color: #eaeaea;
  cursor: pointer;
`;

export const TableBodyTd = styled.td`
  padding: 20px;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 20px;
`;

export const ModalClosedButton = styled.button`
  color: #d9d9d9;
  border: none;
  background-color: transparent;
  font-size: 24px;
  font-family: nunito;
`;

export const ModalTitle = styled.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
`;

export const Etapa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  position: relative;
  font-family: nunito;
  margin-top: 100px;
`;

export const EtapaLine = styled.div`
  width: 100%;
  height: 8px;
  background-color: #000000;
  position: relative;
  margin-top: 20px;
`;

export const EtapaDot = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${({ completed }) => (completed ? "#20AC69" : "#ccc")};
  border-radius: 50%;
  background-color: #ccc;
  position: absolute;
  top: -20px;
  left: ${({ number }) => number * 16}%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

export const EtapaLabelDot = styled.div`
  width: auto;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -80px;
  left: ${({ number }) => number * 16}%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: rgba(22, 22, 22, 0.58);
`;

export const EtapaValueDot = styled.div`
  width: auto;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 70px;
  left: ${({ number }) => number * 16}%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: ${({ completed }) => (completed ? "black" : "rgba(0, 0, 0, 0.3)")};
`;

export const CheckIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const EtapaContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  color: #777;
`;

export const EtapaLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const SprintLabel = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`;

export const ValorLabel = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const InicioLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #ccc;
  margin-top: 20px;
`;

export const VerticalLine = styled.div`
  height: 30px;
  width: 3px;
  background-color: #000000;
  position: absolute;
  top: -12.5px;
  left: 0;
`;

export const VerticalLineFinal = styled.div`
  height: 30px;
  width: 3px;
  background-color: #000000;
  position: absolute;
  top: -12.5px;
  left: 100%;
`;

export const InicioLabel = styled(EtapaLabel)`
  position: absolute;
  top: -20px;
  left: 0;
`;

export const EtapaDotWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > span:first-child {
    font-size: 14px;
    font-weight: bold;
  }

  > span:last-child {
    font-size: 18px;
    font-weight: bold;
    margin-top: 4px;
  }
`;
