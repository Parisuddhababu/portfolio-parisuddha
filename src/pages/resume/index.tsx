import { useState, useEffect } from "react";
import { FiDownload, FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase, FaGithub as FaGithubIcon } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import skills from "./data/skills.json";
import experience from "./data/experience.json";
import education from "./data/education.json";
import projects from "./data/projects.json";
import SkillsList from "./components/SkillsList";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationList from "./components/EducationList";
import ResumeProjects from "./components/ResumeProjects";

const getSkillIcon = (name: string) => {
  const iconMap: { [key: string]: any } = {
    "React": FaReact,
    "TypeScript": SiTypescript,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": FaNodeJs,
    "MongoDB": SiMongodb,
    "Git": FaGithubIcon,
    "SQL": FaDatabase,
  };
  return iconMap[name] || FaReact;
};

const Resume = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen pt-20 px-6 py-12 bg-gradient-to-br from-blue-900 via-blue-950 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}> 
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent dark:from-gray-100 dark:via-blue-300 dark:to-blue-200">
              Resume
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 dark:text-gray-200">
            My professional journey, skills, and experience in web development.
          </p>
          <button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
          >
            <FiDownload className="text-xl" />
            Download PDF
          </button>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left Column - Contact & Skills */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <FiMail className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email</p>
                    <p className="text-white text-sm sm:text-base">parisuddhababu333@gmail.com</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <FiPhone className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Phone</p>
                    <p className="text-white text-sm sm:text-base">+91 7997657690</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <FiMapPin className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Location</p>
                    <p className="text-white text-sm sm:text-base">Andhra Pradesh,India</p>
                  </div>
                </div>
              </div>
              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href= ""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <FiYoutube />
                  </a>
                </div>
              </div>
            </div>
            {/* Skills */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
              <SkillsList skills={skills} getSkillIcon={getSkillIcon} />
            </div>
          </div>
          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-4 sm:p-6 md:p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
              <ExperienceTimeline experience={experience} />
            </div>
            {/* Education */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-4 sm:p-6 md:p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
              <EducationList education={education} />
            </div>
            {/* Projects */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-4 sm:p-6 md:p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
              <ResumeProjects projects={projects} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
