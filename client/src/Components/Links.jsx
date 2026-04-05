import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <div className='flex flex-col space-y-4  ml-0'>
        <NavLink to={'/'} className={({isActive})=>`${isActive &&"bg-green-700 px-2 py-2 rounded"}`}>Dashboard</NavLink>
        <NavLink  className={({isActive})=>`${isActive &&"bg-green-700 px-2 py-2 rounded"}`}  to={'teachers'} >Teachers</NavLink>
        <NavLink className={({isActive})=>`${isActive &&"bg-green-700 px-2 py-2 rounded"}`} to={'students'} >Students</NavLink>
        <NavLink className={({isActive})=>`${isActive &&"bg-green-700 px-2 py-2 rounded"}`} to={'finance'} >Finance</NavLink>
        <NavLink className={({isActive})=>`${isActive &&"bg-green-700 px-2 py-2 rounded"}`} to={'attendence'} >Attendence</NavLink>
    </div>
  )
}

export default Links