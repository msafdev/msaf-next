"use client";

// libraries
import { motion } from "framer-motion";
import { PiArrowRightThin } from "react-icons/pi";

// assets
import { menuSlide, slide } from "@/lib/anim";
import "./drawer.css";

const navLinks = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "Let's Talk", href: "contact" },
];

function Drawer({ status, closeDrawer }) {

  // Scroll to ID
  const scrollToID = (id) => {
    // Close the drawer by changing status to false
    closeDrawer();
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
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="drawer-body">
        <div className="nav">
            <div className="header">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-md text-gray-600">MSAF</span>dev
              </p>
            </div>
            {navLinks.map((data, index) => {
              return (
                <div key={index} className="flex flex-row-reverse items-center justify-start gap-3">
                  <motion.div
                    variants={slide}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    custom={index}
                    onClick={() => scrollToID(data.href)}
                    className="text-[8vw] cursor-pointer text-black z-[2] bg-[#FAFAFA] peer"
                  >
                    {data.title}
                  </motion.div>
                  <PiArrowRightThin className="w-6 h-6 translate-x-10 rotate-90 peer-hover:rotate-180 z-[1] fill-black peer-hover:-translate-x-0 transition-all duration-300 ease-in-out" />
                </div>
              );
            })}
        </div>
        <div className="footer">
          <code className="text-black">Copyright @ 2023 MSAF</code>
        </div>
      </div>
    </motion.div>
  );
}
export default Drawer;
