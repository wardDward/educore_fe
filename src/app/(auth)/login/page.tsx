'use client'
import { useLoginMutation } from '@/app/store/services/authServices'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { handleInput } from '../../utils/handleInput';
import { useDispatch } from 'react-redux'

interface FormType {
    email: string;
    password: string;
}
function Home() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState<FormType>({
        email: '',
        password: ''
    })

    const inputState = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleInput(e, formData, setFormData)
    }

    const [login, { data, isLoading }] = useLoginMutation()

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await login(formData)
    }

    return (
        <section className='flex justify-center items-center h-screen bg-gradient-to-r from-purpleIndigo to-darkPurpleIndigo'>
            <div className='bg-white w-full md:w-[50%] lg:w-[30%] xl:w-[25%] px-2 py-5 shadow-lg rounded-md border-[1px] border-gray-100'>
                <div className='flex justify-center'>
                    <div className='relative w-[80px] h-[80px]'>
                        <Image
                            src="/assets/logo.png"
                            fill
                            alt="Logo"
                            className=" object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                </div>
                <div className='mt-4 px-2'>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='flex flex-col mb-3'>
                            <label htmlFor="email" className='text-md'>Email
                            </label>
                            <input type="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                inputState(e)} name="email" id="email" className='w-full border-[1px] border-gray-400 py-1 rounded-md outline-none px-2' />
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label htmlFor="password" className='text-md'>Password</label>
                            <input type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputState(e)} name="password" id="password" className='w-full border-[1px] border-gray-400 py-1 rounded-md outline-none px-2' />
                        </div>
                        <div className='mt-3'>
                            <button type="submit" className='text-md w-full bg-purpleIndigo hover:bg-darkPurpleIndigo cursor-pointer py-1 text-white tracking-wide rounded-md'>Sign In</button>
                        </div>
                    </form>
                </div>
                <p className='text-center mt-4'>Don't have an account?
                    <Link href="/register" className="text-purpleIndigo hover:underline ml-1">Sign up</Link>
                </p>
            </div>
        </section>
    )
}

export default Home
