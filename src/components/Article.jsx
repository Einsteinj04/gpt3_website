import React from 'react'

const Article = ({articleImg}) => {
  return (
    <div
      className="bg-violet flex flex-col cursor-pointer hover:scale-105"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="">
        <img src={articleImg} />
      </div>

      <div className="md:p-5 p-3 flex flex-col h-full justify-between gap-10 hover:scale-105">
        <div>
          <p className="font-bold text-xs mb-5">Sep 26, 2021</p>
          <div className="font-extrabold text-xl">
            GPT-3 and Open AI is the future. Let us explore how it is?
          </div>
        </div>
        <a href="#" className="items-stretch">
          Read Full Article
        </a>
      </div>
    </div>
  );
}

export default Article