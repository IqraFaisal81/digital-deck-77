
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyDetailsProps {
  caseStudy: CaseStudy;
}

const CaseStudyDetails = ({ caseStudy }: CaseStudyDetailsProps) => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="h-full">
          <img 
            src={caseStudy.image} 
            alt={`${caseStudy.client} - ${caseStudy.title}`} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-8 md:p-12 flex flex-col h-full">
          <div>
            <h3 className="text-xl font-medium text-electric mb-2">CLIENT SUCCESS STORY</h3>
            <h2 className="text-3xl font-bold mb-4">{caseStudy.client} – {caseStudy.title}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag, idx) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-full bg-electric/10 text-electric">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h4>
              <p className="text-gray-700">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">The Strategy</h4>
              <p className="text-gray-700 mb-3">
                I developed a custom solution based on the client's specific needs:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {caseStudy.strategy.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-electric/5 p-5 rounded-lg border border-electric/20">
              <h4 className="text-lg font-semibold text-electric mb-3">The Results</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-electric">{caseStudy.results.stat1.value}</div>
                  <p className="text-gray-700 text-sm">{caseStudy.results.stat1.label}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-electric">{caseStudy.results.stat2.value}</div>
                  <p className="text-gray-700 text-sm">{caseStudy.results.stat2.label}</p>
                </div>
                {caseStudy.results.stat3 && (
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-electric">{caseStudy.results.stat3.value}</div>
                    <p className="text-gray-700 text-sm">{caseStudy.results.stat3.label}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              className="bg-electric hover:bg-electric/80 text-white w-full py-6 h-auto"
              asChild
            >
              <a href="#booking" className="flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
