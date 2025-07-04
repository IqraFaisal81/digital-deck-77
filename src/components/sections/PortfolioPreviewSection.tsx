

import React from "react";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const PortfolioPreviewSection = () => {
  // Get featured projects (first 6 projects)
  const featuredProjects = projects.slice(0, 6);

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
    <section id="portfolio-preview" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800">
            <Sparkles className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Featured Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Portfolio
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover some of my most impactful projects that showcase innovation, technical excellence, 
            and measurable business results across various industries and technologies.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden h-full">
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

                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => {
                      if (project.id === 14) { // Rewild Body project
                        e.preventDefault();
                        window.open(project.url, '_blank');
                      }
                    }}
                  >
                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
                      <ExternalLink className="text-blue-600 dark:text-blue-400 h-6 w-6" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description.slice(0, 100)}...
                  </CardDescription>
                  
                  {project.tools && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tools.slice(0, 2).map((tool, toolIndex) => (
                        <span 
                          key={toolIndex} 
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                          +{project.tools.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      Visit Website →
                    </span>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 rounded-3xl p-8 lg:p-12 border border-blue-200 dark:border-blue-800 backdrop-blur-sm overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-3xl mx-auto relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Explore My Complete Portfolio
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                Discover more case studies, detailed project breakdowns, and the full scope of my work across 
                different industries and technologies. See how strategic thinking meets technical execution.
              </p>
              <Button 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/portfolio" className="flex items-center">
                  View Full Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreviewSection;

