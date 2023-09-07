"use client";

// libraries
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

// assets
import Menu from "../menubar/Menu";

const navLinks = [
  { label: "About", path: "about" },
  { label: "Projects", path: "projects" },
  { label: "Let's Talk", path: "contact", icon: BsArrowUpRight },
];

export default function Navbar() {
  // Scroll to ID
  const scrollToID = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="relative py-4 h-full flex-[0.15] md:flex-[0.35] flex flex-row items-center justify-between">
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
        className="text-[28px] leading-[20px] cursor-pointer"
      >
        <span className="font-semibold">msaf</span>
        <br className="md:hidden" />
        dev
      </motion.p>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, type: "spring", bounce: 0.25 }}
        className="space-x-6 hidden lg:flex"
      >
        {navLinks.map((link, index) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div
              onClick={() => scrollToID(link.path)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="flex flex-row items-center peer">
                <div className="hover:text-[#18181b] mx-2">{link.label}</div>
                {link.icon && (
                  <div className="w-4 h-4">
                    <link.icon />
                  </div>
                )}
              </div>
              <div className="w-[0] h-[2px] bg-black rounded-full peer-hover:w-[90%] transition-all ease-in-out duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Mobile Navbar */}
      <div className="lg:hidden">
        {/* Hamburg Button */}
        <Menu />
      </div>
    </nav>
  );
}
