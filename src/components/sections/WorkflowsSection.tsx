
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
      className={`section-padding transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Workflow Automations</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            Tired of manual follow-ups, messy data, and missed leads? I build smart, scalable workflow automations using Go High Level that simplify your processes, boost productivity, and close more deals—without lifting a finger.
          </p>
        </div>
        
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
          <h3 className="text-xl font-semibold mb-6 text-electric">What I Automate:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Lead Nurturing Sequences</h4>
              <p className="text-sm text-white/70">Trigger personalized emails, SMS, and task reminders based on tags, pipeline stages, or behaviors.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Chat Widget Workflows</h4>
              <p className="text-sm text-white/70">Instantly engage leads, tag them based on source, and auto-notify your team via SMS, email, or Slack.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Abandoned Cart Recovery</h4>
              <p className="text-sm text-white/70">Re-engage lost customers with smart reminders, product summaries, and upsell flows.</p>
            </div>
            <div className="p-4 bg-black/30 rounded-lg">
              <h4 className="font-semibold mb-2">Onboarding Funnels</h4>
              <p className="text-sm text-white/70">Automate everything from welcome emails to sales meeting bookings and lead qualification tagging.</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center">Workflow Examples</h3>
        <WorkflowCarousel />
        
        <div className="mt-12 bg-electric/10 rounded-xl p-6 border border-electric/20">
          <h3 className="text-xl font-semibold mb-4 text-center text-electric">Real Results I've Delivered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white text-opacity-70">40% increase in lead conversion rates via tailored nurture workflows</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white text-opacity-70">100% automated chat-to-lead tagging system built for Triad DS</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white text-opacity-70">50+ hours/month saved on manual follow-ups for All Pro</span>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="text-electric mt-1 flex-shrink-0" />
              <span className="text-white text-opacity-70">Recovered abandoned carts and boosted sales for Triad's Autel store</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            variant="ghost" 
            className="border border-white/20 hover:bg-white/10"
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
