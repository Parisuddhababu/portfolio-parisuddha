import React from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 dark:bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Copyright */}
        <div className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} Parisuddha Babu. All rights reserved.
        </div>

        {/* Center: Version or Description */}
        <div className="text-xs text-center text-blue-200">
          Built with React + Vite + Tailwind CSS | Version 2.1.4
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-lg">
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400"
          >
            <FaYoutube />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  