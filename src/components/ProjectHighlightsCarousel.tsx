import { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ProjectType } from "@/types/project";
import { clients } from "@/data/clients";
import { sectionIds } from "@/data/services";

// Define project highlights data with more detailed case studies
const projectHighlights = [
  {
    id: 7,
    title: "GreyMatters Studio – Automated Lead Pipeline",
    shortDescription: "Building a fully automated lead pipeline in Go High Level for a mental health studio",
    description: "Developed a comprehensive automation system for neurofeedback lead nurturing, tracking, and conversion, resulting in 3x increase in bookings.",
    image: `https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    category: "CRM Automation",
    technologies: ["Go High Level", "Email Automation", "Funnel Building", "Lead Tracking"],
    relatedService: "workflows",
    clientName: "GreyMatters Studio",
    challenge: "GreyMatters Studio needed a way to automate lead nurturing for their neurofeedback services. Their team was overwhelmed with manual follow-ups and lacked a proper system to track leads downloading their free resources.",
    solution: "Built a customized funnel inside Go High Level that captured users who downloaded the Brain Users Handbook. Created a tagging system for segmenting leads. Developed a pipeline stage inside 'Patient Pipeline' to track progress. Designed a 12-week automated email workflow that delivered weekly education-based content.",
    results: "3x increase in bookings within 6 weeks of implementation. 48% average open rate across the nurturing sequence. Reduced administrative workload by 70%, allowing the team to focus on client care."
  },
  {
    id: 1,
    title: "Triad Diagnostic Solutions - Redesign",
    shortDescription: "Complete rebrand and website overhaul with CRM integration",
    description: "Full website redesign with custom inventory system and customer portal integration. Added automated workflows for inventory management and order processing.",
    image: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    category: "Web Development",
    technologies: ["Go High Level", "WordPress", "WooCommerce", "JavaScript"],
    relatedService: "workflows",
    clientName: "Triad Diagnostic Solutions",
    challenge: "The client had an outdated website with manual inventory tracking that was causing errors and delays. Customer service was overwhelmed with basic inquiries.",
    solution: "Implemented a modern responsive website with inventory management system and customer portal. Created automated workflows for order processing and customer notifications.",
    results: "Inventory errors reduced by 95%, customer service inquiries reduced by 60%, and order processing time cut by 75%."
  },
  {
    id: 2,
    title: "All Pro - Service Booking System",
    shortDescription: "HVAC service scheduling system with automated follow-ups",
    description: "Built an integrated service booking system with customer notifications, technician scheduling, and automated follow-up sequences to improve customer retention.",
    image: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    category: "Automation",
    technologies: ["Go High Level", "Twilio", "Zapier", "Calendar API"],
    relatedService: "workflows",
    clientName: "All Pro Heating & Cooling",
    challenge: "Technicians were double-booked, customers experienced long wait times, and follow-up appointments were frequently missed.",
    solution: "Developed an integrated booking system with automated confirmations, reminders, and technician assignment. Created a follow-up sequence for maintenance reminders.",
    results: "Reduced scheduling errors by 100%, decreased no-shows by 75%, and increased recurring maintenance appointments by 45%."
  },
  {
    id: 3,
    title: "Grey Matters - SEO & Content Strategy",
    shortDescription: "Complete SEO overhaul for mental health services",
    description: "Comprehensive SEO audit and implementation for a mental health studio, resulting in 300% increase in organic traffic and first-page rankings for key terms.",
    image: `https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    category: "SEO",
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Content Strategy"],
    relatedService: "seo-audits",
    clientName: "Grey Matters",
    challenge: "Despite offering excellent services, the client was virtually invisible in search results and struggling to attract new patients.",
    solution: "Conducted comprehensive keyword research, implemented technical SEO fixes, created an ongoing content strategy focused on mental health topics, and built quality backlinks.",
    results: "Achieved first page rankings for 28 target keywords, increased organic traffic by 300%, and doubled monthly new patient inquiries."
  },
  {
    id: 4,
    title: "Pure Water - E-commerce Sales Funnel",
    shortDescription: "High-converting funnel for bottleless water coolers",
    description: "Designed and implemented a multi-step sales funnel for a bottleless water cooler company, increasing lead conversion rate by 45% and reducing customer acquisition cost.",
    image: `https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    category: "Funnel Development",
    technologies: ["Go High Level", "Facebook Ads", "Google Ads", "Email Automation"],
    relatedService: "funnels",
    clientName: "Pure Water",
    challenge: "High ad spend was not resulting in enough qualified leads or sales. The sales process was unclear and lacked proper follow-up.",
    solution: "Created a multi-step funnel with educational content, qualification questions, and automated follow-up sequences. Integrated with ad platforms for retargeting.",
    results: "Reduced cost per acquisition by 38%, increased lead-to-sale conversion by 45%, and improved average order value by 22%."
  },
  {
    id: 5,
    title: "March On Mission - Email Campaign",
    shortDescription: "Nonprofit donation email sequence with storytelling",
    description: "Crafted a compelling email campaign for a nonprofit, featuring personal stories and impact metrics that resulted in a 28% increase in donations from email channels.",
    image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    category: "Email Marketing",
    technologies: ["Mailchimp", "Copy Writing", "A/B Testing", "Segmentation"],
    relatedService: "email-marketing",
    clientName: "March on Mission",
    challenge: "The organization had a large email list but low engagement and donation rates. Messages lacked personal connection and clear calls to action.",
    solution: "Developed a storytelling-based email series highlighting individual impact stories, implemented A/B testing for subject lines, and created segmented donor journeys.",
    results: "Improved email open rates by 65%, click-through rates by 43%, and increased donation revenue from email by 28%."
  },
  {
    id: 6,
    title: "GetSAID - AI Support Chatbot",
    shortDescription: "Custom AI chatbot for intelligent customer support",
    description: "Developed and deployed an intelligent chatbot handling customer inquiries, appointment booking, and lead qualification without human intervention.",
    image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    category: "AI Development",
    technologies: ["Go High Level", "OpenAI", "NLP", "Automation"],
    relatedService: "ai-chatbot",
    clientName: "GetSAID",
    challenge: "Support team was overwhelmed with basic questions and booking requests. Lead qualification was inconsistent and often incomplete.",
    solution: "Implemented an AI-powered chatbot that handles common questions, books appointments, and qualifies leads based on custom criteria before handing off to human agents.",
    results: "Reduced support tickets by 65%, increased after-hours lead capture by 100%, and improved lead qualification accuracy by 40%."
  }
];

const ProjectHighlightsCarousel = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectHighlights[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const openProjectModal = (project: typeof projectHighlights[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projectHighlights.map((project) => (
            <CarouselItem key={project.id} className="basis-full md:basis-1/2 lg:basis-1/3 h-full">
              <div 
                className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-electric/30 transition-all hover:shadow-lg hover:shadow-electric/20 hover:scale-[1.02] cursor-pointer h-full flex flex-col"
                onClick={() => openProjectModal(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4 flex-1">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-electric/20 text-electric"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">
                      Related: {sectionIds.includes(project.relatedService) ? 
                        <button 
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering parent onClick
                            scrollToServiceSection(project.relatedService);
                          }}
                          className="text-electric hover:underline"
                        >
                          {project.relatedService.replace("-", " ")}
                        </button> : 
                        project.relatedService
                      }
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-electric hover:text-electric/80 p-0 flex items-center"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering parent onClick
                        scrollToServiceSection(project.relatedService);
                      }}
                    >
                      Go to Service <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 border-none" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 border-none" />
      </Carousel>

      {/* Project Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-royal/90 backdrop-blur-xl border border-white/10 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-white/80">
                  {selectedProject.category} for {selectedProject.clientName}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 bg-black/30 p-4 rounded-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto rounded-lg mb-6"
                />
                
                <div className="space-y-4">
                  <p className="text-white/80">{selectedProject.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-electric mb-2">Challenge</h4>
                    <p className="text-white/80">{selectedProject.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-electric mb-2">Solution</h4>
                    <p className="text-white/80">{selectedProject.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-electric mb-2">Results</h4>
                    <p className="text-white/80">{selectedProject.results}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-electric mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-sm px-3 py-1 rounded-full bg-electric/20 text-electric"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-electric/10 rounded-lg border border-electric/20">
                    <h4 className="text-lg font-semibold text-white mb-2">Interested in a similar solution?</h4>
                    <p className="text-white/80 mb-4">Let's discuss how I can help you achieve comparable results for your business.</p>
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
                <Button 
                  variant="ghost"
                  className="border border-white/20 hover:bg-white/10"
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
                
                <Button 
                  onClick={() => setModalOpen(false)}
                  variant="ghost"
                  className="border border-white/20 hover:bg-white/10"
                >
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectHighlightsCarousel;
