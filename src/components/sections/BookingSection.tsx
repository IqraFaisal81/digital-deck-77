
import { Calendar, Clock, DollarSign, Mail, Phone, Linkedin } from "lucide-react";
import CalendlyWidget from "@/components/CalendlyWidget";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/skills/SectionHeader";

const BookingSection = () => {
  const [isClient, setIsClient] = useState(false);

  // Use this to ensure we only render client-side components after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load Calendly script
  useEffect(() => {
    // Load Calendly script only if it hasn't been loaded yet
    if (!document.getElementById('calendly-script') && isClient) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isClient]);

  return (
    <section id="booking" className="section-padding py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-electric/10 dark:bg-electric/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-royal/10 dark:bg-royal/5 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto relative z-10 px-4 md:px-0">
        <SectionHeader
          title={<>Book Your Free Consultation</>}
          description="Discuss your project with me in a complimentary 30-minute discovery call."
          alignment="center"
          useGradient={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="overflow-hidden border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric">Contact Details</h3>
                
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-royal/10 to-electric/10 dark:bg-gradient-to-r dark:from-royal/20 dark:to-electric/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-royal dark:text-electric font-medium text-sm">Email</p>
                      <a href="mailto:iqrafaisal81@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-electric transition-colors">
                        iqrafaisal81@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-royal/10 to-electric/10 dark:bg-gradient-to-r dark:from-royal/20 dark:to-electric/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Phone className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-royal dark:text-electric font-medium text-sm">Phone</p>
                      <a href="tel:+447555859390" className="text-gray-700 dark:text-gray-300 hover:text-electric transition-colors">
                        +44 7555 859390
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-royal/10 to-electric/10 dark:bg-gradient-to-r dark:from-royal/20 dark:to-electric/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Linkedin className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-royal dark:text-electric font-medium text-sm">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/iqra-faisal-b6687919b/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-electric transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-royal to-electric">Session Details</h3>
                
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-royal/10 to-electric/10 dark:bg-gradient-to-r dark:from-royal/20 dark:to-electric/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Calendar className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-royal dark:text-electric font-medium">Free 30-Minute Call</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">No obligation discovery session</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-royal/10 to-electric/10 dark:bg-gradient-to-r dark:from-royal/20 dark:to-electric/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Clock className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-royal dark:text-electric font-medium">Flexible Scheduling</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Choose a time that works for you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-royal/10 to-electric/10 dark:bg-gradient-to-r dark:from-royal/20 dark:to-electric/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <DollarSign className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-royal dark:text-electric font-medium">$25 per Hour</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">For ongoing projects after consultation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Calendly widget */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 h-[700px]">
              {isClient && (
                <CalendlyWidget 
                  url="https://calendly.com/iqrafaisal81/discovery-call" 
                  height={700} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
