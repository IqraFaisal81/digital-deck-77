
import React from "react";
import { 
  Search,
  Globe, 
  Mail,
  Database,
  Zap,
  BarChart,
  PieChart,
  Code,
  Bot,
  CheckCircle,
  Calendar,
  MessageSquare,
  TrendingUp,
  type LucideIcon
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
    <div className="group flex items-center p-3 hover:bg-white/80 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-sm border border-white/80 flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors">
        <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
      </div>
      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
