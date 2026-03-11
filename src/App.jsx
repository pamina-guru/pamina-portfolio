import "./App.css";
import { ReactLenis } from "lenis/react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DynamicBackground from "./components/DynamicBackground";
import FixedSocialBar from "./components/FixedSocialBar";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-screen overflow-x-hidden text-white"
        >
          <DynamicBackground />
          <CursorGlow />
          <ScrollProgress />
          <FixedSocialBar />

          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Education />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </motion.div>
      </AnimatePresence>
    </ReactLenis>
  );
}

export default App;
