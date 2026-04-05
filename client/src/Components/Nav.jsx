import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
   const [open, setOpen] = useState(false)
   const {currentUser} = useSelector((state)=>state.user)
   const navigate  = useNavigate()
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <div>
              <p>Samo schools</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="#">Contact</a>

              {
                currentUser == null || !currentUser ? 
                <button onClick={()=>navigate('/login')} className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Login
                </button>
                :
                <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Logout
                </button>
              }
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <a href="/" className="block">Home</a>
                <a href="/about" className="block">About</a>
                <a href="#" className="block">Contact</a>
              {
                currentUser == null || !currentUser ? 
                <button onClick={()=>navigate('/login')} className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Login
                </button>
                :
                <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Logout
                </button>
              }
            </div>

        </nav>
    )
}

export default Nav