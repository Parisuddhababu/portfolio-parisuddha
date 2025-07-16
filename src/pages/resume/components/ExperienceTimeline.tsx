interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const ExperienceTimeline = ({ experience }: { experience: Experience[] }) => (
  <div className="space-y-8">
    {experience.map((exp) => (
      <div key={exp.title + exp.company} className="relative pl-6 sm:pl-8">
        <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
            <p className="text-white/80 text-sm mb-1">{exp.company} &bull; {exp.location}</p>
          </div>
          <span className="text-white/60 text-sm md:text-right mt-1 md:mt-0">{exp.period}</span>
        </div>
        <ul className="list-disc ml-4 sm:ml-6 mt-2 text-white/70 text-sm space-y-1">
          {exp.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default ExperienceTimeline; 