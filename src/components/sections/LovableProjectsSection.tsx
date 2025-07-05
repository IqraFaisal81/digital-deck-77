
import { Button } from "@/components/ui/button";
import LovableProjectsCarousel from "@/components/LovableProjectsCarousel";
import { Check } from "lucide-react";

interface LovableProjectsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  lovableProjectsRef: React.RefObject<HTMLElement>;
}

const LovableProjectsSection = ({ isSectionVisible, setVisibleSection, lovableProjectsRef }: LovableProjectsSectionProps) => {
  const isVisible = isSectionVisible('lovable-projects');
  
  return (
    <section 
      id="lovable-projects" 
      ref={lovableProjectsRef} 
      className={`section-padding bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Lovable Projects</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Explore my AI-powered web applications built with the Lovable platform. From interactive chatbots to custom dashboards, these projects showcase modern web development with AI integration.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
          <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Project Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">AI-Powered Web Applications</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Interactive applications leveraging AI capabilities for enhanced user experiences.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Custom Dashboards</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Data visualization interfaces that provide real-time insights and analytics.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Interactive Tools</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Specialized utilities designed to solve specific business problems efficiently.</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <h4 className="font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Chatbot Interfaces</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Conversational UIs that provide natural language interaction and assistance.</p>
            </div>
          </div>
        </div>
        
        <LovableProjectsCarousel />
        
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
          <h3 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Project Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Rapid development with modern technologies and best practices</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Seamless integration of AI capabilities into web interfaces</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Responsive designs that work across all devices</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Accessible interfaces that follow web standards</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            className="border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/50"
            onClick={() => setVisibleSection(null)}
          >
            Close Section
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LovableProjectsSection;
