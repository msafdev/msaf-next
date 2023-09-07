// assets
import Image from "next/image";

// sections
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";
import Footer from "@/components/sections/Footer";

// libraries
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Page() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center">
      <Home />
      <About />
      <Project />
      <Footer />
    </main>
  );
}
