import React from "react";
import { motion, scale } from "framer-motion";
function Services() {
  const services = [
    {
      title: "Calculated Weather",
      description:
        "Biult Wicket longer admire do barton vanity itself do in it",
      img: "/assets/Group 48.png",
    },
    {
      title: "Best Flights",
      description: "Engrossed listening Part gate sell they west hard for the",
      img: "/assets/Group 51.png",
    },
    {
      title: "Local Events",
      description:
        "borton vanity itself do in it. Preferd to men it engrossed listening",
      img: "/assets/Group 50.png",
    },
    {
      title: "Customization",
      description:
        "We deliver outsourced aviation services fot military customers",
      img: "/assets/Group 49.png",
    },
  ];
  return (
    <section className=" w-full flex flex-col items-center gap-y-5 justify-center flex-wrap">
      <div className="text-lg font-semibold text-gray-600">CATEGORY</div>
      <div className="font-serif text-gray-900 text-5xl font-bold">
        We Offer Best Services
      </div>
      <div className=" flex w-full items-center justify-center gap-x-9 flex-wrap  ">
        {services &&
          services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring" }}
              className="flex flex-col text-center items-center w-72 gap-y-5 p-10 justify-center bg-white rounded-4xl cursor-pointer"
            >
              <div className="h-24 w-24 mb-2">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="text-xl font-semibold text-gray-700">
                {service.title}
              </div>
              <div className="text-lg font-medium text-gray-500">
                {service.description}
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}

export default Services;
