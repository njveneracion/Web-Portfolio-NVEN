import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import GcashModal from "./GcashModal";

const styles = {
  heroImg: {
    filter: "grayscale(80%)",
    transition: "all 0.5s ease",
    "&:hover": {
      filter: "grayscale(0%)",
    },
  },
};

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const TypewriterText = ({ text }) => {
  const [key, setKey] = useState(0);
  const characters = Array.from(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setKey((prev) => prev + 1); // Reset animation
    }, text.length * 100 + 2000); // Wait for typing + 2s pause

    return () => clearTimeout(timer);
  }, [key, text]);

  return (
    <motion.span
      key={key}
      className="text-blue-600 dark:text-blue-400 inline-block relative"
      initial={{ opacity: 1 }}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}-${key}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.1,
            ease: "easeIn",
          }}>
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
        }}></motion.span>
    </motion.span>
  );
};

const Hero = () => {
  const [isGcashOpen, setIsGcashOpen] = useState(false);
  return (
    <section id="home">
      <motion.section
        initial="initial"
        animate="animate"
        className="min-h-screen relative bg-white 
    dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#0f172a] dark:to-[#0c1015]
    transition-all duration-300 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <motion.h1
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
                Hey, I'm <TypewriterText text="Nelson Jay Veneracion" />
              </motion.h1>

              <motion.h2
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Aspiring Web Developer
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                I’m a 4th-year student and aspiring web developer with a passion
                for crafting responsive, visually appealing, and functional
                websites.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-6">
                <a href="./resume.pdf">
                  <button
                    className="px-6 py-3 border-2 border-gray-900 dark:border-gray-100 
                               text-gray-900 dark:text-gray-100 rounded-lg 
                               hover:bg-gray-900 hover:text-white
                               dark:hover:bg-gray-100 dark:hover:text-gray-900 
                               transition-colors">
                    Download CV
                  </button>
                </a>
              </motion.div>

              {/* Add GcashModal inside Hero section */}
              <GcashModal
                isOpen={isGcashOpen}
                onClose={() => setIsGcashOpen(false)}
              />
            </div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="group relative flex justify-center items-center w-full 
                          rounded-2xl overflow-hidden
                          before:absolute before:inset-0 
                          before:p-[2px] before:rounded-2xl 
                          before:bg-gradient-to-r 
                          before:from-blue-500 before:via-transparent before:to-blue-500
                          before:animate-border
                          before:bg-[length:200%_auto]"
              style={{
                padding: "2px",
              }}>
              <div className="relative z-10 w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex justify-center items-center p-10">
                <img
                  src="./dp2.jpg"
                  alt="Profile"
                  className="w-[300px] h-[300px] lg:w-[490px] lg:h-[540px] 
                  object-cover rounded-3xl filter grayscale  transition-all duration-500 ease-in-out 
                 "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Hero;
