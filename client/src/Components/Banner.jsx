import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const {currentUser} = useSelector((state)=>state.user)
  const navigate = useNavigate()
  return (
    <div>
      
      <div className="font-sans">
      <section className="text-center py-20 px-4 bg-gradient-to-r from-green-100 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          School Management System
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Maamul iskuulkaaga si fudud oo casri ah — arday, macalin, attendance iyo lacagaha oo dhan hal meel.
        </p>
        <button onClick={()=>{currentUser ? navigate("/") : navigate("/login")}} className="bg-green-500 text-white px-6 py-3 rounded-xl shadow hover:bg-green-600">
          Get Started
        </button>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Students</h3>
            <p className="text-gray-500">Diiwaangeli oo maamul xogta ardayda si fudud.</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Teachers</h3>
            <p className="text-gray-500">Maamul macalimiinta iyo casharadooda.</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Attendance</h3>
            <p className="text-gray-500">La soco imaanshaha ardayda maalin kasta.</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Finance</h3>
            <p className="text-gray-500">Maamul lacagaha iyo fees-ka iskuulka.</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
            <p className="text-gray-500">Dashboard qurux badan oo leh stats muhiim ah.</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Reports</h3>
            <p className="text-gray-500">Hel warbixino dhamaystiran oo PDF ah.</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-16 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Our System?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          System-kan waxaa loogu talagalay iskuulada doonaya automation, fudeyd iyo maamulka saxda ah. Waa mid degdeg ah, ammaan ah, oo si sahlan loo isticmaali karo.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Manage Your School?</h2>
        <p className="text-gray-500 mb-6">La bilaaw maanta oo iskuulkaaga u qaad level-ka xiga 🚀</p>
        <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
          Buy Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} School Management System. All rights reserved.
      </footer>

    </div>
 
    </div>
  )
}

export default Banner