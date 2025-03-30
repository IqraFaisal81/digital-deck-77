
import ProjectHighlightsCarousel from "@/components/ProjectHighlightsCarousel";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

const ProjectHighlightsSection = () => {
  // Select three featured services to display
  const featuredServices = [
    services.find(s => s.sectionId === "workflows"),
    services.find(s => s.sectionId === "funnels"),
    services.find(s => s.sectionId === "ai-chatbot")
  ].filter(Boolean);

  const scrollToServiceSection = (sectionId: string | null) => {
    if (!sectionId) return;
    
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      
      // Trigger the section visibility if it's a collapsible section
      const event = new CustomEvent('show-section', { detail: { sectionId } });
      document.dispatchEvent(event);
    }
  };

  return (
    <section id="project-highlights" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Project Highlights</h2>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-white/80 text-center">
            Explore some of my most impactful projects across different industries. Each project represents 
            a unique solution to a complex business challenge, delivered with strategy and technical precision.
            <span className="block mt-2 text-electric/90 text-sm">
              <ArrowUpRight className="inline h-4 w-4 mr-1" /> 
              Click on any project to view details or navigate to related services
            </span>
          </p>
        </div>
        
        {/* Featured Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service) => service && (
            <div 
              key={service.id}
              className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-electric/30 transition-all p-5 cursor-pointer"
              onClick={() => scrollToServiceSection(service.sectionId)}
            >
              <div className="bg-electric/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <service.icon className="text-electric" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-white/70 text-sm mb-3 line-clamp-2">{service.description}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-electric p-0 flex items-center text-xs"
              >
                View Service <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
        
        <ProjectHighlightsCarousel />
      </div>
    </section>
  );
};

export default ProjectHighlightsSection;
