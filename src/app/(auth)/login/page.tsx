import React from 'react'
import Login from './Login'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login'
}
function Home() {
  return <Login/>
}

export default Home