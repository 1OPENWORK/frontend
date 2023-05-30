import {React, useState, useEffect} from "react";
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
import { handleFinanceTable } from "../../store/actions/Dashboard";
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

  const data = {
    labels: tabelas.map((_, index) => `Job ${index + 1}`),
    datasets: [
      {
        label: "Jobs",
        backgroundColor: ["#0263FF", "#FF7723", "#8E30FF"],
        hoverBackgroundColor: ["#0263FF", "#FF7723", "#8E30FF"],
        data: tabelas.map((tabela) => tabela.valueProject),
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
