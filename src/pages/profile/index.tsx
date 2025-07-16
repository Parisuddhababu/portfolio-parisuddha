import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Home = () => {
  const floatingIcons = [
    { icon: FaReact, delay: 0, x: -20, y: -10 },
    { icon: SiTypescript, delay: 0.5, x: 20, y: -15 },
    { icon: SiTailwindcss, delay: 1, x: -15, y: 15 },
    { icon: SiNextdotjs, delay: 1.5, x: 25, y: 10 },
    { icon: FaNodeJs, delay: 2, x: -25, y: -5 },
    { icon: FaDatabase, delay: 2.5, x: 30, y: -20 },
  ];

  // For simple mount animation
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Tech Icons - Hidden on mobile */}
      <div className="hidden md:block">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute text-white/20 text-4xl transition-transform duration-1000 ease-in-out ${mounted ? 'opacity-80 scale-100' : 'opacity-0 scale-75'}`}
            style={{
              left: `${50 + item.x}%`,
              top: `${30 + item.y}%`,
              transitionDelay: `${item.delay}s`,
            }}
          >
            <item.icon />
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        {/* Main Content */}
        <div className={`text-center max-w-4xl mx-auto w-full transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Profile Image */}
          <div className={`relative mb-6 sm:mb-8 transition-all duration-700 ${mounted ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="/public/image.jpeg"
                  alt="Parisuddha"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/public/image.jpeg";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 px-4 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent dark:from-gray-100 dark:via-blue-300 dark:to-blue-200 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Parisuddha Babu
          </h1>

          <div className={`mb-4 sm:mb-6 px-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 sm:px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white/90 text-sm sm:text-lg md:text-xl font-medium">
              Software Developer & Content Creator
            </span>
          </div>

          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 dark:text-gray-200 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           I design responsive websites using modern tech and share web development tutorials, motivational talks on YouTube.
          </p>

          {/* Stats Card */}
          <div className={`mb-6 sm:mb-8 px-4 transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="bg-white/10 rounded-2xl border border-white/20 p-4 sm:p-6 inline-block w-full max-w-md">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">2K+</div>
                  <div className="text-white/70 text-xs sm:text-sm">YouTube Subscribers</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
                  <div className="text-white/70 text-xs sm:text-sm">Projects Completed</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">2.5+</div>
                  <div className="text-white/70 text-xs sm:text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              to="https://youtube.com/@singerparisuddharaju?si=2y7m6NcT7u3RVHcl"
                target="_blank"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiYoutube className="text-lg sm:text-xl" />
                Watch My Videos
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              to="/contact"
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center gap-2">
                <FiMail className="text-lg sm:text-xl" />
                Get In Touch
              </span>
            </Link>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-4 sm:space-x-6 px-4 transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            {[
              { icon: FiGithub, href: "https://github.com/Parisuddhababu/portfolio-parisuddha", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/parisuddha-babu-pedapudi-a642b8237", label: "LinkedIn" },
              { icon: FiYoutube, href: "https://youtube.com/@singerparisuddharaju?si=2y7m6NcT7u3RVHcl", label: "youtube" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="text-lg sm:text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
