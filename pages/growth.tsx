import Head from "next/head";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  Menu,
  X,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Target,
  Clock,
  XCircle,
  AlertTriangle,
  BotMessageSquare
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// --- APP URL CONSTANT ---
const APP_URL = "https://app.boopilot.com";

// --- MASTER STYLES (Identical to your index.tsx) ---
const customStyles = `
  .no-animations * {
    animation: none !important;
    transition: none !important;
  }
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes btn-sheen {
    0% { background-position: 250% 0; }
    100% { background-position: -250% 0; }
  }
  @keyframes grid-pan {
    0% { background-position: 0px 0px; }
    100% { background-position: 0px 60px; }
  }
  @keyframes grid-breathe {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.9; }
  }

  .animate-fade-up { animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; will-change: opacity, transform; }
  .animate-gradient-x { 
    background-size: 200% 200%;
    animation: gradient-x 4s ease infinite; 
  }

  .bento-card {
    background: #090b11;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .bento-card:hover {
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
    box-shadow: 0 30px 60px -15px rgba(99,102,241,0.2);
  }
  
  .text-gradient-danger {
    background: linear-gradient(to right, #ff3366, #ff7733, #ff3366);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-x 8s linear infinite;
  }

  .text-gradient-blue {
    background: linear-gradient(to right, #8794ff, #b975ff, #f764a8, #8794ff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-x 8s linear infinite;
  }

  .hero-cinematic-bg {
    background: radial-gradient(100% 100% at 50% 0%, #1e1b4b 0%, #0f172a 50%, #020617 100%);
  }

  .hero-grid {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    -webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 20%, black 10%, transparent 80%);
    mask-image: radial-gradient(ellipse 90% 70% at 50% 20%, black 10%, transparent 80%);
    animation: grid-pan 60s linear infinite, grid-breathe 20s ease-in-out infinite;
    pointer-events: none;
  }
`;

const HypnoticCTA = ({ onClick, text = "Book Your AI Growth Audit", className = "" }: { onClick: () => void, text?: string, className?: string }) => (
  <div className={`relative cursor-pointer w-full sm:w-auto ${className}`} onClick={onClick}>
    <button className="relative w-full sm:w-auto px-10 md:px-14 h-16 md:h-18 rounded-full font-black text-white text-lg md:text-xl flex items-center justify-center gap-3 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform scale-[1.03] border-0 transition-transform duration-300 hover:scale-[1.05]">
      <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 animate-gradient-x">
        <div className="w-full h-full rounded-full bg-[#0a0a0a]"></div>
      </div>
      <div className="absolute inset-[2px] rounded-full bg-slate-950 z-0"></div>
      <div 
        className="absolute inset-[2px] rounded-full z-1 pointer-events-none bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.2),55%,transparent)] bg-[length:250%_100%]"
        style={{ animation: 'btn-sheen 5s infinite ease-in-out' }}
      />
      <span className="relative z-10 flex items-center gap-3 tracking-tight selection:bg-none">
        {text}
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transform translate-x-1" />
      </span>
    </button>
  </div>
);

export default function GrowthAgency() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    const enable = () => setAnimationsEnabled(true);
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(enable, { timeout: 2500 });
    } else {
      setTimeout(enable, 2000);
    }
  }, []);

  // Update this to your actual Calendly link
  const openCalendly = () => {
    window.open('https://calendly.com', '_blank');
  };

  return (
    <div className={`min-h-screen bg-[#fafafa] font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden text-slate-900 ${!animationsEnabled ? 'no-animations' : ''}`}>
      <Head>
        <title>Boopilot Managed | AI Growth Partner for Modern Businesses</title>
        <meta name="description" content="Stop paying $3,000/mo to slow traditional agencies. We deploy custom AI growth engines, omnichannel content, and automated lead capture." />
      </Head>

      <style>{customStyles}</style>

      {/* FLOATING HEADER */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <div className="w-full max-w-[1100px] rounded-full p-[1px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 animate-gradient-x shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <nav className="w-full rounded-full transition-all duration-500 flex items-center justify-between px-4 py-2.5 md:px-6 md:py-3 bg-[#030408] border border-white/5">
            <div className="flex items-center cursor-pointer">
              <span className="text-xl font-bold text-white tracking-wider flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" /> BOOPILOT <span className="text-fuchsia-400">MANAGED</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Button onClick={openCalendly} className="bg-white hover:bg-slate-200 text-slate-900 font-bold h-10 px-6 rounded-full shadow-lg transition-transform hover:scale-105">
                Book Free Audit
              </Button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-6 text-center z-10 hero-cinematic-bg border-b border-slate-800/50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-grid"></div>
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[500px] bg-indigo-600/30 blur-[120px] rounded-full animate-pulse-glow"></div>
        </div>

        <div className="max-w-[1100px] mx-auto relative flex flex-col items-center z-10">
          <Badge className="bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 mb-8 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg animate-fade-up">
            <ShieldCheck className="w-4 h-4 mr-2 inline-block -mt-0.5" /> High-Ticket Growth Partner
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight mb-6 leading-[1.1] animate-fade-up text-white" style={{animationDelay: '0.1s'}}>
            Your entire marketing <span className="text-gradient-danger">Agency</span> <br className="hidden md:block"/>
            <span className="text-gradient-blue">Replaced by one AI.</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium mb-12 animate-fade-up" style={{animationDelay: '0.2s'}}>
            Stop paying $3,000/mo to slow traditional agencies. We deploy custom AI growth engines, omnichannel content, and automated lead capture for a fraction of the cost. Managed entirely by our expert team.
          </p>

          <div className="flex flex-col items-center justify-center animate-fade-up w-full mb-12 relative z-10" style={{animationDelay: '0.3s'}}>
            <HypnoticCTA onClick={openCalendly} />
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-8 text-[11px] md:text-sm font-bold text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Guaranteed 30-Day Content Delivery</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Lead-Gen Autopilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE SILICON VALLEY "QUANTUM CHAMBER" COMPARISON */}
      <section id="comparison" className="py-20 md:py-32 px-4 md:px-6 bg-[#fafafa] relative z-10 border-y border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <Badge className="bg-red-50 text-red-600 border border-red-100 px-4 py-1.5 text-[10px] md:text-xs font-black mb-6 rounded-full uppercase tracking-widest shadow-sm">
              The Unfair Advantage
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Boopilot Managed vs <br className="hidden md:block"/><span className="text-gradient-danger">The Old Way.</span>
            </h2>
          </div>

          <div className="relative w-full max-w-6xl mx-auto bg-[#050505] rounded-[2rem] md:rounded-[3rem] border border-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col md:flex-row overflow-hidden group">
            
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent z-20"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-[#050505] rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.9)] z-30 group-hover:scale-110 transition-transform duration-700">
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 text-lg md:text-xl tracking-tighter">VS</span>
            </div>

            {/* LEFT SIDE: Analog Nightmare */}
            <div className="flex-1 p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-red-500/20 blur-[100px] pointer-events-none group-hover:bg-red-500/30 transition-colors duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20">
                    <AlertTriangle className="w-6 h-6 md:w-7 md:h-7 text-red-400" />
                  </div>
                  <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 text-[9px] md:text-[10px] uppercase tracking-widest font-black">Traditional Agency</Badge>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2">THE PAINFUL TRUTH</h3>
                
                <div className="my-8 md:my-10 pb-8 md:pb-10 border-b border-white/10">
                  <span className="text-7xl md:text-8xl font-black text-red-500 tracking-tighter">$3,000+</span>
                  <span className="text-slate-500 font-bold text-lg md:text-xl ml-2">/mo</span>
                </div>
                <ul className="space-y-6 text-base md:text-lg font-bold text-slate-400 mt-auto">
                  <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> <span>30 to 60-day onboarding delays before a single post goes live.</span></li>
                  <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> <span>Slow, inconsistent human copywriters missing your brand voice.</span></li>
                  <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" /> <span>Zero proprietary technology or real-time CRM lead tracking.</span></li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE: Boopilot Dream */}
            <div className="flex-1 p-8 md:p-16 relative overflow-hidden border-t md:border-t-0 border-white/10 md:border-none">
              <div className="absolute bottom-[-20%] right-[-20%] w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-emerald-400" />
                  </div>
                  <Badge className="bg-emerald-500 text-white border-0 shadow-[0_0_15px_rgba(16,185,129,0.6)] text-[9px] md:text-[10px] uppercase tracking-widest font-black animate-pulse">Boopilot Managed</Badge>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2">THE NEW REALITY</h3>
                
                <div className="my-8 md:my-10 pb-8 md:pb-10 border-b border-white/10">
                  <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tighter drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">$997</span>
                  <span className="text-slate-500 font-bold text-lg md:text-xl ml-2">/mo</span>
                </div>
                <ul className="space-y-6 text-base md:text-lg font-bold text-slate-300 mt-auto">
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5 bg-emerald-500/20 rounded-full p-1" /> <span>Deployed and scaling your brand within 48 hours.</span></li>
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5 bg-emerald-500/20 rounded-full p-1" /> <span>Autonomous AI content generation perfectly matching your DNA.</span></li>
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5 bg-emerald-500/20 rounded-full p-1" /> <span>Direct Founder oversight managing your Meta & YT ad campaigns.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & CTA */}
      <section className="py-24 md:py-32 px-4 md:px-6 relative z-10 bg-[#02040a] border-y border-white/5 overflow-hidden">
        <div className="max-w-[800px] mx-auto relative z-10">
          <div className="w-full relative group transform lg:scale-105 z-20">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 blur-3xl opacity-30 group-hover:opacity-50 rounded-[3rem] transition-opacity duration-700 animate-pulse-glow pointer-events-none"></div>
            
            <Card className="p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#050505] text-white border-0 shadow-[0_0_80px_rgba(99,102,241,0.3)] relative flex flex-col h-full overflow-hidden">
              <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 animate-gradient-x rounded-[2rem] md:rounded-[2.5rem] opacity-50"></div>
              <div className="absolute inset-[2px] bg-[#050505] rounded-[calc(2rem-2px)] md:rounded-[calc(2.5rem-2px)] z-0"></div>

              <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20">
                 <Badge className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white border-0 shadow-[0_0_20px_rgba(168,85,247,0.6)] px-6 py-2 text-[9px] md:text-xs font-black uppercase tracking-widest rounded-b-xl rounded-t-none">
                   Limited Spots (Only 5/Month)
                 </Badge>
              </div>

              <div className="relative z-10 text-center mb-10 mt-6">
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Managed AI Growth Partner</h3>
                <p className="text-slate-400 text-sm md:text-lg font-medium max-w-lg mx-auto">Full-stack omnichannel marketing automation built directly into your business.</p>
              </div>

              <div className="relative z-10 w-full mb-10 group/btn cursor-pointer" onClick={openCalendly}>
                <button className="relative w-full h-16 md:h-20 rounded-xl md:rounded-2xl font-black text-white text-lg md:text-2xl flex items-center justify-center overflow-hidden transition-all duration-300 transform group-hover/btn:scale-[1.02] shadow-[0_0_30px_rgba(99,102,241,0.5)] bg-slate-900 border border-white/10">
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 animate-gradient-x opacity-70">
                    <div className="w-full h-full rounded-[calc(1rem-1px)] md:rounded-[calc(1.5rem-1px)] bg-[#050505]"></div>
                  </div>
                  <div 
                    className="absolute inset-[1px] rounded-xl md:rounded-2xl z-1 pointer-events-none bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.2),55%,transparent)] bg-[length:250%_100%]"
                    style={{ animation: 'btn-sheen 4s infinite ease-in-out' }}
                  />
                  <span className="relative z-10 flex items-center gap-2">Secure Your Spot ($997/mo) <ArrowRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-1" /></span>
                </button>
              </div>

              <div className="space-y-4 text-sm md:text-base text-slate-300 font-bold relative z-10">
                <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span>Custom AI Engine Setup mapped to your brand voice</span></div>
                <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span>Automated Multi-Platform Content Generation (30 days/mo)</span></div>
                <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span>Done-For-You Lead Capture & CRM Pipeline Setup</span></div>
                <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span>Weekly Strategy & Ad Optimization Calls</span></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#fdfdfd] border-t border-slate-200 py-10 px-4 md:px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto text-center text-slate-500 font-medium text-sm">
          © {new Date().getFullYear()} Boopilot Technologies. All rights reserved. 
        </div>
      </footer>
    </div>
  );
}
