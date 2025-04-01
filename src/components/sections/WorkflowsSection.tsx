
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
      className={`section-padding bg-gradient-to-br from-blue-50 to-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">Workflow Automations</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-gray-700 text-center">
            Tired of manual follow-ups, messy data, and missed leads? I build smart, scalable workflow automations using Go High Level that simplify your processes, boost productivity, and close more deals—without lifting a finger.
          </p>
        </div>
        
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">What I Automate:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Lead Nurturing Sequences</h4>
              <p className="text-sm text-gray-600">Trigger personalized emails, SMS, and task reminders based on tags, pipeline stages, or behaviors.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Chat Widget Workflows</h4>
              <p className="text-sm text-gray-600">Instantly engage leads, tag them based on source, and auto-notify your team via SMS, email, or Slack.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Abandoned Cart Recovery</h4>
              <p className="text-sm text-gray-600">Re-engage lost customers with smart reminders, product summaries, and upsell flows.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h4 className="font-semibold mb-2 text-gray-800">Onboarding Funnels</h4>
              <p className="text-sm text-gray-600">Automate everything from welcome emails to sales meeting bookings and lead qualification tagging.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">Workflow Examples</h3>
        <WorkflowCarousel />
        
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600">Real Results I've Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">40% increase in lead conversion rates via tailored nurture workflows</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">100% automated chat-to-lead tagging system built for Triad DS</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">50+ hours/month saved on manual follow-ups for All Pro</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-blue-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">Recovered abandoned carts and boosted sales for Triad's Autel store</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            className="border border-blue-200 text-blue-600 hover:bg-blue-50"
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
