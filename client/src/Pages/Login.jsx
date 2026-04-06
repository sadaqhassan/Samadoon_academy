import React, { useState } from 'react'
import {loginSuccess} from '../Store/userSlice'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [inputData,setInputData] = useState({});
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        const {id,value} = e.target
        setInputData((prev)=>({...prev,
            [id]:value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:2000/api/user/login",{
            method:"POST",
            headers:{"Content-Type" :"application/json"},
            credentials: "include",
            body:JSON.stringify(inputData)
        });
        const data = await res.json()
        if(!data.success){
            return toast.error(data.message)
        }

        dispatch(loginSuccess(data.userData))
        toast.success(data.message)
        navigate('/')
    }
  return (
    <div className='flex justify-center items-center mt-10'>
        <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Welcome back</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} id="email" className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required />
                
                <input onChange={handleChange} id="password" className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required />
                <div className="text-right py-4">
                    <a className="text-blue-600 underline" href="#">Forgot Password</a>
                </div>
                <button type="submit" className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white">Log in</button>
            </form>
            
            <button type="button" className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white">
                <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png" alt="appleLogo" />
                Log in with Apple
            </button>
            <button type="button" className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                Log in with Apple
            </button>
        </div>
    </div>
  )
}

export default Login