import { React, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { motion, useScroll, useSpring } from "framer-motion";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { FaCoffee } from "react-icons/fa";
import GcashModal from "./components/GcashModal";

const styles = {
  progress: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 5,
    backgroundColor: "#2563eb",
    zIndex: 1000,
    transformOrigin: "left",
  },
};

const App = () => {
  const [isGcashModalOpen, setIsGcashModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div style={{ scaleX, ...styles.progress }} />
      <button
        onClick={() => setIsGcashModalOpen(true)}
        className="fixed bottom-6 right-4 flex items-center gap-2 px-4 py-2 
          bg-gradient-to-r from-amber-800 to-yellow-700
          hover:from-amber-900 hover:to-yellow-800
          rounded-full text-white shadow-lg z-50
          transition-all duration-200 transform hover:scale-105">
        <FaCoffee className="text-lg" />
        <span className="font-medium text-sm">Support my work!</span>
      </button>
      <GcashModal
        isOpen={isGcashModalOpen}
        onClose={() => setIsGcashModalOpen(false)}
      />
      <Header />
      <Hero />
      <Skills />
      <About />
      <Gallery />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
