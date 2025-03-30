
import React from "react";

const FeaturedClient: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl border border-black/10 p-8 mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <img 
            src="/lovable-uploads/afd512f8-af6f-4adb-bb3e-ed3b41ed3d11.png" 
            alt="Grey Matters Featured Client" 
            className="max-w-full h-auto rounded-xl bg-white p-6 border border-black/10"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold mb-4 text-black">Client Spotlight: Grey Matters Studio</h3>
          <p className="text-black/80 mb-4">
            Complete brand redesign and marketing automation implementation that resulted in a 45% increase in 
            client acquisition. Built custom CRM workflows, email sequences, and a new booking system that eliminated manual follow-ups.
          </p>
          <blockquote className="italic text-black/70 border-l-4 border-black pl-4 my-4">
            "Iqra transformed our entire digital approach. From clunky systems to smooth automation, we now spend less time on admin and more time with clients."
            <footer className="text-black/60 mt-2">— Director, Grey Matters Studio</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClient;
