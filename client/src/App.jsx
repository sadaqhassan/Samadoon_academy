import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Teachers from './Pages/Teachers'
import Students from './Pages/Students'
import Fees from './Pages/Fees'
import Dashboard from './Pages/Dashboard'
import { useSelector } from 'react-redux'
import Attendence from './Pages/Attendence'
import Nav from './Components/Nav'

function App() {
  const currentUser = useSelector((state)=>state?.user.currentUser)
  return (
    <div>
      <Routes>
        <Route  path='/' element={!currentUser || currentUser == null ? <Home/> : <Layout/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='teachers' element={<Teachers/>}/>
        <Route path='students' element={<Students/>}/>
        <Route path='finance' element={<Fees/>}/>
        <Route path='attendence' element={<Attendence/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App