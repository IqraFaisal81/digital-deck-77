
import { Check, User, Building, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start max-w-6xl mx-auto">
          <Card className="lg:col-span-3 bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden">
            <CardContent className="p-6">
              <p className="text-gray-800 mb-4 text-lg leading-relaxed">
                Hey! I&apos;m Iqra Faisal, a SaaS developer and CRM automation expert with 6+ years of experience turning business chaos into smooth digital workflows. I specialize in building custom systems using Go High Level, automation frameworks, and full-funnel strategies that just work.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                I&apos;ve worked across industries like fitness, e-commerce, mental health, bottleless water coolers, HVAC, and professional services—delivering results that speak for themselves. From Google Ads and SEO to funnel design and automation—I&apos;m your one-stop tech & marketing solution.
              </p>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2 bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-600">Industries I&apos;ve Worked With</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-3 group p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Fitness & Wellness</span>
                </div>
                <div className="flex items-center space-x-3 group p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">E-commerce</span>
                </div>
                <div className="flex items-center space-x-3 group p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Mental Health Services</span>
                </div>
                <div className="flex items-center space-x-3 group p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Bottleless Water Coolers</span>
                </div>
                <div className="flex items-center space-x-3 group p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">HVAC Services</span>
                </div>
                <div className="flex items-center space-x-3 group p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Professional Services</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
