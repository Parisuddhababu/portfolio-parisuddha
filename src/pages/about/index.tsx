import { useEffect, useState } from "react";
import { FiCode, FiBook, FiUsers, FiCpu, FiLayout, FiLayers, FiVideo } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiJavascript } from "react-icons/si";
import ProfileCard from "./components/ProfileCard";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsList from "./components/SkillsList";
import WhatIDo from "./components/WhatIDo";
import skillsData from "./data/skills.json";
import experiencesData from "./data/experiences.json";

const iconMap: { [key: string]: React.ElementType } = {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  FiCode,
  FiBook,
  FiUsers,
  FiCpu,
  FiLayout,
  FiLayers,
  FiVideo
};

const skills = (skillsData as any[]).map((skill) => ({
  ...skill,
  icon: iconMap[skill.icon],
}));

const experiences = (experiencesData as any[]).map((exp) => ({
  ...exp,
  icon: iconMap[exp.icon],
}));

const About = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen pt-20 px-6 py-12 bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}> 
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent dark:from-gray-100 dark:via-blue-300 dark:to-blue-200">
              About Me
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed dark:text-gray-200">
          I use modern tech to create and share not just code, but inspiration — through tutorials,
          motivational content, and devotional messages that make a difference.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}> 
            <ProfileCard />
            <ExperienceTimeline experiences={experiences} />
          </div>
          <div className={`space-y-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}> 
            <SkillsList skills={skills} mounted={mounted} />
            <WhatIDo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
