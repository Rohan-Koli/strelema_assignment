import React from 'react'

function BookTrip() {
  const steps = [
    {
      title: "Choose Destination",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Urna, tator tempus",
      img: "/assets/Group 7.png"
    },
    {
      title: "Make Payment",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Urna, tator tempus",
      img: "/assets/Group 12.png"
    },
    {
      title: "Reach Airport on Selected Date",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Urna, tator tempus",
      img: "/assets/Group 11.png"
    }
  ]

  return (
    <section className="w-full flex items-center justify-center py-10 ">
      <div className="w-full max-w-7xl flex items-center justify-between gap-10 px-6">
        
        {/* Left Section */}
        <div className="w-1/2 flex flex-col items-start gap-y-8">
          <div className="text-xl text-gray-500 font-semibold">Easy and Fast</div>
          <div className="text-5xl font-serif text-gray-700 font-semibold">
            Book Your Next Trip in 3 Easy Steps
          </div>

          <div className="flex flex-col items-start justify-center p-3 gap-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center justify-start gap-x-6">
                <img className="size-14 rounded-2xl object-contain" src={step.img} alt={step.title} />
                <div className="flex flex-col items-start text-gray-600 text-start">
                  <p className="text-xl font-bold">{step.title}</p>
                  <p className="text-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center p-5">
          <img className="w-full h-auto max-w-md object-contain" src="/assets/Image.png" alt="Image" />
        </div>
      </div>
    </section>
  )
}

export default BookTrip
