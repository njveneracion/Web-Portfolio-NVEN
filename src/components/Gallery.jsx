import React, { useState } from "react";
import "./Gallery.css";
import { motion, AnimatePresence } from "framer-motion";

const galleryData = [
  {
    id: 1,
    image: "./us.jpg",
    title: "Capstone Buddies",
    story:
      "This is a photo of my capstone group. As you can see, we did it!, We successfully completed our capstone project. It was a great experience working with these guys. We had a lot of fun and learned a lot from each other.",
  },
  {
    id: 2,
    image: "./messy-setup.jpg",
    title: "Messy Setup",
    story:
      "This is a photo of my messy setup. I know it's not the best setup, but it's where I get things done. This is where I code, design, and play games. I'm planning to upgrade it soon.",
  },
  {
    id: 3,
    image: "./gym-buddies.jpg",
    title: "Gym Buddies",
    story:
      "This is a photo of me and my gym buddies. We've been working out together for a few months now. It's been a great journey so far. We motivate each other to push harder and be better every day.",
  },
  {
    id: 4,
    image: "./unwinding.jpg",
    title: "Unwinding",
    story:
      "This is a photo of me unwinding after a long day of coding. I like to relax and watch my favorite TV shows or play games. It helps me clear my mind and recharge for the next day.",
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openStory = (item) => {
    setSelectedItem(item);
  };

  const closeStory = () => {
    setSelectedItem(null);
  };

  return (
    <div
      id="gallery"
      className="min-h-screen relative bg-white 
    dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#0f172a] dark:to-[#0c1015]
    transition-all duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className=" text-4xl font-bold text-gray-900 dark:text-white text-center mb-20">
          Gallery
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}>
          {galleryData.map((item) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer bg-gray-50 dark:bg-gray-800 
              rounded-lg overflow-hidden shadow-lg hover:shadow-xl 
              transition-all duration-300"
              onClick={() => setSelectedItem(item)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}>
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
                layoutId={`image-${item.id}`}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 
                transition-all duration-300 flex items-center justify-center">
                <p
                  className="text-white opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 text-lg font-semibold">
                  View Story
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm
              z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full
                shadow-2xl relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}>
                <motion.button
                  className="absolute top-4 right-4 text-gray-500 dark:text-gray-400
                  hover:text-gray-700 dark:hover:text-gray-200 text-2xl"
                  onClick={() => setSelectedItem(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  ×
                </motion.button>
                <motion.img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto rounded-lg mb-4"
                  layoutId={`image-${selectedItem.id}`}
                />
                <motion.h3
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}>
                  {selectedItem.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}>
                  {selectedItem.story}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
