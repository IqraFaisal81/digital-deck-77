
import ProjectHighlightsCarousel from "@/components/ProjectHighlightsCarousel";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectHighlightsSection = () => {
  return (
    <section id="project-highlights" className="section-padding relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-electric/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1 bg-electric/10 rounded-full text-electric text-sm font-medium mb-4">
            Case Studies
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transforming Businesses Through Digital Excellence
          </h2>
          <p className="text-white/80 text-lg mb-6">
            Explore my portfolio of successful projects that have delivered measurable results
            across different industries. Each project represents a unique challenge solved with
            strategic thinking and technical expertise.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            <span className="text-xs px-3 py-1 rounded-full bg-electric/20 text-white cursor-pointer hover:bg-electric/50 hover:text-white transition-colors">All Projects</span>
            <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 cursor-pointer hover:bg-electric/20 hover:text-electric transition-colors">Web Development</span>
            <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 cursor-pointer hover:bg-electric/20 hover:text-electric transition-colors">SEO & Analytics</span>
            <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 cursor-pointer hover:bg-electric/20 hover:text-electric transition-colors">Automation</span>
            <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 cursor-pointer hover:bg-electric/20 hover:text-electric transition-colors">Marketing Funnels</span>
          </div>
          <div className="flex justify-center mt-4">
            <span className="text-electric/90 text-sm flex items-center">
              <ArrowUpRight className="inline h-4 w-4 mr-1" /> 
              Click on any project to view details or navigate to related services
            </span>
          </div>
        </div>
        
        <ProjectHighlightsCarousel />
        
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Ready to create your own success story? Let's discuss how my expertise can help your business achieve its goals.
          </p>
          <Button 
            className="bg-electric hover:bg-electric/80 text-white px-8 py-6 h-auto text-lg font-medium rounded-lg"
            asChild
          >
            <a href="#booking" className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Free Consultation
            </a>
          </Button>
        </div>
      </div>
      
      {/* Results showcase */}
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transform transition-all duration-300 hover:scale-105 hover:border-electric/30">
            <div className="text-4xl font-bold text-electric mb-2">300%</div>
            <p className="text-white/70">Average Increase in Organic Traffic</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transform transition-all duration-300 hover:scale-105 hover:border-electric/30">
            <div className="text-4xl font-bold text-electric mb-2">45%</div>
            <p className="text-white/70">Improved Conversion Rates</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transform transition-all duration-300 hover:scale-105 hover:border-electric/30">
            <div className="text-4xl font-bold text-electric mb-2">28%</div>
            <p className="text-white/70">Increase in Email Campaign Revenue</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transform transition-all duration-300 hover:scale-105 hover:border-electric/30">
            <div className="text-4xl font-bold text-electric mb-2">75%</div>
            <p className="text-white/70">Time Saved Through Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlightsSection;
