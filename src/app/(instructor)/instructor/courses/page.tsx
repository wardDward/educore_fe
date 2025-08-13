import React from 'react'
import Link from 'next/link'
function Home() {
  return (
    <div className='p-[40px]'>
      <div className='flex items-center justify-between'>
          <h2 className='text-lg text-darkPurpleIndigo'>Your Courses</h2>
          <Link href="/instructor/courses/create-course" className='text-xs text-white bg-purpleIndigo rounded-md p-2 hover:bg-darkPurpleIndigo cursor-pointer'>Create Course</Link>
      </div>
    </div>
  )
}

export default Home
