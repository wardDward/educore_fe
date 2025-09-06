'use client'
import { useLoginMutation } from '@/app/store/services/authServices'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { handleInput } from '../../utils/handleInput';
import LoadingSpinner from '@/app/_common/LoadingSpinner'
import { useAppDispatch, useAppSelectror } from '../../store/hook';
import { CustomError } from '@/app/interface/CustomError'
import { setError } from '@/app/store/feature/authSlice'
import { useRouter } from 'next/navigation'


interface FormType {
    email: string;
    password: string;
}
function Home() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { error } = useAppSelectror(state => state.auth)
    const [formData, setFormData] = useState<FormType>({
        email: '',
        password: ''
    })

    const inputState = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleInput(e, formData, setFormData)
    }

    const [login, { isLoading, reset }] = useLoginMutation()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            //unwrap removes the {data:}
            const result = await login(formData).unwrap();
            //replace base on role
                        router.push('/dashboard')

        } catch (err) {
            const castError = err as CustomError;
            if (castError.data?.errors) {
                dispatch(setError(castError.data.errors));
                setFormData({
                    ...formData,
                    password: ''
                });
            }
        }
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
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
                <div className='mt-4 px-2'>
                    <form onSubmit={(e) => handleSubmit(e)} method='POST'>
                        <div className='flex flex-col mb-3'>
                            <label htmlFor="email" className='text-md'>Email
                            </label>
                            <input type="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                inputState(e)} name="email" id="email" className={`w-full border-[1px] border-gray-400 py-1 rounded-md outline-none px-2 ${error?.email ? 'border-red-600' : ''}`} value={formData.email} />
                            {error?.email && <p className="text-red-600 text-sm">{error.email[0]}</p>}
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label htmlFor="password" className='text-md'>Password</label>
                            <input type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => inputState(e)} name="password" id="password" className={`w-full border-[1px] border-gray-400 py-1 rounded-md outline-none px-2 ${error?.password ? 'border-red-600' : ''}`} value={formData.password} />
                            {error?.password && <p className="text-red-600 text-sm">{error.password[0]}</p>}
                        </div>
                        <div className='mt-3'>
                            <button type="submit" className={`text-md w-full py-1 text-white tracking-wide rounded-md flex items-center justify-center ${isLoading ? 'bg-slate-200 cursor-not-allowed text-black' : 'bg-purpleIndigo hover:bg-darkPurpleIndigo cursor-pointer'}`}>
                                {isLoading ? <LoadingSpinner width={1} height={1} /> : ''}
                                <span className={isLoading ? 'hidden py-4' : ''}>Sign In</span>
                            </button>
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
