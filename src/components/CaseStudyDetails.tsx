
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyDetailsProps {
  caseStudy: CaseStudy;
}

const CaseStudyDetails = ({ caseStudy }: CaseStudyDetailsProps) => {
  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-950/30 rounded-2xl shadow-lg border border-gray-100/80 dark:border-gray-700/50 overflow-hidden mb-16 transform transition-all duration-500 hover:shadow-xl">
      <div className="p-8 md:p-12 flex flex-col h-full">
        <div>
          <h3 className="text-xl font-medium text-electric mb-2 relative inline-block after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gradient-to-r after:from-electric after:to-transparent after:bottom-0 after:left-0">CLIENT SUCCESS STORY</h3>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-royal">{caseStudy.client} – {caseStudy.title}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-electric/10 to-royal/10 text-electric border border-electric/20 transition-all duration-300 hover:scale-105 hover:shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex-1 space-y-6">
          <div className="bg-white/80 dark:bg-gray-800/50 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-royal mb-2">The Challenge</h4>
            <p className="text-gray-700 dark:text-gray-300">
              {caseStudy.challenge}
            </p>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/50 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-royal mb-2">The Strategy</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              I developed a custom solution based on the client's specific needs:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              {caseStudy.strategy.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-electric/5 to-royal/5 p-6 rounded-lg border border-electric/20 transform transition-all duration-500 hover:scale-[1.02]">
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-royal mb-3">The Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                <div className="text-3xl font-bold text-electric">{caseStudy.results.stat1.value}</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{caseStudy.results.stat1.label}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                <div className="text-3xl font-bold text-electric">{caseStudy.results.stat2.value}</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{caseStudy.results.stat2.label}</p>
              </div>
              {caseStudy.results.stat3 && (
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  <div className="text-3xl font-bold text-electric">{caseStudy.results.stat3.value}</div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{caseStudy.results.stat3.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <Button 
            className="bg-gradient-to-r from-royal to-electric hover:from-electric hover:to-royal text-white w-full py-6 h-auto shadow-md hover:shadow-lg transition-all duration-300 group"
            asChild
          >
            <a href="#booking" className="flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="group-hover:tracking-wider transition-all duration-300">Schedule a Free Consultation</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
