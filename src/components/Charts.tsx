import React, { useState, useEffect } from 'react';
import { Chart, ChartItem, ChartTypeRegistry } from 'chart.js';
import buildChart from '@/utils/buildChart';
import langColors from '@/utils/langColors';
import style from './style/chart.style';

type Init = Chart<keyof ChartTypeRegistry, number[], string> | undefined;

type Lang = {
  label: string;
  value: number;
  color: string;
};

type Repo = {
  description: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  html_url: string;
  id: number;
  language: string;
  name: string;
  stargazers_count: number;
  size: number;
};

interface PropType {
  languages: Lang[],
  repos: Repo[]
};

export default function Charts ({ languages, repos }: PropType) {
  const [langChartData, setLangChartData] = useState<Number[] | null>(null);
  const [starChartData, setStarChartData] = useState<Number[] | null>(null);
  const [starsPerLangData, setStarsPerLangData] = useState<Number[] | null>(null);

  // Create Top Languages chart
  const initLangChart = () => {
    const ctx = document.getElementById('langChart') as ChartItem;
    const labels = languages.map((lang:Lang) => lang.label);
    const data = languages.map((lang:Lang) => lang.value);

    setLangChartData(data);

    if (data.length > 0) {
      const backgroundcolor = languages.map(
        ({ color }: Lang) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`,
      );
      const bordercolor = languages.map((lang:Lang) => `${lang.color}`);
      const chartType = 'pie';
      const axes = false;
      const legend = true;
      const config = { ctx, chartType, labels, data, backgroundcolor, bordercolor, axes, legend };
      return buildChart(config);
    }
  };

  // Create Most Starred chart
  const initStarChart = () => {
    const ctx = document.getElementById('starChart') as ChartItem;
    const LIMIT = 5;
    const sortProperty = 'stargazers_count';
    const mostStarredRepos = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);
    const labels = mostStarredRepos.map(repo => repo.name);
    const data = mostStarredRepos.map(repo => repo[sortProperty]);

    setStarChartData(data);

    if (data.length > 0) {
      const chartType = 'bar';
      const axes = true;
      const legend = false;
      const config = { ctx, chartType, labels, data, axes, legend };
      return buildChart(config);
    }
  };

  // Create Stars per language chart
  const initStarsPerLangChart = () => {
    const ctx = document.getElementById('starsPerLangChart') as ChartItem;
    const filteredRepos = repos.filter(repo => !repo.fork && repo.stargazers_count > 0);
    const uniqueLangs = new Set(filteredRepos.map(repo => repo.language));
    const labels = Array.from(uniqueLangs.values()).filter(l => l);
    const data = labels.map(lang => {
      const repos = filteredRepos.filter(repo => repo.language === lang);
      const starsArr = repos.map(r => r.stargazers_count);
      const starSum = starsArr.reduce((a, b) => a + b, 0);
      return starSum;
    });

    setStarsPerLangData(data);

    if (data.length > 0) {
      const chartType = 'doughnut';
      const axes = false;
      const legend = true;
      const bordercolor = labels.map(label => langColors[label]);
      const backgroundcolor = bordercolor.map(color => `${color}B3`);
      const config = { ctx, chartType, labels, data, backgroundcolor, bordercolor, axes, legend };
      return buildChart(config);
    }
  };

  useEffect(() => {
    let langChart:Init, starChart:Init, starPerLangChart:Init;
    if (languages.length && repos.length) {
      langChart = initLangChart();
      starChart = initStarChart();
      starPerLangChart = initStarsPerLangChart();
    }

    return () => {
      langChart && langChart.destroy();
      starChart && starChart.destroy();
      starPerLangChart && starPerLangChart.destroy();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chartSize = 300;
  const langChartError = !(langChartData && langChartData.length > 0);
  const starChartError = !(starChartData && starChartData.length > 0);
  const thirdChartError = !(starsPerLangData && starsPerLangData.length > 0);

  return (
    <section className={style.chartSection}>
      <div className={style.chartWrapper}>
        <header>
          <h2 className={style.chartTitle}>Top Languages</h2>
        </header>

        <div className={style.chart}>
          {langChartError && <p>Nothing to see here!</p>}
          <canvas id="langChart" width={chartSize} height={chartSize} />
        </div>
      </div>

      <div className={style.chartWrapper}>
        <header>
          <h2 className={style.chartTitle}>Most Starred</h2>
        </header>
        <div className={style.chart}>
          {starChartError && <p>Nothing to see here!</p>}
          <canvas id="starChart" width={chartSize} height={chartSize} />
        </div>
      </div>

      <div className={style.chartWrapper}>
        <header>
          <h2 className={style.chartTitle}>Stars per Language</h2>
        </header>
        <div className={style.chart}>
          {thirdChartError && <p>Nothing to see here!</p>}
          <canvas id="starsPerLangChart" width={chartSize} height={chartSize} />
        </div>
      </div>
    </section>
  );
};