
import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectHighlightsSection from "../components/sections/ProjectHighlightsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import FunnelsSection from "../components/sections/FunnelsSection";
import WorkflowsSection from "../components/sections/WorkflowsSection";
import SEOAuditSection from "../components/sections/SeoAuditsSection";
import PPCAnalyticsSection from "../components/sections/PPCAnalyticsSection";
import AIChatbotSection from "../components/sections/AIChatbotSection";
import EmailMarketingSection from "../components/sections/EmailMarketingSection";
import BookingSection from "../components/sections/BookingSection";
import LovableProjectsSection from "../components/sections/LovableProjectsSection";

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="max-w-full mx-auto">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectHighlightsSection />
        <TestimonialsSection />
        <div id="services-details" className="w-full">
          <FunnelsSection />
          <WorkflowsSection />
          <SEOAuditSection />
          <PPCAnalyticsSection />
          <AIChatbotSection />
          <EmailMarketingSection />
          <LovableProjectsSection />
        </div>
        <BookingSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default Index;
