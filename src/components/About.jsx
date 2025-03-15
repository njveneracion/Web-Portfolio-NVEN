import React from "react";
import { motion } from "framer-motion";
import {
  FaGamepad,
  FaCode,
  FaMusic,
  FaLightbulb,
  FaRocket,
  FaUserGraduate,
} from "react-icons/fa";
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
    transition-all duration-300 overflow-hidden"
      id="about">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto my-20 px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img
              src="UI Developer.gif" // Add your photo here
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Journey as an Aspiring Software Engineer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Hi, I'm NJ, a 4th-year BSIT student passionate about creating
              meaningful software solutions.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div className="max-w-4xl mx-auto my-20">
        <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg dark:bg-gray-800/50">
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
              {/* Introduction */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  The Beginning
                </h3>
                <p className="mb-4">
                  Life as a student has always been a mix of hope and hardship,
                  but the dream of becoming a software engineer has kept me
                  moving forward.
                </p>
              </section>

              {/* Early Struggles */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Early Challenges
                </h3>
                <p className="mb-4">
                  Growing up, I wasn't the smartest kid in class. I struggled
                  with math, logic, and even basic programming. While others
                  seemed to grasp concepts effortlessly, I spent sleepless
                  nights staring at code that wouldn't run. I questioned myself
                  constantly, "Am I even cut out for this?"
                </p>
                <p className="mb-4">The answer wasn't always clear.</p>
              </section>

              {/* The Journey */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  The Journey
                </h3>
                <p className="mb-4">
                  In my first, second, and even the early part of my third year,
                  I regretfully admit that I wasn't focused on truly learning. I
                  just wanted to survive the classes, pass the exams, and move
                  on. I didn't take the time to understand the foundations or
                  appreciate the skills we were being taught. It was all about
                  getting by, not growing.
                </p>
              </section>

              {/* The Turning Point */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  The Turning Point
                </h3>
                <p className="mb-4">
                  But in the second semester of my third year, everything
                  changed when our capstone project began. It was a wake-up
                  call. I realized how unprepared I was and how much time I had
                  wasted in the previous semesters. I felt a deep sense of
                  regret. I thought about how much further I could have been if
                  only I had taken things seriously from the start.
                </p>
                <p className="mb-4">
                  That regret became my fuel. For the first time, I truly gave
                  it my all. I poured my energy into learning, researching, and
                  coding. I grinded like never before, watching tutorials,
                  reading documentation, and practicing late into the night. It
                  wasn't easy, but it was worth it. I began to feel the joy of
                  creating something meaningful and the pride that came with
                  every small victory.
                </p>
              </section>

              {/* Current Status */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Where I Am Now
                </h3>
                <p className="mb-4">
                  Now, I have one last semester dedicated to my On-the-Job
                  Training (OJT) and soon to be a software engineer. This is my
                  last chance to prove to myself that I'm ready for the real
                  world.
                </p>
                <p className="mb-4">
                  The journey hasn't been easy, and I know the road ahead will
                  have its challenges. But I've learned to embrace the grind, to
                  take pride in the process, and to believe in my ability to
                  grow.
                </p>
                <p className="mb-4">
                  For now, I'll keep coding, keep learning, and keep believing.
                </p>
              </section>

              {/* Closing Message */}
              <section className="mb-8">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                  To anyone reading this who feels like they've wasted time or
                  aren't good enough: It's never too late to start trying. You
                  can turn things around. It's not about how you start; it's
                  about how you finish.
                </blockquote>
                <p className="text-right italic mt-6">
                  -NJ
                </p>
              </section>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default About;
