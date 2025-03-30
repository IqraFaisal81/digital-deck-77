
import { useState, useRef, useEffect } from "react";
import { ProjectType } from "@/types/project";
import Navbar from "@/components/Navbar";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";

// Import all section components
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkflowsSection from "@/components/sections/WorkflowsSection";
import FunnelsSection from "@/components/sections/FunnelsSection";
import SeoAuditsSection from "@/components/sections/SeoAuditsSection";
import EmailMarketingSection from "@/components/sections/EmailMarketingSection";
import PPCAnalyticsSection from "@/components/sections/PPCAnalyticsSection";
import AIChatbotSection from "@/components/sections/AIChatbotSection";
import LovableProjectsSection from "@/components/sections/LovableProjectsSection";
import BookingSection from "@/components/sections/BookingSection";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState<string | null>(null);
  
  // Refs for scrolling to sections
  const workflowsRef = useRef<HTMLElement>(null);
  const seoAuditsRef = useRef<HTMLElement>(null);
  const funnelsRef = useRef<HTMLElement>(null);
  const emailMarketingRef = useRef<HTMLElement>(null);
  const ppcAnalyticsRef = useRef<HTMLElement>(null);
  const aiChatbotRef = useRef<HTMLElement>(null);
  const lovableProjectsRef = useRef<HTMLElement>(null);

  const openProjectModal = (project: ProjectType) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const scrollToSection = (sectionId: string | null) => {
    if (!sectionId) return;
    
    // Only scroll, but don't toggle visibility - we want case studies to always be visible
    setTimeout(() => {
      if (sectionId === "workflows" && workflowsRef.current) {
        workflowsRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "seo-audits" && seoAuditsRef.current) {
        seoAuditsRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "funnels" && funnelsRef.current) {
        funnelsRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "email-marketing" && emailMarketingRef.current) {
        emailMarketingRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "ppc-analytics" && ppcAnalyticsRef.current) {
        ppcAnalyticsRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "ai-chatbot" && aiChatbotRef.current) {
        aiChatbotRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "lovable-projects" && lovableProjectsRef.current) {
        lovableProjectsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Always show all sections by default
  const isSectionVisible = () => true;

  useEffect(() => {
    // Add event listener for showing services sections from project modals
    const handleShowSection = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.sectionId) {
        scrollToSection(customEvent.detail.sectionId);
      }
    };

    document.addEventListener('show-section', handleShowSection);
    
    return () => {
      document.removeEventListener('show-section', handleShowSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-blue-gradient text-white overflow-x-hidden">
      <Navbar />
      
      {/* All sections */}
      <HomeSection />
      <AboutSection />
      <ClientsSection />
      <ServicesSection 
        visibleSection={visibleSection} 
        scrollToSection={scrollToSection} 
      />
      <WorkflowsSection 
        isSectionVisible={isSectionVisible} 
        setVisibleSection={setVisibleSection} 
        workflowsRef={workflowsRef} 
      />
      <FunnelsSection 
        isSectionVisible={isSectionVisible} 
        setVisibleSection={setVisibleSection} 
        funnelsRef={funnelsRef} 
      />
      <SeoAuditsSection 
        isSectionVisible={isSectionVisible} 
        setVisibleSection={setVisibleSection} 
        seoAuditsRef={seoAuditsRef} 
      />
      <EmailMarketingSection 
        isSectionVisible={isSectionVisible} 
        setVisibleSection={setVisibleSection} 
        emailMarketingRef={emailMarketingRef} 
      />
      <PPCAnalyticsSection 
        isSectionVisible={isSectionVisible} 
        setVisibleSection={setVisibleSection} 
        ppcAnalyticsRef={ppcAnalyticsRef} 
      />
      <AIChatbotSection 
        isSectionVisible={isSectionVisible} 
        setVisibleSection={setVisibleSection} 
        aiChatbotRef={aiChatbotRef} 
      />
      <LovableProjectsSection 
        isSectionVisible={isSectionVisible} 
        setVisibleSection={setVisibleSection} 
        lovableProjectsRef={lovableProjectsRef} 
      />
      <BookingSection />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Index;
