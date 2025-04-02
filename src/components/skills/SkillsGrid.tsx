
import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { SkillCategory } from "@/types/skills";

interface SkillsGridProps {
  skillCategories: SkillCategory[];
}

const SkillsGrid = ({ skillCategories }: SkillsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <SkillCard
            name={category.name}
            icon={category.icon}
            skills={category.skills}
            index={index}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;
