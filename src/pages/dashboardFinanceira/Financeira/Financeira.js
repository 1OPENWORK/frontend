import React, { useEffect, useState } from "react";
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
  handleFinanceTable,
  handleProjectsCancelled,
  handleProjectsInProgress,
} from "../../../store/actions/Dashboard";
import Cookies from "js-cookie";
import { format } from "date-fns";
import { differenceInMonths, isAfter } from "date-fns";

const Financeira = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const [projetos, setProjetos] = useState([]);

  const etapas = [
    { label: "Etapa 1", completed: true, value: "R$ 300" },
    { label: "Etapa 2", completed: true, value: "R$ 300" },
    { label: "Etapa 3", completed: true, value: "R$ 300" },
    { label: "Etapa 4", completed: true, value: "R$ 300" },
    { label: "Etapa 5", completed: false, value: "R$ 300" },
  ];

  // eslint-disable-next-line no-unused-vars
  const [tabelas, settabelas] = useState([]);

  async function getTableFinance() {
    try {
      const response = await handleFinanceTable(Cookies.get("id"));
      settabelas(response.data);
    } catch {
      console.log("error");
    }
  }

  async function getProjectsDev() {
    try {
      const response = await handleFinanceTable(Cookies.get("id"));
      const responseInProgress = await handleProjectsInProgress(
        Cookies.get("id")
      );
      const responseCancelled = await handleProjectsCancelled(
        Cookies.get("id")
      );

      const dataWithStatus = response.data.map((item) => ({
        ...item,
        status: "open",
      }));
      const dataInProgressWithStatus = responseInProgress.data.map((item) => ({
        ...item,
        status: "progress",
      }));
      const dataCancelledWithStatus = responseCancelled.data.map((item) => ({
        ...item,
        status: "cancelled",
      }));

      setProjetos(
        projetos.concat(
          dataWithStatus,
          dataInProgressWithStatus,
          dataCancelledWithStatus
        )
      );
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    getProjectsDev();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTableFinance();
  }, []);

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
            <Cash>
              R$
              {projetos.reduce((total, projeto) => {
                if (projeto.status !== "cancelled") {
                  if (projeto.status === "progress") {
                    const currentDate = new Date();
                    const finishDate = new Date(projeto.finishDate);
                    if (isAfter(currentDate, finishDate)) {
                      const monthsDiff = differenceInMonths(
                        finishDate,
                        currentDate
                      );
                      return (
                        total +
                        (projeto.valueProject - projeto.tax) * (monthsDiff + 1)
                      );
                    }
                  } else if (projeto.status === "open") {
                    return total + (projeto.valueProject - projeto.tax);
                  }
                }
                return " " + total;
              }, 0)}
            </Cash>
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
              {projetos.length > 0 ? (
                projetos.map((projeto, index) => (
                  <tr onClick={() => handleCellClick(projetos)} key={index}>
                    <TableBodyTd>{projeto.titleProject}</TableBodyTd>
                    <TableBodyTd>{projeto.nameCompany}</TableBodyTd>
                    <TableBodyTd>
                      {format(new Date(projeto.beginDate), "dd/MM/yyyy")} |{" "}
                      {format(new Date(projeto.finishDate), "dd/MM/yyyy")}
                    </TableBodyTd>
                    <TableBodyTd>R${projeto.valueProject}</TableBodyTd>
                    <TableBodyTd>{projeto.tax}%</TableBodyTd>
                    <TableBodyTd>
                      R$
                      {projeto.valueProject -
                        (projeto.valueProject * projeto.tax) / 100}
                    </TableBodyTd>
                    <TableBodyTd>
                      <Tag
                        status={projeto.status}
                        statusColor={projeto.status}
                      ></Tag>
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
