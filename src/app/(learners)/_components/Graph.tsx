import LineGraph from '@/app/_components/graphs/LineGraph'
import React from 'react'

function Graph() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-1 md:p-5">
        <div className="w-full h-[300px] bg-white shadow-lg p-4 rounded-md">
          {/* <Bar ref={(el) => (barRef.current = el?.chartInstance)} data={data} options={chartOptions} /> */}
        </div>
        <div className="w-full h-[300px] bg-white shadow-lg p-4 rounded-md">
            <LineGraph/>
        </div>
        <div className="w-full h-[300px] bg-white shadow-lg p-4 rounded-md">
          {/* <Doughnut ref={(el) => (doughnutRef.current = el?.chartInstance)} data={doughnutData} options={chartOptions} /> */}
        </div>
      </div>
    </div>
  )
}

export default Graph
