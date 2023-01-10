import React from 'react'
import logoImg from "../assets/GPT-3.svg";

const Footer = () => {
  return (
    <section className="bg-darkviolet md:pt-44 pt-24 pb-10 md:px-28 px-10">
      <div className="gradient-text__animation font-extrabold md:text-6xl text-3xl mx-auto max-w-[821px] text-center md:mb-16 mb-10">
        Do you want to step in to the future before others
      </div>

      <div
        className="border-white border-[2px] mx-auto py-6 text-center hover:border-none hover:bg-white hover:text-[#000] w-52 md:mb-32 mb:20 cursor-pointer"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Request Early Access
      </div>

      <div className="grid md:grid-cols-[1fr,_1fr] gap-12 w-full grid-cols-1 text-slate text-xs md:mt-0 mt-20 ">
        <div className="md:text-left text-center mb-10">
          <img src={logoImg} className="mb-3 md:mx-0 mx-auto" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className=" grid md:grid-cols-3 grid-cols-1 gap-12 text-slate text-xs">
          <div className="flex flex-col gap-y-3">
            <p className="text-sm text-white mb-3">Links</p>
            <p>
              <a href="#">Overons</a>
            </p>
            <p>
              <a href="#">Social Media</a>
            </p>
            <p>
              <a href="#">Counters</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-sm text-white mb-3">Company</p>
            <p>
              <a href="#">Terms & Conditions</a>
            </p>
            <p>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
              <a href="#">Contact</a>
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="text-sm text-white mb-3">Get in touch</p>
            <p>
              <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
            </p>
            <p>
              <a href="#">085-132567</a>
            </p>
            <p>
              <a href="#">info@payme.net</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer