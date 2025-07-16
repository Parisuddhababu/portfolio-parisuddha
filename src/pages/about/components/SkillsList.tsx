interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  level: number;
}

const SkillsList = ({ skills, mounted }: { skills: Skill[]; mounted: boolean }) => (
  <div className="space-y-8 transition-all duration-700">
    <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
    <div className="grid gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-white/10 rounded-2xl border border-white/20 p-6 transition-all duration-700 hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                <skill.icon className="text-white text-lg" />
              </div>
              <span className="text-white font-medium">{skill.name}</span>
            </div>
            <span className="text-white/70 text-sm">{skill.level}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700`}
              style={{ width: mounted ? `${skill.level}%` : 0 }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsList; 