import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import {NavLink,useNavigate} from "react-router-dom"
function Narbar() {
    const auth = localStorage.getItem("auth")
    const navigate = useNavigate()
    // console.log("auth ",auth)
  return (
    <section className=' flex items-center font-medium text-xl justify-between px-8 h-20 min-w-7xl z-10 bg-white'>
        <div className='h-20 w-32 flex items-center justify-center '>
            <img className='object-cover' src="/assets/Travel.ly.png" alt="Travel.ly.png" />
        </div>
        <div className='flex items-center text-lg gap-8 justify-between '>
            <div className='flex items-center gap-2 justify-center'>
                <NavLink to="/"><div className='mx-5'>Home</div></NavLink>
                <div className='mx-5'>Destinations</div>
                <div className='mx-5'>Hotels</div>
                <div className='mx-5'>Bookings</div>
              
            </div>
            <div className='flex items-center gap-2 justify-center'>
            
                {auth === "true" ? <button onClick={()=>{
                    localStorage.removeItem("token")
                    localStorage.setItem("auth","false")
                    navigate("/login")
                }} className='mx-5'>Logout</button> : <NavLink to="/login"><button className='mx-5'>Login</button></NavLink>}
                {auth === "true" ? <NavLink to="/dashboard"><button className='mx-5 border-2 py-1.5 px-3 rounded-sm border-black'>Dashboard</button></NavLink> :<button className='mx-5 border-2 py-1.5 px-3 rounded-sm border-black'>Sign In</button> }
                <button className='mx-5 flex items-center justify-center'><p>EN</p> <IoIosArrowDown /></button>
                
              
            </div>
        </div>
    </section>
  )
}

export default Narbar