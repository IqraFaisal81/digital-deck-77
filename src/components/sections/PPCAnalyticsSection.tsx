
import { Button } from "@/components/ui/button";
import PPCCarousel from "@/components/PPCCarousel";
import { Check, ArrowRight, Calendar, ChartBar, BarChart3, TrendingUp, Target, LineChart } from "lucide-react";
import { scrollToServiceSection } from "@/utils/ScrollToServiceUtils";

interface PPCAnalyticsSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  ppcAnalyticsRef: React.RefObject<HTMLElement>;
}

const PPCAnalyticsSection = ({ isSectionVisible, setVisibleSection, ppcAnalyticsRef }: PPCAnalyticsSectionProps) => {
  const isVisible = isSectionVisible('ppc-analytics');
  
  return (
    <section 
      id="ppc-analytics" 
      ref={ppcAnalyticsRef} 
      className={`section-padding bg-gradient-to-br from-blue-100 to-white dark:from-blue-950/50 dark:to-gray-900 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.2),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block mb-3 bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg">
            <ChartBar className="h-8 w-8 text-blue-600 dark:text-electric" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-500 dark:from-electric dark:to-indigo-400">PPC & Analytics</h2>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Data-driven campaigns that generate <span className="font-semibold text-blue-600 dark:text-blue-400">real business results</span>. I build, manage, and optimize paid advertising campaigns across multiple platforms, with comprehensive tracking and reporting.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 shadow-xl rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-electric dark:to-blue-500 p-3 rounded-xl shadow-md mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-500 dark:from-electric dark:to-indigo-400">PPC Services</h3>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/40 rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="text-blue-600 dark:text-electric h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">Google Ads Management</h4>
                    <p className="text-gray-600 dark:text-gray-300">Optimized search, display, and video campaigns with strategic keyword targeting and ad creation for maximum ROI.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/40 rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="text-blue-600 dark:text-electric h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">Meta Ads Optimization</h4>
                    <p className="text-gray-600 dark:text-gray-300">Facebook and Instagram ad campaigns with advanced audience targeting, creative testing, and performance optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 shadow-xl rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 p-3 rounded-xl shadow-md mr-4">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Analytics & Tracking</h3>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/40 rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="text-indigo-600 dark:text-indigo-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">Analytics & Reporting</h4>
                    <p className="text-gray-600 dark:text-gray-300">Comprehensive performance tracking with custom dashboards and actionable insights to guide optimization decisions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/40 rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="text-indigo-600 dark:text-indigo-400 h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">Conversion Optimization</h4>
                    <p className="text-gray-600 dark:text-gray-300">Landing page improvements and funnel enhancements to maximize ROI from paid traffic and increase conversion rates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-500 dark:from-electric dark:to-indigo-400">Campaign Examples & Analytics</h3>
        
        <div className="mb-12 rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900/50 shadow-xl">
          <PPCCarousel />
        </div>
        
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-10 border border-blue-100 dark:border-blue-900/50 shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-electric dark:to-blue-500 p-3 rounded-xl shadow-md mr-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-500 dark:from-electric dark:to-indigo-400">Campaign Results</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/60 dark:bg-gray-800/40 rounded-xl p-6 shadow-md flex items-start space-x-4 transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-100 dark:bg-blue-900/40 rounded-full p-2 mt-1 flex-shrink-0">
                <Check className="text-blue-600 dark:text-electric h-5 w-5" />
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Increased conversion rates by <span className="text-blue-600 dark:text-blue-400">32%</span> for local service business
                </span>
              </div>
            </div>
            
            <div className="bg-white/60 dark:bg-gray-800/40 rounded-xl p-6 shadow-md flex items-start space-x-4 transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-100 dark:bg-blue-900/40 rounded-full p-2 mt-1 flex-shrink-0">
                <Check className="text-blue-600 dark:text-electric h-5 w-5" />
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Reduced cost-per-lead by <span className="text-blue-600 dark:text-blue-400">47%</span> through strategic audience targeting
                </span>
              </div>
            </div>
            
            <div className="bg-white/60 dark:bg-gray-800/40 rounded-xl p-6 shadow-md flex items-start space-x-4 transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-100 dark:bg-blue-900/40 rounded-full p-2 mt-1 flex-shrink-0">
                <Check className="text-blue-600 dark:text-electric h-5 w-5" />
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Built comprehensive analytics dashboards for <span className="text-blue-600 dark:text-blue-400">real-time</span> campaign monitoring
                </span>
              </div>
            </div>
            
            <div className="bg-white/60 dark:bg-gray-800/40 rounded-xl p-6 shadow-md flex items-start space-x-4 transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-100 dark:bg-blue-900/40 rounded-full p-2 mt-1 flex-shrink-0">
                <Check className="text-blue-600 dark:text-electric h-5 w-5" />
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Achieved <span className="text-blue-600 dark:text-blue-400">280% ROAS</span> for e-commerce client through optimized product campaigns
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button 
            onClick={() => {
              scrollToServiceSection('ppc-analytics');
            }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white dark:from-electric dark:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500 transition-colors font-semibold py-6 px-8 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => {
              scrollToServiceSection('booking');
            }}
            className="border-2 border-blue-300 dark:border-blue-800 text-blue-600 dark:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/30 font-semibold py-6 px-8 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Book Consultation <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            className="border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-electric hover:bg-blue-50 dark:hover:bg-blue-900/50 font-semibold"
            onClick={() => setVisibleSection(null)}
          >
            Close Section
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PPCAnalyticsSection;
