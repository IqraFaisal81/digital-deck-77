
import React from "react";
import { ExternalLink } from "lucide-react";

const FeaturedClient: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-12">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/3">
          <div className="bg-blue-50 p-5 rounded-lg flex items-center justify-center">
            <img 
              src="/lovable-uploads/afd512f8-af6f-4adb-bb3e-ed3b41ed3d11.png" 
              alt="Grey Matters Featured Client" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold text-gray-900">Client Spotlight: Grey Matters Studio</h3>
            <a href="https://greymatters.studio/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <ExternalLink size={18} />
            </a>
          </div>
          <p className="text-gray-700 mb-4">
            Complete brand redesign and marketing automation implementation that resulted in a 45% increase in 
            client acquisition. Built custom CRM workflows, email sequences, and a new booking system that eliminated manual follow-ups.
          </p>
          <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4 my-4">
            "Iqra transformed our entire digital approach. From clunky systems to smooth automation, we now spend less time on admin and more time with clients."
            <footer className="text-gray-500 mt-2 font-medium">— Director, Grey Matters Studio</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClient;
