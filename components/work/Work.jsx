"use client";

// Libs
import { BiRightArrowAlt } from "react-icons/bi";

export default function Work({ index, title, description, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="cursor-pointer flex gap-2 w-full border-y-[1px] lg:py-5 md:py-4 py-3 items-end md:items-start"
    >
      <code className="leading-tight">({index + 1})</code>
      <div className="flex flex-row w-full justify-between items-center gap-2 relative">
        <h2 className="md:text-2xl lg:text-3xl text-md font-medium leading-none">
          {title}
        </h2>
        <BiRightArrowAlt className="w-5 h-5 text-gray-800 cursor-pointer hover:scale-150 transition-all duration-300 ease-in-out lg:hidden" />
        <h5 className="text-sm font-normal hidden lg:block text-gray-700">
          {description}
        </h5>
      </div>
    </div>
  );
}
