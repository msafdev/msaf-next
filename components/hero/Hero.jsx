"use client";

// libraries
import { motion } from "framer-motion";
import Link from "next/link";
import {
  PiTwitterLogoBold,
  PiInstagramLogoBold,
  PiGithubLogoBold,
  PiLinkedinLogoBold,
} from "react-icons/pi";
import { TbBrandFiverr } from "react-icons/tb";
import { BiDownArrow } from "react-icons/bi";

// assets
import "./Hero.css";

export default function Hero() {
  // Scroll to ID
  const scrollToID = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-full flex-[2] flex flex-col justify-center items-center md:space-y-10">
      {/* TOP */}
      <div className="w-full h-fit flex flex-col">
        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 600 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, type: "spring" }}
          className="flex items-center space-x-2"
        >
          <div className="md:w-5 w-4 h-[2px] bg-gray-700" />
          {/* TODO: Make something functional when my current location is clicked. */}
          <p className="peer cursor-pointer text-[20px] text-gray-700 md:text-[30px]">
            Jakarta, Indonesia
          </p>
          <div className="w-6 h-4 flex flex-col border-[1px] border-gray-300 scale-0 peer-hover:scale-100 rounded-sm transition ease-in duration-200">
            <div className="w-full h-1/2 rounded-t-sm bg-red-600" />
            <div className="w-full h-1/2 rounded-b-sm bg-white" />
          </div>
        </motion.div>
        {/* Jumbo Texts */}
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.1 }}
          className="h-fit"
        >
          <h1 className="cursor-default text-[8.88vw] md:text-[6vw] lg:text-[4.2vw] leading-tight md:w-[80%] md:text-left text-right line-clamp-[10] font-semibold">
            A passionate developer crafting interactive designs and
            user-centered experiences, driven by creativity.
          </h1>
        </motion.div>
        {/* Arrow Button Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.6,
            type: "spring",
            delay: 0.3,
            bounce: 0.1,
          }}
          className="cursor-pointer self-end"
          onClick={() => scrollToID("about")}
        >
          <BiDownArrow className="fill-black opacity-90 w-8 h-8 cursor-pointer hover:scale-125 my-1 md:hidden hover:opacity-100 transition-all ease-in-out duration-300" />
        </motion.div>
      </div>
      {/* BOTTOM */}
      <div className="w-full h-fit lg:mt-5 mt-3 flex md:flex-row flex-col md:justify-between md:items-center items-center justify-end">
        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, type: "spring", delay: 0.2 }}
          className="md:my-2 flex space-x-[8px] md:space-x-[15px] lg:space-x-[20px] w-fit h-fit justify-end md:justify-start"
        >
          <Link
            href="https://twitter.com/msafdev"
            target="_blank"
            className="text-black opacity-70 hover:scale-110 hover:text-[#1DA1F2] hover:opacity-100 transition duration-300 ease-in-out"
          >
            <PiTwitterLogoBold className="md:w-6 md:h-6 w-5 h-5" />
          </Link>
          <Link
            href="https://www.fiverr.com/s/YBbdyq"
            target="_blank"
            className="text-black opacity-70 hover:scale-110 hover:text-[#1DA1F2] hover:opacity-100 transition duration-300 ease-in-out"
          >
            <TbBrandFiverr className="md:w-6 md:h-6 w-5 h-5" />
          </Link>
          <Link
            href="https://instagram.com/msalman_af"
            target="_blank"
            className="text-black opacity-70 hover:scale-110 hover:text-[#E4405F] hover:opacity-100 transition duration-300 ease-in-out"
          >
            <PiInstagramLogoBold className="md:w-6 md:h-6 w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/muhammadsalmanalfarisi"
            target="_blank"
            className="text-black opacity-70 hover:scale-110 hover:text-[#181717] hover:opacity-100 transition duration-300 ease-in-out"
          >
            <PiGithubLogoBold className="md:w-6 md:h-6 w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/muhammadsalmoon"
            target="_blank"
            className="text-black opacity-70 hover:scale-110 hover:text-[#0077B5] hover:opacity-100 transition duration-300 ease-in-out"
          >
            <PiLinkedinLogoBold className="md:w-6 md:h-6 w-5 h-5" />
          </Link>
        </motion.div>
        {/* Arrow Button */}
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, type: "spring", delay: 0.3 }}
          onClick={() => scrollToID("about")}
        >
          <BiDownArrow className="fill-black opacity-90 lg:w-10 lg:h-10 w-8 h-8 hidden md:block cursor-pointer hover:scale-125 hover:opacity-100 transition-all ease-in-out duration-300" />
        </motion.div>
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.6,
            type: "spring",
            delay: 0.4,
            bounce: 0.1,
          }}
          className="my-2 bg-green-200 w-fit h-fit md:px-5 px-3 py-2 rounded-full flex items-center space-x-2 cursor-pointer"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 pulsate" />
          {/* TODO: Make something functional when this status is clicked. */}
          <p className="text-[16px] md:text-[18px]">Available for work</p>
        </motion.div>
      </div>
    </div>
  );
}
