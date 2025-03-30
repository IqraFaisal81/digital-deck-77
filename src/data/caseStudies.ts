
import { CaseStudy } from "@/types/caseStudy";

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Re-engagement Workflow for Abandoned Cart Users",
    client: "Triad Diagnostic Solutions",
    category: "Email Marketing",
    challenge: "Triad wanted to recover high-value customers who abandoned carts—specifically those considering ADAS kits and full diagnostic packages. The lack of SKU tracking in their system made automation complex, requiring manual segmentation.",
    strategy: [
      "Tags were applied post-abandonment to identify Full Kit vs. ADAS Kit interest.",
      "Custom emails were triggered at 10, 15, and 30-day intervals, encouraging return visits and offering help from support.",
      "Built-in review request automation post-purchase to drive testimonials."
    ],
    results: {
      stat1: { value: "22%", label: "Recovery rate on abandoned carts" },
      stat2: { value: "60%", label: "Increase in review submissions" },
      stat3: { value: "↓", label: "Reduced sales team friction" }
    },
    tags: ["Email Marketing", "Automation Strategy", "Go High Level", "Customer Recovery"]
  },
  {
    id: 2,
    title: "Automated Lead Pipeline Development",
    client: "GreyMatters Studio",
    category: "CRM Automation",
    challenge: "GreyMatters Studio needed a way to automate lead nurturing for their neurofeedback services. Their team was overwhelmed with manual follow-ups and lacked a proper system to track leads downloading their free resources.",
    strategy: [
      "Built a customized funnel inside Go High Level that captured users who downloaded the Brain Users Handbook.",
      "Created a tagging system for segmenting leads and a pipeline stage inside 'Patient Pipeline' to track progress.",
      "Designed a 12-week automated email workflow that delivered weekly education-based content."
    ],
    results: {
      stat1: { value: "3x", label: "Increase in bookings" },
      stat2: { value: "48%", label: "Average email open rate" },
      stat3: { value: "70%", label: "Reduction in admin work" }
    },
    tags: ["CRM Automation", "Email Workflows", "Lead Nurturing", "Go High Level"]
  },
  {
    id: 3,
    title: "Product Development for Finance Management Software",
    client: "Confidential (Under NDA)",
    category: "Product Development",
    challenge: "The client, a fintech startup, aimed to launch a user-friendly finance management platform tailored to young professionals juggling savings, debt, and daily budgeting. Existing tools in the market were either overly complex or lacked emotional connection with users.",
    strategy: [
      "Developed user personas from interviews with young professionals, side-hustle earners, and financially-anxious first-time budgeters.",
      "Mapped user frustrations and aspirations to emotional triggers—security, autonomy, and motivation—for feature design.",
      "Used Lovable's prioritization matrix to decide on the minimum viable features that delivered maximum emotional impact.",
      "Created interactive wireframes and tested with 20+ early users to gather real-time feedback before development sprints."
    ],
    results: {
      stat1: { value: "86%", label: "User recommendation rate" },
      stat2: { value: "40%", label: "Time-on-task reduction" },
      stat3: { value: "90%", label: "Task completion rate" }
    },
    tags: ["Product Development", "UX/UI Strategy", "Market Research", "Lovable Framework"]
  }
];
