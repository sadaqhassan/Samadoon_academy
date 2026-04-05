import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'

function App() {
  return (
    <div>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Layout/>}/>
      </Routes>
    </div>
  )
}

export default App