import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  github: string;
  technologies: string[];
  featured: boolean;
}

const ProjectCard = ({ project, getTechIcon }: { project: Project; getTechIcon: (tech: string) => React.ElementType }) => (
  <div className="group bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500">
    <div className="relative h-48 overflow-hidden">
      <img
        src={project?.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    <div className="p-8">
      <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
      <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => {
          const Icon = getTechIcon(tech);
          return (
            <span
              key={tech}
              className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm"
            >
              <Icon className="text-lg" />
              {tech}
            </span>
          );
        })}
      </div>
      <div className="flex gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <FiExternalLink />
          Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
        >
          <FiGithub />
          Code
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard; 