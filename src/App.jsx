import "./App.css";
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

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <DynamicBackground />
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
    </div>
  );
}

export default App;
