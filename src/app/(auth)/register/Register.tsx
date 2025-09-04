'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Home() {
    return (
    <>
       <section className='flex justify-center items-center h-screen bg-gradient-to-r from-purpleIndigo to-darkPurpleIndigo'>
            <div className='w-full md:w-[90%] lg:w-[80%] bg-white h-full md:h-[80%] rounded-none md:rounded-md flex'>
                <div className='w-1/2 bg-purpleIndigo border-[1px] border-purpleIndigo rounded-l-md hidden lg:flex items-center justify-center '>
                    <div className='relative w-[500px] h-[500px]'>
                        <Image
                            src="/assets/images/sign_up.png"
                            fill
                            className='' alt="" />
                    </div>
                </div>
                <div className='border-none md:border-[1px] border-gray-400 w-full lg:w-1/2 flex justify-center items-center px-[10px] md:px-[50px]'>
                    <div className="w-full md:w-[90%] flex flex-col">
                        <div className='mb-4'>
                            <h1 className='text-center capitalize font-[500] text-lg md:text-2xl'>Sign up now</h1>
                            <p className="text-xs md:text-sm text-gray-600 italic text-center mt-2">
                                "Education is the most powerful weapon which you can use to change the world" - Nelson Mandela.
                            </p>
                        </div>
                        <form method='POST'>
                            <div className="flex flex-col mb-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" className='px-2 py-1 border-[1px] border-gray-300 rounded-md outline-none' />
                            </div>
                            <div className="flex flex-col mb-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className='px-2 py-1 border-[1px] border-gray-300 rounded-md outline-none' />
                            </div>
                            <div className="flex flex-col mb-2">
                                <label htmlFor="contcat">Contact</label>
                                <input type="text" name="contcat" id="contcat" className='px-2 py-1 border-[1px] border-gray-300 rounded-md outline-none' />
                            </div>
                            <div className="flex flex-col mb-2">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" className='px-2 py-1 border-[1px] border-gray-300 rounded-md outline-none' />
                            </div>
                            <div className="flex flex-col mb-2">
                                <label htmlFor="password">Re-Type Password</label>
                                <input type="password" name="password_confirmation" id="password_confirmation" className='px-2 py-1 border-[1px] border-gray-300 rounded-md outline-none' />
                            </div>
                            <div>
                                <button type="submit" className='text-white bg-purpleIndigo w-full py-1 rounded-md font-[400] tracking-wider hover:bg-darkPurpleIndigo cursor-pointer'>Sign Up</button>
                            </div>
                        </form>
                        <div className='text-center mt-3 flex items-center justify-center'>
                            <p>Already have an account?</p>
                            <Link href="/login" className="text-purpleIndigo hover:underline ml-1">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
     
    )
}

export default Home
