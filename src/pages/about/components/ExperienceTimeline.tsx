interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ElementType;
}

const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
    {experiences.map((exp, index) => (
      <div
        key={index}
        className="bg-white/10 rounded-2xl border border-white/20 p-6 transition-all duration-700 hover:scale-[1.02]"
      >
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
            <exp.icon className="text-white text-xl" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
            <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
            <p className="text-white/70 text-sm mb-2">{exp.period}</p>
            <p className="text-white/80">{exp.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ExperienceTimeline; 