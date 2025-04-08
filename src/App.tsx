
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useState, useRef } from "react";
import { ScrollToServiceUtils } from "./utils/ScrollToServiceUtils";

function App() {
  const [visibleSection, setVisibleSection] = useState<string | null>(null);
  
  // Create refs for each section
  const funnelsRef = useRef<HTMLElement>(null);
  const workflowsRef = useRef<HTMLElement>(null);
  const seoAuditsRef = useRef<HTMLElement>(null);
  const ppcAnalyticsRef = useRef<HTMLElement>(null);
  const aiChatbotRef = useRef<HTMLElement>(null);
  const emailMarketingRef = useRef<HTMLElement>(null);
  const lovableProjectsRef = useRef<HTMLElement>(null);
  
  const isSectionVisible = (sectionId: string): boolean => {
    return visibleSection === sectionId;
  };
  
  useEffect(() => {
    ScrollToServiceUtils.setupScrollHandlers();
    
    // Setup event listener for showing sections
    const handleShowSection = (event: CustomEvent) => {
      const { sectionId } = event.detail;
      setVisibleSection(sectionId);
    };
    
    document.addEventListener('show-section', handleShowSection as EventListener);
    
    return () => {
      document.removeEventListener('show-section', handleShowSection as EventListener);
    };
  }, []);

  return (
    <div className="mobile-overflow-fix">
      <Routes>
        <Route path="/" element={
          <Index 
            visibleSection={visibleSection}
            scrollToSection={ScrollToServiceUtils.scrollToServiceSection}
            isSectionVisible={isSectionVisible}
            setVisibleSection={setVisibleSection}
            funnelsRef={funnelsRef}
            workflowsRef={workflowsRef}
            seoAuditsRef={seoAuditsRef}
            ppcAnalyticsRef={ppcAnalyticsRef}
            aiChatbotRef={aiChatbotRef}
            emailMarketingRef={emailMarketingRef}
            lovableProjectsRef={lovableProjectsRef}
          />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
