
import React from "react";

interface SkillItemProps {
  name: string;
}

const SkillItem = ({ name }: SkillItemProps) => {
  return (
    <div className="group flex items-center mb-3 hover:translate-x-1 transition-all duration-300">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mr-3">
        <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
      </div>
      <span className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
