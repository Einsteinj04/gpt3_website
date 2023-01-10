import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './import'
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
function Brand() {
  return (
    <Marquee className=" mx-auto sm:mb-32 mb-20" gradient={false} speed={30}>
      <div className="flex sm:max-w-[3000px] max-w-[1000px] justify-between items-center">
        <div className="mr-10">
          <img src={google} />
        </div>
        <div className="mr-10">
          <img src={slack} />
        </div>
        <div className="mr-10">
          <img src={atlassian} />
        </div>
        <div className="mr-10">
          <img src={dropbox} />
        </div>
        <div className="mr-10">
          <img src={shopify} />
        </div>
      </div>
    </Marquee>
  );
}

export default Brand