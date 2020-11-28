import React from "react";
import { LineChart, PieChart } from "react-chartkick";
import "chart.js";

function LineCharts({ lineChartData }) {
  return <LineChart data={lineChartData} />;
}

export default LineCharts;
