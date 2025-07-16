import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const DashboardLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
