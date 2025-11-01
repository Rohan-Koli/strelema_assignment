import React from 'react'

function BookTrip() {
  const steps = [{
    title:"Choose Destination",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Urna, tator tempus",
    img:"/assets/Group 7.png"
  },
{
    title:"Make Payment",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Urna, tator tempus",
    img:"/assets/Group 12.png"
  },
{
    title:"Reach Airport on Selected Date",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Urna, tator tempus",
    img:"/assets/Group 11.png"
  }]
  return (
    <section className='max-w-7xl flex items-center p-10 justify-center'>
      <div className='w-1/2 flex flex-col items-start gap-y-8 justify-center'>
        <div className='text-xl text-gray-500 font-semibold'>Easy and Fast</div>
        <div className=' text-5xl font-serif text-gray-700 font-semibold'>Book Your Next Trip in 3 Easy Steps</div>
        <div className=' flex flex-col items-center justify-center p-3 gap-y-10'>
          {steps && steps.map((step)=> (
            <div className=' flex items-center justify-center gap-x-6'>
              <img className='size-14 rounded-2xl' src={step.img} alt={step.title} />
              <div className='flex items-start text-gray-600 text-start justify-center flex-col'>
                <p className='text-xl font-bold '>{step.title}</p>
                <p className='text-xl  '>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=' w-1/2flex items-center justify-center p-5'>
        <img src="/assets/Image.png" alt="Image" />
      </div>
    </section>
  )
}

export default BookTrip