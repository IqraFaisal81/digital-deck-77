
import React from "react";
import SectionHeader from "@/components/skills/SectionHeader";
import { motion } from "framer-motion";

const TestimonialSectionHeader = () => {
  return (
    <SectionHeader 
      subtitle="Client Feedback"
      title={<>What My <span className="text-blue-600 dark:text-blue-400 relative inline-block">
        Clients
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/30 dark:bg-blue-600/30 rounded-full"></span>
      </span> Say</>}
      description="Hear directly from the people I've worked with about their experience and the results we achieved together"
      alignment="center"
      useGradient={true}
    />
  );
};

export default TestimonialSectionHeader;
