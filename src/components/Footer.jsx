import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="relative bg-white 
    dark:bg-gradient-to-b dark:from-[#111827] dark:via-[#0f172a] dark:to-[#0c1015]
    transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/10 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Nelson Jay Veneracion
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              Aspiring Web Developer passionate about creating meaningful
              digital experiences.
            </p>

            <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
              <FaEnvelope className="text-blue-600 dark:text-blue-400" />
              <span>njsvenn@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
              <FaPhone className="text-blue-600 dark:text-blue-400" />
              <span>+63 951 340 8075</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
              <FaLocationDot className="text-blue-600 dark:text-blue-400" />
              <span>Nueva Ecija, Philippines</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Let's Connect
            </h4>
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="https://linkedin.com/in/njveneracion"
                target="_blank"
                rel="noopener noreferrer"
                className="group">
                <FaLinkedin className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform group-hover:scale-110" />
              </a>
              <a
                href="https://github.com/njveneracion"
                target="_blank"
                rel="noopener noreferrer"
                className="group">
                <FaGithub className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform group-hover:scale-110" />
              </a>
              <a
                href="https://facebook.com/njveneracionn"
                target="_blank"
                rel="noopener noreferrer"
                className="group">
                <FaFacebook className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800"></div>

        {/* Copyright */}
        <div className="pt-12">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Nelson Jay Veneracion. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
