"use client";

// libraries
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ display: "none", opacity: 0 }}
      animate={{ display: "flex", opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.5 }}
      id="about"
      className="flex flex-col w-full justify-center items-center overflow-hidden min-h-screen px-[6%] py-[6vh]"
    >
      <div className="flex w-full h-full flex-col items-center justify-center">
        {/* About Section */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-2 relative">
          {/* About */}
          <div className="w-full flex flex-col lg:px-[8%]">
            <h1 className="font-semibold lg:text-5xl md:text-4xl text-2xl cursor-default md:py-3 py-2">
              Hi, I'm Salman 👋
            </h1>
            <h2 className="font-semibold lg:text-5xl md:text-4xl text-2xl cursor-default">
              I <span className="lg:text-outline lg:no-underline underline lg:hover:bg-pink-300">design</span>,{" "}
              <span className="lg:text-outline lg:no-underline underline lg:hover:bg-green-300">code</span>,{" "}
              <span className="lg:text-outline lg:no-underline underline lg:hover:bg-cyan-300">work</span>, and{" "}
              <span className="lg:text-outline lg:no-underline underline lg:hover:bg-orange-300">play</span>
            </h2>
            <p className="max-w-[800px] py-2 md:py-4 text-justify md:self-end lg:text-xl md:text-lg">
              I'm a website <span className="underline">frontend developer</span> and designer based in Jakarta,
              Indonesia. I love to create simple, beautiful, and functional websites.
              Currently finishing my bachelor's degree in Computer Engineering
              at <span className="underline">Universitas Diponegoro</span>.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
