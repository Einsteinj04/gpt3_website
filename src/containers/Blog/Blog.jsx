import React from 'react'
import Article from "../../components/Article";
import {Rectangle1,Rectangle2,Rectangle3,Rectangle4,Rectangle5} from './import'
const Blog = () => {
  return (
    <div className="md:mb-40 mb-20" id="case_studies">
      <div className="gradient-text font-extrabold sm:text-6xl max-w-[701px] text-3xl sm:text-left text-center md:mb-32 mb-20">
        A lot is happening, We are blogging about it.
      </div>

      <div className="gap-12 flex md:flex-row flex-col">
        <div className='h-full'>
          <Article articleImg={Rectangle1} />
        </div>

        <div className=" grid md:grid-cols-2 grid-cols-1 gap-12">
          <Article articleImg={Rectangle2} />
          <Article articleImg={Rectangle3} />
          <Article articleImg={Rectangle4} />
          <Article articleImg={Rectangle5} />
        </div>
      </div>
    </div>
  );
}

export default Blog