import React from 'react';
import HeaderImg from '../assets/Illustration.png'
import RecommendImg from '../assets/Group 81.png'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="flex md:flex-row flex-col mt-2 items-center gap-x-10 sm:mb-20 mb-10">
      <div className="flex flex-col w-full overflow-hidden">
        <h1
          className="gradient-text__animation font-extrabold leading-[75px] text-6xl tracking-tighter max-[1000px]:text-5xl max-[550px]:text-4xl max-[350px]:text-3xl mb-5 sm:min-w-[400px] w-full"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Let’s Build Something amazing with GPT-3 OpenAIx
        </h1>
        <motion.p
          className="text-slate font-normal leading-[27px] text-[20px] max-[550px]:text-base max-[350px]:text-xs mb-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </motion.p>
        <div className="h-16 flex max-[550px]:flex-col max-[550px]:gap-y-2 mb-10">
          <input
            type="text"
            className="bg-violet h-full pl-[32px] py-6 w-full rounded-l max-[550px]:py-2  min-w-[200px]"
            placeholder="Your Email Address"
          />
          <button className="h-full w-full flex-1 px-9 py-6 max-[550px]:py-2 whitespace-nowrap rounded max-[1000px]:px-2 max-[1000px]:py-2">
            Get Started
          </button>
        </div>

        <div className="flex max-[1500px]:flex-col flex-row items-center text-slate w-full gap-2 mb-10 justify-start">
          <div className="max-[1500px]:max-w-[300px]">
            <img src={RecommendImg} />
          </div>
          <p className="min-[1500px]:whitespace-nowrap text-center">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>

      <div className="w-full min-w[500px] overflow-hidden" id="HeaderImg">
        <img
          src={HeaderImg}
          className="h-full aos-init"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
      </div>

    </div>
  );
}

export default Header
