import { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectHighlightsSection = () => {
  return (
    <section id="case-studies" className="section-padding relative bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-electric/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1 bg-electric/10 rounded-full text-electric text-sm font-medium mb-4">
            Featured Case Study
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Real Results for Real Clients
          </h2>
          <p className="text-black/80 text-lg mb-8">
            See how our strategic approach and technical expertise delivered measurable outcomes
            for a mental health practice struggling with lead management and follow-up.
          </p>
        </div>
        
        {/* Case study showcase */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="GreyMatters Studio Neurofeedback Technology" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col h-full">
              <div>
                <h3 className="text-xl font-medium text-electric mb-2">CLIENT SUCCESS STORY</h3>
                <h2 className="text-3xl font-bold mb-4">GreyMatters Studio – Building a Fully Automated Lead Pipeline</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-electric/10 text-electric">CRM Automation</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-electric/10 text-electric">Funnel Building</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-electric/10 text-electric">Email Marketing</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-electric/10 text-electric">Go High Level</span>
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h4>
                  <p className="text-gray-700">
                    GreyMatters Studio needed a way to automate lead nurturing for their neurofeedback services. 
                    Their team was overwhelmed with manual follow-ups and lacked a proper system to track leads 
                    downloading their free resources.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">The Strategy</h4>
                  <p className="text-gray-700 mb-3">
                    I built a customized funnel inside Go High Level that captured users who downloaded the Brain Users Handbook. From there:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Created a tagging system ("DL Brain Users HB") for segmenting these leads.</li>
                    <li>Developed a pipeline stage inside "Patient Pipeline" to track progress.</li>
                    <li>Designed a 12-week automated email workflow that delivered weekly education-based content, helping hesitant leads understand the value of therapy.</li>
                  </ul>
                </div>
                
                <div className="bg-electric/5 p-5 rounded-lg border border-electric/20">
                  <h4 className="text-lg font-semibold text-electric mb-3">The Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-3xl font-bold text-electric">3x</div>
                      <p className="text-gray-700 text-sm">Increase in bookings within 6 weeks</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-3xl font-bold text-electric">48%</div>
                      <p className="text-gray-700 text-sm">Average email open rate</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-3xl font-bold text-electric">70%</div>
                      <p className="text-gray-700 text-sm">Reduction in admin workload</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  className="bg-electric hover:bg-electric/80 text-white w-full py-6 h-auto"
                  asChild
                >
                  <a href="#booking" className="flex items-center justify-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Supporting case study cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">More Client Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all hover:translate-y-[-5px]">
              <CardHeader>
                <CardTitle>Triad DS – Chat Widget Automation</CardTitle>
                <CardDescription>CRM Automation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Built a smart system that auto-tags leads, triggers SMS/email replies, and syncs with Google Ads to simplify tracking and retargeting.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-electric hover:text-electric/80 w-full" asChild>
                  <a href="#booking" className="flex items-center justify-center">
                    Get Similar Results <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-all hover:translate-y-[-5px]">
              <CardHeader>
                <CardTitle>All Pro – Lead Nurture Workflow</CardTitle>
                <CardDescription>Email Automation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Automated lead follow-up across channels using conditional logic, improving engagement and conversions.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-electric hover:text-electric/80 w-full" asChild>
                  <a href="#booking" className="flex items-center justify-center">
                    Get Similar Results <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-all hover:translate-y-[-5px]">
              <CardHeader>
                <CardTitle>Pure Water - E-commerce Sales Funnel</CardTitle>
                <CardDescription>Funnel Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Designed a multi-step sales funnel for bottleless water coolers, increasing lead conversion by 45% and reducing acquisition costs.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-electric hover:text-electric/80 w-full" asChild>
                  <a href="#booking" className="flex items-center justify-center">
                    Get Similar Results <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        {/* Call-to-action */}
        <div className="max-w-5xl mx-auto bg-electric/10 p-8 rounded-2xl shadow-sm border border-electric/20">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Ready for Your Own Success Story?</h3>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's discuss how my expertise in automation, funnel building, and digital marketing can help your business achieve similar results.
          </p>
          <div className="text-center">
            <Button 
              className="bg-electric hover:bg-electric/80 text-white px-8 py-6 h-auto text-lg font-medium rounded-lg"
              asChild
            >
              <a href="#booking" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Strategy Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlightsSection;
