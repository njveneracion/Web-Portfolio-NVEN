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
      className="fixed bottom-4 right-4 bg-gradient-to-r from-[#111827] via-[#0f172a] to-[#0c1015] 
      text-white p-4 rounded-full shadow-lg transition-all duration-300 
      hover:shadow-blue-500/50 hover:scale-110 dark:text-gray-100 opacity-60 hover:opacity-100"
      style={{ display: isVisible ? "block" : "none" }}>
      <MdKeyboardDoubleArrowUp
        onClick={scrollToTop}
        className="animate-bounce"
      />
    </button>
  );
};

export default BackToTop;
