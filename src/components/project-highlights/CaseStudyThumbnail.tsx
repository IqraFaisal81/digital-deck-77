
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyThumbnailProps {
  study: CaseStudy;
  isActive: boolean;
  onClick: () => void;
}

const CaseStudyThumbnail = ({ study, isActive, onClick }: CaseStudyThumbnailProps) => {
  // Select image based on the case study category or tags
  let imagePath = '';
  
  if (study.category === "Email Marketing" || study.tags.includes("Email Marketing")) {
    imagePath = '/lovable-uploads/e8bacddf-ae58-40e4-ab9a-679e21ec55db.png'; // Email marketing image
  } else if (study.category === "CRM Automation" || study.tags.includes("CRM Automation")) {
    imagePath = '/lovable-uploads/a2f6aa66-f631-443c-a7da-7418a3f06fb2.png'; // CRM dashboard image
  } else if (study.category === "Product Development" || study.tags.includes("Product Development")) {
    imagePath = '/lovable-uploads/c7722c5c-bb7d-46ae-a69b-9b2d19dfb790.png'; // Product development image
  } else if (study.tags.includes("UX/UI Strategy")) {
    imagePath = '/lovable-uploads/e4378bce-64c8-4f55-b680-35adfd4061c5.png'; // UI/UX design image
  } else {
    // Fallback image
    imagePath = '/lovable-uploads/da16c894-2606-4ce0-ac83-3e381213d0bf.png';
  }

  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer rounded-lg overflow-hidden w-64 h-36 relative group transition-all ${
        isActive 
          ? 'ring-2 ring-electric shadow-lg scale-105' 
          : 'opacity-80 hover:opacity-100'
      }`}
    >
      <img 
        src={imagePath} 
        alt={`${study.client} - ${study.title}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-500/40 p-4 flex flex-col justify-end">
        <h4 className="text-white text-sm font-medium">{study.client}</h4>
        <p className="text-white/80 text-xs">{study.title}</p>
      </div>
    </div>
  );
};

export default CaseStudyThumbnail;
