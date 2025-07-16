interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string;
}

const EducationList = ({ education }: { education: Education[] }) => (
  <div className="space-y-8">
    {education.map((edu) => (
      <div key={edu.degree + edu.school} className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-4 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
            <p className="text-white/80 text-sm mb-1">{edu.school} &bull; {edu.location}</p>
          </div>
          <span className="text-white/60 text-sm md:text-right mt-1 md:mt-0">{edu.period}</span>
        </div>
        <p className="text-white/70 text-sm">{edu.description}</p>
      </div>
    ))}
  </div>
);

export default EducationList; 