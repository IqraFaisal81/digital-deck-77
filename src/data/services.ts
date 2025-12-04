
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
  ShoppingCart,
  Workflow,
  Zap,
  Target
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
    title: "Webflow Development",
    description: "Build stunning, responsive websites and web applications using Webflow's powerful visual development platform with custom interactions, animations, and CMS integration.",
    icon: Workflow,
    sectionId: "webflow-projects",
  },
  {
    id: 5,
    title: "WordPress Development",
    description: "Build powerful, custom WordPress websites with theme development, plugin customization, WooCommerce integration, and performance optimization for fast, secure, and scalable sites.",
    icon: Code,
    sectionId: "wordpress-projects",
  },
  {
    id: 6,
    title: "Zapier Automations",
    description: "Connect and automate your favorite apps with powerful Zapier workflows that eliminate manual tasks, sync data seamlessly, and create intelligent business process automation.",
    icon: Zap,
    sectionId: "zapier-automations",
  },
  {
    id: 7,
    title: "Tracking & Attribution",
    description: "Implement comprehensive tracking systems with Google Tag Manager, Facebook Pixel, and custom attribution models to measure campaign performance and optimize ROI.",
    icon: Target,
    sectionId: "tracking-attribution",
  },
  {
    id: 8,
    title: "AI Chatbot & Voice Solutions",
    description: "Deploy intelligent conversational AI systems that provide instant customer support, qualify leads, and handle inquiries with natural language processing and voice capabilities.",
    icon: MessageSquare,
    sectionId: "ai-chatbot",
  },
  {
    id: 9,
    title: "Shopify Solutions",
    description: "Create powerful e-commerce experiences with custom Shopify development, theme customization, app integration, and conversion optimization strategies that drive sales.",
    icon: ShoppingCart,
    sectionId: "shopify-projects",
  }
];

export const sectionIds = [
  "workflows", 
  "wordpress-projects", 
  "funnels", 
  "email-marketing", 
  "webflow-projects",
  "zapier-automations",
  "tracking-attribution",
  "ai-chatbot", 
  "shopify-projects"
];
