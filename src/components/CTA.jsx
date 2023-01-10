import React from 'react'

function CTA() {
  return (
    <div className=" gradient-bg__container rounded flex justify-between sm:p-12 p-6 md:flex-row flex-col gap-10 items-center md:mb-32 mb-20">
      <div className="text-[#000]">
        <p className="text-xs mb-5 sm:text-left text-center">
          Request Early Access to Get Started
        </p>
        <div className="sm:text-2xl font-extrabold sm:text-left text-center text-xl">
          Register today & start exploring the endless possiblities.
        </div>
      </div>

      <div
        className="rounded-full bg-[#000] text-white flex items-center px-11 py-4 justify-center whitespace-nowrap hover:bg-white hover:text-[#000] font-extrabold cursor-pointer"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        Get Started
      </div>
    </div>
  );
}

export default CTA