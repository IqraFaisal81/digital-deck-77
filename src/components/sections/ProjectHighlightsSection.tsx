
import ProjectHighlightsCarousel from "@/components/ProjectHighlightsCarousel";

const ProjectHighlightsSection = () => {
  return (
    <section id="project-highlights" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Project Highlights</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white/80 text-center">
            Explore some of my most impactful projects across different industries. Each project represents 
            a unique solution to a complex business challenge, delivered with strategy and technical precision.
          </p>
        </div>
        
        <ProjectHighlightsCarousel />
      </div>
    </section>
  );
};

export default ProjectHighlightsSection;
