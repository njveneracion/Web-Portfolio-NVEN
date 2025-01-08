import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNode,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML5", icon: FaHtml5, exp: "4 years" },
    { name: "CSS3", icon: FaCss3Alt, exp: "4 years" },
    { name: "JavaScript", icon: FaJs, exp: "2 years" },
    { name: "React", icon: FaReact, exp: "3 months" },
    { name: "Tailwind", icon: SiTailwindcss, exp: "3 months" },
    { name: "Git", icon: FaGitAlt, exp: "3 months" },
    { name: "Node.js", icon: FaNode, exp: "3 months" },
    { name: "Bootstrap", icon: FaBootstrap, exp: "1 year" },
    { name: "PHP", icon: FaPhp, exp: "1 year" },
    { name: "Express", icon: SiExpress, exp: "3 months" },
    { name: "MongoDB", icon: SiMongodb, exp: "3 months" },
    { name: "MySQL", icon: SiMysql, exp: "1 year" },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative bg-white 
    dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#0f172a] dark:to-[#0c1015]
    transition-all duration-300 overflow-hidden"
      id="skills">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-20 text-center">
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-xl">
              <motion.div
                className="flex flex-col items-center space-y-4"
                whileHover={{ y: -5 }}>
                <skill.icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {skill.name}
                  {skill.exp && (
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {" "}
                      ({skill.exp})
                    </span>
                  )}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
