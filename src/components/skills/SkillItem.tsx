
import React from "react";
import { Check } from "lucide-react";

interface SkillItemProps {
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name }) => {
  return (
    <div className="flex items-center group">
      <div className="flex-shrink-0 mr-3 p-1.5 bg-blue-100 dark:bg-blue-800/50 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-700/50 transition-colors duration-300">
        <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300" />
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-200 leading-tight">{name}</span>
    </div>
  );
};

export default SkillItem;
