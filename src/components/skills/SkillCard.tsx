
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SkillItem from "./SkillItem";

interface Skill {
  name: string;
}

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
  index: number;
}

const SkillCard = ({ name, icon, skills, index }: SkillCardProps) => {
  return (
    <div 
      className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index % 6) * 100}`}
    >
      <Card 
        className="overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 rounded-xl transform hover:-translate-y-2 h-full bg-white"
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shadow-sm">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          </div>
          
          <div className="space-y-1">
            {skills.map((skill, skillIndex) => (
              <SkillItem
                key={skillIndex}
                name={skill.name}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillCard;
