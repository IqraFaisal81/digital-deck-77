
import { Check, User, Building, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          {/* Main content */}
          <Card className="lg:col-span-3 bg-white shadow-md border border-gray-100 overflow-hidden">
            <CardContent className="p-8">
              <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                Hey! I&apos;m Iqra Faisal, a SaaS developer and CRM automation expert with 6+ years of experience turning business chaos into smooth digital workflows. I specialize in building custom systems using Go High Level, automation frameworks, and full-funnel strategies that just work.
              </p>
              <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                I&apos;ve worked across industries like fitness, e-commerce, mental health, bottleless water coolers, HVAC, and professional services—delivering results that speak for themselves. From Google Ads and SEO to funnel design and automation—I&apos;m your one-stop tech & marketing solution.
              </p>
            </CardContent>
          </Card>
          
          {/* Industries list */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-white shadow-md border border-gray-100 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-600">Industries I&apos;ve Worked With</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Fitness & Wellness</span>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">E-commerce</span>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Mental Health Services</span>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Bottleless Water Coolers</span>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Check className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">HVAC Services</span>
                </div>
                <div className="flex items-start space-x-3 group">
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
