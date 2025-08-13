import React, { useRef, useEffect } from 'react'

import {
    Chart as ChartJS,
    PointElement,
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    PointElement,
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)
function BarGraph() {
    const barRef = useRef<ChartJS<"bar", number[], string>>(null)


    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
            },
            {
                label: "My Second Dataset",
                data: [45, 39, 60, 91, 36, 75, 50],
                backgroundColor: "red",
                borderColor: "red",
                borderWidth: 2,
            },
        ],
    };

    const chartOptions: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" },
        },
    }
     useEffect(() => {
           return () => {
               barRef.current?.destroy()
           }
       },[])
    return (
        <div className='w-full h-full'>
            <Bar ref={barRef} data={data} options={chartOptions} />
        </div>
    )
}

export default BarGraph
