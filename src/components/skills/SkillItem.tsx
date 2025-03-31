
import React from "react";

interface SkillItemProps {
  name: string;
}

const SkillItem = ({ name }: SkillItemProps) => {
  return (
    <div className="group flex items-center mb-2">
      <div className="w-2 h-2 rounded-full bg-blue-600 mr-3"></div>
      <span className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
