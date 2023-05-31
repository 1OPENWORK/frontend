import { React, useState, useEffect } from "react";
import {
  DashboardContainer,
  ContainerCards,
  ContainerCard,
  ContentCard,
  GraphicBar,
  ContainerFilter,
  TitleH2,
  InputDate,
  Filter,
  Cards,
  GraphicDisk,
  Paragraph,
  GraphicContainer,
} from "./Dashboard.styled";
import Money from "../../assets/imgs/money-dashboard.svg";
import Job from "../../assets/imgs/job-dashboard.svg";
import Event from "../../assets/imgs/events-calendar-dashboard.svg";
import Styled from "../../components/navBar/NavBar.styled";
import BarChart from "../../components/charts/BarChart";
import SemiCircleDonutChart from "../../components/charts/SemiCircleDonutChart";
import {
  handleDashboard,
  handleFinanceTable,
  handleProjectsCancelled,
  handleProjectsCompleted,
  handleProjectsInProgress,
  handleProjectsProgress,
} from "../../store/actions/Dashboard";
import Cookies from "js-cookie";
import { differenceInMonths, isAfter } from "date-fns";

const Dashboard = () => {
  const [tabelas, settabelas] = useState([]);
  const [projetos, setProjetos] = useState([]);

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
  }, []);

  useEffect(() => {
    getTableFinance();
  }, []);

  return (
    <>
      <DashboardContainer>
        <Cards>
          <ContainerCards>
            <ContainerCard>
              <div>
                <Styled.LogoImg src={Money} />
              </div>
              <ContentCard>
                <Paragraph>Total a receber no mês </Paragraph>
                <h2>
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
                            (projeto.valueProject - projeto.tax) *
                              (monthsDiff + 1)
                          );
                        }
                      } else if (projeto.status === "open") {
                        return total + (projeto.valueProject - projeto.tax);
                      }
                    }
                    return " " + total;
                  }, 0)}
                </h2>
              </ContentCard>
            </ContainerCard>

            <ContainerCard>
              <div>
                <Styled.LogoImg src={Job} />
              </div>
              <ContentCard>
                <Paragraph>Quantidade de Jobs</Paragraph>
                <h2>
                  {
                    projetos.filter((projeto) => projeto.status !== "cancelled")
                      .length
                  }{" "}
                  Jobs
                </h2>
              </ContentCard>
            </ContainerCard>
          </ContainerCards>
          <GraphicBar>
            <BarChart></BarChart>
          </GraphicBar>
        </Cards>
        <Filter>
          <ContainerFilter>
            <div>
              <TitleH2>Ajustar tempo</TitleH2>
              <InputDate type="date"></InputDate>
            </div>
            <Styled.LogoImg src={Event} />
          </ContainerFilter>
          <GraphicDisk>
            <GraphicContainer>
              <SemiCircleDonutChart></SemiCircleDonutChart>
            </GraphicContainer>
          </GraphicDisk>
        </Filter>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
