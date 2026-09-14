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
  BarChart3
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

declare global {
  interface Window {
    Calendly: any;
  }
}

// --- SILICON VALLEY MASTER STYLES ---
const customStyles = `
  @keyframes fade-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse-glow { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.05); } }
  @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  @keyframes grid-pan { 0% { background-position: 0px 0px; } 100% { background-position: 0px 60px; } }
  @keyframes btn-sheen { 0% { background-position: 250% 0; } 100% { background-position: -250% 0; } }
  
  .animate-fade-up { animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-pulse-glow { animation: pulse-glow 6s ease-in-out infinite; }
  .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease infinite; }
  .animate-marquee-left { animation: marquee-left 30s linear infinite; }
  
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
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .glass-card:hover {
    border-color: rgba(168, 85, 247, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 30px 60px -15px rgba(168, 85, 247, 0.25);
  }

  .text-gradient-purple {
    background: linear-gradient(to right, #a855f7, #ec4899, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: gradient-x 6s linear infinite;
  }
`;

// --- HYPNOTIC CTA BUTTON ---
const HypnoticCTA = ({ onClick, text = "Apply For Managed Access", className = "" }: { onClick: (e:any) => void, text?: string, className?: string }) => (
  <div className={`relative cursor-pointer w-full sm:w-auto group z-20 ${className}`} onClick={onClick}>
    <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-[2rem] blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
    <button className="relative w-full sm:w-auto px-10 md:px-14 h-16 md:h-20 rounded-[2rem] font-black text-white text-lg md:text-xl flex items-center justify-center gap-3 bg-[#0a0a0a] border border-white/10 overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02]">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.8),55%,transparent)] bg-[length:250%_100%]"
        style={{ animation: 'btn-sheen 4s infinite ease-in-out' }}
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
        <title>Boopilot Managed | The Ultimate Creation & Growth Machine</title>
        <meta name="description" content="Stop spending hours on content. Make it in minutes. We deploy autonomous AI growth systems for a fraction of agency costs." />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </Head>
      <style>{customStyles}</style>

      {/* SEC 0: PREMIUM #FDFDFD NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFDFD] shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Real Logo Injection */}
            <img src="/logoBoopilotGif.gif" alt="Boopilot" className="h-8 md:h-10 w-auto object-contain" />
            <div className="hidden sm:flex flex-col justify-center border-l border-slate-300 pl-3 ml-1">
              <span className="text-[10px] text-indigo-600 font-black tracking-widest uppercase leading-none mb-0.5">Managed Service</span>
              <span className="text-xs text-slate-500 font-bold leading-none">Growth Engine</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-bold text-slate-600">
              <a href="#proof" className="hover:text-indigo-600 transition">Outcomes</a>
              <a href="#engine" className="hover:text-indigo-600 transition">The Engine</a>
              <a href="#pricing" className="hover:text-indigo-600 transition">Partnership</a>
            </div>
            <button 
              onClick={openCalendly}
              className="bg-slate-900 hover:bg-indigo-600 text-white font-black text-xs md:text-sm h-11 px-6 rounded-full shadow-lg transition-all hover:shadow-indigo-500/30 transform hover:scale-105 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4"/> Book Audit
            </button>
          </div>
        </div>
      </nav>

      {/* SEC 1: THE GOD-MODE HERO */}
      <section className="relative pt-44 pb-20 md:pt-56 md:pb-32 px-4 text-center z-10 border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-grid"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,#6d28d9_0%,transparent_70%)] opacity-40 animate-pulse-glow"></div>
        </div>

        <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-slate-300 text-xs md:text-sm font-bold tracking-widest uppercase mb-8 animate-fade-up border border-white/10 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            The Ultimate Creation Machine
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter mb-8 leading-[1.05] animate-fade-up" style={{animationDelay: '0.1s'}}>
            Your entire marketing agency, <br />
            <span className="text-gradient-purple">replaced by one AI.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-12 animate-fade-up" style={{animationDelay: '0.2s'}}>
            Stop paying $3,000/mo to slow traditional agencies. We deploy our proprietary $10M AI software to automate your content, scale your ads, and capture leads while you sleep.
          </p>

          <div className="flex flex-col items-center animate-fade-up w-full" style={{animationDelay: '0.3s'}}>
            <HypnoticCTA onClick={openCalendly} />
            <p className="mt-6 text-sm text-slate-500 font-bold flex items-center gap-2">
              <Clock className="w-4 h-4"/> 15-Min Discovery Call. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* SEC 2: THE WALL OF OUTPUT */}
      <section id="proof" className="py-20 relative overflow-hidden bg-[#020203]">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Not just formats. <span className="text-fuchsia-400">Outcomes.</span></h2>
        </div>
        
        {/* Glowing Marquee Track */}
        <div className="w-full max-w-[100vw] overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020203] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020203] to-transparent z-10"></div>
          
          <div className="flex w-max animate-marquee-left gap-6 px-4">
            {[1, 2, 3].map((set) => (
              <div key={set} className="flex gap-6">
                <div className="glass-card w-[320px] h-[200px] rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start"><Video className="text-fuchsia-400 w-8 h-8"/><Badge className="bg-fuchsia-500/20 text-fuchsia-300">Viral Content</Badge></div>
                  <div><div className="text-4xl font-black text-white mb-1">500k+</div><div className="text-sm text-slate-400 font-bold">Organic Reel Views Auto-Generated</div></div>
                </div>
                <div className="glass-card w-[320px] h-[200px] rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start"><Target className="text-cyan-400 w-8 h-8"/><Badge className="bg-cyan-500/20 text-cyan-300">Meta Ads</Badge></div>
                  <div><div className="text-4xl font-black text-white mb-1">4.8x</div><div className="text-sm text-slate-400 font-bold">ROAS on Autopilot Campaigns</div></div>
                </div>
                <div className="glass-card w-[320px] h-[200px] rounded-3xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start"><Users className="text-emerald-400 w-8 h-8"/><Badge className="bg-emerald-500/20 text-emerald-300">CRM Leads</Badge></div>
                  <div><div className="text-4xl font-black text-white mb-1">142</div><div className="text-sm text-slate-400 font-bold">Qualified Leads Closed in DMs</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEC 3: AGITATION (The Knife Twist) */}
      <section className="py-24 px-4 relative border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_100%)]"></div>
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">The traditional model is <span className="text-red-500">dead.</span></h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden border border-red-500/20 bg-red-950/10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 blur-[60px]"></div>
            <Badge className="bg-red-500/20 text-red-400 border-0 mb-6">The Analog Nightmare</Badge>
            <h3 className="text-3xl font-black text-white mb-8">Local Agencies <span className="text-red-500">($3k+/mo)</span></h3>
            <ul className="space-y-5 text-slate-400 font-bold">
              <li className="flex items-start gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0"/> 30-to-60 day onboarding delays.</li>
              <li className="flex items-start gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0"/> Junior copywriters guessing your brand voice.</li>
              <li className="flex items-start gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0"/> Zero automation for capturing inbound leads.</li>
            </ul>
          </div>
          <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-500/20 blur-[80px]"></div>
            <Badge className="bg-cyan-500/20 text-cyan-300 border-0 mb-6 animate-pulse">The AI Reality</Badge>
            <h3 className="text-3xl font-black text-white mb-8">Boopilot Managed <span className="text-cyan-400">($997/mo)</span></h3>
            <ul className="space-y-5 text-slate-200 font-bold relative z-10">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0"/> Custom AI engine live in 48 hours.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0"/> Perfectly mimics your exact brand DNA & Tone.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0"/> 24/7 AI Auto-responder closing leads in DMs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEC 4: THE 6-CYLINDER BENTO ENGINE */}
      <section id="engine" className="py-32 px-4 relative">
        <div className="max-w-[1200px] mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">AI systems executed <br className="hidden md:block"/><span className="text-fuchsia-400">in minutes.</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">We don't just give you a login. We build, manage, and scale the entire architecture for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <Video/>, title: "Omnichannel Studio", desc: "30 days of high-converting visuals and copy auto-generated and scheduled to IG, FB, LinkedIn, and X.", color: "fuchsia" },
            { icon: <BotMessageSquare/>, title: "24/7 AI Sales SDR", desc: "Every comment and DM receives an instant, intelligent reply that captures contact details automatically.", color: "cyan" },
            { icon: <Target/>, title: "Auto-Ad Scaler", desc: "We identify your winning organic posts and deploy them as Meta Ads to flood your pipeline with cheap leads.", color: "indigo" },
            { icon: <Globe/>, title: "Local SEO Dominator", desc: "Daily, automated Google My Business updates and review auto-replies to rank you #1 locally.", color: "emerald" },
            { icon: <MousePointerClick/>, title: "Unified CRM Pipeline", desc: "Spreadsheets are dead. Every lead from every platform drops into one sleek, trackable dashboard.", color: "orange" },
            { icon: <BarChart3/>, title: "Founder Oversight", desc: "You aren't left alone with a bot. Our expert human team oversees the AI output to guarantee ROI.", color: "rose" }
          ].map((feature, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                <div className={`text-${feature.color}-400`}>{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEC 5: VELOCITY PIPELINE */}
      <section className="py-24 px-4 bg-[#050505] relative border-y border-white/5">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-16">From prompt to production <span className="text-cyan-400">in 4 steps.</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent -translate-y-1/2 z-0"></div>
            {[
              { step: "01", title: "The Audit", desc: "15-min discovery call." },
              { step: "02", title: "DNA Ingestion", desc: "AI learns your brand voice." },
              { step: "03", title: "Deployment", desc: "Live across platforms in 48h." },
              { step: "04", title: "Scaling", desc: "Leads hit your CRM automatically." }
            ].map((s, i) => (
              <div key={i} className="relative z-10 glass-card p-6 rounded-2xl text-center">
                <div className="text-fuchsia-400 font-black text-xl mb-2">{s.step}</div>
                <div className="text-white font-bold mb-2">{s.title}</div>
                <div className="text-slate-400 text-xs">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEC 6: THE IRONCLAD OFFER */}
      <section id="pricing" className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-[800px] mx-auto relative z-20">
          <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 blur-3xl opacity-20 rounded-[3rem] animate-pulse-glow"></div>
          
          <div className="p-10 md:p-14 rounded-[3rem] glass-card border border-fuchsia-500/30 relative flex flex-col text-center shadow-[0_0_80px_rgba(168,85,247,0.15)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
               <div className="bg-red-500 text-white font-black px-6 py-2 text-xs uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                 Strictly Limited to 5 Clients / Month
               </div>
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 mt-4">The Growth Partner</h3>
            <p className="text-slate-400 text-lg font-medium mb-8">We build, manage, and scale the entire Boopilot AI architecture for you.</p>

            <div className="mb-10">
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tighter">$997</span>
              <span className="text-slate-500 font-bold text-xl md:text-2xl">/mo</span>
            </div>

            <div className="space-y-5 text-sm md:text-lg text-slate-200 font-bold mb-12 mx-auto text-left w-max">
              <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400" /> Full Tech-Stack Setup & Ingestion</div>
              <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400" /> 30 Days of Content Scheduled</div>
              <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400" /> 24/7 AI Comment & DM SDR</div>
              <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400" /> Meta Ad Management & CRM</div>
            </div>

            <div className="w-full flex justify-center">
              <HypnoticCTA onClick={openCalendly} text="Secure Your Spot" className="w-full sm:w-[80%]" />
            </div>
            <p className="text-slate-500 text-xs mt-6 font-bold uppercase tracking-widest">No 6-Month Lock-ins. Cancel Anytime.</p>
          </div>
        </div>
      </section>

      {/* SEC 7: THE ULTIMATUM (Rocket Style) */}
      <section className="py-32 px-4 relative text-center border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]"></div>
        <Rocket className="w-20 h-20 text-cyan-400 mx-auto mb-8 opacity-50 animate-pulse-glow transform -rotate-45" />
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">Stop spending hours on content. <br/><span className="text-gradient-purple">Make it in minutes.</span></h2>
        <div className="flex justify-center mt-10">
          <button onClick={openCalendly} className="bg-white text-slate-900 font-black px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Deploy The Engine
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-4 text-center bg-[#020203]">
        <div className="flex justify-center items-center gap-2 mb-6">
          <img src="/logoBoopilotGif.gif" alt="Boopilot" className="h-6 opacity-50 grayscale hover:grayscale-0 transition" />
        </div>
        <p className="text-slate-600 font-bold text-xs uppercase tracking-widest mb-2">Powered by Boopilot Technologies</p>
        <p className="text-slate-700 text-[10px]">© {new Date().getFullYear()} All rights reserved. Built for global scaling.</p>
      </footer>
    </div>
  );
}
