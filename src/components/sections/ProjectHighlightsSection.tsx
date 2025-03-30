
import { useState } from "react";
import { ArrowUpRight, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ProjectType } from "@/types/project";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { sectionIds } from "@/data/services";

const ProjectHighlightsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  
  const categories = ["All Projects", "Web Development", "SEO & Analytics", "Automation", "Marketing Funnels", "CRM Automation"];
  
  const filteredProjects = activeCategory === "All Projects" 
    ? projects.slice(0, 6) 
    : projects.filter(p => p.category.includes(activeCategory)).slice(0, 6);
  
  const openProjectModal = (project: ProjectType) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  
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
    <section id="case-studies" className="section-padding relative bg-gradient-to-b from-white to-gray-50">
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
          <p className="text-black/80 text-lg mb-8">
            Explore my portfolio of successful projects that have delivered measurable results
            across different industries. Each project represents a unique challenge solved with
            strategic thinking and technical expertise.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category 
                    ? "bg-electric text-white" 
                    : "bg-white/80 text-black/70 hover:bg-electric/10 hover:text-electric border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Project Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] cursor-pointer h-full flex flex-col"
              onClick={() => openProjectModal(project)}
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">View Case Study</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-medium text-electric/80 mb-2">{project.category}</span>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1 text-sm">
                  {project.description?.substring(0, 120)}...
                </p>
                
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                )}
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    <ArrowUpRight className="inline h-3 w-3 mr-1" /> 
                    Click for details
                  </span>
                  {project.relatedService && sectionIds.includes(project.relatedService) && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-electric hover:text-electric/80 p-0 h-auto text-xs"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering parent onClick
                        scrollToServiceSection(project.relatedService);
                      }}
                    >
                      Related Service <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Results showcase */}
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Proven Results Across Industries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-electric/5 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-electric/10">
              <div className="text-4xl font-bold text-electric mb-2">300%</div>
              <p className="text-gray-700">Average Increase in Organic Traffic</p>
            </div>
            <div className="bg-electric/5 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-electric/10">
              <div className="text-4xl font-bold text-electric mb-2">45%</div>
              <p className="text-gray-700">Improved Conversion Rates</p>
            </div>
            <div className="bg-electric/5 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-electric/10">
              <div className="text-4xl font-bold text-electric mb-2">28%</div>
              <p className="text-gray-700">Increase in Email Campaign Revenue</p>
            </div>
            <div className="bg-electric/5 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-electric/10">
              <div className="text-4xl font-bold text-electric mb-2">75%</div>
              <p className="text-gray-700">Time Saved Through Automation</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
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
      </div>
      
      {/* Project Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white border border-gray-200 text-gray-900 max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-gray-600">
                  {selectedProject.category} {selectedProject.clientName && `for ${selectedProject.clientName}`}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto rounded-lg mb-6"
                />
                
                <div className="space-y-6">
                  {selectedProject.description && (
                    <p className="text-gray-700">{selectedProject.description}</p>
                  )}
                  
                  {selectedProject.challenge && (
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="text-lg font-semibold text-electric mb-2">The Challenge</h4>
                      <p className="text-gray-700">{selectedProject.challenge}</p>
                    </div>
                  )}
                  
                  {selectedProject.solution && (
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="text-lg font-semibold text-electric mb-2">The Solution</h4>
                      <p className="text-gray-700">{selectedProject.solution}</p>
                    </div>
                  )}
                  
                  {selectedProject.results && (
                    <div className="bg-electric/5 p-5 rounded-lg border border-electric/20">
                      <h4 className="text-lg font-semibold text-electric mb-2">The Results</h4>
                      <p className="text-gray-700">{selectedProject.results}</p>
                    </div>
                  )}
                  
                  {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-electric mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-4 p-6 bg-electric/10 rounded-lg border border-electric/20">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Interested in a similar solution?</h4>
                    <p className="text-gray-700 mb-4">Let's discuss how I can help you achieve comparable results for your business.</p>
                    <Button
                      className="bg-electric hover:bg-electric/80 w-full text-white"
                      asChild
                      onClick={() => {
                        setModalOpen(false);
                        setTimeout(() => {
                          document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                      }}
                    >
                      <a className="flex items-center justify-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book a Consultation
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <DialogFooter className="mt-6 flex justify-between">
                {selectedProject.relatedService && (
                  <Button 
                    variant="outline"
                    className="border-electric text-electric hover:bg-electric/10"
                    onClick={() => {
                      if (selectedProject.relatedService) {
                        setModalOpen(false);
                        setTimeout(() => {
                          scrollToServiceSection(selectedProject.relatedService);
                        }, 300);
                      }
                    }}
                  >
                    View Related Service
                  </Button>
                )}
                
                <Button 
                  onClick={() => setModalOpen(false)}
                  variant="outline"
                >
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectHighlightsSection;
