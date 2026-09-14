import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  XCircle,
  Check,
  Zap,
  Target,
  BotMessageSquare,
  Globe,
  Clock,
  Rocket,
  Video,
  MousePointerClick,
  Users,
  BarChart3,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

declare global {
  interface Window {
    Calendly: any;
  }
}

// --- SILICON VALLEY MAX-ANIMATION STYLES ---
const customStyles = `
  @keyframes fade-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse-glow { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.05); } }
  @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  @keyframes grid-pan { 0% { background-position: 0px 0px; } 100% { background-position: 0px 60px; } }
  @keyframes btn-sheen { 0% { background-position: 250% 0; } 100% { background-position: -250% 0; } }
  
  /* Floating Widget Animations */
  @keyframes float-1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
  @keyframes float-2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(20px) rotate(-2deg); } }
  @keyframes float-3 { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(-15px, -15px); } }
  
  .animate-fade-up { animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-pulse-glow { animation: pulse-glow 6s ease-in-out infinite; }
  .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease infinite; }
  
  .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
  .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
  .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
  
  .space-bg { background: #030305; }
  .hero-grid {
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 90% 70% at 50% 20%, black 10%, transparent 80%);
    animation: grid-pan 60s linear infinite;
  }
  
  .glass-card {
    background: rgba(10, 10, 15, 0.6);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .glass-card:hover {
    border-color: rgba(168, 85, 247, 0.5);
    transform: translateY(-5px);
    box-shadow: 0 30px 60px -15px rgba(168, 85, 247, 0.3);
  }

  .text-gradient-purple {
    background: linear-gradient(to right, #a855f7, #ec4899, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: gradient-x 6s linear infinite;
  }
  
  /* Neural Pipeline Glow */
  .neural-line {
    position: absolute;
    left: 23px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, rgba(168,85,247,0.1), rgba(6,182,212,0.8), rgba(168,85,247,0.1));
    background-size: 100% 200%;
    animation: gradient-x 3s linear infinite;
  }
`;

// --- HYPNOTIC CTA BUTTON ---
const HypnoticCTA = ({ onClick, text = "Apply For Managed Access", className = "" }: { onClick: (e:any) => void, text?: string, className?: string }) => (
  <div className={`relative cursor-pointer w-full sm:w-auto group z-20 ${className}`} onClick={onClick}>
    <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-[2rem] blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
    <button className="relative w-full sm:w-auto px-10 md:px-14 h-16 md:h-20 rounded-[2rem] font-black text-white text-lg md:text-xl flex items-center justify-center gap-3 bg-[#0a0a0a] border border-white/20 overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02]">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.8),55%,transparent)] bg-[length:250%_100%]"
        style={{ animation: 'btn-sheen 3s infinite ease-in-out' }}
      />
      <span className="relative z-10 flex items-center gap-3 tracking-tight">
        {text} <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />
      </span>
    </button>
  </div>
);

export default function GrowthAgency() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/sharmachinmaydigichamp13/30min' });
    } else {
      window.open('https://calendly.com/sharmachinmaydigichamp13/30min', '_blank');
    }
  };

  return (
    <div className={`min-h-screen space-bg text-white font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden ${!isReady ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
      <Head>
        <title>Boopilot Managed | The Ultimate DFY Growth Machine</title>
        <meta name="description" content="We deploy autonomous AI growth systems for a fraction of agency costs. Done for you." />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </Head>
      <style>{customStyles}</style>

      {/* SEC 0: PREMIUM #FDFDFD NAVBAR (Light Theme Contrast) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFDFD] shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/logoBoopilotGif.gif" alt="Boopilot" className="h-8 md:h-10 w-auto object-contain" />
            <div className="hidden sm:flex flex-col justify-center border-l border-slate-300 pl-3 ml-1">
              <span className="text-[10px] text-fuchsia-600 font-black tracking-widest uppercase leading-none mb-0.5">Managed Service</span>
              <span className="text-xs text-slate-800 font-extrabold leading-none">DFY Growth Partner</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-bold text-slate-700">
              <a href="#agitation" className="hover:text-fuchsia-600 transition">The Truth</a>
              <a href="#engine" className="hover:text-fuchsia-600 transition">The Engine</a>
              <a href="#pipeline" className="hover:text-fuchsia-600 transition">Process</a>
            </div>
            <button 
              onClick={openCalendly}
              className="bg-[#050505] hover:bg-fuchsia-600 text-white font-black text-xs md:text-sm h-11 px-6 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all transform hover:scale-105 flex items-center gap-2 border border-slate-800"
            >
              <Sparkles className="w-4 h-4"/> Apply for Managed Access
            </button>
          </div>
        </div>
      </nav>

      {/* SEC 1: THE GOD-MODE HERO WITH FLOATING WIDGETS */}
      <section className="relative pt-48 pb-20 md:pt-60 md:pb-32 px-4 text-center z-10 border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-grid"></div>
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[radial-gradient(ellipse_at_top,#a855f7_0%,#06b6d4_30%,transparent_70%)] opacity-30 animate-pulse-glow"></div>
        </div>

        {/* FLOATING UI WIDGET 1 (Top Left) */}
        <div className="hidden md:flex absolute top-32 left-[10%] animate-float-1 glass-card p-4 rounded-2xl items-center gap-4 z-20 border-emerald-500/30">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-emerald-400"/></div>
          <div className="text-left">
            <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">Live Ad Scaler</div>
            <div className="text-white font-black text-sm">ROAS: 4.8x Active</div>
          </div>
        </div>

        {/* FLOATING UI WIDGET 2 (Bottom Right) */}
        <div className="hidden md:flex absolute bottom-32 right-[10%] animate-float-2 glass-card p-4 rounded-2xl items-center gap-4 z-20 border-cyan-500/30">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center"><Users className="w-5 h-5 text-cyan-400"/></div>
          <div className="text-left">
            <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">CRM Pipeline</div>
            <div className="text-white font-black text-sm">14 New Leads Captured</div>
          </div>
        </div>

        {/* FLOATING UI WIDGET 3 (Top Right) */}
        <div className="hidden md:flex absolute top-48 right-[15%] animate-float-3 glass-card p-3 rounded-xl items-center gap-3 z-20 border-fuchsia-500/30">
          <div className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></div>
          <div className="text-white font-bold text-xs">Content Queued: 30 Days</div>
        </div>

        <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-8 animate-fade-up shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            We Don't Sell Software. We Sell Outcomes.
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter mb-8 leading-[1.05] animate-fade-up drop-shadow-2xl" style={{animationDelay: '0.1s'}}>
            Your growth team, <br />
            <span className="text-gradient-purple">replaced by one AI.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium mb-12 animate-fade-up" style={{animationDelay: '0.2s'}}>
            Stop buying SaaS tools that create more work. Stop paying $3,000/mo to slow agencies. Hand us your brand, and our $10M AI engine will automate your content, ads, and leads. <strong className="text-white">Done for you.</strong>
          </p>

          <div className="flex flex-col items-center animate-fade-up w-full" style={{animationDelay: '0.3s'}}>
            <HypnoticCTA onClick={openCalendly} text="Apply For Managed Access" />
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm font-bold text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400"/> 15-Min Discovery Call</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400"/> Only 5 Partners Accepted/Mo</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 2: THE AGITATION (The DFY Pivot) */}
      <section id="agitation" className="py-32 px-4 relative border-y border-white/5 bg-[#020203]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.05)_0%,transparent_100%)]"></div>
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">The old ways are <span className="text-red-500">costing you.</span></h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">Software requires your time. Agencies require your cash. We require neither.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* SaaS Trap */}
          <div className="glass-card p-8 rounded-[2rem] relative overflow-hidden bg-slate-900/40 opacity-80">
            <Badge className="bg-slate-800 text-slate-300 border-0 mb-6">The SaaS Trap</Badge>
            <h3 className="text-2xl font-black text-white mb-6">DIY Software Tools</h3>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-slate-500 shrink-0"/> You buy a subscription, but you still do the work.</li>
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-slate-500 shrink-0"/> You have to learn complex prompting and dashboards.</li>
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-slate-500 shrink-0"/> You forget to post because you're busy running a business.</li>
            </ul>
          </div>

          {/* Agency Scam */}
          <div className="glass-card p-8 rounded-[2rem] relative overflow-hidden border-red-500/20 bg-red-950/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px]"></div>
            <Badge className="bg-red-500/20 text-red-400 border-0 mb-6">The Agency Trap</Badge>
            <h3 className="text-2xl font-black text-white mb-6">Local Agencies <span className="text-red-500">($3k+/mo)</span></h3>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 shrink-0"/> 30-to-60 day onboarding delays.</li>
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 shrink-0"/> Junior copywriters guessing your brand voice.</li>
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 shrink-0"/> Complete lack of modern AI automation.</li>
            </ul>
          </div>

          {/* Boopilot Solution */}
          <div className="glass-card p-8 rounded-[2rem] relative overflow-hidden border-fuchsia-500/40 shadow-[0_0_40px_rgba(168,85,247,0.15)] transform md:-translate-y-4">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-fuchsia-500/20 blur-[60px]"></div>
            <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-0 mb-6 animate-pulse">The AI Reality</Badge>
            <h3 className="text-2xl font-black text-white mb-6">Boopilot Managed <span className="text-fuchsia-400">($997/mo)</span></h3>
            <ul className="space-y-4 text-slate-200 font-bold text-sm relative z-10">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0"/> Zero effort. We deploy the AI and manage the output.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0"/> Omnichannel content auto-generated and scheduled.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0"/> 24/7 AI Auto-responder capturing leads in DMs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEC 3: THE BENTO ENGINE (Dense Visual Value) */}
      <section id="engine" className="py-32 px-4 relative">
        <div className="max-w-[1200px] mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">Everything built into <br className="hidden md:block"/><span className="text-cyan-400">one architecture.</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">You don't need 6 different software subscriptions and an ad manager. Our tech stack replaces them all, operated by our team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <Video/>, title: "Omnichannel Studio", desc: "30 days of high-converting visuals and copy auto-generated and scheduled to IG, FB, LinkedIn, and X.", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80" },
            { icon: <BotMessageSquare/>, title: "24/7 AI Sales SDR", desc: "Every comment and DM receives an instant, intelligent reply that captures contact details automatically.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" },
            { icon: <Target/>, title: "Auto-Ad Scaler", desc: "We identify your winning organic posts and deploy them as Meta Ads to flood your pipeline with cheap leads.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80" },
            { icon: <Globe/>, title: "Local SEO Dominator", desc: "Daily, automated Google My Business updates and review auto-replies to rank you #1 locally.", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&q=80" },
            { icon: <MousePointerClick/>, title: "Unified CRM Pipeline", desc: "Spreadsheets are dead. Every lead from every platform drops into one sleek, trackable dashboard.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80" },
            { icon: <BarChart3/>, title: "Founder Oversight", desc: "You aren't left alone with a bot. Our expert human team oversees the AI output to guarantee ROI.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" }
          ].map((feature, i) => (
            <div key={i} className="glass-card rounded-[2rem] relative overflow-hidden group flex flex-col">
              {/* Image Header */}
              <div className="h-40 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10"></div>
                <img src={feature.img} alt={feature.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
              </div>
              {/* Content */}
              <div className="p-8 relative z-20 -mt-12 flex-1 flex flex-col">
                <div className="w-12 h-12 bg-[#050505] rounded-xl flex items-center justify-center mb-6 border border-white/20 shadow-xl text-cyan-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEC 4: ANIMATED VELOCITY PIPELINE */}
      <section id="pipeline" className="py-24 px-4 bg-[#050505] relative border-y border-white/5">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-white/5 text-slate-300 border border-white/10 mb-6">Zero Friction Onboarding</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">From audit to live pipeline <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">in 48 hours.</span></h2>
          </div>
          
          <div className="relative pl-12 md:pl-20 space-y-16 py-8">
            {/* The Glowing Neural Line */}
            <div className="neural-line"></div>
            
            {[
              { step: "01", title: "The Discovery Audit", desc: "A 15-minute, zero-pressure call. We analyze your current bottlenecks and map out the exact AI architecture needed." },
              { step: "02", title: "Brand DNA Ingestion", desc: "You give us your website and past posts. The Boopilot AI consumes your brand voice, styling, and offers in seconds." },
              { step: "03", title: "System Deployment", desc: "Our team deploys the engine. 30 days of content scheduled, auto-responders activated, and ad campaigns drafted." },
              { step: "04", title: "Automated Scaling", desc: "You go back to running your business. The AI handles the top-of-funnel work and drops qualified leads directly into your CRM." }
            ].map((s, i) => (
              <div key={i} className="relative z-10 animate-fade-up" style={{animationDelay: `${i * 0.2}s`}}>
                {/* Node */}
                <div className="absolute w-8 h-8 rounded-full bg-[#050505] border-[3px] border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.5)] -left-[53px] md:-left-[85px] top-1 flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                {/* Content */}
                <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2">
                  <div className="text-fuchsia-400 font-black text-lg mb-2 flex items-center gap-3">
                    Step {s.step} <div className="h-px bg-white/10 flex-1"></div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{s.title}</h3>
                  <p className="text-slate-400 font-medium text-sm md:text-base">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEC 5: THE IRONCLAD OFFER */}
      <section id="pricing" className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-[900px] mx-auto relative z-20">
          <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 blur-[100px] opacity-20 rounded-[4rem] animate-pulse-glow pointer-events-none"></div>
          
          <div className="p-10 md:p-16 rounded-[3rem] glass-card border-[1.5px] border-fuchsia-500/40 relative flex flex-col shadow-[0_0_100px_rgba(168,85,247,0.15)]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
               <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white font-black px-8 py-3 text-xs md:text-sm uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(225,29,72,0.6)] border border-red-400/50">
                 Strictly Limited to 5 Clients / Month
               </div>
            </div>

            <div className="text-center mt-6 mb-12">
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">The DFY Growth Partner</h3>
              <p className="text-slate-400 text-lg md:text-xl font-medium">We build, manage, and scale the entire Boopilot AI architecture for you.</p>
            </div>

            <div className="text-center mb-12">
              <span className="text-6xl md:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tighter drop-shadow-2xl">$997</span>
              <span className="text-slate-500 font-bold text-2xl">/mo</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base text-slate-200 font-bold mb-14">
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 bg-white/5"><Check className="w-6 h-6 text-cyan-400 shrink-0" /> Full Tech-Stack Setup & Ingestion</div>
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 bg-white/5"><Check className="w-6 h-6 text-cyan-400 shrink-0" /> 30 Days of Content Auto-Scheduled</div>
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 bg-white/5"><Check className="w-6 h-6 text-cyan-400 shrink-0" /> 24/7 AI Comment & DM SDR</div>
              <div className="glass-card p-5 rounded-2xl flex items-center gap-4 bg-white/5"><Check className="w-6 h-6 text-cyan-400 shrink-0" /> Meta Ad Management & CRM Updates</div>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
              <HypnoticCTA onClick={openCalendly} text="Apply For Managed Access" className="w-full sm:w-[80%]" />
              <p className="text-slate-500 text-xs mt-6 font-bold uppercase tracking-widest">No 6-Month Lock-ins. Cancel Anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 6: THE ULTIMATUM */}
      <section className="py-32 px-4 relative text-center border-t border-white/5 overflow-hidden bg-[#020203]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <Rocket className="w-24 h-24 text-fuchsia-400 mx-auto mb-8 opacity-60 animate-pulse-glow transform -rotate-45 drop-shadow-[0_0_30px_rgba(217,70,239,0.5)]" />
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-8">Your competitors are already automating. <br/><span className="text-gradient-purple">Don't get left behind.</span></h2>
        <div className="flex justify-center mt-12">
          <button onClick={openCalendly} className="bg-white text-slate-900 font-black text-lg px-12 py-5 rounded-[2rem] hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center gap-3">
            Initiate System Audit <ArrowRight className="w-5 h-5"/>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-4 text-center bg-[#000000]">
        <div className="flex justify-center items-center gap-2 mb-6">
          <img src="/logoBoopilotGif.gif" alt="Boopilot" className="h-8 opacity-50 grayscale hover:grayscale-0 transition duration-500" />
        </div>
        <p className="text-slate-600 font-bold text-xs uppercase tracking-widest mb-2">Powered by Boopilot Technologies</p>
        <p className="text-slate-700 text-[10px]">© {new Date().getFullYear()} All rights reserved. Built for global scaling.</p>
      </footer>
    </div>
  );
}
