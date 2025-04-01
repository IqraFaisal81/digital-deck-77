
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
  CheckCircle,
  Calendar,
  LucideIcon
} from "lucide-react";

interface SkillItemProps {
  name: string;
}

// Map to match skill names with appropriate icons
const getIconForSkill = (skillName: string): LucideIcon => {
  const lowerSkill = skillName.toLowerCase();
  
  if (lowerSkill.includes("google ads") || lowerSkill.includes("meta") || lowerSkill.includes("ads")) {
    return Search;
  } else if (lowerSkill.includes("seo")) {
    return Globe;
  } else if (lowerSkill.includes("email")) {
    return Mail;
  } else if (lowerSkill.includes("high level") || lowerSkill.includes("hubspot")) {
    return Database;
  } else if (lowerSkill.includes("pipeline") || lowerSkill.includes("funnel")) {
    return Zap;
  } else if (lowerSkill.includes("analytics") || lowerSkill.includes("dashboard")) {
    return BarChart;
  } else if (lowerSkill.includes("data-driven") || lowerSkill.includes("roi")) {
    return PieChart;
  } else if (lowerSkill.includes("saas") || lowerSkill.includes("crm")) {
    return Code;
  } else if (lowerSkill.includes("ai") || lowerSkill.includes("chatbot")) {
    return Bot;
  } else if (lowerSkill.includes("compliance") || lowerSkill.includes("deliverability")) {
    return CheckCircle;
  } else if (lowerSkill.includes("calendar")) {
    return Calendar;
  } else if (lowerSkill.includes("copywriting") || lowerSkill.includes("campaign")) {
    return MessageSquare;
  }
  
  // Default icon
  return TrendingUp;
};

const SkillItem = ({ name }: SkillItemProps) => {
  const Icon = getIconForSkill(name);

  return (
    <div className="group flex items-center mb-4 hover:translate-x-1 transition-all duration-300">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mr-4">
        <Icon className="w-5 h-5 text-purple-600" strokeWidth={2} />
      </div>
      <span className="text-gray-700 text-sm font-medium group-hover:text-purple-600 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
