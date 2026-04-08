import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RegisterModel = () => {
    const [inputData,setInputData] = useState({});
    const handleChange = (e)=>{
        const {name,value} = e.target
        setInputData((prev)=>({
            ...prev,
            [name]:value
        }))
    } 

    const navigate= useNavigate()

    const handleSubmit = async()=>{
        try {
            const res = await fetch('http://localhost:2000/api/teacher/register',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                credentials: "include",
                body:JSON.stringify(inputData)
            });
            
            const data = await res.json();

            if(!data.success){
                return toast.error(data.message)
            }

            toast.success(data.message);
            navigate("/teachers")
        } catch (error) {
            toast.error(error)
        }
    }
  return (
    <div className=' p-10  bg-white shadow-xl '>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <input onChange={handleChange} placeholder='teacher name'className='bg-gray-100 py-1 px-2'  type="text" name='teachers_name'/>
        <input onChange={handleChange} placeholder='phone number' className='bg-gray-100 py-1 px-2' type="number" name='phone_number'/>
        <input onChange={handleChange} placeholder='email' className='bg-gray-100 py-1 px-2' type="email" name='teachers_email'/>
        <button className='bg-green-600 px-2 py-1 rounded text-white' onClick={handleSubmit}>Register</button>
        <button className='bg-gray-600 px-2 py-1 rounded text-white'>Cancel</button>
    </div>
    </div>
  )
}

export default RegisterModel