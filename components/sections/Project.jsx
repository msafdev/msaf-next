"use client";

// libraries
import { motion } from "framer-motion";
import { BiRightArrowAlt } from "react-icons/bi";
import { TbFileText } from "react-icons/tb";
import { useState } from "react";

// components
import Work from "../work/Work";
import Modal from "../work/Modal";

// assets
import Dribble from "../../public/images/dribbble.png";
import Moorbsday from "../../public/images/moorbsday.jpeg";
import Shadcn from "../../public/images/shadcn.jpg";
import Tailwind from "../../public/images/tailwind.jpg";

const projects = [
  {
    id: 1,
    title: "Moorbsday",
    description: "birthday letter",
    image: Moorbsday,
  },
  {
    id: 2,
    title: "MSAF/ui",
    description: "free templates",
    image: Shadcn,
  },
  {
    id: 3,
    title: "Building",
    description: "it's a secret ;)",
    image: Dribble,
  },
  {
    id: 4,
    title: "Side Projects",
    description: "side projects collection",
    image: Tailwind,
  },
];

export default function Project() {
  const [modal, setModal] = useState({ active: false, index: 0 });

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
          <Work
            index={index}
            title={project.title}
            description={project.description}
            key={index}
            setModal={setModal}
          />
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
      <Modal modal={modal} projects={projects} />
    </motion.section>
  );
}
