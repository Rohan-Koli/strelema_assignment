import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function Subscribe() {
  return (
    <section className="w-full  flex items-center justify-center ">
      <div className=" max-w-6xl py-10 relative px-10 border-0 flex items-center justify-center">
        <div className=" absolute right-0 top-0 rounded-full p-3 bg-gradient-to-r from-[#5E3BE1] to-[#747DEF]">
          <FaTelegramPlane size={40} />
        </div>
        <div className=" flex px-10 py-16 w-full flex-col items-center rounded-tl-[130px] justify-center gap-y-16 bg-purple-50 rounded-2xl">
          <div className="text-4xl max-w-4xl text-center font-bold text-gray-500">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </div>
          <div className=" flex gap-x-3 items-center justify-center">
            <div className=" flex items-center bg-white rounded-xl min-w-xl px-12 py-6 justify-start gap-x-5">
              <CiMail size={20} />
              <h2 className=" text-xl font-normal">Your email</h2>
            </div>
            <div className=" text-white text-xl bg-[#FF946D] rounded-xl px-12 py-6">
              {" "}
              Subscibe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
