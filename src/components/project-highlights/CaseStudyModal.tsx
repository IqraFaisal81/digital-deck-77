
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { CaseStudy } from "@/types/caseStudy";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
}

const CaseStudyModal = ({ isOpen, onClose, caseStudy }: CaseStudyModalProps) => {
  if (!caseStudy) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/90 backdrop-blur-xl border border-gray-100/80 dark:border-white/10 max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.3)] animate-in fade-in-0 zoom-in-95 duration-300">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-royal">{caseStudy.client}</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300 text-base">
            {caseStudy.title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-royal dark:text-electric border border-blue-100 dark:border-blue-800/50 transition-all duration-300 hover:scale-105 hover:shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/50 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-royal mb-3">The Challenge</h4>
            <p className="text-gray-700 dark:text-gray-300">
              {caseStudy.challenge}
            </p>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/50 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-royal mb-3">The Strategy</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              I developed a custom solution based on the client's specific needs:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              {caseStudy.strategy.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800/30 transform transition-all duration-500 hover:scale-[1.02]">
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric dark:from-electric dark:to-royal mb-4">The Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800/70 p-5 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                <div className="text-3xl font-bold text-electric">{caseStudy.results.stat1.value}</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{caseStudy.results.stat1.label}</p>
              </div>
              <div className="bg-white dark:bg-gray-800/70 p-5 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                <div className="text-3xl font-bold text-electric">{caseStudy.results.stat2.value}</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{caseStudy.results.stat2.label}</p>
              </div>
              {caseStudy.results.stat3 && (
                <div className="bg-white dark:bg-gray-800/70 p-5 rounded-lg shadow-md text-center border border-gray-100 dark:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  <div className="text-3xl font-bold text-electric">{caseStudy.results.stat3.value}</div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">{caseStudy.results.stat3.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <DialogFooter className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-4">
          <Button 
            className="bg-gradient-to-r from-royal to-electric hover:from-electric hover:to-royal text-white py-6 h-auto transition-all duration-300 hover:shadow-lg group flex-1"
            asChild
          >
            <a href="#booking" onClick={onClose} className="group">
              <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="group-hover:tracking-wider transition-all duration-300">Schedule a Free Consultation</span>
            </a>
          </Button>
          
          <Button 
            variant="outline"
            onClick={onClose}
            className="border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
