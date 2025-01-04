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
    demo: "/LMS Video Walkthrough.mp4",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    note: "Note: I don't have a live demo for this project, so I uploaded a video walkthrough instead.",
  },
  // Add more projects here
  {
    id: 2,
    title: "Ongoing Project",
    description: "",
    image: "",
    github: "",
    demo: "",
    tags: ["", "", "", ""],
  },
  {
    id: 3,
    title: "Ongoing Project",
    description: "",
    image: "",
    github: "",
    demo: "",
    tags: ["", "", "", ""],
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
  TypeScript: "bg-blue-600 dark:bg-blue-700",
  Python: "bg-yellow-600 dark:bg-yellow-700",
  Java: "bg-red-500 dark:bg-red-600",
};

const Projects = () => {
  return (
    <section
      className="min-h-screen bg-white dark:bg-[#1a1d1e] transition-colors duration-300"
      id="projects">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-colors duration-300">
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
                    className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                    {project.note ? "Video Walkthrough" : "Live Demo"}
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
