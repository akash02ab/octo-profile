import { Chart, ChartItem, ChartType, LegendOptions } from 'chart.js/auto';

const defaultBackgroundColor = [
  'rgba(255, 99, 132, 0.7)',
  'rgba(54, 162, 235, 0.7)',
  'rgba(255, 206, 86, 0.7)',
  'rgba(75, 192, 192, 0.7)',
  'rgba(153, 102, 255, 0.7)',
  'rgba(255, 159, 64, 0.7)',
];

const defaultBorderColor = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
];

interface Config {
  ctx: ChartItem,
  chartType: string,
  labels: string[],
  data: number[],
  backgroundcolor?: string[],
  bordercolor?: string[],
  axes: boolean,
  legend: boolean
};

const buildScales = (axes: boolean) => {
  const scales = {
    x: {
      ticks: {
        font: {
          family: 'Inter sans-serif',
          size: 12
        },
        color: '#f6f8fa'
      },
    },
    y: {
      ticks: {
        font: {
          family: 'Inter sans-serif',
          size: 12
        },
        color: '#f6f8fa'
      }
    }
  };

  return axes ? scales : {};
};

const buildLegend = (legend: boolean) => {
  const leg = {
    position: 'right',
    labels: {
      font: {
        family: 'Inter sans-serif',
        size: 12
      },
      color: '#f6f8fa'
    }
  }
  return legend ? leg : { display: false };
};

const buildTooltip = () => {
  const tip = {
    titleFont: {
      family: 'Inter sans-serif'
    },
    bodyFont: {
      family: 'Inter sans-serif'
    },
    cornerRadius: 3,
  };
  return tip;
};

const buildChart = (config: Config) => {
  const { ctx, chartType, labels, data, backgroundcolor, bordercolor ,axes, legend } = config;
  const backgroundColor = backgroundcolor || defaultBackgroundColor;
  const borderColor = bordercolor || defaultBorderColor;

  return new Chart(ctx, {
    type: chartType as ChartType,
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          borderColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: buildScales(axes),
      plugins: {
        legend: buildLegend(legend),
        tooltip: buildTooltip()
      },
      responsive: true,
      maintainAspectRatio: true
    },
  });
};

export default buildChart;