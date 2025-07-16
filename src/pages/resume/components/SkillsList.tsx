import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const SkillsList = ({ skills, getSkillIcon }: { skills: Skill[]; getSkillIcon: (name: string) => React.ElementType }) => (
  <div className="space-y-4">
    {skills.map((skill) => {
      const Icon = getSkillIcon(skill.name);
      return (
        <div key={skill.name} className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className={`w-6 h-6 bg-gradient-to-r ${skill.color} rounded flex items-center justify-center`}>
              <Icon className="text-white text-xs" />
            </div>
            <span className="text-white font-medium">{skill.name}</span>
          </div>
          <span className="text-white/70 text-sm">{skill.level}%</span>
        </div>
      );
    })}
  </div>
);

export default SkillsList; 