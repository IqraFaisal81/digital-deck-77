
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

  // Lovable Projects
  {
    id: 11,
    title: "ChatGenius Embedify",
    category: "Lovable Projects",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "AI chatbot creation platform that lets anyone build and deploy custom chat interfaces for websites with no-code required.",
    challenge: "Create a user-friendly platform for non-technical users to build and deploy AI chatbots with customizable interfaces and knowledge bases.",
    solution: "Developed an intuitive no-code editor with live preview, embedding options, and powerful AI integration using the Lovable platform.",
    results: "Successfully launched with multiple enterprise clients, reducing customer support time by 45% and increasing user engagement by 60%.",
    tools: ["React", "Typescript", "Tailwind CSS", "Shadcn UI", "AI APIs", "Lovable"]
  },
  {
    id: 12,
    title: "SupaFriendly Dashboard",
    category: "Lovable Projects",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Complete social media analytics dashboard with Supabase authentication, real-time data tracking, and customizable reports.",
    challenge: "Build a full-stack application with secure user authentication and real-time analytics tracking for social media campaigns.",
    solution: "Implemented Supabase for authentication and database management, with a beautiful Shadcn UI frontend that visualizes complex data simply.",
    results: "Platform now used by 20+ marketing agencies to track over 500 social campaigns, with 98% user satisfaction rating.",
    tools: ["React", "Typescript", "Supabase", "Tailwind CSS", "Recharts", "Lovable"]
  },
  {
    id: 13,
    title: "PromptVault Pilot",
    category: "Lovable Projects",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "AI prompt management platform for teams to create, organize, and optimize prompts across different AI tools and models.",
    challenge: "Design a collaborative platform for teams to manage, version, and share their AI prompts while tracking performance metrics.",
    solution: "Created a secure vault system with prompt templates, variables, sharing options, and performance analytics using the Lovable framework.",
    results: "Adopted by content teams and AI researchers, improving prompt efficiency by 35% and reducing time spent writing prompts by 65%.",
    tools: ["React", "Typescript", "Tailwind CSS", "Shadcn UI", "AI Integration", "Lovable"]
  }
];

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getProjectCategories = () => {
  const categories = new Set(projects.map(project => project.category));
  return Array.from(categories);
};
