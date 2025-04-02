
import React from "react";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
  }[];
  index: number;
}

const SkillCard = ({ name, icon, skills, index }: SkillCardProps) => {
  const getAnimationDelay = (baseIndex: number) => {
    // Calculating different delays for different cards
    return `animate-delay-${(baseIndex + 1) * 100}`;
  }

  return (
    <div 
      className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ${getAnimationDelay(index)}`}
    >
      <div className="glass-card p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full">
            {icon}
          </div>
          <h3 className="text-lg font-semibold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400">
            {name}
          </h3>
        </div>
        
        <ul className="space-y-3">
          {skills.map((skill, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
