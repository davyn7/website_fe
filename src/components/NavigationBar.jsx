import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Example = () => {
  return (

    <SimpleFloatingNav />
  );
};

const SimpleFloatingNav = () => {
  return (
    <div style={{}}>
        <nav style={{marginTop: '5vh', fontSize: '1.25vw', gap: '2vh', textAlign: 'center', marginLeft: '20vw', marginRight: '20vw'}} className="flex items-center text-neutral-700">
            <Link href={'home'} className="block overflow-hidden">
                <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ ease: "backInOut", duration: 0.5 }}
                    className="h-[20px]"
                >
                    <span className="flex h-[20px] items-center">Home</span>
                    <span className="flex h-[20px] items-center text-indigo-500">
                    Home
                    </span>
                </motion.div>
            </Link>
            <Link href={'journey'} className="block overflow-hidden">
                <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ ease: "backInOut", duration: 0.5 }}
                    className="h-[20px]"
                >
                    <span className="flex h-[20px] items-center">Journey</span>
                    <span className="flex h-[20px] items-center text-indigo-500">
                    Journey
                    </span>
                </motion.div>
            </Link>
            <a href={'https://www.joinmasa.ai'} className="block overflow-hidden">
                <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ ease: "backInOut", duration: 0.5 }}
                    className="h-[20px]"
                >
                    <span className="flex h-[20px] items-center">Masa</span>
                    <span className="flex h-[20px] items-center text-indigo-500">
                    Masa
                    </span>
                </motion.div>
            </a>
            <Link href={'research'} className="block overflow-hidden">
                <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ ease: "backInOut", duration: 0.5 }}
                    className="h-[20px]"
                >
                    <span className="flex h-[20px] items-center">Research</span>
                    <span className="flex h-[20px] items-center text-indigo-500">
                    Research
                    </span>
                </motion.div>
            </Link>
            <Link href={'journey'} className="block overflow-hidden">
                <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ ease: "backInOut", duration: 0.5 }}
                    className="h-[20px]"
                >
                    <span className="flex h-[20px] items-center">Services</span>
                    <span className="flex h-[20px] items-center text-indigo-500">
                    Services
                    </span>
                </motion.div>
            </Link>
            <Link href={'journey'} className="block overflow-hidden">
                <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ ease: "backInOut", duration: 0.5 }}
                    className="h-[20px]"
                >
                    <span className="flex h-[20px] items-center">Products</span>
                    <span className="flex h-[20px] items-center text-indigo-500">
                    Products
                    </span>
                </motion.div>
            </Link>
            <Link href={'journey'} className="block overflow-hidden">
                <motion.div
                    whileHover={{ y: -20 }}
                    transition={{ ease: "backInOut", duration: 0.5 }}
                    className="h-[20px]"
                >
                    <span className="flex h-[20px] items-center">Rates</span>
                    <span className="flex h-[20px] items-center text-indigo-500">
                    Rates
                    </span>
                </motion.div>
            </Link>

            <JoinButton />
        </nav>
    </div>
    
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="24"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2 fill-neutral-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const NavLink = ({ children }) => {
  return (
    <a href="#" rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-neutral-50">
          {children}
        </span>
      </motion.div>
    </a>
  );
};

const JoinButton = () => {
  return (
    <button href="contact"
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-700 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-indigo-500
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-50
          hover:before:translate-y-[0%]
          active:scale-100`}
    >
      Contact Me!
    </button>
  );
};

export default Example;