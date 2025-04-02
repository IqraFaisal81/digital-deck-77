
import React from "react";

interface SectionHeaderProps {
  subtitle?: string;
  title: React.ReactNode;
  description?: string;
  alignment?: "left" | "center" | "right";
  useGradient?: boolean;
}

const SectionHeader = ({ 
  subtitle, 
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
      {subtitle && (
        <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide mb-2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${useGradient ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400' : 'text-gray-900 dark:text-gray-100'} font-display animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100`}>
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
