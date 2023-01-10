import  React,{useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import "animate.css";
import { IconContext } from "react-icons";
import { FaLongArrowAltUp } from "react-icons/fa";
AOS.init();
import {
  Brand,
  CTA,
  Navbar,
} from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import "./App.css";

function App() {

  const [showToTop, setShowToTop] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100){
        setShowToTop(true)
      } else {
        setShowToTop(false)
      }
    })
  })
  return (
    <div className="">
      <div className="gradient-bg max-[430px]:pt-5 pt-12">
        <div className=" max-[1130px]:w-[90%] w-[85%] mx-auto">
          <Navbar />
          <Header />
        </div>
      </div>
      <div className="max-[1130px]:w-[90%] w-[85%] mx-auto">
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
      </div>
      <Footer />
      <a
        className={`fixed bottom-8 right-8 animate__animated animate__pulse animate__infinite animate__fast ${showToTop?'':'hidden'} z-[1000]`}
        href="#home"
      >
        <div className="bg-orange md:p-5 p-3 rounded-full cursor-pointer">
          <IconContext.Provider
            value={{ size: "20px" }}
          >
            <FaLongArrowAltUp />
          </IconContext.Provider>
        </div>
      </a>
    </div>
  );
}

export default App;
