import { useState, useRef, useEffect } from "react";
import { ArrowDown, ArrowRight, Check, ExternalLink, Github, Linkedin, Mail, Phone, Rocket } from "lucide-react";
import { services, sectionIds } from "@/data/services";
import { projects, getProjectCategories, getProjectsByCategory } from "@/data/projects";
import { ProjectType } from "@/types/project";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ProjectModal from "@/components/ProjectModal";
import ContactForm from "@/components/ContactForm";
import WorkflowCarousel from "@/components/WorkflowCarousel";
import SEOAuditCarousel from "@/components/SEOAuditCarousel";
import FunnelCarousel from "@/components/FunnelCarousel";
import EmailMarketingCarousel from "@/components/EmailMarketingCarousel";
import PPCCarousel from "@/components/PPCCarousel";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, CartesianGrid, Tooltip, Legend } from "recharts";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import AIChatbotCarousel from "@/components/AIChatbotCarousel";
import LovableProjectsCarousel from "@/components/LovableProjectsCarousel";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const projectCategories = getProjectCategories();
  
  const [visibleSection, setVisibleSection] = useState<string | null>(null);
  
  const workflowsRef = useRef<HTMLElement>(null);
  const seoAuditsRef = useRef<HTMLElement>(null);
  const funnelsRef = useRef<HTMLElement>(null);
  const emailMarketingRef = useRef<HTMLElement>(null);
  const ppcAnalyticsRef = useRef<HTMLElement>(null);
  const aiChatbotRef = useRef<HTMLElement>(null);
  const lovableProjectsRef = useRef<HTMLElement>(null);

  const openProjectModal = (project: ProjectType) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const scrollToSection = (sectionId: string | null) => {
    if (!sectionId) return;
    
    setVisibleSection(prevSection => prevSection === sectionId ? null : sectionId);
    
    setTimeout(() => {
      if (sectionId === "workflows" && workflowsRef.current) {
        workflowsRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "seo-audits" && seoAuditsRef.current) {
        seoAuditsRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "funnels" && funnelsRef.current) {
        funnelsRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "email-marketing" && emailMarketingRef.current) {
        emailMarketingRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "ppc-analytics" && ppcAnalyticsRef.current) {
        ppcAnalyticsRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "ai-chatbot" && aiChatbotRef.current) {
        aiChatbotRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (sectionId === "lovable-projects" && lovableProjectsRef.current) {
        lovableProjectsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const isSectionVisible = (sectionId: string) => {
    return visibleSection === sectionId;
  };

  const seoPerformanceData = [
    { 
      name: 'Cojali USA', 
      clicks: 2420, 
      impressions: 67000,
      ctr: 3.6,
      avgPosition: 20 
    },
    { 
      name: 'Grey Matters', 
      clicks: 1200, 
      impressions: 31000,
      ctr: 3.9,
      avgPosition: 14 
    },
    { 
      name: 'Call All Pro', 
      clicks: 900, 
      impressions: 26000,
      ctr: 3.5,
      avgPosition: 23 
    }
  ];

  return (
    <div className="min-h-screen bg-blue-gradient text-white overflow-x-hidden">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="section-padding min-h-screen flex items-center pt-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden shadow-lg animate-fade-in">
              <img 
                src="/lovable-uploads/934937cb-710e-4f8e-aa1e-757407b8a2ab.png" 
                alt="Iqra Faisal" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in flex items-center justify-center">
              <Rocket className="mr-2 text-electric" />
              Iqra <span className="text-electric">Faisal</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-6 animate-fade-in">
              SaaS Developer · CRM Automation Specialist · Digital Marketing Pro
            </h2>
            <p className="max-w-2xl text-white/70 mb-8 animate-fade-in">
              Building smart systems, automating success, and scaling businesses with code & creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-electric hover:bg-electric/80 text-white"
                asChild
              >
                <a href="#contact">Let&apos;s Work Together<ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 hover:bg-white/10"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white/50 hover:text-electric">
              <ArrowDown size={30} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
            <p className="text-white/80 mb-6">
              Hey! I&apos;m Iqra Faisal, a SaaS developer and CRM automation expert with 6+ years of experience turning business chaos into smooth digital workflows. I specialize in building custom systems using Go High Level, automation frameworks, and full-funnel strategies that just work.
            </p>
            <p className="text-white/80 mb-6">
              I&apos;ve worked across industries like fitness, e-commerce, mental health, bottleless water coolers, HVAC, and professional services—delivering results that speak for themselves. From Google Ads and SEO to funnel design and automation—I&apos;m your one-stop tech & marketing solution.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-electric">Industries I&apos;ve Worked With</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Fitness & Wellness</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">E-commerce</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Mental Health Services</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Bottleless Water Coolers</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">HVAC Services</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Check className="text-electric mt-1 flex-shrink-0" />
                  <span className="text-white/80">Professional Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`service-card ${service.sectionId ? 'cursor-pointer hover:bg-black/20' : ''} ${service.sectionId && visibleSection === service.sectionId ? 'ring-2 ring-electric' : ''}`}
                onClick={() => scrollToSection(service.sectionId)}
              >
                <div className="bg-electric/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <service.icon className="text-electric" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
                {service.sectionId && (
                  <div className="mt-3 text-electric text-sm flex items-center">
                    <span>{visibleSection === service.sectionId ? 'Hide details' : 'View details'}</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows Section */}
      <section id="workflows" ref={workflowsRef} className={`section-padding transition-all duration-300 ${isSectionVisible('workflows') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Workflow Automations</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-white/80 text-center">
              Tired of manual follow-ups, messy data, and missed leads? I build smart, scalable workflow automations using Go High Level that simplify your processes, boost productivity, and close more deals—without lifting a finger.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-electric">What I Automate:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Lead Nurturing Sequences</h4>
                <p className="text-sm text-white/70">Trigger personalized emails, SMS, and task reminders based on tags, pipeline stages, or behaviors.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Chat Widget Workflows</h4>
                <p className="text-sm text-white/70">Instantly engage leads, tag them based on source, and auto-notify your team via SMS, email, or Slack.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Abandoned Cart Recovery</h4>
                <p className="text-sm text-white/70">Re-engage lost customers with smart reminders, product summaries, and upsell flows.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Onboarding Funnels</h4>
                <p className="text-sm text-white/70">Automate everything from welcome emails to sales meeting bookings and lead qualification tagging.</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-6 text-center">Workflow Examples</h3>
          <WorkflowCarousel />
          
          <div className="mt-12 bg-electric/10 rounded-xl p-6 border border-electric/20">
            <h3 className="text-xl font-semibold mb-4 text-center text-electric">Real Results I&apos;ve Delivered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">40% increase in lead conversion rates via tailored nurture workflows</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">100% automated chat-to-lead tagging system built for Triad DS</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">50+ hours/month saved on manual follow-ups for All Pro</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Recovered abandoned carts and boosted sales for Triad&apos;s Autel store</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              variant="ghost" 
              className="border border-white/20 hover:bg-white/10"
              onClick={() => setVisibleSection(null)}
            >
              Close Section
            </Button>
          </div>
        </div>
      </section>

      {/* Funnels Section */}
      <section id="funnels" ref={funnelsRef} className={`section-padding transition-all duration-300 ${isSectionVisible('funnels') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Funnel Development</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-white/80 text-center">
              Let&apos;s turn clicks into conversions—with zero guesswork. I design and build high-converting funnels that guide your prospects from &quot;just looking&quot; to ready to buy, using psychology-backed flows, clean design, and automation that does the heavy lifting.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-electric">What I Build:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Lead Generation Funnels</h4>
                <p className="text-sm text-white/70">Capture leads with strong CTAs, lead magnets, tagging, and automated follow-ups.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Sales & Checkout Funnels</h4>
                <p className="text-sm text-white/70">Product-focused flows with upsells, downsells, testimonials, and streamlined checkout experiences.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Webinar & Booking Funnels</h4>
                <p className="text-sm text-white/70">Get attendees on autopilot with landing pages, reminder emails, and calendar integrations.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Onboarding Funnels</h4>
                <p className="text-sm text-white/70">Welcome new clients with automated forms, email sequences, and team notifications.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Promo & Launch Funnels</h4>
                <p className="text-sm text-white/70">From Black Friday offers to new service launches—I create urgency-driven funnels that deliver results.</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-6 text-center">Featured Funnels</h3>
          <FunnelCarousel />
          
          <div className="mt-12 bg-electric/10 rounded-xl p-6 border border-electric/20">
            <h3 className="text-xl font-semibold mb-4 text-center text-electric">Funnels I&apos;ve Delivered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">All Pro – Service Funnel for refrigerant readiness checkups</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Triad Diagnostic Solutions – E-Commerce Funnel for Autel products</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Charley Grey – Client Onboarding Funnel with auto-tagging</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Mike Greene Coaching – Mentoring booking funnel</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              variant="ghost" 
              className="border border-white/20 hover:bg-white/10"
              onClick={() => setVisibleSection(null)}
            >
              Close Section
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Audits Section */}
      <section id="seo-audits" ref={seoAuditsRef} className={`section-padding transition-all duration-300 ${isSectionVisible('seo-audits') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">SEO Audits</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-white/80 text-center">
              If your site isn&apos;t ranking, it&apos;s not working. Period. I offer deep-dive SEO audits that uncover exactly what&apos;s
              holding your website back—and build a game plan to fix it, fast.
            </p>
          </div>

          <div className="mb-12">
            <SEOAuditCarousel />
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-electric">What&apos;s Included in Every SEO Audit:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Technical Health Check</h4>
                <p className="text-sm text-white/70">Crawl errors, indexing issues, site speed, mobile-friendliness, and more—fixed and optimized.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">On-Page SEO Review</h4>
                <p className="text-sm text-white/70">Meta tags, headers, internal linking, image optimization, keyword placement, and structure improvements.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Content Gap Analysis</h4>
                <p className="text-sm text-white/70">Identify missing opportunities, weak pages, and underperforming content—then optimize for results.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Keyword Performance</h4>
                <p className="text-sm text-white/70">Deep keyword audit with ranking insights, competition comparison, and growth strategy.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Backlink & Domain Authority Review</h4>
                <p className="text-sm text-white/70">Track current link profile, identify toxic links, and outline authority-building steps.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Customized SEO Action Plan</h4>
                <p className="text-sm text-white/70">Prioritized checklist with high-impact recommendations to get your rankings moving.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-electric/10 rounded-xl p-6 border border-electric/20">
            <h3 className="text-xl font-semibold mb-4 text-center text-electric">Results I&apos;ve Achieved</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Cojali USA: 2.42K clicks, 67K impressions, and a 3.6% CTR within 3 months</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Keyword position improvement from avg. 45+ to top 20</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Grey Matters & Call All Pro: Boosted health scores to 100</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Strengthened internal linking and improved site structure</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              variant="ghost" 
              className="border border-white/20 hover:bg-white/10"
              onClick={() => setVisibleSection(null)}
            >
              Close Section
            </Button>
          </div>
        </div>
      </section>

      {/* Email Marketing Section */}
      <section id="email-marketing" ref={emailMarketingRef} className={`section-padding transition-all duration-300 ${isSectionVisible('email-marketing') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Email Marketing & Automation</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-white/80 text-center">
              Inbox strategy that speaks human—not spammy. I craft high-impact email campaigns and automated flows that engage, nurture, and convert—without annoying your audience or clogging their inbox.
            </p>
            <p className="text-white/80 text-center mt-4">
              Whether it&apos;s onboarding sequences, abandoned cart reminders, newsletters, or drip campaigns—I design every touchpoint with strategy, storytelling, and sales psychology in mind.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-electric">What I Deliver:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Email Sequences & Automations</h4>
                <p className="text-sm text-white/70">Lead nurturing, onboarding, upselling, reactivation—you name it. Built with conditional logic for the right message at the right time.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Newsletter Campaigns</h4>
                <p className="text-sm text-white/70">Monthly, weekly, or seasonal campaigns designed to educate, entertain, and convert—while staying true to your brand voice.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Abandoned Cart Workflows</h4>
                <p className="text-sm text-white/70">Personalized reminders with product previews, discounts, and upsell opportunities to bring shoppers back (and boost revenue).</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Review Requests & Follow-Ups</h4>
                <p className="text-sm text-white/70">Turn customers into raving fans with friendly post-service emails that request reviews and build brand trust.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Segmentation & Tagging</h4>
                <p className="text-sm text-white/70">Targeted emails based on behaviors, preferences, and pipeline stages—no more generic blasts.</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-6 text-center">Featured Email Campaigns</h3>
          <EmailMarketingCarousel />
          
          <div className="mt-12 bg-electric/10 rounded-xl p-6 border border-electric/20">
            <h3 className="text-xl font-semibold mb-4 text-center text-electric">Results I&apos;ve Delivered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Triad DS – Abandoned Cart Recovery: Built a personalized WooCommerce workflow that recovered lost sales</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">All Pro – Winter Tips Newsletter: Crafted a seasonal email with actionable tips for property managers</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Grey Matters Studio – BOGO Email Campaign: Designed a wellness-focused campaign with a heartfelt CTA</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">March on Mission – Awareness Email: Emotional storytelling + visual design = more awareness and donations</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/80 italic mb-4">No more bland emails. No more low open rates. Just clean, custom-crafted email flows that convert with class.</p>
            <Button 
              variant="ghost" 
              className="border border-white/20 hover:bg-white/10"
              onClick={() => setVisibleSection(null)}
            >
              Close Section
            </Button>
          </div>
        </div>
      </section>

      {/* PPC Analytics Section */}
      <section id="ppc-analytics" ref={ppcAnalyticsRef} className={`section-padding transition-all duration-300 ${isSectionVisible('ppc-analytics') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">PPC, Analytics & Tracking Suite</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-white/80 text-center">
              Total visibility. Smarter strategy. Bigger wins. I don&apos;t just launch campaigns—I measure everything. 
              With expert-level setups in Google Tag Manager, Google Search Console, and Looker Studio, I track the 
              full customer journey—so you know what&apos;s working, what&apos;s not, and what to scale.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-electric">What I Deliver:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Google Tag Manager Setup</h4>
                <p className="text-sm text-white/70">Form submissions, call tracking, eComm events, and custom triggers for high-intent actions.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Google Search Console Strategy</h4>
                <p className="text-sm text-white/70">Sitemap setup, performance monitoring, technical issue fixes, and click-through behavior mapping.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Looker Studio Reporting</h4>
                <p className="text-sm text-white/70">Custom dashboards that blend data from Google Ads, GSC, and GA4 for comprehensive insights.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">PPC Campaign Management</h4>
                <p className="text-sm text-white/70">
