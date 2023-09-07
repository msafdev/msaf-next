// components
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col w-full overflow-hidden min-h-screen px-[6%]"
    >
      <Navbar />
      <Hero />
    </section>
  );
}
