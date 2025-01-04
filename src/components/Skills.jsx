import React from "react";
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

const Skills = () => {
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
    <section className="min-h-screen bg-white dark:bg-[#1a1d1e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 
                         hover:shadow-xl transform hover:-translate-y-1 
                         transition-all duration-300">
              <div className="flex flex-col items-center space-y-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
