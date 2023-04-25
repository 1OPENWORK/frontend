import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';
import React from 'react';

// Inicializa os módulos necessários do Highcharts
HighchartsMore(Highcharts);
solidGauge(Highcharts);

const SemiCircleDonutChart = () => {
  // Define as opções do gráfico
  const options = {
    chart: {
      type: 'solidgauge',
      backgroundColor: null,
    },
    title: {
      text: 'Meta',
      style: {
        fontFamily: 'Nunito',
        textAlign: 'left',
      },
    },
    pane: {
      startAngle: -90,
      endAngle: 90,
      background: [{
        backgroundColor: '#ccc',
        borderWidth: 0,
        outerRadius: '100%',
        innerRadius: '50%',
        shape: 'arc',
      }],
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },  
      },
      
    },
    credits: {
      enabled: false,
    },
    series: [{
      name: 'Meta',
      data: [{
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#6e40aa'],
            [1, '#c4c4c4'],
          ],
        },
        radius: '100%',
        innerRadius: '50%',
        y: 58.18,
      }],
    }],
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default SemiCircleDonutChart;
