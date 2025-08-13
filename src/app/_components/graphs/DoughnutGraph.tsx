"use client"
import React, {useRef, useEffect} from 'react'

import {
    Chart as ChartJS,
    PointElement,
    CategoryScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    PointElement,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    ArcElement
);
function DoughnutGraph() {
  const doughnutRef = useRef<ChartJS<"doughnut",number[], string>>(null)
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Doughnut Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

 const chartOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
  }

  useEffect(() => {
    return() => {doughnutRef.current?.destroy()}
  },[])
  return (
    <div className="w-full h-full">
      <Doughnut ref={doughnutRef} data={data} options={chartOptions}/>
    </div>
  )
}

export default DoughnutGraph
