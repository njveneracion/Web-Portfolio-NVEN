import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const GcashModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50">
            <motion.div
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
              onClick={onClose}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl
                        w-full mx-auto overflow-y-auto 
                        max-h-[90vh] p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl font-bold dark:text-white">
                    Support My Work
                  </motion.h2>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 
                           rounded-full transition-colors">
                    <FaTimes className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </motion.button>
                </div>

                <motion.div
                  className="space-y-4 sm:space-y-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}>
                  <div className="flex justify-center p-3">
                    <div className="w-32 h-32 sm:w-48 sm:h-48">
                      <img
                        src="./gcash.jpg"
                        alt="GCash QR Code"
                        className="w-full h-full object-contain rounded-lg 
                     border-3 border-blue-500 dark:border-blue-400 
                     transition-transform hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3
                      className="font-semibold text-gray-900 dark:text-gray-100 
                      text-base sm:text-lg mb-3">
                      GCash Details
                    </h3>
                    <div className="space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        <span className="text-gray-600 dark:text-gray-400">
                          Name:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          Nelson Jay Veneracion
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        <span className="text-gray-600 dark:text-gray-400">
                          Number:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          0951 340 8075
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Thank you for supporting my work! ☕️
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Scan the QR code or use the details above to send your
                      support
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GcashModal;
