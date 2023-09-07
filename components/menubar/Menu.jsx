"use client";

// libraries
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// assets
import "./menu.css";
import Drawer from "../drawer/Drawer";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  const toggleDrawer = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("menu-open"); // Add CSS class to disable scrolling
    } else {
      document.body.classList.remove("menu-open"); // Remove CSS class to enable scrolling
    }

    return () => {
      document.body.classList.remove("menu-open"); // Make sure scrolling is re-enabled when the component unmounts
    };
  }, [isActive]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, type: "spring", bounce: 0.25 }}
        onClick={toggleDrawer}
        className="button w-10 h-10 bg-indigo-300 rounded-full z-20 cursor-pointer flex items-center justify-center fixed right-0 top-0 m-4"
      >
        <div className={`burger ${isActive ? "burgerActive" : ""}`} />
      </motion.div>
      <AnimatePresence mode="wait">
        {isActive && (
          <Drawer
            status={isActive}
            closeDrawer={toggleDrawer}
          />
        )}
      </AnimatePresence>
    </>
  );
}
