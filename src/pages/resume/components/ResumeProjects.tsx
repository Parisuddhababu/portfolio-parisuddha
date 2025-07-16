interface ResumeProject {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ResumeProjects = ({ projects }: { projects: ResumeProject[] }) => (
  <div className="space-y-8">
    {projects.map((project) => (
      <div key={project.title} className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-4 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm md:text-right mt-1 md:mt-0"
          >
            View Code
          </a>
        </div>
        <p className="text-white/80 text-sm mb-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default ResumeProjects; 