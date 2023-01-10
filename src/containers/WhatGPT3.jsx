import React,{useState} from 'react'
import Feature from '../components/Feature';
// import {CTA} from '../components'

const WhatGPT3 = () => {
  return (
    <div className="gradient-container md:p-14 sm:p-8 p-4 sm:mb-32 mb-10" id='what_is_gpt'>
      <div className="md:mb-20 mb-10">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          flexRow={true}
          noWrap = {true}
        />
      </div>

      <div className="gradient-text flex w-full justify-between md:flex-row flex-col md:mb-20 mb-10">
        <h2 className="font-extrabold sm:text-3xl text-2xl max-w-[450px] md:mb-0 mb-8 text-left ext-center">
          The possibilities are beyond your imagination
        </h2>
        <p className="justify-self-end pt-4 font-medium text-center">
          <a href="#" className="py-3 hover:border-slate hover:border-b">
            Explore The Library
          </a>
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-y-10 gap-x-7">
        <Feature
          title="Chatbox"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgeable"
          text="We so opinion friends me message as delight. Whole front do of plate heard "
        />
        <Feature
          title="Education"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
      </div>
    </div>
  );
}

export default WhatGPT3