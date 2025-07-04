
import { 
  Settings, 
  LineChart, 
  Megaphone, 
  Mail, 
  Search,
  Repeat,
  MessageSquare,
  Mic,
  Code,
  ShoppingCart
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "CRM Automation",
    description: "Transform your business operations with intelligent Go High Level workflows, advanced lead nurturing systems, smart tagging strategies, and seamless customer journey automation that works 24/7.",
    icon: Settings,
    sectionId: "workflows",
  },
  {
    id: 2,
    title: "Funnel Development",
    description: "Design and build high-converting sales funnels for onboarding, e-commerce, and lead capture that not only look stunning but drive measurable results and maximize conversion rates.",
    icon: Repeat,
    sectionId: "funnels",
  },
  {
    id: 3,
    title: "Email Marketing",
    description: "Create sophisticated email campaigns and automation sequences that engage your audience, drive conversions, and build lasting customer relationships with personalized messaging.",
    icon: Mail,
    sectionId: "email-marketing",
  },
  {
    id: 4,
    title: "PPC & Analytics",
    description: "Launch and optimize data-driven advertising campaigns across Google, Meta, and other platforms with comprehensive tracking through Google Tag Manager and custom Looker Studio dashboards.",
    icon: Megaphone,
    sectionId: "ppc-analytics",
  },
  {
    id: 5,
    title: "SEO & Analytics",
    description: "Boost your online visibility with strategic keyword optimization, technical SEO improvements, and comprehensive analytics tracking through Google Analytics and custom reporting dashboards.",
    icon: Search,
    sectionId: "seo-audits",
  },
  {
    id: 6,
    title: "AI Chatbot & Voice Solutions",
    description: "Deploy intelligent conversational AI systems that provide instant customer support, qualify leads, and handle inquiries with natural language processing and voice capabilities.",
    icon: MessageSquare,
    sectionId: "ai-chatbot",
  },
  {
    id: 7,
    title: "Lovable Development",
    description: "Build cutting-edge AI-powered web applications using the innovative Lovable platform, from interactive dashboards to custom business tools that streamline operations.",
    icon: Code,
    sectionId: "lovable-projects",
  },
  {
    id: 8,
    title: "Shopify Solutions",
    description: "Create powerful e-commerce experiences with custom Shopify development, theme customization, app integration, and conversion optimization strategies that drive sales.",
    icon: ShoppingCart,
    sectionId: "shopify-projects",
  }
];

export const sectionIds = [
  "workflows", 
  "seo-audits", 
  "funnels", 
  "email-marketing", 
  "ppc-analytics", 
  "ai-chatbot", 
  "lovable-projects",
  "shopify-projects"
];
