import React from 'react'
import Links from './Links'
import { LogOutIcon } from 'lucide-react'

const Side = () => {
  return (
    <div className='flex flex-col flex-wrap justify-between pb-10 text-white fixed w-60 inset-0 bg-gray-800 px-4 py-2'>
        <div className='flex flex-col space-y-4'>
        <p className='bg-gray-600 px-2 py-2 w-full rounded'>Samadoon_academy</p>
        <Links/>
        </div>
        <button className='bg-red-100 font-bold text-black px-2 py-2 flex w-30 rounded'><LogOutIcon/> Logout</button>
    </div>
  )
}

export default Side