import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
function App() {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width:500px)");
  //   setIsMobile(mediaQuery.matches);

  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };

  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  return (
    <main className="bg-gradient-to-tr from-black to-[#021458]  min-h-scree">
      <Navbar />
      <div className=" relative max-w-6xl mx-auto mt-10 px-3 ">
        <div>
          <p className="text-white">
            Hi, I'm <span className="text-pink-500">Elhadj</span>
          </p>
          <h1 className="text-4xl font-bold text-white">
            I Am Frontend Developer
          </h1>
          <p className="text-white max-w-md  mt-3">
            I'm a passionate developer build seemless website with good user
            experiance and I'm very intrested about 3D visuals.
          </p>
        </div>
        <div
          className=" md:h-[400px] h-[300px] focus:cursor-grabbing cursor-grab"
          // style={{ height: "400px" }}
        >
          <Hero isMobile={isMobile} />
        </div>
        <div className="absolute max-w-6xl mx-auto  sm:bottom-16 bottom-7 -translate-x-1/2 left-1/2 flex justify-center items-center">
          <a href="#about">
            <div className="w-[20px] h-[40px] flex justify-center items-start rounded-3xl p-1 border-2 border-slate-300">
              <motion.dev
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1.5 h-1.5 rounded-full bg-slate-300 mb-1"
              ></motion.dev>
            </div>
          </a>
        </div>
      </div>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default App;
