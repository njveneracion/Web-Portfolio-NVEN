import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificationData = [
  {
    id: 1,
    title: "IT Specialist: HTML and CSS",
    issuer: "Certiport",
    date: "December 05, 2024",
    image: "./image.png",
    credentialId: "udDd-XM3V",
    verifyLink: "https://verify.certiport.com/",
    skills: ["HTML", "CSS"],
  },
  {
    id: 2,
    title: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    date: "October 14, 2024",
    image: "./udemy.jpg",
    credentialId: "UC-77fb6731-9c7f-43a3-a181-825ce3ba6f76",
    verifyLink: "https://ude.my/UC-77fb6731-9c7f-43a3-a181-825ce3ba6f76",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Web3",
      "DApps",
    ],
  },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section
      className="min-h-screen relative bg-white 
    dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#0f172a] dark:to-[#0c1015]
    transition-all duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-20 text-center">
          Certifications and Courses
        </h2>

        <div className="space-y-6">
          {certificationData.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row bg-gradient-to-r from-gray-50 to-gray-100 
                  dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg 
                  transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => openModal(cert.image)}>
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full">
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2
                    hover:bg-opacity-75 transition-all">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
