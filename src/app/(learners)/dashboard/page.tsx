import React from 'react'
import Graph from '../_components/Graph'
import CurrentLessons from '../_components/CurrentLessons'
import Recommendation from '../_components/Recommendation'

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
