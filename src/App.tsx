
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioPage from "./pages/PortfolioPage";
import WorkflowsPage from "./pages/services/WorkflowsPage";
import FunnelsPage from "./pages/services/FunnelsPage";
import EmailMarketingPage from "./pages/services/EmailMarketingPage";
import SEOAuditsPage from "./pages/services/SEOAuditsPage";
import AIChatbotPage from "./pages/services/AIChatbotPage";
import WebflowPage from "./pages/services/WebflowPage";
import ShopifyPage from "./pages/services/ShopifyPage";
import TrackingAttributionPage from "./pages/services/TrackingAttributionPage";
import ZapierPage from "./pages/services/ZapierPage";
import WordPressPage from "./pages/services/WordPressPage";
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
          />
        } />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services/workflows" element={<WorkflowsPage />} />
        <Route path="/services/funnels" element={<FunnelsPage />} />
        <Route path="/services/email-marketing" element={<EmailMarketingPage />} />
        <Route path="/services/seo-audits" element={<SEOAuditsPage />} />
        <Route path="/services/ai-chatbot" element={<AIChatbotPage />} />
        <Route path="/services/webflow" element={<WebflowPage />} />
        <Route path="/services/shopify" element={<ShopifyPage />} />
        <Route path="/services/tracking-attribution" element={<TrackingAttributionPage />} />
        <Route path="/services/zapier" element={<ZapierPage />} />
        <Route path="/services/wordpress" element={<WordPressPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
