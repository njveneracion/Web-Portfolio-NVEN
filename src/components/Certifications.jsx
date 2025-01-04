import React from "react";
import { motion } from "framer-motion";

const certificationData = [
  {
    id: 1,
    title: "IT Specialist: HTML and CSS",
    issuer: "Certiport",
    date: "December 05, 2024",
    image: "/public/image.png",
    credentialId: "udDd-XM3V",
    verifyLink: "https://verify.certiport.com/",
    skills: ["HTML", "CSS"],
  },
  // Add more certifications here
];

const Certifications = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-[#1a1d1e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Certifications
        </h2>

        <div className="space-y-6">
          {certificationData.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row bg-gradient-to-r from-gray-50 to-gray-100 
                  dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg 
                  transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div
                className="w-full md:w-1/3 p-6 flex items-center justify-center 
                  bg-blue-50 dark:bg-gray-800">
                <div className="rounded-full p-4 bg-blue-100 dark:bg-gray-700">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-contain transition-transform duration-300 
      hover:scale-105"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <span
                    className="text-sm font-medium text-gray-500 dark:text-gray-400 
                      bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 
                          bg-blue-100 dark:bg-gray-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 
                      dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Verify Certificate
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
