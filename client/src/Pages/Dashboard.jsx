import React, { useState } from 'react'
import { DollarSign, User2 } from 'lucide-react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const {teachers} = useSelector((state)=>state.teachers)
  const [dashboardUser,setDashboardUser] = useState([
    {name:"Teachers",count:teachers?.length,color:"green-600",icon:<User2/>},
    {name:"Students",count:1423,color:"cyan-600",icon:<User2/>},
    {name:"MonthlyIncome",count: 4443,color:"gray-300",icon:<DollarSign/>}
  ]);
  return (
    <div className='flex flex-wrap gap-5 mt-10 w-full '>
      {
        dashboardUser.map((dash)=>(
          <div className={`${dash.name === "Teachers" ? "bg-green-600" : dash.name === "Students" ? "bg-cyan-600" : "bg-gray-400"} p-5 w-76 text-white  rounded`}>
            <div className='flex justify-between px-2 flex-wrap'>
              <p>{dash.name}</p>
              <p className=''>{dash.icon}</p>
            </div>
            <p className='text-xl font-bold  text-center mt-1'>{dash.count}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Dashboard