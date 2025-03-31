
import { Calendar, Clock, DollarSign, Mail, Phone, Linkedin } from "lucide-react";
import CalendlyWidget from "@/components/CalendlyWidget";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

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
    <section id="booking" className="section-padding py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            <span className="text-blue-600">Contact Me</span> & Book a Consultation
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-700 text-center max-w-2xl">
            Ready to discuss your project? Schedule a free 30-minute consultation below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {/* Calendly widget */}
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 h-[700px]">
            {isClient && (
              <CalendlyWidget 
                url="https://calendly.com/iqrafaisal81/discovery-call" 
                height={700} 
              />
            )}
          </div>
          
          {/* Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white shadow-md border border-gray-100 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Contact Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Email</p>
                      <p className="text-gray-600">iqrafaisal81@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Phone</p>
                      <p className="text-gray-600">+44 7555 859390</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/iqra-faisal-b6687919b/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        linkedin.com/in/iqra-faisal-b6687919b
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md border border-gray-100 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Consultation Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">30-Minute Session</p>
                      <p className="text-gray-600 text-sm">Discuss your requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">Convenient Scheduling</p>
                      <p className="text-gray-600 text-sm">Pick a time that works for you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">$35 per Hour</p>
                      <p className="text-gray-600 text-sm">For ongoing projects</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
