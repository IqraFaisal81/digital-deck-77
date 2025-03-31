
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SkillProgressBar from "./SkillProgressBar";

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
  index: number;
}

const SkillCard = ({ name, icon, skills, index }: SkillCardProps) => {
  const getProficiencyLabel = (proficiency: number) => {
    switch (proficiency) {
      case 5: return "Expert";
      case 4: return "Advanced";
      case 3: return "Intermediate";
      case 2: return "Basic";
      default: return "Beginner";
    }
  };

  return (
    <div 
      className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index % 6) * 100}`}
    >
      <Card 
        className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-xl transform hover:-translate-y-1"
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          </div>
          
          <div className="space-y-4">
            {skills.map((skill, skillIndex) => (
              <SkillProgressBar
                key={skillIndex}
                name={skill.name}
                proficiency={skill.proficiency}
                proficiencyLabel={getProficiencyLabel(skill.proficiency)}
                index={skillIndex}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillCard;
