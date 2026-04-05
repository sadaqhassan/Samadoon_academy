import React from 'react'
import Links from './Links'
import { LogOutIcon } from 'lucide-react'

const Side = () => {
  return (
    <div className='flex flex-col justify-between pb-10 text-white h-screen  w-40  md:w-60  bg-gray-800 px-4 py-2'>
        <div className='flex flex-col space-y-4'>
        <div className='bg-gray-600 flex-wrap flex py-2 w-40 px-2 text-sm rounded'>Samadoon_academy</div>
        <Links/>
        </div>
        <button className='bg-red-100 font-bold text-black px-2 py-2 flex w-30 rounded'><LogOutIcon/> Logout</button>
    </div>
  )
}

export default Side