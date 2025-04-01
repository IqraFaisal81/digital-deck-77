
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
    "from-blue-500/10 via-blue-400/10 to-blue-300/5",
    "from-purple-500/10 via-purple-400/10 to-purple-300/5",
    "from-green-500/10 via-green-400/10 to-green-300/5",
    "from-pink-500/10 via-pink-400/10 to-pink-300/5",
    "from-yellow-500/10 via-yellow-400/10 to-yellow-300/5",
  ];
  
  const currentGradient = gradientClasses[index % gradientClasses.length];
  const animationDelay = `${(index % 5) * 100}ms`;

  return (
    <div 
      className="opacity-0 translate-y-8 transition-all duration-700"
      style={{ animationDelay, animation: 'fadeInUp 0.7s ease-out forwards' }}
    >
      <Card 
        className={`overflow-hidden hover:shadow-lg transition-all duration-500 border border-gray-100/80 rounded-2xl 
                   transform hover:-translate-y-2 h-full bg-gradient-to-br ${currentGradient} backdrop-blur-sm`}
      >
        <CardContent className="p-6 relative">
          {/* Card header with icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md border border-gray-100/80">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                {icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 font-display">{name}</h3>
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
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/30 blur-2xl opacity-70"></div>
          <div className="absolute top-20 -left-6 w-12 h-12 rounded-full bg-blue-200/30 blur-xl"></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillCard;
