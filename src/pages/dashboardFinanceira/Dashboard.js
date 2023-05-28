import React from "react";
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

const Dashboard = () => {
  return (
    <>
    <List type={3} />
      <DashboardContainer>
        <Cards>
          <ContainerCards>
            <ContainerCard>
              <div>
                <Styled.LogoImg src={Money} />
              </div>
              <ContentCard>
                <Paragraph>Total a receber no mês </Paragraph>
                <h2>R$4000,00</h2>
              </ContentCard>
            </ContainerCard>

            <ContainerCard>
              <div>
                <Styled.LogoImg src={Job} />
              </div>
              <ContentCard>
                <Paragraph>Quantidade de Jobs</Paragraph>
                <h2>3 Jobs</h2>
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
