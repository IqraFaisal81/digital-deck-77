
import React from "react";
import { 
  Globe, 
  Database, 
  BarChart, 
  Bot, 
  TrendingUp,
  Mail,
  Search,
  MessageSquare,
  Code,
  Zap,
  PieChart,
  LucideIcon
} from "lucide-react";

interface SkillItemProps {
  name: string;
}

// Map to match skill names with appropriate icons
const getIconForSkill = (skillName: string): LucideIcon => {
  const lowerSkill = skillName.toLowerCase();
  
  if (lowerSkill.includes("google ads") || lowerSkill.includes("meta") || lowerSkill.includes("ads")) {
    return TrendingUp;
  } else if (lowerSkill.includes("seo")) {
    return Search;
  } else if (lowerSkill.includes("email")) {
    return Mail;
  } else if (lowerSkill.includes("crm") || lowerSkill.includes("high level") || lowerSkill.includes("hubspot")) {
    return Database;
  } else if (lowerSkill.includes("pipeline") || lowerSkill.includes("funnel")) {
    return Zap;
  } else if (lowerSkill.includes("analytics") || lowerSkill.includes("data") || lowerSkill.includes("roi")) {
    return BarChart;
  } else if (lowerSkill.includes("saas") || lowerSkill.includes("subscription")) {
    return Code;
  } else if (lowerSkill.includes("ai") || lowerSkill.includes("chatbot")) {
    return Bot;
  } else if (lowerSkill.includes("strategy") || lowerSkill.includes("creative")) {
    return PieChart;
  } else if (lowerSkill.includes("copywriting") || lowerSkill.includes("campaign")) {
    return MessageSquare;
  }
  
  // Default icon
  return Globe;
};

const SkillItem = ({ name }: SkillItemProps) => {
  const Icon = getIconForSkill(name);

  return (
    <div className="group flex items-center mb-3 hover:translate-x-1 transition-all duration-300">
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 mr-3 shadow-sm">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <span className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
