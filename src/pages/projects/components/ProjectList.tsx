import ProjectCard from "./ProjectCard";

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

const ProjectList = ({
  projects,
  getTechIcon,
}: {
  projects: Project[];
  getTechIcon: (tech: string) => React.ElementType;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} getTechIcon={getTechIcon} />
    ))}
  </div>
);

export default ProjectList; 