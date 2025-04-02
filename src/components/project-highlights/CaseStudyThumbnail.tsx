
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyThumbnailProps {
  study: CaseStudy;
  isActive: boolean;
  onClick: () => void;
}

const CaseStudyThumbnail = ({ study, isActive, onClick }: CaseStudyThumbnailProps) => {
  // Select relevant images from Unsplash based on case study category/tags
  let imagePath = '';
  
  // Map each category/tag to a relevant Unsplash image
  if (study.category === "Email Marketing" || study.tags.includes("Email Marketing")) {
    imagePath = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'; // Code on laptop screen
  } else if (study.category === "CRM Automation" || study.tags.includes("CRM Automation")) {
    imagePath = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'; // Person using laptop
  } else if (study.category === "Product Development" || study.tags.includes("Product Development")) {
    imagePath = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'; // Java programming
  } else if (study.tags.includes("UX/UI Strategy")) {
    imagePath = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'; // Gray laptop
  } else if (study.tags.includes("Automation Strategy")) {
    imagePath = 'https://images.unsplash.com/photo-1518770660439-4636190af475'; // Circuit board
  } else if (study.tags.includes("Lead Nurturing")) {
    imagePath = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'; // Woman using laptop
  } else if (study.tags.includes("Market Research")) {
    imagePath = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'; // Code on laptop
  } else if (study.tags.includes("Customer Recovery")) {
    imagePath = 'https://images.unsplash.com/photo-1500673922987-e212871fec22'; // Yellow lights
  } else if (study.tags.includes("Go High Level")) {
    imagePath = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'; // Person using laptop
  } else {
    // Fallback image
    imagePath = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'; // Gray laptop
  }

  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer rounded-lg overflow-hidden w-64 h-36 relative group transition-all ${
        isActive 
          ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
          : 'opacity-80 hover:opacity-100'
      }`}
    >
      <img 
        src={`${imagePath}?auto=format&fit=crop&w=500&q=80`} 
        alt={`${study.client} - ${study.title}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
        <h4 className="text-white text-sm font-medium">{study.client}</h4>
        <p className="text-white/90 text-xs">{study.category}</p>
      </div>
    </div>
  );
};

export default CaseStudyThumbnail;
