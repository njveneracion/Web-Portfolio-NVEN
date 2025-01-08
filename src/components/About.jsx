import React from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaCode, FaMusic, FaBook } from "react-icons/fa";
import { PiTelevisionSimpleFill } from "react-icons/pi";

const HobbyCard = ({ icon, title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center transition-colors duration-300">
    <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
  </motion.div>
);

const TimelineItem = ({ date, title, description }) => (
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full" />
      <div className="w-1 h-full bg-blue-600 dark:bg-blue-400" />
    </div>
    <div className="pb-8">
      <span className="text-blue-600 dark:text-blue-400 font-semibold">
        {date}
      </span>
      <h3 className="text-xl font-bold mt-1 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div
      className="min-h-screen relative bg-white 
    dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#0f172a] dark:to-[#0c1015]
    transition-all duration-300 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto text-center pt-20">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          My Story
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          A passionate developer with a love for creating and learning
        </p>
      </motion.div>

      {/* Personal Journey */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-4xl mx-auto my-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          My Journey
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          From my early days of tinkering with computers to pursuing my passion
          in software development, every step has shaped who I am today. I
          believe in continuous learning and pushing boundaries to create
          meaningful solutions.
        </p>
      </motion.div>

      {/* Hobbies Section */}
      <motion.div className="max-w-4xl mx-auto my-20">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          What I Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <HobbyCard icon={<FaGamepad />} title="Gaming" />
          <HobbyCard icon={<FaCode />} title="Coding" />
          <HobbyCard icon={<FaMusic />} title="Music" />
          <HobbyCard icon={<PiTelevisionSimpleFill />} title="Watch Anime" />
        </div>
      </motion.div>

      {/* Capstone Journey */}
      <motion.div className="max-w-4xl mx-auto pb-20">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          Capstone Journey
        </h2>
        <div className="space-y-8">
          <TimelineItem
            date="2023"
            title="Project Inception"
            description="Started brainstorming and planning the capstone project"
          />
          <TimelineItem
            date="2023"
            title="Development Phase"
            description="Implemented core features and functionality"
          />
          <TimelineItem
            date="2024"
            title="Project Completion"
            description="Successfully delivered and presented the final project"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
