
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
      className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all cursor-pointer h-full flex flex-col bg-white dark:bg-gray-800 group hover:scale-[1.02] duration-300"
    >
      <div className="h-40 overflow-hidden relative">
        <img 
          src={`${imagePath}?auto=format&fit=crop&w=800&q=80`} 
          alt={`${caseStudy.client} - ${caseStudy.title}`} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">{caseStudy.client}</h3>
          <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{caseStudy.category}</p>
          
          {/* Show only primary tag */}
          {caseStudy.tags.length > 0 && (
            <span className="text-xs px-3 py-1 inline-block rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
              {caseStudy.tags[0]}
            </span>
          )}
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {caseStudy.results.stat1.value}
            <span className="ml-1 text-gray-500 dark:text-gray-400 text-xs font-normal">{caseStudy.results.stat1.label}</span>
          </div>
          <span className="text-sm text-gray-500">View details</span>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCarouselItem;
