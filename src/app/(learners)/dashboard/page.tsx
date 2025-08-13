import React from 'react'
import dynamic from 'next/dynamic'
import Graph from '../_components/Graph'
import CurrentLessons from '../_components/CurrentLessons'
import Recommendation from '../_components/Recommendation'
import LoadingSpinner from '@/app/_common/LoadingSpinner'

function Home() {
  return (
    <main>
      <Recommendation/>
      <CurrentLessons/>
      <Graph/>
    </main>
  )
}

export default Home
