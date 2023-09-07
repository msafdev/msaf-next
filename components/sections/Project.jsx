"use client";

// libraries
import { motion } from "framer-motion";
import { BiLogoMedium, BiRightArrowAlt } from "react-icons/bi";
import { SiNotion } from "react-icons/si";
import { TbFileText } from "react-icons/tb";

const projects = [
  {
    id: 1,
    title: "Moorbsday",
    description: "birthday letter",
  },
  {
    id: 2,
    title: "MSAF/ui",
    description: "free templates",
  },
  {
    id: 3,
    title: "Building",
    description: "it's a secret ;)",
  },
  {
    id: 4,
    title: "Side Projects",
    description: "side projects collection",
  },
];

export default function Project() {
  return (
    <motion.section
      initial={{ display: "none", opacity: 0 }}
      animate={{ display: "flex", opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.2 }}
      id="projects"
      className="flex flex-col w-full justify-center items-center overflow-hidden min-h-screen min-w-[300px]"
    >
      <div className="flex w-[90%] md:w-[80%] lg:w-[75%] h-full flex-col items-center justify-center">
        {/* Title */}
        <div className="w-full py-2 flex justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold">My Works</h1>
        </div>
        {/* Projects */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="cursor-default flex gap-2 w-full border-y-[1px] md:py-2 py-1 items-end md:items-start"
          >
            <code className="leading-tight">({index + 1})</code>
            <div className="flex flex-row w-full justify-between items-center gap-2 relative">
              <h2 className="md:text-2xl lg:text-3xl text-md font-medium leading-none">
                {project.title}
              </h2>
              <BiRightArrowAlt className="w-5 h-5 text-gray-800 cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out" />
              <h5 className="text-lg font-normal hidden lg:block text-gray-700">
                {project.description}
              </h5>
            </div>
          </div>
        ))}
        <div className="md:p-4 p-3 w-full flex justify-end gap-3">
          <a
            href=""
            className="w-fit h-6 md:h-8 rounded-full flex gap-1 items-center"
          >
            <p className="font-semibold">Blog</p>
            <TbFileText className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
