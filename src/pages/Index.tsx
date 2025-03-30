
import { useState } from "react";
import { ArrowDown, ArrowRight, Check, ExternalLink, Github, Linkedin, Mail, Phone, Rocket } from "lucide-react";
import { services } from "@/data/services";
import { projects, getProjectCategories, getProjectsByCategory } from "@/data/projects";
import { ProjectType } from "@/types/project";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/components/ProjectModal";
import ContactForm from "@/components/ContactForm";
import WorkflowCarousel from "@/components/WorkflowCarousel";

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
            <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden shadow-lg animate-fade-in">
              <img 
                src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png" 
                alt="Iqra Faisal" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in flex items-center justify-center">
              <Rocket className="mr-2 text-electric" />
              Iqra <span className="text-electric">Faisal</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-6 animate-fade-in">
              SaaS Developer · CRM Automation Specialist · Digital Marketing Pro
            </h2>
            <p className="max-w-2xl text-white/70 mb-8 animate-fade-in">
              Building smart systems, automating success, and scaling businesses with code & creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-electric hover:bg-electric/80 text-white"
                asChild
              >
                <a href="#contact">Let's Work Together<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 hover:bg-white/10"
                asChild
              >
                <a href="#projects">View My Work</a>
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
              Hey! I'm Iqra Faisal, a SaaS developer and CRM automation expert with 6+ years of experience turning business chaos into smooth digital workflows. I specialize in building custom systems using Go High Level, automation frameworks, and full-funnel strategies that just work.
            </p>
            <p className="text-white/80 mb-6">
              I've worked across industries like fitness, e-commerce, mental health, bottleless water coolers, HVAC, and professional services—delivering results that speak for themselves. From Google Ads and SEO to funnel design and automation—I'm your one-stop tech & marketing solution.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-electric">Industries I've Worked With</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Fitness & Wellness</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">E-commerce</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Mental Health Services</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Bottleless Water Coolers</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">HVAC Services</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Professional Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Do</h2>
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

      {/* Workflow Automation Section */}
      <section id="workflows" className="section-padding">
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
                <span className="text-white/80">40% increase in lead conversion rates via tailored nurture workflows</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">100% automated chat-to-lead tagging system built for Triad DS</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">50+ hours/month saved on manual follow-ups for All Pro</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Recovered abandoned carts and boosted sales for Triad's Autel store</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Project Highlights</h2>
          
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
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
            <p className="text-white/80 text-center mb-8">
              Let's build something great together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <a 
                href="mailto:iqrafaisal81@gmail.com" 
                className="flex items-center justify-center md:justify-start gap-3 p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
              >
                <Mail className="text-electric" />
                <span>iqrafaisal81@gmail.com</span>
              </a>
              <a 
                href="tel:+447555859390" 
                className="flex items-center justify-center md:justify-start gap-3 p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
              >
                <Phone className="text-electric" />
                <span>+44 7555 859390 | +92 331 0043676</span>
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
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto text-center text-white/50">
          <p>© {new Date().getFullYear()} Iqra Faisal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
