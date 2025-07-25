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

  // Select relevant images from Unsplash based on case study category/tags
  let imagePath = '';
  let imageCredit = 'Image from Unsplash';
  
  // Map each category/tag to a relevant Unsplash image
  if (caseStudy.category === "Email Marketing" || caseStudy.tags.includes("Email Marketing")) {
    imagePath = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'; // Code on laptop screen
    imageCredit = 'Email marketing visualization (Unsplash)';
  } else if (caseStudy.category === "CRM Automation" || caseStudy.tags.includes("CRM Automation")) {
    imagePath = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'; // Person using laptop
    imageCredit = 'CRM automation (Unsplash)';
  } else if (caseStudy.category === "Product Development" || caseStudy.tags.includes("Product Development")) {
    imagePath = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'; // Java programming
    imageCredit = 'Product development (Unsplash)';
  } else if (caseStudy.tags.includes("UX/UI Strategy")) {
    imagePath = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'; // Gray laptop
    imageCredit = 'UI/UX strategy (Unsplash)';
  } else if (caseStudy.tags.includes("Automation Strategy")) {
    imagePath = 'https://images.unsplash.com/photo-1518770660439-4636190af475'; // Circuit board
    imageCredit = 'Automation workflow (Unsplash)';
  } else if (caseStudy.tags.includes("Lead Nurturing")) {
    imagePath = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'; // Woman using laptop
    imageCredit = 'Lead nurturing (Unsplash)';
  } else if (caseStudy.tags.includes("Market Research")) {
    imagePath = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'; // Code on laptop
    imageCredit = 'Market research (Unsplash)';
  } else if (caseStudy.tags.includes("Customer Recovery")) {
    imagePath = 'https://images.unsplash.com/photo-1500673922987-e212871fec22'; // Yellow lights
    imageCredit = 'Customer recovery (Unsplash)';
  } else if (caseStudy.tags.includes("Go High Level")) {
    imagePath = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'; // Person using laptop
    imageCredit = 'Marketing platform (Unsplash)';
  } else {
    // Fallback image
    imagePath = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'; // Gray laptop
    imageCredit = 'Digital marketing (Unsplash)';
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white dark:bg-gray-800 max-w-3xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">{caseStudy.client}</DialogTitle>
          <DialogDescription className="dark:text-gray-300">
            {caseStudy.title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-6">
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
            <img 
              src={`${imagePath}?auto=format&fit=crop&w=1200&q=80`}
              alt={`${caseStudy.client} - ${caseStudy.title}`} 
              className="w-full h-full object-cover"
            />
            <div className="p-2 bg-gray-50 dark:bg-gray-700 text-xs text-center text-gray-500 dark:text-gray-400">
              {imageCredit}
            </div>
          </div>
          
          {/* Simplified tag display - max 3 tags */}
          <div className="flex gap-2 mb-4">
            {caseStudy.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Challenge</h4>
            <p className="text-gray-700 dark:text-gray-300">
              {caseStudy.challenge}
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Key Results</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{caseStudy.results.stat1.value}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{caseStudy.results.stat1.label}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{caseStudy.results.stat2.value}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{caseStudy.results.stat2.label}</p>
              </div>
              {caseStudy.results.stat3 && (
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{caseStudy.results.stat3.value}</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{caseStudy.results.stat3.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <DialogFooter className="mt-6">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            asChild
          >
            <a href="https://calendly.com/iqrafaisal81/discovery-call?month=2025-04" target="_blank" rel="noopener noreferrer">
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
