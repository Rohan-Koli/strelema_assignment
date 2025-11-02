import { useState } from "react";
import Narbar from "../components/Narbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Destinations from "../components/Destinations";
import BookTrip from "../components/BookTrip";
import Testimonials from "../components/Testimonials";
import Logos from "../components/Logos";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-white flex flex-col w-full p-6  h-screen">
      <div className="absolute z-0 right-0 top-0 h-[600px] w-[700px] ">
        <img
          className="w-full h-full"
          src="/assets/Decore (1).png"
          alt="decore"
        />
      </div>
      <div className="min-w-7xl z-10 mx-auto flex gap-y-8 flex-col items-center justify-center bg-transparent">
        <Narbar />
        <Hero />
        <Services />
        <Destinations />
        <BookTrip />
        <Testimonials />
        <Logos />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
