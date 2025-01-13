import { React, useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-4 
    bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
    hover:from-blue-600 hover:via-blue-700 hover:to-blue-800
    text-white p-4 rounded-full shadow-lg transition-all duration-300 
    hover:shadow-blue-500/50 hover:scale-110 
    dark:text-gray-100 opacity-60 hover:opacity-100
    animate-gradient bg-[length:200%_200%]"
      style={{ display: isVisible ? "block" : "none" }}>
      <MdKeyboardDoubleArrowUp className="animate-bounce" />
    </button>
  );
};

export default BackToTop;
