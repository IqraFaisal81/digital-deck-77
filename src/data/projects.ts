
import { ProjectType } from "@/types/project";

export const projects: ProjectType[] = [
  // CRM Automation Projects
  {
    id: 1,
    title: "Triad DS – Chat Widget Automation",
    category: "CRM Automation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    description: "Built a smart system that auto-tags leads, triggers SMS/email replies, and syncs with Google Ads to simplify tracking and retargeting.",
    tools: ["Go High Level", "Zapier", "Google Ads", "SMS Automation"]
  },
  {
    id: 2,
    title: "All Pro – Lead Nurture Workflow",
    category: "CRM Automation",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Automated lead follow-up across channels using conditional logic, improving engagement and conversions.",
    tools: ["Go High Level", "Email Automation", "SMS Marketing", "Conditional Logic"]
  },

  // Funnel Projects
  {
    id: 3,
    title: "Triad DS – Black Friday Sales Funnel",
    category: "Funnel Builds",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description: "Developed an e-commerce funnel for Autel products with product pages, cart integration, and a killer thank-you experience.",
    tools: ["Go High Level", "E-commerce", "Payment Processing", "Upsell Automation"]
  },
  {
    id: 4,
    title: "Charley Grey – Onboarding Funnel",
    category: "Funnel Builds",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    description: "Streamlined onboarding with auto-responses, meeting schedulers, and lead qualification logic.",
    tools: ["Go High Level", "Calendly", "Zapier", "Automated Workflows"]
  },

  // Email Marketing Projects
  {
    id: 5,
    title: "Grey Matters – BOGO Campaign",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Designed branded emails with emotional appeal and strong CTAs to promote mental health services and offers.",
    tools: ["Email Marketing", "Canva", "A/B Testing", "Conversion Tracking"]
  },
  {
    id: 6,
    title: "March on Mission – Awareness Newsletter",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Built a heartwarming mental health campaign with compassionate design and engaging copy.",
    tools: ["Email Marketing", "Content Writing", "Canva", "Newsletter Design"]
  },

  // SEO & Analytics Projects
  {
    id: 7,
    title: "Cojali USA – Organic Growth",
    category: "SEO & Analytics",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description: "Boosted clicks to 2.4K+ and impressions to 67K through smart content, keyword targeting, and technical SEO.",
    tools: ["SEO", "Google Search Console", "Content Strategy", "Keyword Research"]
  },
  {
    id: 8,
    title: "Office H2O – Looker Studio Dashboard",
    category: "SEO & Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Crafted a complete performance dashboard showing ad ROI, search data, and audience engagement trends.",
    tools: ["Looker Studio", "Google Analytics", "Data Visualization", "Performance Tracking"]
  },

  // Social Media & Graphics
  {
    id: 9,
    title: "M.B Collections – SEO Blogs & Socials",
    category: "Social Media & Graphics",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description: "Created engaging, search-optimized blog content and stunning social media posts that reflect the brand's style.",
    tools: ["SEO Content", "Social Media", "Canva", "Content Calendar"]
  },
  {
    id: 10,
    title: "Café 39 & Yasmeen Jiwa – Visual Design",
    category: "Social Media & Graphics",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Designed eye-catching graphics in Canva to elevate brand identity and improve ad performance.",
    tools: ["Canva", "Brand Identity", "Visual Design", "Social Media Graphics"]
  }
];

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getProjectCategories = () => {
  const categories = new Set(projects.map(project => project.category));
  return Array.from(categories);
};
