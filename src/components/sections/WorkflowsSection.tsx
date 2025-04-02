
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkflowCarousel from "@/components/WorkflowCarousel";

interface WorkflowsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  workflowsRef: React.RefObject<HTMLElement>;
}

const WorkflowsSection = ({ isSectionVisible, setVisibleSection, workflowsRef }: WorkflowsSectionProps) => {
  const isVisible = isSectionVisible('workflows');
  
  return (
    <section 
      id="workflows" 
      ref={workflowsRef} 
      className={`section-padding bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Workflow Automations</h2>
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Tired of manual follow-ups, messy data, and missed leads? I build smart, scalable workflow automations using Go High Level that simplify your processes, boost productivity, and close more deals—without lifting a finger.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-10 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">What I Automate:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Lead Nurturing Sequences</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Trigger personalized emails, SMS, and task reminders based on tags, pipeline stages, or behaviors.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Chat Widget Workflows</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Instantly engage leads, tag them based on source, and auto-notify your team via SMS, email, or Slack.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Abandoned Cart Recovery</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Re-engage lost customers with smart reminders, product summaries, and upsell flows.</p>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Onboarding Funnels</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Automate everything from welcome emails to sales meeting bookings and lead qualification tagging.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Workflow Examples</h3>
        <WorkflowCarousel />
        
        <div className="mt-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 md:p-8 border border-blue-100 dark:border-blue-800 backdrop-filter backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-royal to-blue-600 dark:from-electric dark:to-royal">Real Results I've Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">40% increase in lead conversion rates via tailored nurture workflows</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">100% automated chat-to-lead tagging system built for Triad DS</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">50+ hours/month saved on manual follow-ups for All Pro</span>
            </div>
            <div className="flex items-start space-x-3 bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
              <Check className="text-blue-600 dark:text-electric mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Recovered abandoned carts and boosted sales for Triad's Autel store</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
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

export default WorkflowsSection;
