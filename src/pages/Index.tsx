
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
import ProjectHighlightsCarousel from "@/components/ProjectHighlightsCarousel";
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

  // Check if projects array exists before attempting to render
  const displayProjects = projects ? projects.slice(0, 6) : [];

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

      {/* Services Section (previously What I Do) */}
      <section id="services" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`rounded-lg overflow-hidden shadow-lg shadow-black/30 transition-all duration-300 hover:shadow-electric/30 hover:scale-[1.02] bg-black/50 backdrop-blur-sm border border-white/10 p-6 ${service.sectionId ? 'cursor-pointer hover:bg-black/20' : ''} ${service.sectionId && visibleSection === service.sectionId ? 'ring-2 ring-electric' : ''}`}
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
                <h4 className="font-semibold mb-2">Google Analytics Configuration</h4>
                <p className="text-sm text-white/70">Custom conversions, audience segments, and event tracking for better data-driven decisions.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Custom Dashboards</h4>
                <p className="text-sm text-white/70">Looker Studio dashboards with real-time KPIs, funnel metrics, and engagement analytics.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Conversion Tracking</h4>
                <p className="text-sm text-white/70">Phone calls, form submissions, purchases, and micro-conversions—all meticulously tracked.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Data-Driven PPC Campaigns</h4>
                <p className="text-sm text-white/70">Google, Bing, and Meta ads with robust tracking, A/B testing, and ROAS optimization.</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-6 text-center">PPC & Analytics Examples</h3>
          <PPCCarousel />
          
          <div className="mt-8 text-center">
            <p className="text-white/80 italic mb-4">Stop flying blind. Start making data-backed decisions for your campaigns and website.</p>
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

      {/* AI Chatbot Section */}
      <section id="ai-chatbot" ref={aiChatbotRef} className={`section-padding transition-all duration-300 ${isSectionVisible('ai-chatbot') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">AI Chatbot Development</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-white/80 text-center">
              24/7 customer service without the staffing costs. I build intelligent, conversational AI chatbots that engage visitors, 
              answer questions, and convert leads—even when you're sleeping. These aren't clunky bots; they're seamless 
              extensions of your brand voice that solve real problems.
            </p>
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-electric">What I Deliver:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Custom Chatbot Development</h4>
                <p className="text-sm text-white/70">Tailored AI solutions built for your business goals—whether it's lead gen, appointment booking, or product recommendations.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Conversation Flows</h4>
                <p className="text-sm text-white/70">Strategic conversation paths with smart branching logic, fallbacks, and human handoffs when needed.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Knowledge Base Integration</h4>
                <p className="text-sm text-white/70">Connect your chatbot with your FAQs, docs, or knowledge base for accurate, instant answers.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-semibold mb-2">Lead Capture & Qualification</h4>
                <p className="text-sm text-white/70">Seamless CRM integration with automated lead scoring, tagging, and assignment.</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-6 text-center">AI Chatbot Examples</h3>
          <AIChatbotCarousel />
          
          <div className="mt-12 bg-electric/10 rounded-xl p-6 border border-electric/20">
            <h3 className="text-xl font-semibold mb-4 text-center text-electric">Results I&apos;ve Delivered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Reduced customer service wait times by 78% for Pure Water</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Increased after-hours lead capture by 45% for All Pro HVAC</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Auto-booked 38 monthly therapy appointments via chatbot for Grey Matters</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="text-electric mt-1 flex-shrink-0" />
                <span className="text-white/80">Qualified 65% of chatbot interactions for Triad's sales team</span>
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

      {/* Lovable Projects Section */}
      <section id="lovable-projects" ref={lovableProjectsRef} className={`section-padding transition-all duration-300 ${isSectionVisible('lovable-projects') ? 'opacity-100' : 'hidden opacity-0 h-0 overflow-hidden'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Lovable Projects</h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-white/80 text-center">
              Creating delightful, lovable projects that users adore and businesses profit from. These highlighted works showcase my approach 
              to blending aesthetics with functionality, delivering solutions that are both beautiful and effective.
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mb-6 text-center">Featured Lovable Projects</h3>
          <LovableProjectsCarousel />
          
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

      {/* Project Highlights Section */}
      <section id="project-highlights" className="section-padding bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Project Highlights</h2>
          <ProjectHighlightsCarousel />
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          {/* Project Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <Button 
                key={category}
                variant="ghost"
                className="border border-white/20 bg-black/20 hover:bg-black/40"
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-electric/30 transition-all hover:shadow-lg hover:shadow-electric/20 hover:scale-[1.02] cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-electric/20 text-electric"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-electric hover:text-electric/80 p-0 flex items-center"
                    >
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Projects Button */}
          <div className="mt-12 text-center">
            <Button 
              className="bg-electric hover:bg-electric/80"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Results Section */}
      <section id="seo-results" className="section-padding bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">SEO Performance</h2>
          <p className="text-center text-white/80 max-w-3xl mx-auto mb-12">
            Real results from my SEO work for real clients. Every audit and optimization translates to measurable business growth.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* SEO Performance Table */}
            <div className="bg-black/30 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Client Performance Metrics</h3>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-white/5">
                      <TableHead>Client</TableHead>
                      <TableHead className="text-right">Clicks</TableHead>
                      <TableHead className="text-right">Impressions</TableHead>
                      <TableHead className="text-right">CTR</TableHead>
                      <TableHead className="text-right">Avg Position</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {seoPerformanceData.map((client) => (
                      <TableRow key={client.name} className="hover:bg-white/5">
                        <TableCell className="font-medium">{client.name}</TableCell>
                        <TableCell className="text-right">{client.clicks.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{client.impressions.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{client.ctr}%</TableCell>
                        <TableCell className="text-right">{client.avgPosition}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* SEO Performance Chart */}
            <div className="bg-black/30 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Keyword Position Improvements</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        {month: 'Jan', position: 45, clicks: 200},
                        {month: 'Feb', position: 38, clicks: 350},
                        {month: 'Mar', position: 30, clicks: 580},
                        {month: 'Apr', position: 24, clicks: 900},
                        {month: 'May', position: 18, clicks: 1400},
                        {month: 'Jun', position: 12, clicks: 2100},
                      ]}
                      margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="month" stroke="#aaa" />
                      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                      <Tooltip contentStyle={{backgroundColor: '#111', border: '1px solid #333'}} />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="position" stroke="#8884d8" name="Avg. Position" />
                      <Line yAxisId="right" type="monotone" dataKey="clicks" stroke="#82ca9d" name="Monthly Clicks" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Let&apos;s Work Together</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-white/80 mb-8">
                  Ready to transform your digital presence? Whether you need help with automation, SEO, funnels, 
                  or a custom project—I&apos;m here to help your business grow.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-electric/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Mail className="text-electric" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <a href="mailto:hello@iqrafaisal.com" className="text-white hover:text-electric">hello@iqrafaisal.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-electric/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Phone className="text-electric" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Phone</p>
                      <a href="tel:+13125550123" className="text-white hover:text-electric">+1 (312) 555-0123</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-electric/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Linkedin className="text-electric" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">LinkedIn</p>
                      <a href="https://linkedin.com/in/iqrafaisal" target="_blank" rel="noopener noreferrer" className="text-white hover:text-electric flex items-center">
                        Connect on LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-electric/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <Github className="text-electric" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">GitHub</p>
                      <a href="https://github.com/iqrafaisal" target="_blank" rel="noopener noreferrer" className="text-white hover:text-electric flex items-center">
                        View Code Samples <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="py-8 bg-black/50 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/60">&copy; {new Date().getFullYear()} Iqra Faisal. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/iqrafaisal" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-electric">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/iqrafaisal" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-electric">
                <Github size={20} />
              </a>
              <a href="mailto:hello@iqrafaisal.com" className="text-white/60 hover:text-electric">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          project={selectedProject} 
        />
      )}
    </div>
  );
};

export default Index;
