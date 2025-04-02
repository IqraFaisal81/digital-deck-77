
import React from "react";

const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-indigo-100/30 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-70"></div>
      
      {/* Floating gradient overlay */}
      <div 
        className="absolute inset-0 opacity-50 dark:opacity-30 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(99,102,241,0.1) 100%)',
        }}
      ></div>
      
      {/* Subtle floating particles */}
      <div className="absolute top-40 right-10 w-4 h-4 rounded-full bg-blue-400/70 dark:bg-blue-500/70 animate-float"></div>
      <div className="absolute top-1/2 left-10 w-6 h-6 rounded-full bg-indigo-400/60 dark:bg-indigo-500/60 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 right-1/3 w-5 h-5 rounded-full bg-purple-400/50 dark:bg-purple-500/50 animate-float" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default AuroraBackground;
