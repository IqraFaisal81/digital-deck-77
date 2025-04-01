
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyCarouselItemProps {
  caseStudy: CaseStudy;
  onClick: () => void;
}

const CaseStudyCarouselItem = ({ caseStudy, onClick }: CaseStudyCarouselItemProps) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer h-full flex flex-col"
    >
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-gray-100">
        <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">{caseStudy.client}</h3>
        <p className="text-blue-600 text-sm">{caseStudy.title}</p>
      </div>
      
      <div className="p-4 flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600">
              {tag}
            </span>
          ))}
          {caseStudy.tags.length > 2 && (
            <span className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-600">
              +{caseStudy.tags.length - 2} more
            </span>
          )}
        </div>
        
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">
          {caseStudy.challenge}
        </p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          <div className="bg-blue-50 rounded-lg p-2 text-center flex-1">
            <div className="text-lg font-bold text-blue-600">{caseStudy.results.stat1.value}</div>
            <p className="text-xs text-gray-600">{caseStudy.results.stat1.label}</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-2 text-center flex-1">
            <div className="text-lg font-bold text-blue-600">{caseStudy.results.stat2.value}</div>
            <p className="text-xs text-gray-600">{caseStudy.results.stat2.label}</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 text-center">
        <span className="text-blue-600 text-sm font-medium">Click to view details</span>
      </div>
    </div>
  );
};

export default CaseStudyCarouselItem;
