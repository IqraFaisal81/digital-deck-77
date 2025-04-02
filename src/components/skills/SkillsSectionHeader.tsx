
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

const SkillsSectionHeader = () => {
  return (
    <>
      {/* Label with icon */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-100/60 dark:bg-blue-900/30 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Professional Skills</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SectionHeader 
          subtitle="Professional Capabilities"
          title={<>Skills & <span className="text-blue-600 dark:text-blue-400 relative inline-block">
            Expertise
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/30 dark:bg-blue-600/30 rounded-full"></span>
          </span></>}
          description="Combining technical expertise with strategic marketing to deliver comprehensive solutions that drive growth and engagement."
        />
      </motion.div>
    </>
  );
};

export default SkillsSectionHeader;
