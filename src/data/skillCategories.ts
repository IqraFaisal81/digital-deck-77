
import React from "react";
import { 
  Globe, 
  Database, 
  BarChart, 
  Bot, 
  TrendingUp
} from "lucide-react";
import { SkillCategory } from "@/types/skills";

export const skillCategories: SkillCategory[] = [
  {
    name: "Digital Marketing & Growth",
    icon: <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Google Ads Pro (Search, Display, Performance Max)" },
      { name: "Meta, TikTok, & Snapchat Ads Wizardry" },
      { name: "SEO Domination (Technical, On-Page, Off-Page)" },
      { name: "Email Marketing Strategy & Automation" },
    ]
  },
  {
    name: "CRM & Automation Mastery",
    icon: <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Go High Level Ninja (Workflows, Pipelines)" },
      { name: "HubSpot & ActiveCampaign Automation" },
      { name: "Funnel Building + Lead Nurture Sequences" },
      { name: "A2P Compliance & Deliverability Optimization" },
    ]
  },
  {
    name: "Data & Analytics",
    icon: <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Google Analytics (GA4), Looker Studio Dashboards" },
      { name: "R Studio, SQL Queries, Power BI, Tableau" },
      { name: "Data-Driven Decision Making & ROI Reporting" },
    ]
  },
  {
    name: "SaaS & AI Development",
    icon: <Bot className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "SaaS Funnels, Onboarding, and Subscription Logic" },
      { name: "AI Integration (Chatbots, OpenAI API)" },
      { name: "Conversational AI Systems for Multiple Niches" },
      { name: "Custom CRM Add-ons & Feature Workflows" },
    ]
  },
  {
    name: "Strategy & Creative Direction",
    icon: <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Performance Campaign Strategy & Budget Scaling" },
      { name: "Brand Playbooks & Sales Systems" },
      { name: "Competitor Analysis & Trend Forecasting" },
      { name: "High-Converting Copywriting" },
    ]
  },
];
