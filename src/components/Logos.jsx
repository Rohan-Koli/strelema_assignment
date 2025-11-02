import React from 'react'

function Logos() {
  return (
    <section className='flex gap-x-20 items-center justify-center'>
      <div className='h-30 w-40 px-4 py-2  '><img src="/assets/logo_1.png" className='h-full w-full hover:shadow-2xl hover:grayscale-0 hover:scale-125  filter object-cover grayscale' alt="logo" /></div>
      <div className='h-30 w-40 px-4 py-2  '><img src="/assets/logo_2.png" className='h-full w-full hover:shadow-2xl hover:grayscale-0 hover:scale-125  filter object-cover grayscale' alt="logo" /></div>
      <div className='h-30 w-40 px-4 py-2  '><img src="/assets/logo_3.png" className='h-full w-full hover:shadow-2xl hover:grayscale-0 hover:scale-125  filter object-cover grayscale' alt="logo" /></div>
      <div className='h-30 w-40 px-4 py-2  '><img src="/assets/logo_4.png" className='h-full w-full hover:shadow-2xl hover:grayscale-0 hover:scale-125  object-contain filter grayscale' alt="logo" /></div>
      <div className='h-30 w-40 px-4 py-2  '><img src="/assets/logo_5.png" className='h-full w-full hover:shadow-2xl hover:grayscale-0 hover:scale-125  object-contain filter grayscale' alt="logo" /></div>
    </section>
  )
}

export default Logos