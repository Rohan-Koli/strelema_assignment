import React from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
function Destinations() {
  const destinations = [
    {
      location: "Rome, Italty",
      duration: "10",
      amount: "5,42k",
      img: "/assets/Italy.png",
    },
    {
      location: "Rome, Italty",
      duration: "10",
      amount: "5,42k",
      img: "/assets/UK.jpg",
    },
    {
      location: "Rome, Italty",
      duration: "10",
      amount: "5,42k",
      img: "/assets/Europe.png",
    },
  ];
  return (
    <section className=" w-full flex flex-col items-center gap-y-5 justify-center flex-wrap">
      <div className="text-xl font-semibold text-gray-600">Top Selling</div>
      <div className="font-serif text-gray-900 text-5xl font-bold">
        Top Destinations
      </div>
      <div className=" flex w-full my-10 items-center justify-center gap-x-12 flex-wrap  ">
        {destinations &&
          destinations.map((destination) => (
            <motion.div
              key={destination.location}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring" }}
              className="flex flex-col text-center items-center bg-red-100 w-[350px] h-[500px] shadow-md justify-center rounded-4xl cursor-pointer"
            >
              <div className="h-2/3 rounded-t-4xl w-full ">
                <img
                  src={destination.img}
                  className="h-full rounded-t-4xl w-full"
                  alt={destination.location}
                />
                
              </div>
              <div className="h-1/3 w-full rounded-b-4xl py-10 px-8  bg-gray-100">
                <div className="flex items-center text-xl text-gray-600 font-semibold justify-between">
                  <div className="text-xl text-gray-600">{destination.location}</div>
                  <div>${destination.amount}</div>
                </div>
                <div className=" text-xl font-semibold flex my-8 items-center text-gray-700 justify-start"><FaLocationArrow className="mx-3"/>  {destination.duration} Days Trip</div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}

export default Destinations;
