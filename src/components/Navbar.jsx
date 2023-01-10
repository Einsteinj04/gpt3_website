import React,{useState} from 'react'
import logoImg from '../assets/GPT-3.svg'
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import Links from './Links';
import { motion } from "framer-motion";
const Navbar = () => {
  const [navtoggle, setNavtoggle] = useState(false)
  
  const toggleNav = () => {
    setNavtoggle(!navtoggle)
  }
  return (
    <nav className="mb-10" id='home'>
      <div className="flex relative h-20">
        <div className="flex items-center mr-16">
          <img src={logoImg} />
        </div>
        <div className="flex-1 grow max-[1300px]:hidden">
          <ul className="flex items-center h-full">
            <Links direction={"flex-row"} />
          </ul>
        </div>
        <div className="flex justify-between max-[1300px]:justify-end max-[1300px]:basis-full">
          <div className="flex items-center justify-end basis-60 max-[550px]:hidden">
            <div className="mr-[26px] cursor-pointer">Sign In</div>
            <button className="bg-orange px-4 py-2 rounded mr-[26px]">
              Sign Up
            </button>
          </div>
          <IconContext.Provider
            value={{
              color: "#FF4820",
              size: "30px",
            }}
          >
            <div
              className="min-[1300px]:hidden cursor-pointer flex items-center"
              onClick={toggleNav}
            >
              {navtoggle ? <RiCloseFill /> : <RiMenu3Line />}
            </div>
          </IconContext.Provider>
        </div>
        {navtoggle ? (
          <motion.div
            className="bg-violet h-[500px] absolute w-[90%] top-20 right-0 p-5 overflow-hidden"
            initial={{ x: "0px" }}
            animate={{ x: "0px" }}
            transition={{
              type: "tween",
              stiffness: 100,
              delay: 0.01,
              x: { duration: 1 },
            }}
          >
            <Links direction={"flex-col"} />
            <div className="p-5 flex flex-col gap-y-2 rounded">
              <div className="border-white border-[1px] text-center py-1 hover:bg-slate">
                Sign In
              </div>
              <button className="rounded py-1">Sign Up</button>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Navbar