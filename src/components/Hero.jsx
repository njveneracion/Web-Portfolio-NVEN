import React from "react";

const styles = {
  heroImg: {
    filter: "grayscale(80%)",
    transition: "all 0.5s ease",
    "&:hover": {
      filter: "grayscale(0%)",
    },
  },
};

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-white dark:bg-[#1a1d1e] transition-colors duration-300 pt-10"
      id="hero">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Hey, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Nelson Jay Veneracion
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Aspiring Web Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I’m a 4th-year student and aspiring web developer with a passion
              for crafting responsive, visually appealing, and functional
              websites.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 
                               text-white rounded-lg transition-colors 
                               dark:bg-blue-500 dark:hover:bg-blue-600">
                Contact Me
              </button>
              <button
                className="px-6 py-3 border-2 border-gray-900 dark:border-gray-100 
                               text-gray-900 dark:text-gray-100 rounded-lg 
                               hover:bg-gray-900 hover:text-white
                               dark:hover:bg-gray-100 dark:hover:text-gray-900 
                               transition-colors">
                Download CV
              </button>
            </div>
          </div>

          <div
            className="group relative flex justify-center items-center w-full 
            hover:shadow-2xl transition-all duration-500 ease-in-out 
            bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/10
            rounded-2xl overflow-hidden">
            {" "}
            {/* Added rounded-2xl */}
            <div
              className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 rounded-2xl"></div>
            <img
              src="/public/icon.png"
              alt="Profile"
              className="w-[300px] h-[300px] lg:w-[490px] lg:h-[540px] 
             object-contain z-10 hover:scale-105 transition-transform 
             duration-500 ease-in-out rounded-2xl" /* Added rounded-2xl */
              style={styles.heroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
