
import { 
  Settings, 
  LineChart, 
  Megaphone, 
  Mail, 
  Search,
  Repeat,
  MessageSquare,
  Mic,
  Code
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "CRM Automationss",
    description: "Streamline your operations with powerful Go High Level workflows, lead nurturing, tagging, and customer journeys that practically run themselves.",
    icon: Settings,
    sectionId: "workflows", // Section ID to link to
  },
  {
    id: 2,
    title: "Funnel Development",
    description: "Whether it's onboarding, e-commerce, or lead capture—I build high-converting funnels that look great and drive real results.",
    icon: Repeat,
    sectionId: "funnels", // Updated to link to funnels section
  },
  {
    id: 3,
    title: "Email Marketing",
    description: "I craft email campaigns and automations that engage, convert, and retain your audience without sounding like a robot.",
    icon: Mail,
    sectionId: "email-marketing", // Updated to link to the new email marketing section
  },
  {
    id: 4,
    title: "PPC, Analytics & Tracking",
    description: "I don't just launch campaigns—I measure everything. With expert-level setups in Google Tag Manager, Google Search Console, and Looker Studio, I track the full customer journey.",
    icon: Megaphone,
    sectionId: "ppc-analytics", // Added section ID for PPC campaigns
  },
  {
    id: 5,
    title: "SEO & Analytics",
    description: "From keyword strategy to Google Analytics and Looker dashboards, I make sure your brand gets seen—and tracked—with precision.",
    icon: Search,
    sectionId: "seo-audits", // Link to SEO audits section
  },
  {
    id: 6,
    title: "AI Chatbot & Voice Agent",
    description: "Smart conversations, real-time responses, and zero missed opportunities with AI-powered chat and voice solutions.",
    icon: MessageSquare,
    sectionId: "ai-chatbot", // New section ID for AI chatbot and voice agent
  },
  {
    id: 7,
    title: "Lovable Projects",
    description: "Creating exceptional AI-powered web applications with the innovative Lovable platform. From chatbots to dashboards, I build modern apps that delight users.",
    icon: Code,
    sectionId: "lovable-projects", // New section ID for Lovable projects
  }
];

// Array of all section IDs for toggling visibility
export const sectionIds = ["workflows", "seo-audits", "funnels", "email-marketing", "ppc-analytics", "ai-chatbot", "lovable-projects"];
