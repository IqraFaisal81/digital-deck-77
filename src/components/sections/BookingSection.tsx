import { Calendar, Clock, DollarSign, Mail, Phone, Linkedin } from "lucide-react";
import CalendlyWidget from "@/components/CalendlyWidget";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { useEffect, useState } from "react";

const BookingSection = () => {
  const [isClient, setIsClient] = useState(false);

  // Use this to ensure we only render client-side components after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="booking" className="section-padding py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/10 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-electric">Contact Me</span> & Book a Consultation
          </h2>
          <div className="w-20 h-1 bg-electric mb-6"></div>
          <p className="text-white/80 text-center max-w-2xl">
            Ready to discuss your project? Schedule a free 30-minute consultation or send me a message below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Left side - Contact form and info */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-electric">Send Me a Message</h3>
                <ContactForm />
              </CardContent>
            </Card>
            
            <Card className="bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-electric">Contact Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">Email</p>
                      <p className="text-white/70">iqrafaisal81@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">Phone</p>
                      <p className="text-white/70">+44 7555 859390</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/iqra-faisal-b6687919b/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-electric hover:underline"
                      >
                        linkedin.com/in/iqra-faisal-b6687919b
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-electric">Consultation Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">30-Minute Session</p>
                      <p className="text-white/70 text-sm">Discuss your requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">Convenient Scheduling</p>
                      <p className="text-white/70 text-sm">Pick a time that works for you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-electric" />
                    </div>
                    <div>
                      <p className="text-white/90 font-medium">$35 per Hour</p>
                      <p className="text-white/70 text-sm">For ongoing projects</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right side - Calendly widget */}
          <div className="lg:col-span-8 bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 h-[700px] flex">
            {isClient && (
              <CalendlyWidget 
                url="https://calendly.com/iqrafaisal81/discovery-call" 
                height={700} 
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
