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
import Login from './Pages/Login'
import About from './Components/About'
import { Toaster } from 'react-hot-toast'
function App() {
  const currentUser = useSelector((state)=>state?.user.currentUser)
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route  path='/' element={!currentUser || currentUser == null ? <Home/> : <Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='teachers' element={<Teachers/>}/>
        <Route path='students' element={<Students/>}/>
        <Route path='finance' element={<Fees/>}/>
        <Route path='attendence' element={<Attendence/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App