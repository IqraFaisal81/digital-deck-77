
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
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-500/40 p-4 flex flex-col justify-end">
        <h4 className="text-white text-sm font-medium">{study.client}</h4>
        <p className="text-white/80 text-xs">{study.title}</p>
      </div>
    </div>
  );
};

export default CaseStudyThumbnail;
