
import { Check } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="bg-white shadow-lg rounded-xl p-8 border border-black/10 max-w-4xl mx-auto">
          <p className="text-black/80 mb-6">
            Hey! I&apos;m Iqra Faisal, a SaaS developer and CRM automation expert with 6+ years of experience turning business chaos into smooth digital workflows. I specialize in building custom systems using Go High Level, automation frameworks, and full-funnel strategies that just work.
          </p>
          <p className="text-black/80 mb-6">
            I&apos;ve worked across industries like fitness, e-commerce, mental health, bottleless water coolers, HVAC, and professional services—delivering results that speak for themselves. From Google Ads and SEO to funnel design and automation—I&apos;m your one-stop tech & marketing solution.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-black">Industries I&apos;ve Worked With</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <Check className="text-black mt-1 flex-shrink-0" />
                <span className="text-black/80">Fitness & Wellness</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-black mt-1 flex-shrink-0" />
                <span className="text-black/80">E-commerce</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-black mt-1 flex-shrink-0" />
                <span className="text-black/80">Mental Health Services</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-black mt-1 flex-shrink-0" />
                <span className="text-black/80">Bottleless Water Coolers</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-black mt-1 flex-shrink-0" />
                <span className="text-black/80">HVAC Services</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-black mt-1 flex-shrink-0" />
                <span className="text-black/80">Professional Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
