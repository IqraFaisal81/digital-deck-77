
import React from "react";

interface SectionHeaderProps {
  subtitle: string;
  title: React.ReactNode;
  description: string;
}

const SectionHeader = ({ subtitle, title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center mb-14 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
      <span className="text-blue-600 text-sm uppercase tracking-wider font-semibold mb-2">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">
        {title}
      </h2>
      <div className="w-16 h-1 bg-blue-600 mb-6"></div>
      <p className="text-gray-700 max-w-2xl mx-auto text-center mb-12">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
