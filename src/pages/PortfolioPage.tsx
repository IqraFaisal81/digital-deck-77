

import React, { useState } from "react";
import { ArrowLeft, ExternalLink, Github, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { projects, getProjectCategories } from "@/data/projects";
import ImageGallery from "@/components/portfolio/ImageGallery";

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Color schemes for different categories
  const categoryColors: { [key: string]: string } = {
    "CRM Automation": "from-blue-500 to-cyan-500",
    "Funnel Builds": "from-purple-500 to-pink-500",
    "Email Marketing": "from-green-500 to-emerald-500",
    "SEO & Analytics": "from-orange-500 to-red-500",
    "Product Development": "from-indigo-500 to-purple-500",
    "Lovable Projects": "from-violet-500 to-purple-500",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-16 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-purple-50/60 to-pink-50/50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800">
              <Sparkles className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">My Work</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Portfolio &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my comprehensive collection of digital solutions, from CRM automation to AI-powered applications. 
              Each project showcases strategic thinking, technical excellence, and measurable results.
            </p>
          </div>

          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Link to="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gradient-to-b from-blue-50/50 via-purple-50/60 to-pink-50/50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className={`bg-gradient-to-r ${categoryColors[project.category] || 'from-gray-500 to-gray-600'} text-white border-none`}>
                      {project.category}
                    </Badge>
                  </div>

                  {/* Image Count Badge */}
                  {project.images && project.images.length > 1 && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-black/70 text-white border-none">
                        +{project.images.length - 1} more
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description.slice(0, 120)}...
                  </CardDescription>
                  
                  {project.tools && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tools.slice(0, 3).map((tool, toolIndex) => (
                        <span 
                          key={toolIndex} 
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                          +{project.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      View Details →
                    </span>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-pink-50/50 via-purple-50/60 to-blue-50/50 dark:from-pink-950/30 dark:via-purple-950/30 dark:to-blue-950/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with strategic automation and cutting-edge solutions.
          </p>
          <Button 
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a href="https://calendly.com/iqrafaisal81/discovery-call?month=2025-04" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </a>
          </Button>
        </div>
      </section>

      {/* Enhanced Project Details Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 max-w-5xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <Badge className={`bg-gradient-to-r ${categoryColors[selectedProject.category] || 'from-gray-500 to-gray-600'} text-white border-none mb-4`}>
                      {selectedProject.category}
                    </Badge>
                  </div>
                </div>
                <DialogDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              
              {/* Enhanced Image Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="mt-4">
                  <ImageGallery 
                    images={selectedProject.images} 
                    title={selectedProject.title}
                  />
                </div>
              ) : (
                <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full object-cover rounded-lg max-h-80"
                  />
                </div>
              )}

              {selectedProject.challenge && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Challenge
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
                </div>
              )}
              
              {selectedProject.solution && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Solution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                </div>
              )}
              
              {selectedProject.results && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Results
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.results}</p>
                </div>
              )}
              
              {selectedProject.tools && selectedProject.tools.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.clientName && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">Client</h3>
                  <p className="text-blue-700 dark:text-blue-200">{selectedProject.clientName}</p>
                </div>
              )}

              {/* Footer with URL Button */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                {selectedProject.url && (
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    asChild
                  >
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      View Live Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                <Button 
                  onClick={() => setModalOpen(false)}
                  variant="outline"
                  className="ml-auto"
                >
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioPage;

