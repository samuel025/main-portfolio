import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Add technology icons

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
