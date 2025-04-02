
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
      <DialogContent className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">{caseStudy.client}</DialogTitle>
          <DialogDescription>
            {caseStudy.title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                {tag}
              </span>
            ))}
          </div>
          
          <div>
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 mb-2">The Challenge</h4>
            <p className="text-gray-700">
              {caseStudy.challenge}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 mb-2">The Strategy</h4>
            <p className="text-gray-700 mb-3">
              I developed a custom solution based on the client's specific needs:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {caseStudy.strategy.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 mb-3">The Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600">{caseStudy.results.stat1.value}</div>
                <p className="text-gray-700 text-sm">{caseStudy.results.stat1.label}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600">{caseStudy.results.stat2.value}</div>
                <p className="text-gray-700 text-sm">{caseStudy.results.stat2.label}</p>
              </div>
              {caseStudy.results.stat3 && (
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-blue-600">{caseStudy.results.stat3.value}</div>
                  <p className="text-gray-700 text-sm">{caseStudy.results.stat3.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <DialogFooter className="mt-8">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            asChild
          >
            <a href="#booking" onClick={onClose}>
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Free Consultation
            </a>
          </Button>
          
          <Button 
            variant="outline"
            onClick={onClose}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
