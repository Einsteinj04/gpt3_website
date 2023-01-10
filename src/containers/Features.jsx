import React from 'react'
import Feature from '../components/Feature'

const Features = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between gap-x-10 gap-y-20 sm:mb-32 mb-20'>
      <div className="gradient-text">
        <h3 className="font-extrabold sm:text-4xl text-2xl md:mx-0 mx-auto max-w-[500px] md:text-left text-center mb-10">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h3>
        <p className="font-medium sm:text-base text-sm md:text-left text-center w-full">Request Early Access to Get Started</p>
      </div>

      <div className='flex flex-col gap-y-10 md:mx-0 mx-auto'>
        <Feature
          title={"Improving end distrusts instantly "}
          text={
            "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          }
          flexRow={true}
        />
        <Feature
          title={"Become the tended active"}
          text={
            "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          }
          flexRow={true}
        />
        <Feature
          title={"Message or am nothing"}
          text={
            "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          }
          flexRow={true}
        />
        <Feature
          title={"Really boy law county"}
          text={
            "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          }
          flexRow={true}
        />
      </div>
    </div>
  );
}

export default Features