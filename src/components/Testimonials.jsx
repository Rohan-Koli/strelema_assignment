import React from 'react'

function Testimonials() {
  return (
    <section className="flex w-full gap-10 p-10">
      
      <div className="flex flex-col gap-y-5 w-1/2">
        <div className="text-xl font-medium text-gray-600">TESTIMONIAL</div>
        <div className="text-5xl font-semibold font-serif">
          What People Say About Us
        </div>
        <div className="flex my-10 gap-x-5">
          <div className="size-5 rounded-full bg-gray-600"></div>
          <div className="size-5 rounded-full bg-gray-600"></div>
          <div className="size-5 rounded-full bg-gray-600"></div>
        </div>
      </div>

      <div className="w-1/2">
      <div></div>
        <div className="grid grid-cols-12 grid-rows-6 h-96 bg-gray-100 relative w-full">
          <div className="col-start-1 col-end-12 row-start-1 row-end-5 bg-red-300"></div>
          <div className="col-start-2 col-end-12 row-start-2 row-end-6 bg-red-100"></div>  
        </div>
      </div>
    </section>
  )
}

export default Testimonials
