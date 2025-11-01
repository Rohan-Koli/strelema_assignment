import React from 'react'
import { IoPlaySharp } from "react-icons/io5";
function Hero() {
  return (
    <section className=' w-full my-4 flex items-center justify-center'>
      <div className='flex items-start justify-center gap-y-4 flex-col'>
        <div className='text-xl font-bold text-orange-400'>BEST DESTINATIONS AROUND THE WORLD</div>
        <div className=' font-serif text-7xl font-bold text-blue-900'>Travel, enjoy <br/> and live a new <br/> and full life</div>
        <div className='font-semibold text-gray-500 '>Built Wicket longer admire do borton vanity itself do in it. <br/>
          Preferred to sportsmen it engrossed listening. Park gate <br/>
          sell they west hard for the.
        </div>
        <div className=' flex items-center justify-start gap-8'>
          <button className='bg-orange-500 rounded-md shadow-md text-white p-3.5'> Find out more</button>
          <div className=' flex items-center justify-center gap-4 text-xl'>
            <button><IoPlaySharp className=' bg-orange-500 rounded-full p-3 size-12 text-white' /></button>
            <p className=' font-semibold text-gray-500'>Play Demo</p>
          </div>
        </div>
      </div>
      <div className='w-1/2'>
        <img src="/assets/hero_model.png" alt="hero_model" />
      </div>
    </section>
  )
}

export default Hero