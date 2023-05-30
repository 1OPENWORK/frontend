import{ React, useState, useEffect} from "react";
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
import List from "../../components/list/List";
import { handleDashboard, handleFinanceTable } from "../../store/actions/Dashboard";
import Cookies from "js-cookie";

const Dashboard = () => {

  const [totalMes, settotalMes] = useState("");
  const [quantidadeJobs, setquantidadeJobs] = useState("");
  const [tabelas, settabelas] = useState([]);

  async function getDashboard() {
    try {
      const response = await handleDashboard();
      settotalMes(response.data.totalMes)
      setquantidadeJobs(response.data.quantidadeJobs)
    }catch{
      console.log("error")
    }
  }

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


  getDashboard()

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
                <h2>R${totalMes}</h2>
              </ContentCard>
            </ContainerCard>

            <ContainerCard>
              <div>
                <Styled.LogoImg src={Job} />
              </div>
              <ContentCard>
                <Paragraph>Quantidade de Jobs</Paragraph>
                <h2>  {tabelas.length} Jobs</h2>
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
              {/* Futuramente um component  */}
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
