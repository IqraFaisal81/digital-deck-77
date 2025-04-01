
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
    "from-blue-500/15 via-blue-400/10 to-indigo-300/5",
    "from-purple-500/15 via-purple-400/10 to-pink-300/5",
    "from-emerald-500/15 via-teal-400/10 to-green-300/5",
    "from-pink-500/15 via-rose-400/10 to-red-300/5",
    "from-amber-500/15 via-yellow-400/10 to-orange-300/5",
  ];
  
  const currentGradient = gradientClasses[index % gradientClasses.length];
  const animationDelay = `${(index % 5) * 100}ms`;

  return (
    <div 
      className="opacity-0 translate-y-8 transition-all duration-700"
      style={{ animationDelay, animation: 'fadeInUp 0.7s ease-out forwards' }}
    >
      <Card 
        className={`overflow-hidden hover:shadow-xl transition-all duration-500 border border-white/80 rounded-2xl 
                   transform hover:-translate-y-2 h-full bg-gradient-to-br ${currentGradient} backdrop-blur-sm`}
      >
        <CardContent className="p-6 relative">
          {/* Card header with icon */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md flex items-center justify-center shadow-md border border-white/90">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-400/20 flex items-center justify-center">
                {icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 font-display">{name}</h3>
          </div>
          
          {/* Skills list with improved styling */}
          <div className="space-y-2 relative z-10">
            {skills.map((skill, skillIndex) => (
              <SkillItem
                key={skillIndex}
                name={skill.name}
              />
            ))}
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-white/40 to-blue-300/20 blur-2xl"></div>
          <div className="absolute top-20 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-purple-300/30 to-blue-200/30 blur-xl"></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillCard;
