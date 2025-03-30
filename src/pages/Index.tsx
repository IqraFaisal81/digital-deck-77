
import { useState } from "react";
import { ArrowDown, ArrowRight, Check, ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react";
import { services } from "@/data/services";
import { projects, getProjectCategories, getProjectsByCategory } from "@/data/projects";
import { ProjectType } from "@/types/project";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/components/ProjectModal";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const projectCategories = getProjectCategories();

  const openProjectModal = (project: ProjectType) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-blue-gradient text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="section-padding min-h-screen flex items-center pt-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              John <span className="text-electric">Doe</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-6 animate-fade-in">
              SaaS Developer & Automation Specialist
            </h2>
            <p className="max-w-2xl text-white/70 mb-8 animate-fade-in">
              I help businesses automate workflows, optimize marketing funnels, and drive growth through strategic digital solutions. With 6+ years of experience in CRM systems, marketing automation, and digital strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-electric hover:bg-electric/80 text-white"
                asChild
              >
                <a href="#projects">View My Work<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 hover:bg-white/10"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white/50 hover:text-electric">
              <ArrowDown size={30} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
            <p className="text-white/80 mb-6">
              I'm a full-stack developer and digital marketing specialist with over 6 years of experience helping businesses streamline their operations and grow their online presence. My expertise lies at the intersection of technology and marketing, where I build systems that drive real business results.
            </p>
            <p className="text-white/80 mb-6">
              Having worked across various industries including SaaS, e-commerce, healthcare, and professional services, I bring a diverse perspective to every project. I'm particularly passionate about creating seamless customer journeys through strategic automation and data-driven decision making.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-electric">My Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">CRM Implementation & Automation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Full-Stack Web Development</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Marketing Funnel Optimization</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Digital Marketing Strategy</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Data Analysis & Reporting</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Email Marketing Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="bg-electric/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <service.icon className="text-electric" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          {projectCategories.map((category) => (
            <div key={category} className="mb-20">
              <h3 className="text-2xl font-semibold mb-8 pl-4 border-l-4 border-electric">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {getProjectsByCategory(category).map((project) => (
                  <div 
                    key={project.id} 
                    className="project-card cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  >
                    <div className="relative h-[240px]">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h4 className="text-lg font-semibold">{project.title}</h4>
                        <span className="text-sm text-electric">{project.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ProjectModal 
          project={selectedProject} 
          isOpen={modalOpen} 
          setIsOpen={setModalOpen} 
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-3xl mx-auto">
            <p className="text-white/80 text-center mb-8">
              Interested in working together? Let's discuss how I can help your business grow through strategic automation and digital marketing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="mailto:hello@example.com" 
                className="flex items-center justify-center md:justify-start gap-3 p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
              >
                <Mail className="text-electric" />
                <span>hello@example.com</span>
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center justify-center md:justify-start gap-3 p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
              >
                <Phone className="text-electric" />
                <span>+1 (234) 567-890</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
              >
                <Linkedin className="text-electric" />
                <span>LinkedIn</span>
                <ExternalLink size={14} className="ml-auto" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
              >
                <Github className="text-electric" />
                <span>GitHub</span>
                <ExternalLink size={14} className="ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto text-center text-white/50">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
