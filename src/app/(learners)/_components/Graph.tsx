"use client"
import LineGraph from '@/app/_components/graphs/LineGraph'
import DoughnutGraph from '@/app/_components/graphs/DoughnutGraph'
import BarGraph from '@/app/_components/graphs/BarGraph'
import React from 'react'

function Graph() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-1 md:p-5">
        <div className="w-full h-[300px] bg-white shadow-lg p-4 rounded-md">
          <BarGraph/>
        </div>
        <div className="w-full h-[300px] bg-white shadow-lg p-4 rounded-md">
            <LineGraph/>
        </div>
        <div className="w-full h-[300px] bg-white shadow-lg p-4 rounded-md">
          <DoughnutGraph/>
        </div>
      </div>
    </div>
  )
}

export default Graph
