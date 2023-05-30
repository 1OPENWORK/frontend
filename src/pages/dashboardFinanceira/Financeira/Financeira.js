import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import List from "../../../components/list/List";
import NavBarList from "../../../components/navBarList/NavBarList";
import Styled from "../../../components/navBar/NavBar.styled";
import WalletImg from "../../../assets/imgs/wallet.svg";
import Check from "../../../assets/imgs/check.svg";
import {
  LineSubMenu,
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
  ModalHeader,
  ModalClosedButton,
  ModalTitle,
  Etapa,
  EtapaLine,
  EtapaDot,
  EtapaContent,
  EtapaLabel,
  SprintLabel,
  ValorLabel,
  VerticalLine,
  InicioLabel,
  EtapaLabelDot,
  EtapaValueDot,
  VerticalLineFinal,
} from "./Financeira.styled";
import Tag from "../../../components/UI/tag/tag";
import CustomModal from "../../../components/UI/modal/Modal";
import SubMenu from "../../../components/subMenu/subMenu";
import {
  handleDashboard,
  handleFinanceTable,
} from "../../../store/actions/Dashboard";
import axios from "axios";
import Cookies from "js-cookie";
import { format } from "date-fns";

const Financeira = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const etapas = [
    { label: "Etapa 1", completed: true, value: "R$ 300" },
    { label: "Etapa 2", completed: true, value: "R$ 300" },
    { label: "Etapa 3", completed: true, value: "R$ 300" },
    { label: "Etapa 4", completed: true, value: "R$ 300" },
    { label: "Etapa 5", completed: false, value: "R$ 300" },
  ];

  const [totalMes, settotalMes] = useState("");
  const [tabelas, settabelas] = useState([]);


  async function getTableFinance() {
    try {
      const response = await handleFinanceTable(Cookies.get("id"));
      settabelas(response.data);
    } catch {
      console.log("error");
    }
  }

  useEffect(()=>{
    getTableFinance();
  }, [])


  async function getDashboard() {
    try {
      const response = await handleDashboard();
      settotalMes(response.data.totalMes);
    } catch {
      console.log("error");
    }
  }

  getDashboard();


  const handleCellClick = (projeto) => {
    setProjetoSelecionado(projeto);
    setModalIsOpen(true);
  };

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <NavBarList />
      <SubMenu />
      <LineSubMenu />
      <ContainerFinance>
        <HeaderFinancer>
          <InputSearch type="search" placeholder="Digite sua busca" />
          <Wallet>
            <Styled.LogoImg src={WalletImg} />
            <Cash>R${totalMes}</Cash>
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
              {tabelas.length > 0 ? (
                tabelas.map((tabela, index) => (
                  <tr onClick={() => handleCellClick(tabela)} key={index}>
                    <TableBodyTd>{tabela.titleProject}</TableBodyTd>
                    <TableBodyTd>{tabela.nameCompany}</TableBodyTd>
                    <TableBodyTd>
                      {format(new Date(tabela.beginDate), "dd/MM/yyyy")} |{" "}
                      {format(new Date(tabela.finishDate), "dd/MM/yyyy")}
                    </TableBodyTd>
                    <TableBodyTd>R${tabela.valueProject}</TableBodyTd>
                    <TableBodyTd>{tabela.tax}%</TableBodyTd>
                    <TableBodyTd>
                      R$
                      {tabela.valueProject -
                        (tabela.valueProject * tabela.tax) / 100}
                    </TableBodyTd>
                    <TableBodyTd>
                      <Tag status={"open"} statusColor={"open"}></Tag>
                    </TableBodyTd>
                  </tr>
                ))
              ) : (
                <p>Não existem dados</p>
              )}
            </tbody>
          </TableFinance>
        </BodyFinance>

        <CustomModal isOpen={modalIsOpen} onClose={handleCloseModal}>
          {projetoSelecionado && (
            <>
              <ModalHeader>
                <ModalTitle>{projetoSelecionado.titleProject}</ModalTitle>
                <ModalClosedButton onClick={handleCloseModal}>
                  x
                </ModalClosedButton>
              </ModalHeader>
              <Etapa>
                <SprintLabel></SprintLabel>
                <EtapaLine>
                  <VerticalLine />
                  <InicioLabel></InicioLabel>

                  {etapas.map((etapa, index) => (
                    <>
                      <EtapaLabelDot number={index + 1}>
                        Sprint {index + 1}
                      </EtapaLabelDot>
                      <EtapaDot
                        key={index}
                        number={index + 1}
                        completed={etapa.completed}
                      >
                        {etapa.completed && <Styled.LogoImg src={Check} />}
                      </EtapaDot>
                      <EtapaValueDot
                        number={index + 1}
                        completed={etapa.completed}
                      >
                        {etapa.value}
                      </EtapaValueDot>
                    </>
                  ))}
                  <VerticalLineFinal />
                </EtapaLine>
                <EtapaContent>
                  <EtapaLabel>0</EtapaLabel>
                  <EtapaLabel>1500</EtapaLabel>
                </EtapaContent>
                <ValorLabel></ValorLabel>
              </Etapa>
            </>
          )}
        </CustomModal>
      </ContainerFinance>
    </>
  );
};
export default Financeira;
