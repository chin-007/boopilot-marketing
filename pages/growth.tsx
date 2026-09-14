import Head from 'next/head';
import Link from 'next/link';
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
  BarChart3,
  Globe,
  Clock
} from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

// --- MASTER STYLES (Silicon Valley Vibe) ---
const customStyles = `
  @keyframes fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse-glow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.05); } }
  @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  @keyframes btn-sheen { 0% { background-position: 250% 0; } 100% { background-position: -250% 0; } }
  @keyframes grid-pan { 0% { background-position: 0px 0px; } 100% { background-position: 0px 60px; } }
  
  .animate-fade-up { animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
  .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease infinite; }
  
  .hero-cinematic-bg { background: radial-gradient(100% 100% at 50% 0%, #1e1b4b 0%, #0f172a 50%, #020617 100%); }
  .hero-grid {
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 90% 70% at 50% 20%, black 10%, transparent 80%);
    animation: grid-pan 60s linear infinite;
  }
  .bento-card {
    background: #050505; border: 1px solid rgba(255,255,255,0.05);
    box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5); transition: all 0.5s ease;
  }
  .bento-card:hover { border-color: rgba(168,85,247,0.3); transform: translateY(-4px); box-shadow: 0 30px 60px -15px rgba(168,85,247,0.2); }
`;

// --- HYPNOTIC CALENDLY CTA ---
const HypnoticCTA = ({ onClick, text = "Book Your Free Growth Audit", className = "" }: { onClick: (e:any) => void, text?: string, className?: string }) => (
  <div className={`relative cursor-pointer w-full sm:w-auto group ${className}`} onClick={onClick}>
    <button className="relative w-full sm:w-auto px-10 md:px-14 h-16 md:h-20 rounded-2xl font-black text-white text-lg md:text-xl flex items-center justify-center gap-3 overflow-hidden shadow-[0_10px_40px_rgba(168,85,247,0.4)] transform transition-transform duration-300 group-hover:scale-[1.02]">
      <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 animate-gradient-x rounded-2xl opacity-80">
        <div className="w-full h-full rounded-[calc(1rem-2px)] bg-[#0a0a0a]"></div>
      </div>
      <div className="absolute inset-[2px] rounded-xl bg-slate-950 z-0"></div>
      <div 
        className="absolute inset-[2px] rounded-xl z-1 pointer-events-none bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.2),55%,transparent)] bg-[length:250%_100%]"
        style={{ animation: 'btn-sheen 4s infinite ease-in-out' }}
      />
      <span className="relative z-10 flex items-center gap-3 tracking-tight">
        {text}
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transform transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  </div>
);

export default function GrowthAgency() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsCalendlyLoaded(true), 1000);
    return () => clearTimeout(timer);
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
    <div className="min-h-screen bg-[#02040a] text-white font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden">
      <Head>
        <title>Boopilot Managed | The Ultimate AI Growth Partner</title>
        <meta name="description" content="Stop paying expensive traditional agencies. We deploy autonomous AI growth systems for a fraction of the cost." />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </Head>
      <style>{customStyles}</style>

      {/* FLOATING HEADER WITH REAL LOGO */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <div className="w-full max-w-[1200px] rounded-full p-[1px] bg-gradient-to-r from-indigo-500/50 via-fuchsia-500/50 to-cyan-500/50 shadow-[0_8px_30px_rgb(0,0,0,0.4)] backdrop-blur-md">
          <nav className="w-full rounded-full flex items-center justify-between px-6 py-3 bg-[#030408]/90">
            <div className="flex items-center gap-3">
              <img src="/logoBoopilotGif.gif" alt="Boopilot Logo" className="h-8 md:h-10 w-auto object-contain" />
              <div className="hidden sm:flex flex-col justify-center">
                <span className="text-[10px] text-fuchsia-400 font-black tracking-widest uppercase leading-none mb-0.5">Managed Service</span>
                <span className="text-xs text-slate-400 font-medium leading-none">by Boopilot Tech</span>
              </div>
            </div>
            <button 
              onClick={openCalendly}
              className="bg-white hover:bg-slate-200 text-slate-900 font-black text-xs md:text-sm h-10 px-6 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform hover:scale-105"
            >
              Apply For Access
            </button>
          </nav>
        </div>
      </div>

      {/* SEC 1: PSYCHOLOGICAL HERO */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-4 text-center z-10 hero-cinematic-bg border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-grid"></div>
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[500px] bg-fuchsia-600/20 blur-[120px] rounded-full animate-pulse-glow"></div>
        </div>

        <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-black tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(16,185,129,0.2)] animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Taking on 5 New Clients This Month
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-8 leading-[1.05] animate-fade-up text-white" style={{animationDelay: '0.1s'}}>
            Fire your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">slow agency.</span> <br />
            Hire the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400">AI Engine.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium mb-12 animate-fade-up" style={{animationDelay: '0.2s'}}>
            We deploy our proprietary $10M AI software to automate your content, scale your ads, and close leads in the DMs. <strong className="text-white">You get the results of a 5-person marketing team for a fraction of the cost.</strong>
          </p>

          <div className="flex flex-col items-center animate-fade-up w-full" style={{animationDelay: '0.3s'}}>
            <HypnoticCTA onClick={openCalendly} text="Book Your Free Growth Audit" />
            <p className="mt-6 text-sm text-slate-500 font-bold flex items-center gap-2">
              <Clock className="w-4 h-4"/> 15-Min Strategic Call. No hard selling.
            </p>
          </div>
        </div>
      </section>

      {/* SEC 2: THE UNFAIR ADVANTAGE (Agitating the Pain) */}
      <section className="py-24 px-4 bg-[#050505] relative border-b border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">The traditional model is <span className="text-red-500">broken.</span></h2>
            <p className="text-slate-400 text-lg">Why pay for human error when machines generate higher ROI?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Nightmare */}
            <div className="bento-card p-8 md:p-12 rounded-[2rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px]"></div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-slate-300">Local Agencies</h3>
                <AlertTriangle className="w-8 h-8 text-red-500/50" />
              </div>
              <div className="text-5xl font-black text-red-500 mb-8 tracking-tighter">$3k-$5k<span className="text-lg text-slate-500">/mo</span></div>
              <ul className="space-y-4 font-bold text-slate-400">
                <li className="flex gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0"/> 30-day onboarding delays before launch.</li>
                <li className="flex gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0"/> Junior copywriters guessing your brand voice.</li>
                <li className="flex gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0"/> "We need you to film 15 videos this week."</li>
                <li className="flex gap-3"><XCircle className="w-6 h-6 text-red-500 shrink-0"/> Zero automation for capturing inbound leads.</li>
              </ul>
            </div>

            {/* The Dream */}
            <div className="bento-card p-8 md:p-12 rounded-[2rem] relative overflow-hidden ring-1 ring-fuchsia-500/30 shadow-[0_0_40px_rgba(168,85,247,0.1)]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-fuchsia-500/20 blur-[60px]"></div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-white">Boopilot Managed</h3>
                <Zap className="w-8 h-8 text-fuchsia-400" />
              </div>
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 mb-8 tracking-tighter">Fractional<span className="text-lg text-slate-500"> Cost</span></div>
              <ul className="space-y-4 font-bold text-slate-200">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0"/> Live and generating traffic in 48 hours.</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0"/> AI perfectly mimics your exact brand DNA.</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0"/> 30 days of high-converting content done-for-you.</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0"/> 24/7 Auto-responder closing leads in DMs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 3: WHAT WE ACTUALLY DO (The Value Stack) */}
      <section className="py-24 px-4 relative border-b border-white/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-fuchsia-400 font-black tracking-widest text-xs uppercase mb-4 block">The Deliverables</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight">An entire growth team, <br/>built into one system.</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bento-card p-8 rounded-3xl text-left">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6"><Globe className="w-7 h-7 text-indigo-400"/></div>
              <h3 className="text-xl font-black text-white mb-3">Omnichannel Content</h3>
              <p className="text-slate-400 font-medium">We generate, design, and auto-schedule 30 days of hyper-relevant posts across IG, FB, LinkedIn, and GMB.</p>
            </div>
            <div className="bento-card p-8 rounded-3xl text-left">
              <div className="w-14 h-14 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mb-6"><BotMessageSquare className="w-7 h-7 text-fuchsia-400"/></div>
              <h3 className="text-xl font-black text-white mb-3">24/7 AI Sales SDR</h3>
              <p className="text-slate-400 font-medium">When someone comments on your post, our AI instantly DMs them, qualifies them, and pushes them to your CRM.</p>
            </div>
            <div className="bento-card p-8 rounded-3xl text-left">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6"><Target className="w-7 h-7 text-cyan-400"/></div>
              <h3 className="text-xl font-black text-white mb-3">High-ROAS Ad Scaling</h3>
              <p className="text-slate-400 font-medium">We identify your best organic content and deploy it as highly targeted Meta ads to flood your pipeline with cheap leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEC 4: THE CLOSING OFFER (No-Brainer) */}
      <section id="pricing" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.15)_0%,transparent_100%)] pointer-events-none"></div>
        <div className="max-w-[800px] mx-auto relative z-10">
          <div className="w-full relative group z-20">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 blur-3xl opacity-30 rounded-[3rem] animate-pulse-glow pointer-events-none"></div>
            
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#050505] border border-white/10 relative flex flex-col shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                 <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-black px-6 py-2 text-xs uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                   Only 5 Spots Available
                 </div>
              </div>

              <div className="text-center mb-10 mt-6">
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">The Growth Partner</h3>
                <p className="text-slate-400 text-lg font-medium">Complete done-for-you AI marketing architecture.</p>
              </div>

              <div className="text-center mb-10">
                <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 tracking-tighter">$997</span>
                <span className="text-slate-500 font-bold text-xl">/mo</span>
              </div>

              <div className="space-y-4 text-base text-slate-300 font-bold mb-10 mx-auto w-full max-w-md">
                <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400 shrink-0" /> Full Tech-Stack Setup & Brand Ingestion</div>
                <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400 shrink-0" /> 30 Days of Omnichannel Content Scheduled</div>
                <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400 shrink-0" /> 24/7 AI Comment & DM Auto-Responder</div>
                <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400 shrink-0" /> Unified CRM Pipeline Dashboard</div>
                <div className="flex gap-4 items-center"><Check className="w-6 h-6 text-fuchsia-400 shrink-0" /> Weekly Strategy & Ad Oversight</div>
              </div>

              <div className="w-full flex justify-center">
                <HypnoticCTA onClick={openCalendly} text="Apply For Partnership" className="w-full sm:w-[90%]" />
              </div>
              <p className="text-center text-slate-500 text-xs mt-6 font-bold">100% Secure. Cancel anytime. No long-term lock-ins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-4 text-center">
        <p className="text-slate-600 font-bold text-sm mb-4">Powered by Boopilot Technologies</p>
        <p className="text-slate-700 text-xs">© {new Date().getFullYear()} All rights reserved. Built for global scaling.</p>
      </footer>
    </div>
  );
}
