import React from "react";
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div style={{ scaleX, ...styles.progress }} />
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
