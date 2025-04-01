
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
  // Generate a gradient based on the index
  const gradientClasses = [
    "from-blue-500/10 to-blue-600/5",
    "from-purple-500/10 to-purple-600/5",
    "from-green-500/10 to-green-600/5",
    "from-pink-500/10 to-pink-600/5",
    "from-yellow-500/10 to-yellow-600/5",
  ];
  
  const currentGradient = gradientClasses[index % gradientClasses.length];

  return (
    <div 
      className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index % 6) * 100}`}
    >
      <Card 
        className={`overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 rounded-xl 
                   transform hover:-translate-y-2 h-full bg-gradient-to-br ${currentGradient} backdrop-blur-sm`}
      >
        <CardContent className="p-6 relative">
          {/* Card header with icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                {icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          </div>
          
          {/* Skills list with improved styling */}
          <div className="space-y-3 relative z-10">
            {skills.map((skill, skillIndex) => (
              <SkillItem
                key={skillIndex}
                name={skill.name}
              />
            ))}
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/30 blur-2xl opacity-70"></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillCard;
