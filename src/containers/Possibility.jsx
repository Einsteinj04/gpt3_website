import React from 'react'
import FeatureImg from "../assets/Feature Image.png";

const Possibility = () => {
  return (
    <div className="flex items-center justify-between max-w-[1410px] gap-x-10 md:flex-row flex-col sm:mb-32 mb-20 gap-y-20" id='open_ai'>
      <div className="w-full sm:min-w-[400px]">
        <img src={FeatureImg} />
      </div>

      <div className="self-center sm:mt-32 mt-0">
        <div className="text-cyan font-medium mb-5">
          Request Early Access to Get Started
        </div>
        <div className="md:text-4xl font-extrabold gradient-text sm:leading-10 leading-7 text-2xl md:mb-10 mb-5">
          The possibilities are beyond your imagination
        </div>
        <p className="text-slate font-normal sm:leading-7 sm:mb-5 mb-3 sm:text-base text-sm leading-6">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="leading-7 font-medium text-orange">
          Request Early Access to Get Started
        </div>
      </div>
    </div>
  );
}

export default Possibility