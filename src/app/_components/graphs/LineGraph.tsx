"use client"
import React, { useRef ,useEffect} from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LinearScale,
    LineElement,
    PointElement,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
);


function LineGraph() {
    const lineRef = useRef<ChartJS<"line", number[], string>>(null)

    const line_data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Line Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    };

    const chartOptions: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" }
        }
    }
    useEffect(() => {
        return () => {
            lineRef.current?.destroy()
        }
    },[])
    return (
    <div className="w-full h-full">
            <Line ref={lineRef} data={line_data} options={chartOptions} />
        </div>
    )
}

export default LineGraph
