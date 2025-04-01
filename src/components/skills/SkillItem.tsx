
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
    <div className="group flex items-center p-2.5 hover:bg-white/70 rounded-xl transition-all duration-300">
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-blue-100 to-white shadow-sm border border-gray-100/80 flex items-center justify-center mr-3 group-hover:bg-blue-50 transition-colors">
        <Icon className="w-4 h-4 text-blue-600" strokeWidth={1.75} />
      </div>
      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export default SkillItem;
