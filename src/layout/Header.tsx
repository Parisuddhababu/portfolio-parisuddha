import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  mobileMenu: boolean;
  setMobileMenu: (val: boolean) => void;
}

const Navbar: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  mobileMenu,
  setMobileMenu
}) => {
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMobileMenu(!mobileMenu);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold transition-transform duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Parisuddha.dev
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <li 
                key={item.name}
                className="relative px-3 py-2 text-sm font-medium transition-all duration-300"
              >
                <Link
                  to={item.path}
                  className={`transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-white after:absolute after:inset-0 after:bg-white/10 after:rounded-lg after:-z-10 after:transition-all after:duration-300"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* Dark Mode Toggle */}
            <li>
              <button
                onClick={toggleDarkMode}
                className="w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 hover:rotate-180"
              >
                {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              {darkMode ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
            </button>
            <button
              onClick={toggleMenu}
              className="w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              {mobileMenu ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden mt-4 overflow-hidden animate-fade-in">
            <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl border border-white/10 p-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenu(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
