import React from 'react'
import dynamic from 'next/dynamic'
import LoadingSpinner from '@/app/_common/LoadingSpinner'

const Graph = dynamic(()=> import('../_components/Graph'), {
  loading: () => <LoadingSpinner width={8} height={8}/>
})
const Recommendation = dynamic(() => import('../_components/Recommendation'))
const CurrentLessons = dynamic(() => import('../_components/CurrentLessons'))


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
