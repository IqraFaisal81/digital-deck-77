
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
  }[];
  index: number;
}

const SkillCard = ({ name, icon, skills, index }: SkillCardProps) => {
  return (
    <div className="h-full">
      <motion.div 
        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
        transition={{ duration: 0.2 }}
        className="h-full group rounded-xl p-6 bg-white dark:bg-gray-800/90 border border-blue-100 dark:border-blue-900/30 
          shadow-md hover:shadow-xl backdrop-blur-sm transition-all duration-300"
      >
        <div className="flex items-center mb-5">
          {/* Fancy icon wrapper */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 border border-blue-100 dark:border-blue-800/50">
              {icon}
            </div>
          </div>
          
          {/* Title with more vibrant gradient text */}
          <h3 className="text-lg font-semibold ml-4 bg-gradient-to-r from-blue-600 to-black dark:from-blue-400 dark:to-gray-900 bg-clip-text text-transparent hover:from-blue-700 hover:to-gray-800 transition-all duration-300">
            {name}
          </h3>
        </div>
        
        {/* Skills list with animated hover */}
        <ul className="space-y-3 mt-2">
          {skills.map((skill, idx) => (
            <motion.li 
              key={idx} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className="flex items-start group/item"
            >
              <CheckCircle className="w-5 h-5 text-blue-500/70 dark:text-blue-400/70 mr-3 mt-0.5 flex-shrink-0 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-300 transition-colors" />
              <span className="text-gray-700 dark:text-gray-300 text-sm group-hover/item:bg-gradient-to-r group-hover/item:from-blue-700 group-hover/item:to-black group-hover/item:dark:from-blue-400 group-hover/item:dark:to-gray-900 group-hover/item:bg-clip-text group-hover/item:text-transparent transition-all duration-200">
                {skill.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default SkillCard;
