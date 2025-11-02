import React from "react";

function Testimonials() {
  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-full max-w-7xl flex gap-10 p-10 overflow-hidden">
        
        {/* Left Section */}
        <div className="flex flex-col gap-y-5 w-1/2">
          <div className="text-xl font-semibold text-gray-600">TESTIMONIALS</div>
          <div className="text-5xl mb-10 font-semibold font-serif">
            What People Say About Us
          </div>
          <div className="flex my-10 gap-x-5">
            <div className="size-5 rounded-full bg-gray-600"></div>
            <div className="size-5 rounded-full bg-gray-300"></div>
            <div className="size-5 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col relative">
          <div>
            <img
              src="/assets/Testimonial.png"
              className="rounded-full size-20"
              alt="testimonial"
            />
          </div>

          <div className="grid grid-cols-12 grid-rows-5 h-96 relative w-full">
            <div className="px-10 py-5 text-lg flex flex-col items-start justify-start col-start-1 col-end-11 rounded-md bg-white shadow-2xl z-20 row-start-1 row-end-4">
              <div>
                "On the Windows talking painted pastures yet Its express parties
                use. Sure last upon he same as knew next. Of believed or Diverted
                no"
              </div>
              <div className="my-14">
                <span className="font-semibold">Mike Taylor</span> <br />
                Delhi, India
              </div>
            </div>

            <div className="col-start-2 col-end-12 rounded-md shadow-md row-start-2 row-end-5 border z-10 border-r-gray-200 flex flex-col justify-center items-center">
              <h2 className="text-base font-semibold">Chris Thomas</h2>
              <h2 className="text-sm">CEO of Red Button</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
