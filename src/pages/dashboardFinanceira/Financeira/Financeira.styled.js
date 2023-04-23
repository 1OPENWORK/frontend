import styled from "styled-components";

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
  border-radius: 16px;
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
`;

export const TableBodyTd = styled.td`
  padding: 20px;
`;
