
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

  // Generate a consistent image based on client name for demo purposes
  const imageIndex = Math.abs(caseStudy.client.length * 3) % 5;
  const demoImages = [
    '/lovable-uploads/c7722c5c-bb7d-46ae-a69b-9b2d19dfb790.png',
    '/lovable-uploads/e8bacddf-ae58-40e4-ab9a-679e21ec55db.png',
    '/lovable-uploads/e4378bce-64c8-4f55-b680-35adfd4061c5.png',
    '/lovable-uploads/a2f6aa66-f631-443c-a7da-7418a3f06fb2.png',
    '/lovable-uploads/da16c894-2606-4ce0-ac83-3e381213d0bf.png'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white dark:bg-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-blue-300 dark:to-blue-500">{caseStudy.client}</DialogTitle>
          <DialogDescription className="dark:text-gray-300">
            {caseStudy.title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-6">
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
            <img 
              src={demoImages[imageIndex]} 
              alt={caseStudy.client} 
              className="w-full h-full object-cover"
            />
            <div className="p-2 bg-gray-50 dark:bg-gray-700 text-xs text-center text-gray-500 dark:text-gray-400">
              Demo image shown for illustration purposes
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                {tag}
              </span>
            ))}
          </div>
          
          <div>
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 mb-2">Challenge</h4>
            <p className="text-gray-700 dark:text-gray-300">
              {caseStudy.challenge}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 mb-2">Strategy</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              {caseStudy.strategy.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-100 dark:border-blue-900/50">
            <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-white dark:to-blue-400 mb-3">Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{caseStudy.results.stat1.value}</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{caseStudy.results.stat1.label}</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{caseStudy.results.stat2.value}</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{caseStudy.results.stat2.label}</p>
              </div>
              {caseStudy.results.stat3 && (
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{caseStudy.results.stat3.value}</div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{caseStudy.results.stat3.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <DialogFooter className="mt-8">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            asChild
          >
            <a href="#booking" onClick={onClose}>
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </a>
          </Button>
          
          <Button 
            variant="outline"
            onClick={onClose}
            className="dark:text-gray-300 dark:border-gray-600"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;
