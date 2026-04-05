import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <div className='flex flex-col space-y-4 ml-5'>
        <NavLink to={'/'} className={(isActive)=>`${isActive &&"bg-green-400 px-2 py-2"}`}>Dashboard</NavLink>
        <NavLink to={'/teacher'} >Teachers</NavLink>
        <NavLink to={'/students'} >Students</NavLink>
        <NavLink to={'/finance'} >Finance</NavLink>
        <NavLink to={'/attendence'} >Attendence</NavLink>
    </div>
  )
}

export default Links