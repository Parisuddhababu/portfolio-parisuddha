// ** React Imports
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const PageNotFound = () => {
  return (
    <div className="min-h-screen pt-20 px-6 py-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <FiHome className="text-xl group-hover:scale-110 transition-transform duration-300" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <FiArrowLeft className="text-xl group-hover:scale-110 transition-transform duration-300" />
              Go Back
            </button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex justify-center space-x-8 text-white/30"
          >
            <div className="text-center">
              <div className="text-2xl font-bold">404</div>
              <div className="text-sm">Error Code</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">✨</div>
              <div className="text-sm">Magic</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
