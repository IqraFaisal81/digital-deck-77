
import React from "react";
import SkillItem from "./SkillItem";
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  skills: { name: string }[];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, skills, index }) => {
  // Different animation delays based on index
  const getAnimationDelay = () => {
    return index * 0.1;
  };

  // Card animations for children elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: getAnimationDelay() + 0.2
      }
    }
  };

  return (
    <div className="group relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-blue-400/5 dark:bg-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Card content */}
      <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-800/50 p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-1 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        
        {/* Card header */}
        <div className="flex items-start mb-5">
          <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
        </div>
        
        {/* Skills list */}
        <motion.ul 
          className="space-y-3 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: getAnimationDelay()
              }
            }
          }}
        >
          {skills.map((skill, skillIndex) => (
            <motion.li key={skillIndex} variants={childVariants}>
              <SkillItem name={skill.name} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default SkillCard;
