
import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";
import SkillProgressBar from "./SkillProgressBar";
import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  skills: {
    name: string;
  }[];
  index: number;
}

const SkillCard = ({ name, icon, skills, index }: SkillCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{name}</h3>
        </div>
        
        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-24'}`}>
          <div className="space-y-3">
            {skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex} skill={skill.name} />
            ))}
          </div>
          
          <div className="mt-5">
            <SkillProgressBar value={85 + index * 2} />
          </div>
        </div>
        
        <button
          className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center justify-center w-full"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Show Less" : "Show More"} 
          <svg 
            className={`ml-1 h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
