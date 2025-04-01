
import React from "react";

interface SectionHeaderProps {
  subtitle?: string;
  title: React.ReactNode;
  description?: string;
  alignment?: "center" | "left";
  useGradient?: boolean;
}

const SectionHeader = ({ 
  subtitle, 
  title, 
  description, 
  alignment = "center",
  useGradient = true  // Change default to true
}: SectionHeaderProps) => {
  return (
    <div className={`flex flex-col ${alignment === "center" ? "items-center" : "items-start"} mb-14 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700`}>
      {subtitle && (
        <span className="text-blue-600 text-sm uppercase tracking-wider font-semibold mb-2">{subtitle}</span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${alignment === "center" ? "text-center" : "text-left"} font-display`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">
          {title}
        </span>
      </h2>
      <div className={`w-16 h-1 bg-blue-600 mb-6 ${alignment === "center" ? "mx-auto" : ""}`}></div>
      {description && (
        <p className={`text-gray-700 max-w-2xl ${alignment === "center" ? "mx-auto text-center" : ""} mb-6`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
