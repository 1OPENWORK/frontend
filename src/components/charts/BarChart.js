import { React, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  handleFinanceTable,
  handleProjectsCancelled,
  handleProjectsInProgress,
} from "../../store/actions/Dashboard";
import Cookies from "js-cookie";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
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

  useEffect(() => {
    getTableFinance();
  }, []);

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

  const data = {
    labels: projetos.map((_, index) => `Job ${index + 1}`),
    datasets: [
      {
        label: "Jobs",
        backgroundColor: ["#0263FF", "#FF7723", "#8E30FF"],
        hoverBackgroundColor: ["#0263FF", "#FF7723", "#8E30FF"],
        data: projetos.map((tabela) => {
          if (tabela.status !== "cancelled") return tabela.value;
        }),
      },
    ],
  };

  const options = {
    indexAxis: "y",
    height: 5,
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
