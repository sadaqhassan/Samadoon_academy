import React, { useState } from 'react'
import Side from '../Components/Side'
import { Outlet } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'

const Layout = () => {
  const [isOpen,setIsOpen] = useState(true)
  return (
    <div className='flex space-x-5 items-start bg-cyan-50 max-w-full h-screen overflow-y-hidden'>
        {
          isOpen && <Side/>
        }  
        <button className={`${!isOpen && "ml-8"}  mt-5`} onClick={()=>setIsOpen(!isOpen)}><MenuIcon/></button>
        <div className='mt-4 ml-5 flex-wrap max-w-full h-screen overflow-y-scroll'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout