
import React from "react";

interface SkillProgressBarProps {
  name: string;
  proficiency: number;
  proficiencyLabel: string;
  index: number;
}

const SkillProgressBar = ({ name, proficiency, proficiencyLabel, index }: SkillProgressBarProps) => {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </span>
        <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-full">
          {proficiencyLabel}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:bg-blue-500"
          style={{ 
            width: `${(proficiency / 5) * 100}%`, 
            transitionDelay: `${index * 100}ms` 
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
