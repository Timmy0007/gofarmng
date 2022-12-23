import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: [" Completed 63.7% ", 
  "Pending 24.5% ",
   "Cancelled 11.4% "],
  datasets: [
    {
      data: [63.7, 24.5, 11.4],
      backgroundColor: ["#149C08", "#FFD809", "#F41515"],
      hoverBackgroundColor: ["#149C08", "#FFD809", "#F41515"],
      borderWidth: 2
    }
  ]
};
export default function App() {
  return <Doughnut data={data} />;
}