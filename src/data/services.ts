
import { 
  Settings, 
  LineChart, 
  Megaphone, 
  Mail, 
  Search,
  Repeat,
  Image
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "CRM Automations",
    description: "Streamline your operations with powerful Go High Level workflows, lead nurturing, tagging, and customer journeys that practically run themselves.",
    icon: Settings,
    sectionId: "workflows" // Section ID to link to
  },
  {
    id: 2,
    title: "Funnel Development",
    description: "Whether it's onboarding, e-commerce, or lead capture—I build high-converting funnels that look great and drive real results.",
    icon: Repeat,
    sectionId: "workflows" // Also link to workflows section
  },
  {
    id: 3,
    title: "Email Marketing",
    description: "I craft email campaigns and automations that engage, convert, and retain your audience without sounding like a robot.",
    icon: Mail,
    sectionId: null // No specific section
  },
  {
    id: 4,
    title: "PPC Campaigns",
    description: "Certified in Google Ads. I create click-worthy, conversion-optimized campaigns with strong CTRs, low CPCs, and high ROIs.",
    icon: Megaphone,
    sectionId: null // No specific section
  },
  {
    id: 5,
    title: "SEO & Analytics",
    description: "From keyword strategy to Google Analytics and Looker dashboards, I make sure your brand gets seen—and tracked—with precision.",
    icon: Search,
    sectionId: "seo-audits" // Link to SEO audits section
  },
  {
    id: 6,
    title: "Social Media & Graphics",
    description: "Custom Canva designs and content strategies for strong brand aesthetics and engagement on every scroll.",
    icon: Image,
    sectionId: null // No specific section
  },
];

// Array of all section IDs for toggling visibility
export const sectionIds = ["workflows", "seo-audits"];
