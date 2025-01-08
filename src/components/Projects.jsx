import { motion } from "framer-motion";
import React from "react";

const projectData = [
  {
    id: 1,
    title:
      "Learning Management System for Philippine Academy of Technical Studies with CMS (Content Management System)",
    description:
      "A web-based platform that allows students to access learning materials, take quizzes, and view their grades. It also allows teachers to manage courses, quizzes, and student grades.",
    image: "./Screenshot 2025-01-03 011552.png",
    github: "https://github.com/njveneracion/Online-Learning-Platform-with-CMS",
    demo: "https://drive.google.com/file/d/1kzQXqv58Mi0xieqdL6hapLrvU6RRpebK/view?usp=sharing",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    note: "Note: I don't have a live demo for this project, so I uploaded a video walkthrough instead.",
  },
  // Add more projects here
  {
    id: 2,
    title: "doThis: A Task Manager App with JWT Authentication",
    description:
      " A task manager app that allows users to create, read, update, and delete tasks. It also has user authentication using JWT.",
    image: "./doThis.PNG",
    github: "https://github.com/njveneracion/TaskManagerApp-MERN.git",
    demo: "",
    tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
    note: "Note: I don't have a live demo for this project, so I uploaded a video walkthrough instead.",
  },
  {
    id: 3,
    title: "VFood: A Food Ordering System",
    description:
      " A food ordering system that allows customers to order food online. It also allows restaurant owners to manage their menu and orders.",
    image: "./food-ordering-system.PNG",
    github: "https://github.com/njveneracion/food-cart-business-website.git",
    demo: "",
    tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
    ongoing: true,
  },
];

const techColors = {
  HTML: "bg-orange-500 dark:bg-orange-600",
  CSS: "bg-blue-500 dark:bg-blue-600",
  JavaScript: "bg-yellow-500 dark:bg-yellow-600",
  React: "bg-cyan-500 dark:bg-cyan-600",
  Bootstrap: "bg-purple-500 dark:bg-purple-600",
  PHP: "bg-indigo-500 dark:bg-indigo-600",
  MySQL: "bg-blue-700 dark:bg-blue-800",
  MongoDB: "bg-green-600 dark:bg-green-700",
  NodeJS: "bg-green-500 dark:bg-green-600",
  ExpressJS: "bg-gray-500 dark:bg-gray-600",
  ReactJS: "bg-cyan-500 dark:bg-cyan-600",
};

const Projects = () => {
  return (
    <section
      className="min-h-screen relative bg-white 
    dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#0f172a] dark:to-[#0c1015]
    transition-all duration-300 overflow-hidden"
      id="projects">
      {/* Add subtle pattern overlay */}
      <div className="absolute inset-0 dark:bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Existing content with enhanced container background */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-20 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="bg-gray-50/90 backdrop-blur-sm 
            dark:bg-gray-800/90 rounded-xl overflow-hidden 
            shadow-lg hover:shadow-xl transition-all duration-300
            dark:border dark:border-gray-700/50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 ${
                        techColors[tag] || "bg-gray-500 dark:bg-gray-600"
                      } 
                    text-white rounded-full text-sm transition-colors duration-300`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mb-3">
                  {project.note && (
                    <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                        {project.note}
                      </p>
                    </div>
                  )}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 ${
                      project.ongoing
                        ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                        : "bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600"
                    } text-white rounded-lg transition-colors`}
                    onClick={
                      project.ongoing ? (e) => e.preventDefault() : undefined
                    }>
                    {project.ongoing
                      ? "Coming Soon"
                      : project.note
                      ? "Video Walkthrough"
                      : "Live Demo"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
