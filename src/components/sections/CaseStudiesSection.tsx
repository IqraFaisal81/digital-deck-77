
import { useState } from "react";
import { FileText, Clock, BarChart, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CaseStudiesSectionProps {
  isSectionVisible: (sectionId: string) => boolean;
  setVisibleSection: (sectionId: string | null) => void;
  caseStudiesRef: React.RefObject<HTMLElement>;
}

const CaseStudiesSection = ({ isSectionVisible, setVisibleSection, caseStudiesRef }: CaseStudiesSectionProps) => {
  const isVisible = isSectionVisible('case-studies');
  
  return (
    <section 
      id="case-studies" 
      ref={caseStudiesRef} 
      className={`section-padding bg-gradient-to-br from-blue-50 to-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        display: isVisible ? 'block' : 'none',
        height: isVisible ? 'auto' : '0',
        overflow: isVisible ? 'visible' : 'hidden',
        position: 'relative',
        zIndex: isVisible ? '10' : '-1'
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Client Success Stories</h2>
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 text-center">
            Real results for real businesses. Dive into these detailed case studies to see how my strategic approach creates measurable impact.
          </p>
        </div>
        
        {/* Case Study 1: GreyMatters Studio */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100 mb-8">
          <div className="p-6 bg-blue-50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">GreyMatters Studio – Automated Lead Pipeline</h3>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0">
                Mental Health & Neurofeedback
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">CRM Automation</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Funnel Building</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Email Marketing</span>
              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Go High Level</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-blue-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2 text-gray-900">
                    <FileText className="h-5 w-5 text-blue-600" /> The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-800">
                  <p>GreyMatters Studio needed a way to automate lead nurturing for their neurofeedback services. Their team was overwhelmed with manual follow-ups and lacked a proper system to track leads downloading their free resources.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2 text-gray-900">
                    <Clock className="h-5 w-5 text-blue-600" /> The Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-800">
                  <p>I built a customized funnel inside Go High Level that captured users who downloaded the Brain Users Handbook. From there:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Created a tagging system ("DL Brain Users HB") for segmenting these leads.</li>
                    <li>Developed a pipeline stage inside "Patient Pipeline" to track progress.</li>
                    <li>Designed a 12-week automated email workflow that delivered weekly education-based content, helping hesitant leads understand the value of therapy.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2 text-gray-900">
                    <BarChart className="h-5 w-5 text-blue-600" /> The Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-800">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>3x increase in bookings within 6 weeks of implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>48% average open rate across the nurturing sequence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Reduced administrative workload by 70%, allowing the team to focus on client care</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
              <h4 className="text-blue-600 font-semibold mb-2">Key Workflow Components:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="text-sm text-gray-800"><span className="font-medium">Trigger:</span> Lead downloads free resource</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="text-sm text-gray-800"><span className="font-medium">Tagging:</span> Automatic lead categorization</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="text-sm text-gray-800"><span className="font-medium">Nurture:</span> 12-week educational sequence</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="text-sm text-gray-800"><span className="font-medium">Conversion:</span> Booking links + reminders</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 border-t border-gray-100">
            <p className="text-gray-700 italic">
              "Iqra's automation system completely transformed how we follow up with leads. The detailed workflow she created not only saves us time but has significantly increased our conversion rate for people who download our resources."
            </p>
            <p className="text-gray-900 font-medium mt-2">— Sarah Matthews, Director at GreyMatters Studio</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="border border-blue-200 text-blue-600 hover:bg-blue-50"
            onClick={() => setVisibleSection(null)}
          >
            Close Section
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
