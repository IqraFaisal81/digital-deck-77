
import React from "react";
import SectionHeader from "@/components/skills/SectionHeader";
import { Quote } from "lucide-react";

const TestimonialSectionHeader = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
          <Quote className="h-8 w-8" />
        </div>
      </div>
      <SectionHeader 
        subtitle="What Clients Say"
        title="Client Testimonials"
        description="Hear directly from our valued clients about their experiences and results"
        alignment="center"
        useGradient={true}
      />
    </div>
  );
};

export default TestimonialSectionHeader;
