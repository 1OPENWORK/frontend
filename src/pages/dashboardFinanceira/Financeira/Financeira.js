import React from "react";
import List from "../../../components/list/List";
import NavBarList from "../../../components/navBarList/NavBarList";
import Styled from "../../../components/navBar/NavBar.styled";
import WalletImg from "../../../assets/imgs/wallet.svg";
import {
  ContainerFinance,
  InputSearch,
  HeaderFinancer,
  Wallet,
  Cash,
  BodyFinance,
  TableFinance,
  TableHead,
  TableHeadTh,
  TableHeadThFirst,
  TableHeadThLast,
  TableBodyTr,
  TableBodyTd,
} from "./Financeira.styled";
import Tag from '../../../components/UI/tag/tag'

const Financeira = () => {
  return (
    <>
      <NavBarList />
      <List type={3} />
      <ContainerFinance>
        <HeaderFinancer>
        <InputSearch type="search" placeholder="Digite sua busca" />
          <Wallet>
            <Styled.LogoImg src={WalletImg} />
            <Cash>R$4000,00</Cash>
          </Wallet>
        </HeaderFinancer>

        <BodyFinance>
          <TableFinance>
            <TableHead>
              <tr>
                <TableHeadThFirst>Nome projeto</TableHeadThFirst>
                <TableHeadTh>Empresa</TableHeadTh>
                <TableHeadTh>Início/Fim</TableHeadTh>
                <TableHeadTh>Valor</TableHeadTh>
                <TableHeadTh>Taxa</TableHeadTh>
                <TableHeadTh>Valor total</TableHeadTh>
                <TableHeadThLast>Status</TableHeadThLast>
              </tr>
            </TableHead>
            <tbody>
              <tr>
                <TableBodyTd>Pixel Playground</TableBodyTd>
                <TableBodyTd>SkyEye</TableBodyTd>
                <TableBodyTd>22/04/23 - 22/05/23</TableBodyTd>
                <TableBodyTd>R$1500</TableBodyTd>
                <TableBodyTd>0.3%</TableBodyTd>
                <TableBodyTd>R$1496.5</TableBodyTd>
                <TableBodyTd>
                    <Tag status={"open"} statusColor={"open"}></Tag>
                </TableBodyTd>
              </tr>
              <TableBodyTr>
                <TableBodyTd>Code Canvas</TableBodyTd>
                <TableBodyTd>VibeCheck</TableBodyTd>
                <TableBodyTd>03/04/23 - 28/06/23</TableBodyTd>
                <TableBodyTd>R$3500</TableBodyTd>
                <TableBodyTd>0.3%</TableBodyTd>
                <TableBodyTd>R$3486.5</TableBodyTd>
                <TableBodyTd>
                    <Tag status={"progress"} statusColor={"progress"}></Tag>
                </TableBodyTd>
              </TableBodyTr>
              <tr>
                <TableBodyTd>MindMeld</TableBodyTd>
                <TableBodyTd>QuantumMind</TableBodyTd>
                <TableBodyTd>02/03/23 - 20/04/23</TableBodyTd>
                <TableBodyTd>R$1200</TableBodyTd>
                <TableBodyTd>0.3%</TableBodyTd>
                <TableBodyTd>R$1196.4</TableBodyTd>
                <TableBodyTd>
                    <Tag status={"closed"} statusColor={"closed"}></Tag>
                </TableBodyTd>
              </tr>
              <TableBodyTr>
                <TableBodyTd>Techtopia</TableBodyTd>
                <TableBodyTd>SolarStream</TableBodyTd>
                <TableBodyTd>15/03/23 - 14/04/23</TableBodyTd>
                <TableBodyTd>R$800</TableBodyTd>
                <TableBodyTd>0.3%</TableBodyTd>
                <TableBodyTd>R$796.8</TableBodyTd>
                <TableBodyTd>
                    <Tag status={"closed"} statusColor={"closed"}></Tag>
                </TableBodyTd>
              </TableBodyTr>
              <tr>
                <TableBodyTd>Binary Boulevard</TableBodyTd>
                <TableBodyTd>AquaAI</TableBodyTd>
                <TableBodyTd>18/02/23 - 21/04/23</TableBodyTd>
                <TableBodyTd>R$2000</TableBodyTd>
                <TableBodyTd>0.3%</TableBodyTd>
                <TableBodyTd>R$1994</TableBodyTd>
                <TableBodyTd>
                    <Tag status={"closed"} statusColor={"closed"}></Tag>
                </TableBodyTd>
              </tr>
            </tbody>
          </TableFinance>
        </BodyFinance>
      </ContainerFinance>
    </>
  );
};
export default Financeira;
