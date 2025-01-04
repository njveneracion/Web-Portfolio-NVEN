import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-[#1a1d1e] backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            njveneracion
          </div>

          {/* Social Icons and Dark Mode Toggle */}
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com/in/njveneracion"
              target="_blank"
              className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform group-hover:scale-110">
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/njveneracion"
              target="_blank"
              className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform group-hover:scale-110">
              <FaGithub size={24} />
            </a>
            <a
              href="https://facebook.com/njveneracionn"
              target="_blank"
              className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform group-hover:scale-110">
              <FaFacebook size={24} />
            </a>

            <button
              onClick={toggleDarkMode}
              className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform group-hover:scale-110 border p-1 rounded-full ">
              {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
