import React from "react";
import { LineChart, PieChart } from "react-chartkick";
import "chart.js";

function LineCharts() {
  return <LineChart data={{ "2017-05-13": 2, "2017-05-14": 5 }} />;
}

export default LineCharts;
