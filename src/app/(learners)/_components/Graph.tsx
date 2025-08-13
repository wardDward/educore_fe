"use client"

import React from 'react'
import LoadingSpinner from '@/app/_common/LoadingSpinner'
import dynamic from 'next/dynamic'


const LineGraph = dynamic(() => import('@/app/_components/graphs/LineGraph'), {
  loading: () => <LoadingSpinner width={'8'} height={'8'}/>,
})
const DoughnutGraph = dynamic(() => import('@/app/_components/graphs/DoughnutGraph'), {
  loading: () => <LoadingSpinner width={'8'} height={'8'}/>,
})
const BarGraph = dynamic(() => import('@/app/_components/graphs/BarGraph'), {
  loading: () => <LoadingSpinner width={'8'} height={'8'}/>,
})
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
