import Link from "next/link"

function NotFound() {
  return (
    <div className='w-full h-screen justify-center items-center  bg-slate-100 flex flex-col'>
      <h3 className='text-4xl font-bold text-center'>404 NOT FOUND</h3>
      <div className="mt-4">
        <Link href={'/'} className="text-md hover:text-blue-500">Go Back To Page</Link>
      </div>
    </div>
  )
}

export default NotFound
