import React from 'react'

function Footer() {
  return (
    <section className=' w-full flex items-center my-40 justify-center'>
      <div className=' max-w-7xl items-center justify-between flex gap-x-28'>
        <div className='flex flex-col items-start justify-center gap-y-10'>
          <div>
            <img src="/assets/Group 590.png" className=' object-contain'  alt="Logo" />
          </div>
          <div>Book your trip in minute, get full <br /> Control for much longer</div>
        </div>
        <div className=' flex items-center justify-center gap-x-28'>
          <div className='flex text-xl  text-gray-800 flex-col gap-y-5'>
            <p className=' text-xl font-bold'>Company</p>
            <p className='text-lg text-gray-600 font-semibold'>About</p>
            <p className='text-lg text-gray-600 font-semibold'>Careers</p>
            <p className='text-lg text-gray-600 font-semibold'>Mobile</p>
          </div>
          <div className='flex text-xl  text-gray-800 flex-col gap-y-5'>
            <p className=' text-xl font-bold'>Contact</p>
            <p className='text-lg text-gray-600 font-semibold'>Help/FAQ</p>
            <p className='text-lg text-gray-600 font-semibold'>Press</p>
            <p className='text-lg text-gray-600 font-semibold'>Affilates</p>
          </div>
          <div className='flex text-xl  text-gray-800 flex-col gap-y-5'>
            <p className=' text-xl font-bold'>More</p>
            <p className='text-lg text-gray-600 font-semibold'>Airlinefees</p>
            <p className='text-lg text-gray-600 font-semibold'>Airline</p>
            <p className='text-lg text-gray-600 font-semibold'>Low fare tips</p>
          </div>
        </div>
        <div className=' flex flex-col gap-y-5 items-center justify-center'>
          <div className=' flex items-center justify-center'>
            <img src="/assets/Social (1).png" alt="" />
            <img src="/assets/Social (2).png" alt="" />
            <img src="/assets/Social.png" alt="" />
          </div>
          <div className=' text-xl font-semibold text-gray-600 '>Discover our app</div>
          <div className=' flex gap-x-4 items-center justify-center'>
            <img src="/assets/Google Play.png" alt="Google play" />
            <img src="/assets/Play Store.png" alt="" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer