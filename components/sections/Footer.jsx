"use client";

// libraries
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight, HiArrowRight } from "react-icons/hi";

export default function Footer() {
  // Scroll to ID
  const scrollToID = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <motion.section
      initial={{ display: "none", opacity: 0 }}
      animate={{ display: "flex", opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.5 }}
      id="about"
      className="flex flex-col w-full cursor-default justify-center items-center overflow-hidden h-full border-t-[2px] border-b-0 border-black"
    >
      {/* Top */}
      <div className="flex-1 text-black w-full px-[12px] py-[20px] md:py-[48px] md:px-[6%] flex md:flex-row flex-col gap-2 md:gap-10 items-center">
        <div className="w-full md:w-fit text-left">
          <p className="flex items-center whitespace-nowrap md:text-base text-sm">
            MORE <HiOutlineArrowNarrowRight className="w-4 h-4 ml-2" />
          </p>
        </div>
        <div className="flex w-full items-center">
          <div className="flex flex-col mr-auto">
            <div className="text-2xl md:text-4xl peer">Contact Me</div>
            <div className="w-[80%] h-[3px] bg-yellow-200 peer-hover:w-full transition-all duration-300 ease-in-out" />
          </div>
          <div className="w-12 h-12 md:w-20 md:h-20 p-4 md:p-6 cursor-pointer bg-yellow-300 rounded-full flex items-center justify-center">
            <HiArrowRight className="w-full h-auto hover:-rotate-45 transition-all duration-300 ease-in-out" />
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex-1 flex flex-col md:flex-row bg-black text-white w-full min-h-[300px] gap-2 md:gap-[3%] px-[12px] py-[20px] md:py-[48px] md:px-[6%] md:justify-between md:text-right">
        <div className="md:text-xl text-lg font-semibold w-full text-left">
          MISCELLANEOUS
        </div>
        <div className="font-normal w-full flex flex-col justify-between">
          <p className="text-sm">FIND ME</p>
          <div className="py-2 md:py-0 cursor-text">
            <p className="text-xs">+62 878 8234 0660</p>
            <p className="text-xs">
              Kebon Sirih Timur St., RT 05, RW 05, Menteng, Central Jakarta
            </p>
            <p className="text-xs">salmanalfarisi261002@gmail.com</p>
          </div>
          <a className="cursor-pointer text-xs underline underline-offset-4">
            SEE ON MAP
          </a>
        </div>
        <div className="font-normal min-w-[150px] flex flex-col justify-between">
          <p className="text-sm">LINKS</p>
          <div className="py-2 md:py-0 flex md:flex-col justify-between">
            <p className="text-xs underline underline-offset-4 cursor-pointer">
              portfolio
            </p>
            <p className="text-xs underline underline-offset-4 cursor-pointer">
              steam
            </p>
            <p className="text-xs underline underline-offset-4 cursor-pointer">
              spotify
            </p>
            <p className="text-xs underline underline-offset-4 cursor-pointer">
              coffee
            </p>
          </div>
          <p
            onClick={() => scrollToID("home")}
            className="text-[12px] my-2 md:my-0 cursor-pointer text-black bg-white flex w-fit md:w-full px-3 py-2 md:py-1 text-center justify-center font-semibold"
          >
            BACK TO TOP
          </p>
        </div>
      </div>
    </motion.section>
  );
}
