import React from 'react'
import CreateAccount from './Register'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Register'
}
function Home() {
   return <CreateAccount />
}

export default Home