import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";
import { MdLock, MdPassword } from "react-icons/md";
import axios from "axios"
import Narbar from '../components/Narbar';
import { useNavigate } from "react-router-dom";
function Login() {
    const [formData,setFormData] = useState({
        phone:"",
        password:""
    })
    const navigate = useNavigate()
    const [result,setResult] = useState()

    const handleChange =(e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
        // console.log(name,value)
    }
    const handleSubmit =async (e)=>{
        
        try {
            e.preventDefault()
            console.log("hiiii")
            const res = await axios.post("https://strelema-task.onrender.com/api/auth/login",formData)
            console.log(res)
            setResult(res.data)
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("auth",true)
            navigate("/dashboard")
        } catch (error) {
            localStorage.removeItem("token")
            localStorage.setItem("auth",false)
            // console.log(error.response.data.status)
            setResult(error.response.data)
        }
    }
    
  return (
    <section className="h-screen flex flex-col items-center justify-start gap-20 w-screen bg-[url('/assets/Login.jpg')]  bg-cover bg-center bg-no-repeat">
        <Narbar  />
        <form onSubmit={handleSubmit} className='w-[400px] flex flex-col px-6 rounded-md gap-y-5 pt-6 pb-4 mx-auto bg-white'>
            <h1 className='text-xl font-semibold text-gray-600'>Login</h1>
            {result?.status ? <h2 className='text-lg font-semibold text-green-500'>{result?.message}</h2> : <h2 className='text-lg font-semibold text-red-500'>{result?.message}</h2> }
            <div className='flex flex-col'>
                <h1 className='text-base font-semibold text-gray-600'>Enter Mobile No</h1>
                <div className='flex items-center border rounded-md p-3 border-gray-600 gap-x-2 justify-start'>
                    <CiMail />
                    <input type="text" required onChange={handleChange} name='phone' className='focus:outline-none focus:border-transparent placeholder:text-sm' placeholder='Enter Mobile No' />
                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-base font-semibold text-gray-600'>Enter password</h1>
                <div className='flex items-center border rounded-md p-3 border-gray-600 gap-x-2 justify-start'>
                    <MdLock />
                    <input type="password" required onChange={handleChange} name='password' className='focus:outline-none focus:border-transparent placeholder:text-sm' placeholder='Enter Mobile No' />
                </div>
            </div>
            <div className='flex items-center text-gray-600 text-sm justify-between'>
                <div className='flex items-center justify-center'><input type="checkbox" /><p>Remember me</p></div>
                <p>Forgot password</p>
            </div>
            <button type='submit' className=' w-full py-2 rounded-md bg-blue-700'>Login Now</button>
            <div className='text-sm text-gray-600 text-center'>Don't have an account? <span className='font-semibold'>Sign Up</span> </div>
        </form>
</section>

  )
}

export default Login