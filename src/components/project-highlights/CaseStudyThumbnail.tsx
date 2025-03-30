
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyThumbnailProps {
  study: CaseStudy;
  isActive: boolean;
  onClick: () => void;
}

const CaseStudyThumbnail = ({ study, isActive, onClick }: CaseStudyThumbnailProps) => {
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
        src={study.image} 
        alt={study.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
        <h4 className="text-white text-sm font-medium">{study.client}</h4>
        <p className="text-white/80 text-xs">{study.title}</p>
      </div>
    </div>
  );
};

export default CaseStudyThumbnail;
