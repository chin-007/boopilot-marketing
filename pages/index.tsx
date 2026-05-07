import Head from "next/head";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  Users,
  Globe,
  Menu,
  X,
  Mail,
  CheckCircle2,
  Megaphone,
  ShieldCheck,
  BarChart3,
  Video,
  XCircle,
  Zap,
  Volume2,
  VolumeX,
  Target,
  Database,
  BotMessageSquare,
  ChevronDown,
  Star,
  AlertTriangle,
  Loader2,
  Image as ImageIcon,
  Clock
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FacebookLogo, InstagramLogo, YouTubeLogo, LinkedInLogo, XLogo } from "@/components/PlatformLogos";
import { LazyVideo } from "@/components/LazyVideo";

// Lazy-loaded Testimonials
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));

// --- APP URL CONSTANT ---
const APP_URL = "https://app.boopilot.com";

// --- MASTER STYLES (Silicon Valley Vibe) ---
const customStyles = `
  .no-animations * {
    animation: none !important;
    transition: none !important;
  }
  @keyframes spark-drop {
    0% { transform: translateY(-100px); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(800px); opacity: 0; }
  }
  @keyframes data-rise {
    0% { transform: translateY(800px); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100px); opacity: 0; }
  }
  @keyframes float-1 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
  }
  @keyframes float-2 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(15px) rotate(-2deg); }
  }
  @keyframes float-3 {
    0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
    50% { transform: translate(0px, -20px) rotate(0deg); }
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
  @keyframes marquee-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  @keyframes btn-sheen {
    0% { background-position: 250% 0; }
    100% { background-position: -250% 0; }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes spin-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  @keyframes orbit-1 {
    0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
  }
  @keyframes orbit-2 {
    0% { transform: rotate(0deg) translateX(-60px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(-60px) rotate(-360deg); }
  }
  @keyframes orbit-3 {
    0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
  }
  @keyframes coin-drop {
    0% { transform: translateY(-20px) scale(0.8); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(60px) scale(1); opacity: 0; }
  }
  @keyframes fountain-rise {
    0% { transform: translateY(20px) scale(0.8); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(-60px) scale(1.2); opacity: 0; }
  }

  .animate-float-1 { animation: float-1 7s ease-in-out infinite; will-change: transform; }
  .animate-float-2 { animation: float-2 8s ease-in-out infinite; will-change: transform; }
  .animate-float-3 { animation: float-3 6s ease-in-out infinite; will-change: transform; }
  .animate-fade-up { animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; will-change: opacity, transform; }
  .animate-gradient-x { 
    background-size: 200% 200%;
    animation: gradient-x 4s ease infinite; 
  }
  .animate-marquee-left { animation: marquee-left 40s linear infinite; }
  .animate-marquee-right { animation: marquee-right 40s linear infinite; }
  .animate-spin-slow { animation: spin-slow 8s linear infinite; }
  .animate-spin-reverse { animation: spin-reverse 4s linear infinite; }
  .animate-orbit-1 { animation: orbit-1 6s linear infinite; }
  .animate-orbit-2 { animation: orbit-2 8s linear infinite; }
  .animate-orbit-3 { animation: orbit-3 10s linear infinite; }

  /* Silicon Valley Bento Glows */
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

  @keyframes grid-pan {
    0% { background-position: 0px 0px; }
    100% { background-position: 0px 60px; }
  }
  @keyframes grid-breathe {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.9; }
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

// ─── REUSABLE HYPNOTIC CTA COMPONENT (SLEEK APPLE PRO STYLE) ───
const HypnoticCTA = ({ onClick, text = "Start 7 Days Free Trial", className = "" }: { onClick: () => void, text?: string, className?: string }) => (
  <div className={`relative cursor-pointer w-full sm:w-auto ${className}`} onClick={onClick}>
    <button className="relative w-full sm:w-auto px-10 md:px-14 h-16 md:h-18 rounded-full font-black text-white text-lg md:text-xl flex items-center justify-center gap-3 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform scale-[1.03] border-0 transition-transform duration-300 hover:scale-[1.05]">
      {/* Dynamic Liquid Border (ALWAYS FLOWING) */}
      <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 animate-gradient-x">
        <div className="w-full h-full rounded-full bg-[#0a0a0a]"></div>
      </div>

      {/* Internal Void */}
      <div className="absolute inset-[2px] rounded-full bg-slate-950 z-0"></div>

      {/* Hypnotic Light Beam (Slow, Sleek, Ease-in-out) */}
      <div 
        className="absolute inset-[2px] rounded-full z-1 pointer-events-none bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.2),55%,transparent)] bg-[length:250%_100%]"
        style={{ animation: 'btn-sheen 5s infinite ease-in-out' }}
      />

      {/* Text & Icon */}
      <span className="relative z-10 flex items-center gap-3 tracking-tight selection:bg-none">
        {text}
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transform translate-x-1" />
      </span>

      {/* Inner Highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-1"></div>
    </button>
  </div>
);

// ─── THE SILICON VALLEY "AHA MOMENT" AI TERMINAL (V2 HYPER-RESPONSIVE) ───
function BillionDollarAITerminal() {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'generating' | 'done' | 'idle'>('idle');
  const [typedText, setTypedText] = useState('');

  const SCENARIOS = [
    {
      text: "Create the entire month of content for my Real Estate Company in London...",
      type: "content",
    },
    {
      text: "Publish my post on Instagram, Facebook, X, Linkedin, Youtube & GMB...",
      type: "publish",
    },
    {
      text: "Create a Meta Leads Ad for my Travel Agency...",
      type: "ads",
    }
  ];

  useEffect(() => {
    let currentText = SCENARIOS[step].text;
    let charIndex = 0;
    setPhase('typing');
    setTypedText('');

    const typeInterval = setInterval(() => {
      setTypedText(currentText.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex >= currentText.length) {
        clearInterval(typeInterval);
        setTimeout(() => setPhase('generating'), 800);
      }
    }, 45);

    return () => clearInterval(typeInterval);
  }, [step]);

  useEffect(() => {
    if (phase === 'generating') {
      const genTimer = setTimeout(() => setPhase('done'), 1800);
      return () => clearTimeout(genTimer);
    }
    if (phase === 'done') {
      const doneTimer = setTimeout(() => {
        setPhase('idle');
        setStep((prev) => (prev + 1) % SCENARIOS.length);
      }, 4500);
      return () => clearTimeout(doneTimer);
    }
  }, [phase]);

  const current = SCENARIOS[step];

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#030408] rounded-2xl md:rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(99,102,241,0.4)] overflow-hidden flex flex-col group">
      
      {/* --- macOS Style Glass Chrome --- */}
      <div className="h-8 md:h-10 w-full bg-white/5 backdrop-blur-md border-b border-white/5 flex items-center px-3 md:px-4 gap-1.5 md:gap-2 z-20 shrink-0">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-rose-500/80 border border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-500/80 border border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500/80 border border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
        <div className="mx-auto flex-1 text-center pr-10 md:pr-12">
           <span className="text-[8px] md:text-xs font-mono text-slate-500 tracking-widest uppercase">Boopilot_Engine_v4.0</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.15),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      <div className="flex-1 relative flex items-center justify-center p-4 md:p-8 overflow-hidden pb-20 md:pb-32">
        
        {phase === 'generating' && (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500 ease-out z-10">
            <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-indigo-500 animate-spin-slow shadow-[0_0_30px_rgba(99,102,241,0.5)]"></div>
              <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-fuchsia-500 animate-spin-reverse shadow-[0_0_20px_rgba(217,70,239,0.5)]"></div>
              <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.8)] animate-pulse">
                 <Sparkles className="w-3 h-3 md:w-5 md:h-5 text-indigo-600" />
              </div>
            </div>
            <span className="mt-4 md:mt-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 font-extrabold tracking-widest uppercase text-[8px] md:text-xs animate-pulse text-center">
              BOO is cooking...
            </span>
          </div>
        )}

        {phase === 'done' && (
          <div className="w-full h-full flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out z-10">
            
            {current.type === 'content' && (
              <div className="grid grid-cols-5 md:grid-cols-7 gap-2 md:gap-4 w-full max-w-3xl">
                {[...Array(14)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-lg md:rounded-2xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(99,102,241,0.4)] transform transition-all animate-fade-up border border-white/20 bg-gradient-to-br ${i % 3 === 0 ? 'from-fuchsia-500 to-pink-500' : 'from-indigo-600 to-blue-500'}`}
                    style={{ animationDelay: `${i * 40}ms`, animationFillMode: 'both' }}
                  >
                    <ImageIcon className="w-4 h-4 md:w-8 md:h-8 text-white/80 drop-shadow-md" />
                  </div>
                ))}
              </div>
            )}

            {current.type === 'publish' && (
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8 w-full relative px-2">
                <div className="hidden sm:block absolute top-1/2 left-4 right-4 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent -translate-y-1/2 animate-pulse shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
                {[
                  { Icon: InstagramLogo, color: "text-[#E4405F]", bg: "bg-white" },
                  { Icon: FacebookLogo, color: "text-[#1877F2]", bg: "bg-white" },
                  { Icon: LinkedInLogo, color: "text-[#0A66C2]", bg: "bg-white" },
                  { Icon: YouTubeLogo, color: "text-[#FF0000]", bg: "bg-white" },
                ].map((platform, i) => (
                  <div 
                    key={i} 
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-xl md:rounded-[1.5rem] ${platform.bg} flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.15)] relative z-10 animate-in zoom-in duration-500 hover:scale-110 transition-transform shrink-0`}
                    style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
                  >
                    <platform.Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 ${platform.color}`} />
                    <div className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-5 h-5 md:w-7 md:h-7 bg-emerald-500 rounded-full flex items-center justify-center border-[2px] md:border-[3px] border-[#030408] shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-in zoom-in" style={{ animationDelay: `${(i * 150) + 300}ms`, animationFillMode: 'both' }}>
                      <Check className="w-2.5 h-2.5 md:w-4 md:h-4 text-white font-bold" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {current.type === 'ads' && (
              <div className="relative w-full max-w-sm md:max-w-lg animate-in zoom-in duration-700 ease-out px-4">
                <div className="absolute inset-0 bg-blue-500/30 blur-[40px] md:blur-[60px] rounded-full"></div>
                <div className="bg-slate-900/80 backdrop-blur-2xl border border-blue-400/30 rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-[0_30px_60px_-15px_rgba(59,130,246,0.4)] relative z-10 animate-float-1">
                  <div className="flex justify-between items-center mb-4 md:mb-8">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                        <Megaphone className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                      </div>
                      <span className="text-white font-black text-sm md:text-xl tracking-tight">Campaign Alpha</span>
                    </div>
                    <Badge className="bg-emerald-500 text-white border-0 shadow-[0_0_20px_rgba(16,185,129,0.6)] px-2 py-1 md:px-4 md:py-2 text-[8px] md:text-xs font-black tracking-widest uppercase animate-pulse">ROAS 4.8x</Badge>
                  </div>
                  <div className="h-2.5 md:h-4 w-full bg-slate-950 rounded-full overflow-hidden mb-4 md:mb-6 border border-slate-800 shadow-inner">
                    <div className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 w-full animate-[marquee-right_2.5s_ease-out_forwards]"></div>
                  </div>
                  <div className="flex justify-center">
                    <Badge className="bg-blue-500/10 border border-blue-500/30 px-3 py-1.5 md:px-6 md:py-3 rounded-lg md:rounded-xl text-[8px] md:text-xs font-bold text-blue-300 flex items-center gap-1.5 md:gap-2 text-center text-wrap leading-tight">
                      <Target className="w-3 h-3 md:w-4 md:h-4 shrink-0"/> High-Converting Ad Deployed
                    </Badge>
                  </div>
                </div>
              </div>
            )}

            <div className="absolute top-12 md:top-16 bg-emerald-500/20 border border-emerald-500/50 backdrop-blur-xl px-4 py-2 md:px-8 md:py-3 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.4)] animate-in slide-in-from-top-4 fade-in duration-500 delay-500 z-20">
              <span className="text-emerald-400 font-black text-[10px] md:text-lg tracking-widest uppercase flex items-center gap-1.5 md:gap-2">
                <Sparkles className="w-3 h-3 md:w-5 md:h-5"/> BOOM! It's done.
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[80%] z-30">
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-xl rounded-full pointer-events-none"></div>
        <div className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[1.25rem] md:rounded-[2rem] p-2 md:p-3 flex items-center gap-2 md:gap-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-[0.8rem] md:rounded-[1.25rem] bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-white/20">
            <BotMessageSquare className="w-4 h-4 md:w-6 md:h-6 text-white drop-shadow-md" />
          </div>
          <div className="flex-1 font-mono text-[9px] sm:text-[11px] md:text-sm text-white/90 drop-shadow-md tracking-tight leading-snug">
            {typedText}
            {phase === 'typing' && <span className="inline-block w-1.5 md:w-2.5 h-2.5 md:h-4 bg-indigo-400 ml-1 animate-pulse shadow-[0_0_10px_rgba(129,140,248,0.8)] align-middle mb-0.5"></span>}
          </div>
          <Button 
            size="icon" 
            className={`w-8 h-8 md:w-12 md:h-12 rounded-[0.8rem] md:rounded-[1.25rem] shrink-0 transition-all duration-300 ${phase === 'typing' ? 'bg-white/5 text-white/30 border border-white/10' : 'bg-white text-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105'}`}
          >
            {phase === 'generating' ? <Loader2 className="w-4 h-4 md:w-6 md:h-6 animate-spin" /> : <ArrowRight className="w-3 h-3 md:w-6 md:h-6" />}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── THE SILICON VALLEY "QUANTUM CHAMBER" COMPARISON ───
function QuantumComparisonChamber() {
  return (
    <section id="comparison" className="py-20 md:py-32 px-4 md:px-6 bg-[#fafafa] relative z-10 border-y border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <Badge className="bg-red-50 text-red-600 border border-red-100 px-4 py-1.5 text-[10px] md:text-xs font-black mb-6 rounded-full uppercase tracking-widest shadow-sm">
            The Unfair Advantage
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Boopilot vs <br className="hidden md:block"/><span className="text-gradient-danger">The Old Way.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto px-2">
            While you manually post, reply, and chase leads — your competitors are automating everything. Here's what that gap actually costs you.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto bg-[#050505] rounded-[2rem] md:rounded-[3rem] border border-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col md:flex-row overflow-hidden group">
          
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent z-20"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-[#050505] rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.9)] z-30 group-hover:scale-110 transition-transform duration-700">
            <div className="absolute inset-[-8px] rounded-full border-t-2 border-r-2 border-indigo-500/50 animate-spin-slow"></div>
            <div className="absolute inset-[-4px] rounded-full border-b-2 border-l-2 border-fuchsia-500/50 animate-spin-reverse"></div>
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 text-lg md:text-xl tracking-tighter">VS</span>
          </div>

          {/* LEFT SIDE: Analog Nightmare */}
          <div className="flex-1 p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-red-500/20 blur-[100px] pointer-events-none group-hover:bg-red-500/30 transition-colors duration-700"></div>
            
            {[...Array(8)].map((_, i) => (
              <div key={`red-${i}`} className="absolute w-[2px] h-16 bg-gradient-to-b from-red-500 to-transparent rounded-full blur-[1px] animate-[spark-drop_3s_infinite_ease-in] opacity-0" style={{ left: `${10 + (i * 12)}%`, animationDelay: `${i * 0.4}s` }}></div>
            ))}

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                  <AlertTriangle className="w-6 h-6 md:w-7 md:h-7 text-red-400" />
                </div>
                <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 text-[9px] md:text-[10px] uppercase tracking-widest font-black">The Old Way</Badge>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">THE PAINFUL TRUTH</h3>
              
              <div className="my-8 md:my-10 pb-8 md:pb-10 border-b border-white/10">
                <span className="text-7xl md:text-8xl font-black text-red-500 tracking-tighter drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">$800</span>
                <span className="text-slate-500 font-bold text-lg md:text-xl ml-2">/mo</span>
              </div>
              <ul className="space-y-6 text-base md:text-lg font-bold text-slate-400 mt-auto">
                <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5 shadow-[0_0_10px_rgba(239,68,68,0.5)] rounded-full" /> <span>6+ hours every week creating content that gets forgotten by tomorrow</span></li>
                <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5 shadow-[0_0_10px_rgba(239,68,68,0.5)] rounded-full" /> <span>Paying an agency $800/month and having zero idea what they actually do</span></li>
                <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5 shadow-[0_0_10px_rgba(239,68,68,0.5)] rounded-full" /> <span>Leads sitting in DMs going cold while you're busy running your business</span></li>
                <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5 shadow-[0_0_10px_rgba(239,68,68,0.5)] rounded-full" /> <span>Tracking leads in a spreadsheet that's already 3 days out of date</span></li>
                <li className="flex items-start gap-4"><XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5 shadow-[0_0_10px_rgba(239,68,68,0.5)] rounded-full" /> <span>Waking up to 47 unanswered comments and DMs that could have been customers</span></li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: Boopilot Dream */}
          <div className="flex-1 p-8 md:p-16 relative overflow-hidden border-t md:border-t-0 border-white/10 md:border-none">
            <div className="absolute bottom-[-20%] right-[-20%] w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-700"></div>
            
            {[...Array(8)].map((_, i) => (
              <div key={`green-${i}`} className="absolute w-[2px] h-20 bg-gradient-to-t from-emerald-400 to-cyan-400 rounded-full blur-[1px] animate-[data-rise_3s_infinite_ease-out] opacity-0" style={{ left: `${10 + (i * 12)}%`, animationDelay: `${i * 0.3}s` }}></div>
            ))}

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-emerald-400" />
                </div>
                <Badge className="bg-emerald-500 text-white border-0 shadow-[0_0_15px_rgba(16,185,129,0.6)] text-[9px] md:text-[10px] uppercase tracking-widest font-black animate-pulse">Boopilot Cockpit</Badge>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">THE NEW REALITY</h3>
              
              <div className="my-8 md:my-10 pb-8 md:pb-10 border-b border-white/10">
                <span className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tighter drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">$39</span>
                <span className="text-slate-500 font-bold text-lg md:text-xl ml-2">/mo</span>
              </div>
              <ul className="space-y-6 text-base md:text-lg font-bold text-slate-300 mt-auto">
                <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5 bg-emerald-500/20 rounded-full p-1 shadow-[0_0_10px_rgba(16,185,129,0.4)]" /> <span>30 days of content — AI visuals, captions, hashtags — created and scheduled in under 3 minutes</span></li>
                <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5 bg-emerald-500/20 rounded-full p-1 shadow-[0_0_10px_rgba(16,185,129,0.4)]" /> <span>Every DM and comment gets an instant intelligent reply and drops straight into your CRM</span></li>
                <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5 bg-emerald-500/20 rounded-full p-1 shadow-[0_0_10px_rgba(16,185,129,0.4)]" /> <span>Your Meta ads created, published, and tracked from one dashboard — no Ads Manager confusion</span></li>
                <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5 bg-emerald-500/20 rounded-full p-1 shadow-[0_0_10px_rgba(16,185,129,0.4)]" /> <span>Google Business reviews auto-replied to, professionally, within seconds of posting</span></li>
                <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5 bg-emerald-500/20 rounded-full p-1 shadow-[0_0_10px_rgba(16,185,129,0.4)]" /> <span>Every lead gets followed up by WhatsApp, email, and call — tracked in real time</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN PAGE EXPORT ───
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  
  const [mutedFeature, setMutedFeature] = useState<string | null>(null);
  const videoRefs = {
    studioMob: useRef<HTMLVideoElement>(null),
    autopilotMob: useRef<HTMLVideoElement>(null),
    studioDesk: useRef<HTMLVideoElement>(null),
    autopilotDesk: useRef<HTMLVideoElement>(null),
  };

  const toggleMute = (feature: 'studioMob' | 'autopilotMob' | 'studioDesk' | 'autopilotDesk') => {
    const ref = videoRefs[feature];
    if (ref && ref.current) {
      if (mutedFeature === feature) {
        ref.current.muted = true;
        setMutedFeature(null);
      } else {
        if (mutedFeature && videoRefs[mutedFeature as keyof typeof videoRefs].current) {
          videoRefs[mutedFeature as keyof typeof videoRefs].current!.muted = true;
        }
        ref.current.muted = false;
        setMutedFeature(feature);
      }
    }
  };
  
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  useEffect(() => {
    const enable = () => setAnimationsEnabled(true);
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(enable, { timeout: 2500 });
    } else {
      setTimeout(enable, 2000);
    }
  }, []);

  const setLocation = (path: string) => {
    window.location.href = `${APP_URL}${path}`;
  };

  return (
    <div className={`min-h-screen bg-[#fafafa] font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden text-slate-900 ${!animationsEnabled ? 'no-animations' : ''}`}>
      
      {/* 🚀 SILICON VALLEY SEO SLEDGEHAMMER 🚀 */}
      <Head>
        <title>Boopilot | The AI Marketing Agency for Modern Businesses</title>
        <meta name="description" content="Automate your content creation, schedule 30 days of posts in 2 minutes, and convert DMs into leads. The ultimate AI engine for founders." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.boopilot.com/" />
        <meta property="og:title" content="Boopilot | The AI Marketing Agency" />
        <meta property="og:description" content="Automate your content creation, schedule posts, and convert DMs into leads. The ultimate AI engine." />
        <meta property="og:image" content="https://www.boopilot.com/logoBoopilot.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.boopilot.com/" />
        <meta property="twitter:title" content="Boopilot | The AI Marketing Agency" />
        <meta property="twitter:description" content="Automate your content creation, schedule posts, and convert DMs into leads." />
        <meta property="twitter:image" content="https://www.boopilot.com/logoBoopilot.png" />

        {/* JSON-LD Schema to kill the "Did you mean Copilot" issue */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Boopilot",
              "operatingSystem": "Web",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "39.00",
                "priceCurrency": "USD"
              },
              "description": "Boopilot is an all-in-one AI marketing platform that automates social media scheduling, Meta ads, and CRM lead generation.",
              "url": "https://www.boopilot.com",
              "publisher": {
                "@type": "Organization",
                "name": "Boopilot Technologies",
                "url": "https://www.boopilot.com"
              }
            })
          }}
        />
      </Head>

      <style>{customStyles}</style>

      {/* 1. APP-LIKE FLOATING HEADER */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <div className="w-full max-w-[1100px] rounded-full p-[1px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 animate-gradient-x shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <nav className="w-full rounded-full transition-all duration-500 flex items-center justify-between px-4 py-2.5 md:px-6 md:py-3 bg-[#fdfdfd]">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <img src="/logoBoopilotGif.gif" alt="Boopilot Logo" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#comparison" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Why Us</a>
              <a href="#how-it-works" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Wall of Love</a>
              <a href="#pricing" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Pricing</a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" onClick={() => setLocation('/login')} className="text-slate-700 font-bold rounded-full hover:bg-slate-100 h-10 px-5">Log In</Button>
              <Button onClick={() => setLocation('/login?tab=signup')} className="bg-slate-900 hover:bg-slate-800 text-white font-bold h-10 px-6 rounded-full shadow-lg transition-transform hover:scale-105">
                Start Free Trial
              </Button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-900 p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="fixed top-24 left-4 right-4 z-40 bg-[#fdfdfd] p-6 rounded-3xl flex flex-col gap-5 border border-slate-200 shadow-2xl md:hidden animate-fade-up">
          <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 text-center">Why Us</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 text-center">Features</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 text-center">Wall of Love</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 text-center">Pricing</a>
          <div className="flex flex-col gap-3 mt-2">
            <Button onClick={() => setLocation('/login')} variant="outline" className="w-full h-12 text-base font-bold rounded-xl border-slate-200">Log In</Button>
            <Button onClick={() => setLocation('/login?tab=signup')} className="w-full bg-indigo-600 text-white h-12 text-base font-bold rounded-xl">Start Free Trial</Button>
          </div>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-0 px-4 md:px-6 text-center z-10 hero-cinematic-bg border-b border-slate-800/50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-grid"></div>
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[500px] bg-indigo-600/30 blur-[120px] rounded-full animate-pulse-glow"></div>
        </div>

        <div className="max-w-[1100px] mx-auto relative flex flex-col items-center z-10">
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-8 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg animate-fade-up">
            <ShieldCheck className="w-4 h-4 mr-2 inline-block -mt-0.5" /> Loved by Modern Businesses
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight mb-6 leading-[1.1] animate-fade-up text-white" style={{animationDelay: '0.1s'}}>
            Your entire marketing <span className="text-gradient-danger">Agency</span> <br className="hidden md:block"/>
            <span className="text-gradient-blue">Replaced by one AI.</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium mb-12 animate-fade-up" style={{animationDelay: '0.2s'}}>
            Automatic Content Creation, 30 Days Auto-Pilot Mode, Single Click Posting to all Platforms, Automatic Leads CRM, Auto-Meta Ads, and everything inside one single Dashboard.
          </p>

          <div className="flex flex-col items-center justify-center animate-fade-up w-full mb-12 relative z-10" style={{animationDelay: '0.3s'}}>
            <HypnoticCTA onClick={() => setLocation('/login?tab=signup')} />
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-8 text-[11px] md:text-sm font-bold text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Setup in 2 minutes</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> No credit card required</span>
            </div>
          </div>

          <div className="w-full max-w-[100vw] overflow-hidden border-y border-slate-700/50 bg-slate-900/30 backdrop-blur-sm py-5 mb-16 animate-fade-up relative" style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#0f1117] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#0f1117] to-transparent z-10 pointer-events-none"></div>
            <div className="flex w-max animate-marquee-left items-center">
              {[1, 2].map((set) => (
                <div key={set} className="flex items-center justify-around w-max gap-8 md:gap-24 px-4 md:px-12">
                  <div className="flex items-center gap-1.5 md:gap-3 opacity-90 hover:opacity-100 transition-all duration-300 cursor-default">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta Partner" className="h-3.5 md:h-5 transition-all" loading="lazy" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">Partner</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-3 opacity-90 hover:opacity-100 transition-all duration-300 cursor-default">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Verified" className="h-4 md:h-6 transition-all" loading="lazy" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">Verified</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-3 opacity-90 hover:opacity-100 transition-all duration-300 cursor-default">
                    <LinkedInLogo className="h-4 md:h-6 w-auto text-[#0A66C2]" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">Approved</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-3 opacity-90 hover:opacity-100 transition-all duration-300 cursor-default">
                    <XLogo className="h-3.5 md:h-5 w-auto text-slate-100" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">Partner</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-3 opacity-90 hover:opacity-100 transition-all duration-300 cursor-default">
                    <InstagramLogo className="h-4 md:h-6 w-auto text-[#E4405F]" />
                    <span className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">API Access</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative max-w-5xl w-full mx-auto md:-mb-32 z-20 animate-fade-up" style={{animationDelay: '0.5s'}}>
             <BillionDollarAITerminal />
          </div>
        </div>
      </section>

      <div className="hidden md:block h-40 bg-[#fafafa]"></div>

      {/* 3. THE "SILICON VALLEY QUANTUM CHAMBER" */}
      <QuantumComparisonChamber />

      {/* 4. THE SILICON VALLEY BENTO GRID (ALL 6 FEATURES) */}
      <section id="how-it-works" className="pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 relative z-10 bg-[#02040a] overflow-hidden border-y border-white/5">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            <Badge className="bg-white/5 text-slate-300 border border-white/10 backdrop-blur-md px-4 py-1.5 text-[10px] md:text-xs font-black mb-6 rounded-full uppercase tracking-widest shadow-lg">
              Boopilot Cockpit
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              A complete toolkit for <br className="hidden md:block"/><span className="text-gradient-danger">total domination.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto px-2 mb-10">
              We built every feature a business owner actually needs to scale, without the massive agency fees. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            
            <div className="bento-card col-span-1 md:col-span-12 lg:col-span-4 rounded-[2rem] p-6 md:p-8 relative overflow-hidden group flex flex-col">
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-fuchsia-500/20 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-fuchsia-500/30"></div>
              
              <div className="relative z-10 mb-6 md:mb-8">
                <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-0 w-max mb-4 px-3 py-1 font-extrabold uppercase tracking-widest text-[9px] md:text-[10px]">Feature 1</Badge>
                <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">AI Studio</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                  Agency-quality content. AI generates hyper-realistic visuals in seconds.
                </p>
              </div>

              <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:flex-1 mt-auto">
                <div className="absolute top-0 left-0 w-[90%] h-[80%] md:h-[90%] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#050505]">
                  <LazyVideo
                    ref={videoRefs.studioDesk}
                    src="https://vz-b56449b1-580.b-cdn.net/88c77ea4-216d-415d-bfb9-d7a5bbeaabb0/play_720p.mp4"
                    className="w-full h-full object-cover scale-[1.02] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    rootMargin="400px"
                  />
                </div>
                <div className="absolute bottom-0 right-2 md:right-0 w-[38%] md:w-[45%] aspect-[9/16] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden border-[3px] md:border-4 border-[#090b11] shadow-2xl bg-[#050505] transform rotate-6 group-hover:rotate-0 transition-transform duration-500 z-20">
                  <LazyVideo
                    ref={videoRefs.studioMob}
                    src="https://vz-b56449b1-580.b-cdn.net/606bfd29-ca05-4552-abb8-80a22d64bf28/play_720p.mp4"
                    className="w-full h-full object-cover scale-[1.02]"
                    rootMargin="400px"
                  />
                  {mutedFeature !== 'studioMob' && (
                    <button onClick={() => toggleMute('studioMob')} className="absolute inset-0 w-full h-full bg-black/30 flex items-center justify-center z-40 backdrop-blur-[1px]">
                      <div className="bg-white/90 text-slate-900 p-2 rounded-full animate-pulse"><VolumeX className="w-3 h-3 md:w-4 h-4" /></div>
                    </button>
                  )}
                  {mutedFeature === 'studioMob' && (
                    <button onClick={() => toggleMute('studioMob')} className="absolute top-1 right-1 md:top-2 md:right-2 bg-black/50 p-1 md:p-1.5 rounded-full text-white z-40"><Volume2 className="w-3 h-3" /></button>
                  )}
                </div>
              </div>
            </div>

            <div className="bento-card col-span-1 md:col-span-12 lg:col-span-8 rounded-[2rem] p-6 md:p-10 relative overflow-hidden group flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-indigo-500/20 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-indigo-500/30"></div>
              
              <div className="w-full lg:w-1/2 relative z-10 flex flex-col h-full justify-center">
                <Badge className="bg-indigo-500/20 text-indigo-300 border-0 w-max mb-4 px-3 py-1 font-extrabold uppercase tracking-widest text-[9px] md:text-[10px]">Feature 2</Badge>
                <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 md:mb-4 tracking-tight">Put growth on Auto-Pilot.</h3>
                <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed mb-6">
                  Consistency beats the algorithm. Hand your brand to Beast Mode. It learns your unique voice, writes the captions, and schedules 30 days of high-converting content while you sleep.
                </p>
                <div className="mt-2 md:mt-auto space-y-3 font-bold text-slate-300 text-xs md:text-sm">
                  <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-emerald-400" /></div> Trains on your exact brand DNA.</div>
                  <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-emerald-400" /></div> Writes psychological captions.</div>
                  <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-emerald-400" /></div> 30 days scheduled in 2 minutes.</div>
                </div>
              </div>
              
              <div className="relative w-full lg:w-1/2 h-[280px] sm:h-[340px] md:h-[400px] mt-6 lg:mt-auto">
                <div className="absolute top-0 right-0 w-[90%] h-[80%] md:h-[90%] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#050505]">
                  <LazyVideo
                    ref={videoRefs.autopilotDesk}
                    src="https://vz-b56449b1-580.b-cdn.net/ca7934df-c8b9-49a2-8f97-4449e0c4294f/play_720p.mp4"
                    className="w-full h-full object-cover scale-[1.02] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    rootMargin="400px"
                  />
                </div>
                <div className="absolute bottom-0 left-2 md:left-0 w-[38%] md:w-[40%] aspect-[9/16] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden border-[3px] md:border-4 border-[#090b11] shadow-2xl bg-[#050505] transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 z-20">
                  <LazyVideo
                    ref={videoRefs.autopilotMob}
                    src="https://vz-b56449b1-580.b-cdn.net/a12c737c-7788-4698-b7e7-43527a798fd3/play_720p.mp4"
                    className="w-full h-full object-cover scale-[1.02]"
                    rootMargin="400px"
                  />
                  {mutedFeature !== 'autopilotMob' && (
                    <button onClick={() => toggleMute('autopilotMob')} className="absolute inset-0 w-full h-full bg-black/30 flex items-center justify-center z-40 backdrop-blur-[1px]">
                      <div className="bg-white/90 text-slate-900 p-2 rounded-full animate-pulse"><VolumeX className="w-3 h-3 md:w-4 h-4" /></div>
                    </button>
                  )}
                  {mutedFeature === 'autopilotMob' && (
                    <button onClick={() => toggleMute('autopilotMob')} className="absolute top-1 right-1 md:top-2 md:right-2 bg-black/50 p-1 md:p-1.5 rounded-full text-white z-40"><Volume2 className="w-3 h-3" /></button>
                  )}
                </div>
              </div>
            </div>

            <div className="bento-card col-span-1 md:col-span-6 lg:col-span-4 rounded-[2rem] p-6 md:p-8 relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 left-0 w-full h-[200px] bg-cyan-500/10 blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-cyan-500/20"></div>
              <div className="relative z-10 mb-6">
                <Badge className="bg-cyan-500/20 text-cyan-300 border-0 w-max mb-4 px-3 py-1 font-extrabold uppercase tracking-widest text-[9px] md:text-[10px]">Feature 3</Badge>
                <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">Omnichannel Sync</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">Upload once. Distribute everywhere instantly at peak traffic times.</p>
              </div>
              <div className="relative w-full flex-1 rounded-[1.5rem] border border-white/10 bg-[#050505] p-5 flex flex-col justify-center mt-auto shadow-inner">
                <div className="grid grid-cols-5 gap-3 max-w-[200px] mx-auto w-full relative z-10">
                  <div className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg"><InstagramLogo className="w-5 h-5 text-[#E4405F]" /></div>
                  <div className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg transform translate-y-2"><FacebookLogo className="w-5 h-5 text-[#1877F2]" /></div>
                  <div className="aspect-square rounded-xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] transform -translate-y-2 scale-110 z-20"><Zap className="w-6 h-6 text-cyan-400" /></div>
                  <div className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg transform translate-y-2"><LinkedInLogo className="w-5 h-5 text-[#0A66C2]" /></div>
                  <div className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg"><XLogo className="w-4 h-4 text-white" /></div>
                </div>
              </div>
            </div>

            <div className="bento-card col-span-1 md:col-span-6 lg:col-span-4 rounded-[2rem] p-6 md:p-8 relative overflow-hidden group flex flex-col">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-blue-500/20"></div>
              <div className="relative z-10 mb-6">
                <Badge className="bg-blue-500/20 text-blue-300 border-0 w-max mb-4 px-3 py-1 font-extrabold uppercase tracking-widest text-[9px] md:text-[10px]">Feature 4</Badge>
                <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">Auto-Ads Manager</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">Stop setting cash on fire. Turn winning organic posts into high-ROAS ads.</p>
              </div>
              <div className="relative w-full flex-1 rounded-[1.5rem] border border-white/10 bg-[#050505] p-5 flex flex-col justify-center mt-auto shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-300">Campaign Alpha</span>
                    <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] uppercase tracking-widest px-2 shadow-lg">ROAS 4.2x</Badge>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-blue-500 w-[75%] rounded-full relative"><div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-r from-transparent to-white/40 animate-pulse"></div></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Spend</div>
                      <div className="text-lg font-black text-white">$400</div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 text-center shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                      <div className="text-[9px] font-bold text-blue-300 uppercase tracking-widest mb-1">Sales</div>
                      <div className="text-lg font-black text-blue-400">$1,680</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-card col-span-1 md:col-span-12 lg:col-span-4 rounded-[2rem] p-6 md:p-8 relative overflow-hidden group flex flex-col">
              <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-emerald-500/10 blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-emerald-500/20"></div>
              <div className="relative z-10 mb-6">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-0 w-max mb-4 px-3 py-1 font-extrabold uppercase tracking-widest text-[9px] md:text-[10px]">Feature 5</Badge>
                <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">Unified Leads CRM</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">Spreadsheets are dead. Centralize every inbound DM, comment, and ad lead.</p>
              </div>
              <div className="relative w-full flex-1 rounded-[1.5rem] border border-white/10 bg-[#050505] p-5 flex flex-col justify-center mt-auto shadow-inner overflow-hidden">
                <div className="flex gap-3 relative z-10">
                  <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 opacity-60">
                    <div className="h-2 w-1/2 bg-white/20 rounded-full mb-3"></div>
                    <div className="h-10 w-full bg-white/10 rounded-lg mb-2"></div>
                  </div>
                  <div className="flex-1 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 shadow-[0_0_20px_rgba(16,185,129,0.15)] transform -translate-y-2">
                    <div className="flex items-center gap-1.5 mb-3"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div><div className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Closed</div></div>
                    <div className="h-12 w-full bg-emerald-500/20 border border-emerald-500/40 rounded-lg flex items-center px-3"><div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center mr-2"><Check className="w-2.5 h-2.5 text-white"/></div><div className="h-2 w-1/2 bg-emerald-400/80 rounded-full"></div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-card col-span-1 md:col-span-12 rounded-[2rem] p-6 md:p-10 relative overflow-hidden group flex flex-col lg:flex-row items-center gap-8">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-rose-500/10 blur-[100px] pointer-events-none transition-all duration-700 group-hover:bg-rose-500/20"></div>
              
              <div className="w-full lg:w-5/12 relative z-10 flex flex-col justify-center">
                <Badge className="bg-rose-500/20 text-rose-300 border-0 w-max mb-4 px-3 py-1 font-extrabold uppercase tracking-widest text-[9px] md:text-[10px]">Feature 6</Badge>
                <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 md:mb-4 tracking-tight">Automations & Auto-Responder.</h3>
                <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed mb-6">
                  You are losing sales while you sleep. Boopilot’s 24/7 AI instantly replies to every single comment *and* shoots them a personalized DM to capture their details automatically.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="bg-white/10 text-white border-white/20 font-bold px-3 py-1">100% Automated Replies</Badge>
                  <Badge className="bg-white/10 text-white border-white/20 font-bold px-3 py-1">DM Sales Flow</Badge>
                </div>
              </div>

              <div className="w-full lg:w-7/12 relative z-10 flex justify-center lg:justify-end">
                <div className="relative w-[280px] md:w-[340px] h-[180px] md:h-[220px] bg-[#050505] rounded-[2rem] border border-white/10 p-5 shadow-2xl animate-float-3 overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
                  
                  <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3 relative z-10">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-orange-500 flex items-center justify-center shadow-lg"><BotMessageSquare className="w-4 h-4 text-white"/></div>
                     <div>
                        <div className="text-xs font-bold text-slate-200">Boopilot Sales AI</div>
                        <div className="text-[9px] text-emerald-400 font-bold flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> Online</div>
                     </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 relative z-10 flex-1 justify-end">
                     <div className="self-end bg-blue-600/90 text-white text-[10px] md:text-xs p-2.5 rounded-l-xl rounded-tr-xl max-w-[85%] shadow-md border border-blue-500/50 backdrop-blur-md">
                        How much is the starter plan?
                     </div>
                     <div className="self-start bg-slate-800 border border-slate-700 text-white text-[10px] md:text-xs p-2.5 rounded-r-xl rounded-tl-xl max-w-[90%] shadow-md relative backdrop-blur-md">
                        Hi! It's just $39/month. I've prepared a secure checkout link for you here. Ready to scale? 🚀
                     </div>
                     <div className="self-center mt-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] md:text-[10px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <CheckCircle2 className="w-3.5 h-3.5"/> Lead Captured
                     </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-12 flex justify-center mt-8 md:mt-12">
              <HypnoticCTA onClick={() => setLocation('/login?tab=signup')} text="Ignite the Engine" />
            </div>

          </div>
        </div>
      </section>

      {/* 5. INFINITE WALL OF LOVE */}
      <section id="testimonials" className="pt-12 md:pt-16 pb-20 md:pb-32 bg-[#02040a] relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05)_0%,transparent_100%)] pointer-events-none"></div>
        
        <div className="text-center mb-12 md:mb-16 relative z-10 px-4">
          <Badge className="bg-white/5 text-slate-300 border border-white/10 backdrop-blur-md px-4 py-1.5 text-[10px] md:text-xs font-black mb-6 rounded-full uppercase tracking-widest shadow-lg">
            Wall of Love
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Don't take our word for it.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto px-2">
            Hundreds of founders fired their agencies and scaled with Boopilot.
          </p>
        </div>

        {[
          { dir: 'animate-marquee-left', users: [
            { name: "Rahul S.", role: "E-com Founder", text: "Fired my entire $5k/mo marketing agency after 3 days of using Boopilot. The Auto-pilot engine is terrifyingly good.", img: "https://i.pravatar.cc/150?u=1" },
            { name: "Sarah J.", role: "Real Estate Agent", text: "I literally generated 30 days of high-quality property posts in 2 minutes. The CRM caught a lead from a 3AM comment. Mind blown.", img: "https://i.pravatar.cc/150?u=2" },
            { name: "Michael T.", role: "Agency Owner", text: "We use Boopilot to manage 15 client accounts. It saves us about 40 hours a week in manual formatting and posting.", img: "https://i.pravatar.cc/150?u=3" },
            { name: "Priya M.", role: "Fitness Coach", text: "The DM auto-responder is a money printer. Someone commented 'Price' and Boopilot instantly closed them in DMs while I was at the gym.", img: "https://i.pravatar.cc/150?u=4" }
          ]},
          { dir: 'animate-marquee-right', users: [
            { name: "David L.", role: "Local Business", text: "The Google Business Sync alone is worth the price. Our local ranking shot up because Boopilot posts updates every single day.", img: "https://i.pravatar.cc/150?u=5" },
            { name: "Elena V.", role: "SaaS Founder", text: "It perfectly mimics my brand voice. I honestly can't tell the difference between what I write and what the AI writes anymore.", img: "https://i.pravatar.cc/150?u=6" },
            { name: "Amit K.", role: "Dropshipper", text: "Reels expressway is insane. I upload one video and it perfectly formats and blasts it to IG, YouTube Shorts, and TikTok.", img: "https://i.pravatar.cc/150?u=7" },
            { name: "Jessica H.", role: "Consultant", text: "The dashboard is beautiful. Having all my analytics, leads, and scheduled posts in one dark-mode screen makes me feel like a CEO.", img: "https://i.pravatar.cc/150?u=8" }
          ]}
        ].map((track, trackIdx) => (
          <div key={trackIdx} className="w-full max-w-[100vw] overflow-hidden mb-6 relative">
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#02040a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#02040a] to-transparent z-10 pointer-events-none"></div>
            <div className={`flex w-max ${track.dir} gap-6 px-3`}>
              {[...track.users, ...track.users].map((testimonial, i) => (
                <div key={i} className="w-[300px] md:w-[400px] shrink-0 p-6 md:p-8 rounded-[2rem] bg-[#090b11] border border-white/5 shadow-lg hover:border-white/10 hover:bg-[#0c0e15] transition-colors">
                  <div className="flex items-center gap-1 mb-5">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/30" />
                    <div>
                      <div className="text-white font-extrabold text-sm">{testimonial.name}</div>
                      <div className="text-indigo-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 6. DETAILED PRICING SECTION */}
      <section id="pricing" className="py-24 md:py-32 px-4 md:px-6 relative z-10 bg-[#fafafa] border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <Badge className="bg-indigo-50 text-indigo-600 border border-indigo-100 px-4 py-1.5 text-[10px] md:text-xs font-black mb-6 rounded-full uppercase tracking-widest shadow-sm">
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              The highest ROI investment <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">you will ever make.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto px-2">
              Cheaper than an intern. Smarter than an agency. Choose your engine.
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-10 md:mt-12">
               <span className={`text-sm md:text-base font-black transition-colors ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
               
               <div 
                 className="relative w-16 md:w-20 h-8 md:h-10 bg-slate-200 rounded-full p-1 cursor-pointer shadow-inner border border-slate-300/50 transition-colors duration-500"
                 onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
               >
                 <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${billingCycle === 'yearly' ? 'translate-x-full' : 'translate-x-0'}`}></div>
               </div>
               
               <span className={`text-sm md:text-base font-black flex items-center gap-2 transition-colors ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-400'}`}>
                 Annually 
                 <Badge className="bg-emerald-500 text-white border-0 text-[9px] md:text-[10px] uppercase tracking-widest font-black shadow-[0_0_15px_rgba(16,185,129,0.4)] animate-pulse">Save 20%</Badge>
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
            
            {/* STARTER PLAN */}
            <div className="w-full relative group">
              <Card className="p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 border border-slate-200 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <Zap className="w-6 h-6 md:w-7 md:h-7 text-slate-700" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">Starter Core</h3>
                  <p className="text-slate-500 text-sm md:text-base font-medium mt-3 mb-8">For solo business owners wanting to save 10 hours a week.</p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter transition-all duration-500">
                      {billingCycle === 'monthly' ? '$49' : '$39'}
                  </span>
                  <span className="text-slate-500 font-bold text-sm md:text-lg">/mo</span>
                </div>

                <Button onClick={() => setLocation('/login?tab=signup')} className="w-full h-14 md:h-16 text-sm md:text-lg font-black rounded-xl md:rounded-2xl bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md mb-10">
                   Start 7-Day Free Trial
                </Button>
                
                <div className="space-y-5 text-sm md:text-base text-slate-600 font-bold mt-auto border-t border-slate-100 pt-8 flex-1 flex flex-col justify-end">
                  <p className="font-black text-slate-900 mb-2 uppercase tracking-widest text-[10px] md:text-xs">What you get:</p>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-slate-900 shrink-0" /> Connect up to 4 Social Accounts</div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-slate-900 shrink-0" /> 100 AI Post Credits / Day</div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-slate-900 shrink-0" /> Cross-Platform Auto-Posting</div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-slate-900 shrink-0" /> Leads CRM & Automations</div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-slate-900 shrink-0" /> Auto-Ads Studio (Beta)</div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-slate-900 shrink-0" /> 1 Brand Profile</div>
                </div>
              </Card>
            </div>

            {/* PRO PIPELINE */}
            <div className="w-full relative group transform lg:scale-105 z-20 mt-4 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 blur-3xl opacity-30 group-hover:opacity-50 rounded-[3rem] transition-opacity duration-700 animate-pulse-glow pointer-events-none"></div>
              
              <Card className="p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#050505] text-white border-0 shadow-[0_0_80px_rgba(99,102,241,0.3)] relative flex flex-col h-full overflow-hidden">
                <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 animate-gradient-x rounded-[2rem] md:rounded-[2.5rem] opacity-50"></div>
                <div className="absolute inset-[2px] bg-[#050505] rounded-[calc(2rem-2px)] md:rounded-[calc(2.5rem-2px)] z-0"></div>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-fuchsia-600/20 blur-[100px] pointer-events-none z-0"></div>

                <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20">
                   <Badge className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white border-0 shadow-[0_0_20px_rgba(168,85,247,0.6)] px-6 py-2 text-[9px] md:text-xs font-black uppercase tracking-widest rounded-b-xl rounded-t-none">
                     Most Popular
                   </Badge>
                </div>

                <div className="relative z-10 mb-6 mt-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:rotate-12 transition-transform duration-500">
                    <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow-md" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">Pro Pipeline</h3>
                  <p className="text-slate-400 text-sm md:text-base font-medium mt-3 mb-8">Everything required to replace a full-time marketing agency.</p>
                </div>

                <div className="mb-8 flex items-baseline gap-1 relative z-10">
                  <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 tracking-tighter transition-all duration-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                      {billingCycle === 'monthly' ? '$139' : '$109'}
                  </span>
                  <span className="text-indigo-200/50 font-bold text-sm md:text-lg">/mo</span>
                </div>

                <div className="relative w-full mb-10 z-10 group/btn cursor-pointer" onClick={() => setLocation('/login?tab=signup')}>
                  <button className="relative w-full h-14 md:h-16 rounded-xl md:rounded-2xl font-black text-white text-sm md:text-lg flex items-center justify-center overflow-hidden transition-all duration-300 transform group-hover/btn:scale-[1.02] shadow-[0_0_30px_rgba(99,102,241,0.5)] bg-slate-900 border border-white/10">
                    <div className="absolute inset-0 rounded-xl md:rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 animate-gradient-x opacity-70">
                      <div className="w-full h-full rounded-[calc(1rem-1px)] md:rounded-[calc(1.5rem-1px)] bg-[#050505]"></div>
                    </div>
                    <div 
                      className="absolute inset-[1px] rounded-xl md:rounded-2xl z-1 pointer-events-none bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.2),55%,transparent)] bg-[length:250%_100%]"
                      style={{ animation: 'btn-sheen 4s infinite ease-in-out' }}
                    />
                    <span className="relative z-10 flex items-center gap-2">Deploy The System <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" /></span>
                  </button>
                </div>

                <div className="space-y-5 text-sm md:text-base text-slate-300 font-bold mt-auto border-t border-white/10 pt-8 flex-1 flex flex-col justify-end relative z-10">
                  <p className="font-black text-indigo-400 mb-2 uppercase tracking-widest text-[10px] md:text-xs">Everything in Starter, plus:</p>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400 shrink-0 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span><strong className="text-white">1000 AI Credits</strong> / Day</span></div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400 shrink-0 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span><strong className="text-white">All Social Media</strong> (IG, FB, LI, X, YT)</span></div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400 shrink-0 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span><strong className="text-white">Google My Business Booster</strong></span></div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400 shrink-0 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span><strong className="text-white">Full Auto-Pilot Mode</strong></span></div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400 shrink-0 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span>Real-Time Growth Tracking</span></div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400 shrink-0 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span>Unlimited Content Support</span></div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400 shrink-0 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span>Up to 5 Brand Profiles</span></div>
                  <div className="flex gap-4 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400 shrink-0 drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]" /> <span>24/7 Priority Support</span></div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium">Everything you need to know about the product and billing.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Do I need any technical skills to use Boopilot?",
                a: "Absolutely not. Boopilot was built specifically for business owners, not software engineers. If you can use WhatsApp, you can use Boopilot. Setup takes less than 2 minutes."
              },
              {
                q: "What happens when my 7-day trial ends?",
                a: "Your automated marketing will pause, and you will be prompted to select either the Starter or Pro plan to keep the engine running. We don't ask for a credit card upfront, so there are no surprise charges. Cancel anytime."
              },
              {
                q: "Can I connect my existing Facebook and Instagram pages?",
                a: "Yes! Connecting your existing pages takes less than 60 seconds. Boopilot will securely sync with them using official Meta APIs."
              },
              {
                q: "How does the AI know my brand's voice?",
                a: "During the 2-minute setup, you answer 3 simple questions about your business. Our AI analyzes your website, connect profiles, and past posts to perfectly mimic your unique tone."
              },
              {
                q: "How many leads can I capture on the Pro plan?",
                a: "Unlimited! The Pro Pipeline CRM allows for limitless lead tracking and management across all five major social platforms."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-bold text-slate-900 text-lg outline-none">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-indigo-500" />
                  </span>
                </summary>
                <div className="text-slate-500 mt-4 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA (DARK MODE SILICON VALLEY FINISH) */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative z-10 bg-[#02040a] border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15)_0%,transparent_100%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <Badge className="bg-white/5 text-slate-300 border border-white/10 backdrop-blur-md px-4 py-1.5 text-[10px] md:text-xs font-black mb-6 rounded-full uppercase tracking-widest shadow-lg">
            The Final Step
          </Badge>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white leading-[1.1]">
            Your brand, <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 animate-gradient-x">on autopilot.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium px-2">
            Join the smart business owners scaling their revenue automatically without lifting a finger. The engine is ready when you are.
          </p>
          
          <HypnoticCTA onClick={() => setLocation('/login?tab=signup')} text="Launch Your Free Trial" />
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[11px] md:text-sm font-bold text-slate-400">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Setup takes 2 minutes</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Cancel anytime</span>
          </div>
        </div>
      </section>

     {/* 10. PREMIUM MEGA FOOTER */}
      <footer className="bg-[#fdfdfd] border-t border-slate-200 pt-20 pb-10 px-4 md:px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto relative z-10">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-16 mb-20">
            
            <div className="col-span-2 md:col-span-4 lg:col-span-4 pr-0 lg:pr-12">
              <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                <img src="/logoBoopilotGif.gif" alt="Boopilot Logo" className="h-8 md:h-10 w-auto object-contain" loading="lazy" decoding="async" />
              </div>
              <p className="text-slate-500 text-sm mb-8 font-medium leading-relaxed">
                The all-in-one AI platform to automate your social media, track real-time growth, and manage your sales pipeline seamlessly. Fire your agency, hire the engine.
              </p>
              <div className="space-y-4">
                 <a href="mailto:support@boopilot.com" className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors w-fit group">
                     <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                       <Mail className="w-4 h-4 text-indigo-600" />
                     </div>
                     support@boopilot.com
                 </a>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h4 className="text-slate-900 font-extrabold mb-6 tracking-widest text-xs uppercase">Platform</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="#how-it-works" className="hover:text-indigo-600 transition-colors">Features</a></li>
                <li><a href="#comparison" className="hover:text-indigo-600 transition-colors">Why Us</a></li>
                <li><a href="#testimonials" className="hover:text-indigo-600 transition-colors">Wall of Love</a></li>
                <li><a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing Plans</a></li>
                <li><a href="/login" className="hover:text-indigo-600 transition-colors">Client Login</a></li>
                <li><a href="/login?tab=signup" className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5"/> Start Free Trial</a></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h4 className="text-slate-900 font-extrabold mb-6 tracking-widest text-xs uppercase">Free Tools</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="/tools/viral-hook-generator" className="hover:text-indigo-600 transition-colors">AI Hook Generator</a></li>
                <li><a href="/tools/roas-calculator" className="hover:text-indigo-600 transition-colors">Ad ROAS Calculator</a></li>
                <li><a href="/tools/engagement-rate-calculator" className="hover:text-indigo-600 transition-colors">Engagement Checker</a></li>
                <li><a href="/tools/best-time-to-post" className="hover:text-indigo-600 transition-colors">Best Time to Post</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-2 lg:col-span-2">
              <h4 className="text-slate-900 font-extrabold mb-6 tracking-widest text-xs uppercase">Growth Guides</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="/blog/instagram-algorithm-2026" className="hover:text-indigo-600 transition-colors">2026 Algorithm Guide</a></li>
                <li><a href="/blog/marketing-agency-vs-ai" className="hover:text-indigo-600 transition-colors">Agency vs. AI Tools</a></li>
                <li><a href="/blog/how-to-write-meta-ads" className="hover:text-indigo-600 transition-colors">4x ROAS Meta Ads</a></li>
                <li><a href="/blog/linkedin-organic-reach-strategy" className="hover:text-indigo-600 transition-colors">LinkedIn Viral Strategy</a></li>
                <li><a href="/blog/5-minute-content-calendar" className="hover:text-indigo-600 transition-colors">5-Min Content Calendar</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-2 lg:col-span-2">
              <h4 className="text-slate-900 font-extrabold mb-6 tracking-widest text-xs uppercase">Legal</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                <li><a href="/refunds" className="hover:text-indigo-600 transition-colors">Cancellation & Refunds</a></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm font-medium text-slate-500 order-2 md:order-1 text-center md:text-left">
              © {new Date().getFullYear()} Boopilot Technologies. All rights reserved.
            </div>

            <div className="flex items-center gap-4 order-1 md:order-2">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 text-slate-500 transition-all">
                <InstagramLogo className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 text-slate-500 transition-all">
                <FacebookLogo className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 text-slate-500 transition-all">
                <LinkedInLogo className="w-4 h-4" />
              </a>
              <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 text-slate-500 transition-all">
                <XLogo className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 text-slate-500 transition-all">
                <YouTubeLogo className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
