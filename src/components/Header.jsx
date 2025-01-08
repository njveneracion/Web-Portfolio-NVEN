import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "#home" },
    { title: "Skills", href: "#skills" },
    { title: "About", href: "#about" },
    { title: "Gallery", href: "#gallery" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

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
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#0f172a] dark:to-[#0c1015] transition-all duration-300 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center ">
          <div className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            njveneracion
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {item.title}
              </a>
            ))}
          </nav>

          {/* Social Icons and Dark Mode Toggle */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="https://linkedin.com/in/njveneracion"
                target="_blank"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/njveneracion"
                target="_blank"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <FaGithub size={24} />
              </a>
              <a
                href="https://facebook.com/njveneracionn"
                target="_blank"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                <FaFacebook size={24} />
              </a>
            </div>

            <button
              onClick={toggleDarkMode}
              className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 border p-1 rounded-full">
              {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </button>

            {/* Hamburger Menu */}
            <button
              className="md:hidden flex flex-col space-y-1.5"
              onClick={() => setIsOpen(!isOpen)}>
              <motion.span
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-400 block transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-400 block transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-600 dark:bg-gray-400 block transition-all duration-300"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4">
              <nav className="flex flex-col space-y-4 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}>
                    {item.title}
                  </a>
                ))}
                <div className="flex space-x-6 pt-4">
                  <a
                    href="https://linkedin.com/in/njveneracion"
                    target="_blank"
                    className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/njveneracion"
                    target="_blank"
                    className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://facebook.com/njveneracionn"
                    target="_blank"
                    className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <FaFacebook size={24} />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
