
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyCarouselItemProps {
  caseStudy: CaseStudy;
  onClick: () => void;
}

const CaseStudyCarouselItem = ({ caseStudy, onClick }: CaseStudyCarouselItemProps) => {
  // Select relevant images from Unsplash based on case study category/tags
  let imagePath = '';
  
  // Map each category/tag to a relevant Unsplash image
  if (caseStudy.category === "Email Marketing" || caseStudy.tags.includes("Email Marketing")) {
    imagePath = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'; // Code on laptop screen
  } else if (caseStudy.category === "CRM Automation" || caseStudy.tags.includes("CRM Automation")) {
    imagePath = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'; // Person using laptop
  } else if (caseStudy.category === "Product Development" || caseStudy.tags.includes("Product Development")) {
    imagePath = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'; // Java programming
  } else if (caseStudy.tags.includes("UX/UI Strategy")) {
    imagePath = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'; // Gray laptop
  } else if (caseStudy.tags.includes("Automation Strategy")) {
    imagePath = 'https://images.unsplash.com/photo-1518770660439-4636190af475'; // Circuit board
  } else if (caseStudy.tags.includes("Lead Nurturing")) {
    imagePath = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'; // Woman using laptop
  } else if (caseStudy.tags.includes("Market Research")) {
    imagePath = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'; // Code on laptop
  } else if (caseStudy.tags.includes("Customer Recovery")) {
    imagePath = 'https://images.unsplash.com/photo-1500673922987-e212871fec22'; // Yellow lights
  } else if (caseStudy.tags.includes("Go High Level")) {
    imagePath = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'; // Person using laptop
  } else {
    // Fallback image
    imagePath = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'; // Gray laptop
  }
  
  return (
    <div 
      onClick={onClick}
      className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all cursor-pointer h-full flex flex-col bg-white dark:bg-gray-800 group hover:scale-[1.02] duration-300"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={`${imagePath}?auto=format&fit=crop&w=800&q=80`} 
          alt={`${caseStudy.client} - ${caseStudy.title}`} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400">{caseStudy.client}</h3>
        <p className="text-blue-600 dark:text-blue-400 text-sm">{caseStudy.title}</p>
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-between dark:text-gray-300">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                {tag}
              </span>
            ))}
            {caseStudy.tags.length > 2 && (
              <span className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                +{caseStudy.tags.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-auto flex flex-wrap gap-2">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center flex-1">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{caseStudy.results.stat1.value}</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">{caseStudy.results.stat1.label}</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 text-center flex-1">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{caseStudy.results.stat2.value}</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">{caseStudy.results.stat2.label}</p>
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 dark:bg-gray-700 text-center group-hover:bg-blue-600 dark:group-hover:bg-blue-700 transition-colors duration-300">
        <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-white dark:group-hover:text-white">View Details</span>
      </div>
    </div>
  );
};

export default CaseStudyCarouselItem;
