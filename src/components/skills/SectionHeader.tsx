
import React from "react";

interface SectionHeaderProps {
  title: React.ReactNode;
  description?: string;
  alignment?: "left" | "center" | "right";
  useGradient?: boolean;
}

const SectionHeader = ({ 
  title, 
  description,
  alignment = "left",
  useGradient = true
}: SectionHeaderProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[alignment]}`}>
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${useGradient ? 'bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-maroon' : 'text-royal dark:text-electric'} font-display animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100`}>
        {title}
      </h2>
      {description && (
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
