import { useState, useEffect } from "react";
import ProjectFilters from "./components/ProjectFilters";
import ProjectList from "./components/ProjectList";
import ProjectCard from "./components/ProjectCard";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import projects from "./data/projects.json";
import categories from "./data/categories.json";

const Projects = () => {
  const [active, setActive] = useState("All");
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      "React": FaReact,
      "Next.js": SiNextdotjs,
      "TypeScript": SiTypescript,
      "Tailwind CSS": SiTailwindcss,
      "Node.js": FaNodeJs,
      "MongoDB": SiMongodb,
    };
    return iconMap[tech] || FaReact;
  };

  return (
    <div className="min-h-screen pt-20 px-6 py-12 bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}> 
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent dark:from-gray-100 dark:via-blue-300 dark:to-blue-200">
              Projects
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed dark:text-gray-200">
            Explore my latest work and creative solutions. Each project represents a unique challenge 
            and showcases different aspects of modern web development.
          </p>
        </div>

        <ProjectFilters categories={categories} active={active} setActive={setActive} />

        {active === "All" && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter((p) => p.featured).map((project) => (
                <div key={project.title} className="relative">
                  <ProjectCard project={project} getTechIcon={getTechIcon} />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active !== "All" && (
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {active} Projects
          </h2>
        )}

        <ProjectList
          projects={filtered.filter((p) => !p.featured || active !== "All")}
          getTechIcon={getTechIcon}
        />
      </div>
    </div>
  );
};

export default Projects;
