
import { ProjectType } from "@/types/project";

export const projects: ProjectType[] = [
  // CRM Automation Projects
  {
    id: 1,
    title: "Real Estate CRM Integration",
    category: "CRM Automation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    description: "Complete CRM solution for a high-volume real estate agency, centralizing lead management and follow-up sequences.",
    challenge: "The client was losing leads due to inconsistent follow-up processes across multiple agents. Their existing system required manual data entry across 3 different platforms.",
    solution: "Implemented a centralized CRM system with automated lead routing, follow-up sequences, and performance dashboards.",
    results: "70% reduction in lead response time, 45% increase in conversion rate, and complete elimination of manual data entry.",
    tools: ["HubSpot", "Zapier", "Google Sheets", "Salesforce"]
  },
  {
    id: 2,
    title: "Healthcare Patient Management",
    category: "CRM Automation",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Custom patient management system for a healthcare provider, integrating appointment scheduling, reminders, and follow-ups.",
    challenge: "High no-show rates and inefficient appointment scheduling were costing the practice significant revenue.",
    solution: "Built a custom patient management system with automated reminders, online booking, and staff notifications.",
    results: "No-show rates decreased by 60%, staff saved 15 hours per week on administrative tasks.",
    tools: ["Zoho CRM", "Twilio", "Custom API", "Google Calendar"]
  },

  // Funnel Projects
  {
    id: 3,
    title: "E-commerce Product Launch",
    category: "Funnel Builds",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description: "High-converting sales funnel for an e-commerce product launch, including upsells and cross-sells.",
    challenge: "The client needed to maximize revenue from their new product launch and increase average order value.",
    solution: "Designed a multi-step sales funnel with strategic upsells, cross-sells, and abandoned cart recovery.",
    results: "3x increase in conversion rate, 47% increase in average order value compared to previous launches.",
    tools: ["ClickFunnels", "Shopify", "Klaviyo", "Facebook Ads"]
  },
  {
    id: 4,
    title: "Course Creator Webinar Funnel",
    category: "Funnel Builds",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    description: "End-to-end webinar funnel for an online course creator, from registration to post-webinar follow-up.",
    challenge: "Low webinar attendance and poor conversion rates from webinar attendees to course purchases.",
    solution: "Created a comprehensive webinar funnel with automated reminders, engagement tracking, and targeted follow-up sequences.",
    results: "Increased webinar attendance by 85% and doubled conversion rates from attendee to customer.",
    tools: ["WebinarJam", "ActiveCampaign", "Deadline Funnel"]
  },

  // Email Marketing Projects
  {
    id: 5,
    title: "SaaS Onboarding Sequence",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Comprehensive email onboarding sequence for a SaaS company to improve activation and reduce churn.",
    challenge: "High early-stage churn due to poor user activation and engagement during the critical first 30 days.",
    solution: "Developed a behavior-triggered email sequence focusing on key activation points and feature education.",
    results: "Improved user activation by 60% and reduced 30-day churn by 40%.",
    tools: ["ConvertKit", "Customer.io", "Intercom"]
  },
  {
    id: 6,
    title: "Retail Loyalty Program",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Automated email marketing system for a retail loyalty program, driving repeat purchases and customer retention.",
    challenge: "Low repeat purchase rate and difficulty turning one-time buyers into loyal customers.",
    solution: "Implemented a tiered loyalty program with personalized email sequences based on purchase history and behavior.",
    results: "33% increase in repeat purchase rate and 25% increase in average customer lifetime value.",
    tools: ["Mailchimp", "Klaviyo", "Smile.io", "Shopify"]
  },

  // SEO & Analytics Projects
  {
    id: 7,
    title: "Local Business SEO Campaign",
    category: "SEO & Analytics",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description: "Comprehensive local SEO campaign for a multi-location service business, focusing on maps visibility and local search.",
    challenge: "Low visibility in local search results and poor Google Maps ranking despite multiple physical locations.",
    solution: "Optimized Google Business Profile, implemented local schema markup, and built a location-specific content strategy.",
    results: "First page rankings for all target keywords in local search and 150% increase in Google Maps views.",
    tools: ["Google Business Profile", "SEMrush", "Ahrefs", "Schema Markup"]
  },
  {
    id: 8,
    title: "E-commerce Analytics Setup",
    category: "SEO & Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Complete analytics infrastructure for an e-commerce business, providing actionable insights on customer behavior and marketing performance.",
    challenge: "The client had no visibility into marketing channel performance or user behavior on their site.",
    solution: "Implemented enhanced e-commerce tracking, created custom dashboards, and set up automated reporting.",
    results: "Identified top-performing products and marketing channels, enabling a 35% increase in marketing ROI.",
    tools: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Hotjar"]
  },

  // Social Media & Graphics
  {
    id: 9,
    title: "B2B LinkedIn Campaign",
    category: "Social Media & Graphics",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    description: "Strategic LinkedIn campaign for a B2B software company, including content strategy, ad creative, and lead generation.",
    challenge: "Struggling to generate qualified B2B leads through LinkedIn despite significant ad spend.",
    solution: "Developed a content strategy combining thought leadership content, targeted ads, and lead magnets.",
    results: "Generated 125+ qualified leads in the first quarter at a 40% lower cost per lead than previous campaigns.",
    tools: ["LinkedIn Ads", "Canva", "Hootsuite", "HubSpot"]
  },
  {
    id: 10,
    title: "Social Media Brand Identity",
    category: "Social Media & Graphics",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Complete social media brand identity for a lifestyle company, including visual guidelines, content calendar, and post templates.",
    challenge: "Inconsistent branding across social channels and poor engagement rates.",
    solution: "Created a cohesive visual identity, content pillars, and a 90-day content calendar with custom templates.",
    results: "200% increase in engagement rate and 50% growth in follower count within 3 months.",
    tools: ["Adobe Photoshop", "Canva Pro", "Later", "Buffer"]
  }
];

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getProjectCategories = () => {
  const categories = new Set(projects.map(project => project.category));
  return Array.from(categories);
};
