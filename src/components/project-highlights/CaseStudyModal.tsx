
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

  // Select image based on the case study category or specific tags
  let imagePath = '';
  let imageCredit = 'Image for illustration purposes';
  
  if (caseStudy.category === "Email Marketing" || caseStudy.tags.includes("Email Marketing")) {
    imagePath = '/lovable-uploads/e8bacddf-ae58-40e4-ab9a-679e21ec55db.png'; 
    imageCredit = 'Email marketing campaign visualization';
  } else if (caseStudy.category === "CRM Automation" || caseStudy.tags.includes("CRM Automation")) {
    imagePath = '/lovable-uploads/a2f6aa66-f631-443c-a7da-7418a3f06fb2.png';
    imageCredit = 'CRM dashboard and automation workflow';
  } else if (caseStudy.category === "Product Development" || caseStudy.tags.includes("Product Development")) {
    imagePath = '/lovable-uploads/c7722c5c-bb7d-46ae-a69b-9b2d19dfb790.png';
    imageCredit = 'Product development and design process';
  } else if (caseStudy.tags.includes("UX/UI Strategy")) {
    imagePath = '/lovable-uploads/e4378bce-64c8-4f55-b680-35adfd4061c5.png';
    imageCredit = 'UI/UX design strategy visualization';
  } else if (caseStudy.tags.includes("Automation Strategy")) {
    imagePath = '/lovable-uploads/62db0c38-4d35-41c2-b6db-6dcc3d85ecac.png';
    imageCredit = 'Automation workflow and process map';
  } else if (caseStudy.tags.includes("Lead Nurturing")) {
    imagePath = '/lovable-uploads/8298ac25-72ea-45df-8b02-fec826aa557c.png';
    imageCredit = 'Lead nurturing funnel visualization';
  } else if (caseStudy.tags.includes("Market Research")) {
    imagePath = '/lovable-uploads/66fbb743-7c92-4338-9760-c6e38c8e404f.png';
    imageCredit = 'Market research and analytics dashboard';
  } else if (caseStudy.tags.includes("Customer Recovery")) {
    imagePath = '/lovable-uploads/35f482ac-5ef5-4d4e-bb5b-83bb739c6f81.png';
    imageCredit = 'Customer recovery workflow strategy';
  } else if (caseStudy.tags.includes("Go High Level")) {
    imagePath = '/lovable-uploads/37cac9ff-58d3-4577-aa46-17ca9bc6d57d.png';
    imageCredit = 'Go High Level platform dashboard';
  } else {
    // Fallback image
    imagePath = '/lovable-uploads/da16c894-2606-4ce0-ac83-3e381213d0bf.png';
    imageCredit = 'Digital marketing strategy visualization';
  }

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
              src={imagePath} 
              alt={`${caseStudy.client} - ${caseStudy.title}`} 
              className="w-full h-full object-cover"
            />
            <div className="p-2 bg-gray-50 dark:bg-gray-700 text-xs text-center text-gray-500 dark:text-gray-400">
              {imageCredit}
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
