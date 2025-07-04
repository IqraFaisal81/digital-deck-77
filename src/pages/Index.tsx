
import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectHighlightsSection from "../components/sections/ProjectHighlightsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FunnelsSection from "../components/sections/FunnelsSection";
import WorkflowsSection from "../components/sections/WorkflowsSection";
import SEOAuditSection from "../components/sections/SeoAuditsSection";
import PPCAnalyticsSection from "../components/sections/PPCAnalyticsSection";
import AIChatbotSection from "../components/sections/AIChatbotSection";
import EmailMarketingSection from "../components/sections/EmailMarketingSection";
import ContactSection from "../components/sections/ContactSection";

interface IndexProps {
  visibleSection: string | null;
  scrollToSection: (sectionId: string | null) => void;
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  funnelsRef: React.RefObject<HTMLElement>;
  workflowsRef: React.RefObject<HTMLElement>;
  seoAuditsRef: React.RefObject<HTMLElement>;
  ppcAnalyticsRef: React.RefObject<HTMLElement>;
  aiChatbotRef: React.RefObject<HTMLElement>;
  emailMarketingRef: React.RefObject<HTMLElement>;
}

function Index({
  visibleSection,
  scrollToSection,
  isSectionVisible,
  setVisibleSection,
  funnelsRef,
  workflowsRef,
  seoAuditsRef,
  ppcAnalyticsRef,
  aiChatbotRef,
  emailMarketingRef
}: IndexProps) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="max-w-full mx-auto">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection 
          visibleSection={visibleSection} 
          scrollToSection={scrollToSection}
        />
        <ProjectHighlightsSection />
        <TestimonialsSection />
        <div id="services-details" className="w-full">
          <FunnelsSection 
            isSectionVisible={isSectionVisible} 
            setVisibleSection={setVisibleSection} 
            funnelsRef={funnelsRef}
          />
          <WorkflowsSection 
            isSectionVisible={isSectionVisible} 
            setVisibleSection={setVisibleSection} 
            workflowsRef={workflowsRef}
          />
          <SEOAuditSection 
            isSectionVisible={isSectionVisible} 
            setVisibleSection={setVisibleSection} 
            seoAuditsRef={seoAuditsRef}
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
          <EmailMarketingSection 
            isSectionVisible={isSectionVisible} 
            setVisibleSection={setVisibleSection} 
            emailMarketingRef={emailMarketingRef}
          />
        </div>
        <ContactSection />
      </div>
    </div>
  );
}

export default Index;
