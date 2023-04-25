import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const BarChart = () => {
  const data = {
    labels: ['Job 1', 'Job 2', 'Job 3'],
    datasets: [
      {
        label: 'Jobs',
        backgroundColor: ['#0263FF', '#FF7723', '#8E30FF'],
        hoverBackgroundColor: ['#0263FF', '#FF7723', '#8E30FF'],
        data: [1500, 500, 2000],
      },
    ],
  };

  const options =  {
    indexAxis: 'y',
    height: 5,
  }

  return <Bar data={data} options={options}/>;
};

export default BarChart;
