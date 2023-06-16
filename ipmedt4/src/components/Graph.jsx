import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, Ticks, scales} from 'chart.js/auto'
import ChartAnnotation from 'chartjs-plugin-annotation';

function Graph({chartData}) {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 500
      },
    },
  };
  return (
    <Bar data={chartData} options={options} />
  )
}

export default Graph