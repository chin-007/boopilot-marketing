import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  XCircle,
  Check,
  Zap,
  Target,
  BotMessageSquare,
  Globe,
  Rocket,
  Video,
  MousePointerClick,
  Users,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Loader2,
  X,
  Activity,
  Play,
  ChevronDown,
  Calculator,
  MessageSquare,
  CreditCard,
  Workflow,
  Lock,
  Quote
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

declare global {
  interface Window {
    Calendly: any;
  }
}

// --- NATIVE APP & MAX-ANIMATION STYLES ---
const customStyles = `
  @keyframes fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse-glow { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.05); } }
  @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  @keyframes grid-pan { 0% { background-position: 0px 0px; } 100% { background-position: 0px 60px; } }
  @keyframes btn-sheen { 0% { background-position: 250% 0; } 100% { background-position: -250% 0; } }
  
  @keyframes float-1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(2deg); } }
  @keyframes float-2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(15px) rotate(-2deg); } }
  @keyframes float-3 { 0%, 100% { transform: translate(0px, 0px); } 50% { transform: translate(-10px, -10px); } }
  
  @keyframes scroll-x { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes scroll-x-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
  
  .animate-fade-up { animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-pulse-glow { animation: pulse-glow 6s ease-in-out infinite; }
  .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 4s ease infinite; }
  .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
  .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
  .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
  
  .marquee-track { display: flex; width: max-content; animation: scroll-x 30s linear infinite; }
  .marquee-track-reverse { display: flex; width: max-content; animation: scroll-x-reverse 40s linear infinite; }
  
  .space-bg { background: #030305; }
  .hero-grid {
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 90% 70% at 50% 20%, black 10%, transparent 80%);
    animation: grid-pan 60s linear infinite;
  }
  @media (min-width: 768px) { .hero-grid { background-size: 60px 60px; } }
  
  .glass-card {
    background: rgba(10, 10, 15, 0.65);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .glass-card:hover {
    border-color: rgba(168, 85, 247, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 30px 60px -15px rgba(168, 85, 247, 0.3);
  }

  .text-gradient-purple {
    background: linear-gradient(to right, #a855f7, #ec4899, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% auto;
    animation: gradient-x 6s linear infinite;
  }
  
  .text-outline { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.6); }
  .text-outline-fuchsia { color: transparent; -webkit-text-stroke: 1px rgba(217,70,239,0.9); text-shadow: 0 0 20px rgba(217,70,239,0.3); }
  .text-outline-massive { color: transparent; -webkit-text-stroke: 1.5px rgba(255,255,255,0.4); text-shadow: 0 0 40px rgba(255,255,255,0.1); }
  @media (min-width: 768px) { .text-outline-massive { -webkit-text-stroke: 2px rgba(255,255,255,0.5); } }
  .text-glow-white { color: white; text-shadow: 0 0 20px rgba(255,255,255,0.4); }

  .slash-divider { width: 3px; height: 25px; border-radius: 4px; transform: rotate(15deg); }
  @media (min-width: 768px) { .slash-divider { height: 40px; width: 5px; } }
  
  .neural-line {
    position: absolute; left: 20px; top: 0; bottom: 0; width: 2px;
    background: linear-gradient(to bottom, rgba(168,85,247,0.1), rgba(6,182,212,0.8), rgba(168,85,247,0.1));
    background-size: 100% 200%; animation: gradient-x 3s linear infinite;
  }
  @media (min-width: 768px) { .neural-line { left: 23px; } }

  .dark-input {
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
    color: white; font-size: 16px; transition: all 0.3s ease;
  }
  .dark-input:focus { outline: none; border-color: #a855f7; background: rgba(168,85,247,0.05); box-shadow: 0 0 15px rgba(168,85,247,0.2); }
  
  /* Custom Range Slider */
  input[type=range] { -webkit-appearance: none; width: 100%; background: transparent; }
  input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; height: 24px; width: 24px; border-radius: 50%; background: #06b6d4; cursor: pointer; margin-top: -10px; box-shadow: 0 0 20px rgba(6,182,212,0.8); }
  input[type=range]::-webkit-slider-runnable-track { width: 100%; height: 6px; cursor: pointer; background: rgba(255,255,255,0.1); border-radius: 10px; }
`;

const HypnoticCTA = ({ onClick, text = "Apply For Managed Access", className = "" }: { onClick: (e:any) => void, text?: string, className?: string }) => (
  <div className={`relative cursor-pointer w-full sm:w-auto group z-20 ${className}`} onClick={onClick}>
    <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-[2rem] blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
    <button className="relative w-full sm:w-auto px-8 md:px-14 h-14 md:h-20 rounded-[2rem] font-black text-white text-base md:text-xl flex items-center justify-center gap-3 bg-[#0a0a0a] border border-white/20 overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02]">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.8),55%,transparent)] bg-[length:250%_100%]"
        style={{ animation: 'btn-sheen 3s infinite ease-in-out' }}
      />
      <span className="relative z-10 flex items-center gap-2 md:gap-3 tracking-tight">
        {text} <ArrowRight className="w-4 h-4 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />
      </span>
    </button>
  </div>
);

export default function GrowthAgency() {
  const [isReady, setIsReady] = useState(false);
  const [modalState, setModalState] = useState(0); 
  const [loadingText, setLoadingText] = useState("Initializing System Diagnostics...");
  const [formData, setFormData] = useState({ name: '', email: '', link: '', revenue: '', bottleneck: '' });
  
  // Interactive ROI Calculator State
  const [roiHours, setRoiHours] = useState(15);
  const hourlyRate = 50; 
  const weeklyCost = roiHours * hourlyRate;
  const monthlyCost = weeklyCost * 4;
  const savings = monthlyCost - 997;

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Do I need to create the content or videos?", a: "No. Our AI engine generates, edits, and schedules high-converting visual content, tailored precisely to your brand's DNA. You do zero manual work." },
    { q: "Does the $997 include my Meta/Google Ad spend?", a: "No. The $997 is for the comprehensive management, AI generation, and scaling architecture. You control your ad spend budget directly on your platforms." },
    { q: "Is there a long-term lock-in contract?", a: "No. We operate on a month-to-month basis because our system proves its ROI immediately. If you aren't scaling, you can cancel anytime." },
    { q: "How is this different from a normal agency?", a: "Agencies rely on slow humans guessing what works. We use a $10M proprietary AI framework that operates 24/7, responds to leads instantly, and scales ads purely on data, not emotion." },
  ];

  useEffect(() => { setIsReady(true); }, []);

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalState(2); 
    setTimeout(() => setLoadingText("Evaluating Growth Bottlenecks..."), 1200);
    setTimeout(() => setLoadingText("Audit Approved. Allocating Strategist."), 2500);
    setTimeout(() => {
      setModalState(3); 
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/sharmachinmaydigichamp13/30min',
          parentElement: document.getElementById('calendly-inline-widget'),
          prefill: { name: formData.name, email: formData.email }, utm: {}
        });
      }
    }, 3200);
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalState(1);
    setLoadingText("Initializing System Diagnostics...");
  };

  return (
    <div className={`min-h-[100dvh] space-bg text-white font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden pb-20 md:pb-0 ${!isReady ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
      <Head>
        <title>Boopilot Managed | Enterprise AI Growth Infrastructure</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </Head>
      <style>{customStyles}</style>

      {/* --- MOBILE STICKY CTA --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        <HypnoticCTA onClick={openModal} text="Apply For Managed Access" className="w-full" />
      </div>

      {/* --- APPLICATION MODAL --- */}
      {modalState > 0 && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="absolute inset-0" onClick={() => setModalState(0)}></div>
          <div className="relative w-full max-w-2xl bg-[#0a0a0f] border-t md:border border-white/10 rounded-t-[2rem] md:rounded-[2rem] shadow-[0_0_80px_rgba(168,85,247,0.2)] overflow-hidden flex flex-col h-[90dvh] md:max-h-[90vh] animate-in slide-in-from-bottom-full md:slide-in-from-bottom-8 duration-500">
            <div className="flex justify-between items-center p-5 md:p-6 border-b border-white/10 bg-white/5 shrink-0">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400" />
                <span className="font-black text-base md:text-lg tracking-wide">Strategic System Audit</span>
              </div>
              <button onClick={() => setModalState(0)} className="text-slate-400 hover:text-white transition bg-white/5 p-1 rounded-full"><X className="w-5 h-5 md:w-6 md:h-6" /></button>
            </div>
            <div className="overflow-y-auto w-full flex-1 scrollbar-hide pb-10 md:pb-0">
              {modalState === 1 && (
                <form onSubmit={handleApplicationSubmit} className="p-5 md:p-8 space-y-5 md:space-y-6">
                  <div className="text-center mb-6 md:mb-8">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-2">Request an Audit</h3>
                    <p className="text-slate-400 text-xs md:text-sm px-2">Tell us about your infrastructure so we can prepare a custom growth roadmap prior to the call.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">Full Name <span className="text-fuchsia-400">*</span></label>
                      <input required type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full h-12 rounded-xl dark-input px-4" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">Work Email <span className="text-fuchsia-400">*</span></label>
                      <input required type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full h-12 rounded-xl dark-input px-4" placeholder="john@company.com" />
                    </div>
                  </div>
                  <button type="submit" className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-600 text-white font-black text-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all mt-4">
                    Initialize Audit
                  </button>
                </form>
              )}
              {modalState === 2 && (
                <div className="p-10 flex flex-col items-center justify-center text-center min-h-[60dvh] md:min-h-[400px]">
                  <Loader2 className="w-12 h-12 md:w-16 md:h-16 text-fuchsia-400 animate-spin mb-6 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2">Processing Data</h3>
                  <p className="text-fuchsia-400 font-bold font-mono text-sm tracking-tight animate-pulse">{loadingText}</p>
                </div>
              )}
              <div className={`w-full h-full min-h-[80dvh] bg-white transition-opacity duration-700 ${modalState === 3 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                <div id="calendly-inline-widget" className="w-full h-full min-h-[650px]"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFDFD] shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-b border-slate-200 h-16 md:h-20 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/logoBoopilotGif.gif" alt="Boopilot" className="h-7 md:h-10 w-auto object-contain" />
            <div className="flex flex-col justify-center border-l border-slate-300 pl-2 md:pl-3 ml-1">
              <span className="text-[8px] md:text-[10px] text-fuchsia-600 font-black tracking-widest uppercase mb-0.5">Managed Service</span>
              <span className="text-[10px] md:text-xs text-slate-800 font-extrabold">DFY Growth Partner</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-bold text-slate-700">
              <a href="#vsl" className="hover:text-fuchsia-600">The System</a>
              <a href="#proof" className="hover:text-fuchsia-600">Results</a>
              <a href="#pricing" className="hover:text-fuchsia-600">Partnership</a>
            </div>
            <button onClick={openModal} className="hidden md:flex bg-[#050505] hover:bg-fuchsia-600 text-white font-black text-xs md:text-sm h-11 px-6 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all hover:scale-105 items-center gap-2 border border-slate-800">
              <Sparkles className="w-4 h-4"/> Apply For Managed Access
            </button>
          </div>
        </div>
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-4 text-center z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-grid"></div>
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[500px] md:h-[700px] bg-[radial-gradient(ellipse_at_top,#a855f7_0%,#06b6d4_30%,transparent_70%)] opacity-30 animate-pulse-glow"></div>
        </div>

        <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col items-center mt-4 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full glass-card text-white text-[10px] md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8 animate-fade-up shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Enterprise AI Growth Infrastructure
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-black tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] animate-fade-up drop-shadow-2xl" style={{animationDelay: '0.1s'}}>
            Your growth engine, <br />
            <span className="text-gradient-purple">replaced by one AI.</span>
          </h1>
          
          <p className="text-base md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium mb-10 md:mb-12 animate-fade-up px-2" style={{animationDelay: '0.2s'}}>
            Stop buying tools that create more work. Stop paying expensive agencies. We deploy our proprietary $10M AI infrastructure to automate your content, ads, and lead generation. <strong className="text-white block mt-2 md:inline md:mt-0">Fully managed by experts.</strong>
          </p>

          <div className="flex flex-col items-center animate-fade-up w-full px-4" style={{animationDelay: '0.3s'}}>
            <HypnoticCTA onClick={openModal} text="Apply For Managed Access" className="hidden md:block" />
            <button onClick={openModal} className="md:hidden w-full h-14 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-black text-base shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2">
              Apply For Managed Access <ArrowRight className="w-4 h-4"/>
            </button>
          </div>
        </div>
      </section>

      {/* --- HERO MARQUEE --- */}
      <div className="relative w-full overflow-hidden bg-[#020203] py-8 md:py-12 border-y border-white/10 z-20 shadow-[0_0_100px_rgba(168,85,247,0.05)]">
        <div className="absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-fuchsia-600/20 blur-[60px] md:blur-[100px] pointer-events-none mix-blend-screen"></div>
        <div className="hidden md:block absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/20 blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="absolute top-2 left-1/2 -translate-x-1/2 md:top-4 md:left-8 md:translate-x-0 z-40 flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <div className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></div>
          <span className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] whitespace-nowrap">Neural Pipeline Active</span>
        </div>

        <div className="absolute inset-y-0 left-0 w-12 md:w-64 bg-gradient-to-r from-[#020203] to-transparent z-30 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-64 bg-gradient-to-l from-[#020203] to-transparent z-30 pointer-events-none"></div>

        <div className="marquee-track items-center mb-4 md:mb-8 mt-6 md:mt-0">
          {[1, 2, 3, 4].map((set) => (
            <div key={set} className="flex items-center">
              <span className="mx-4 md:mx-10 text-3xl md:text-6xl font-black uppercase tracking-tighter text-glow-white whitespace-nowrap">100% Autonomous</span>
              <div className="slash-divider bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)] mx-3 md:mx-8"></div>
              <span className="mx-4 md:mx-10 text-3xl md:text-6xl font-black uppercase tracking-tighter text-outline-fuchsia whitespace-nowrap">Omnichannel Sync</span>
              <div className="slash-divider bg-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.8)] mx-3 md:mx-8"></div>
              <span className="mx-4 md:mx-10 text-3xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 whitespace-nowrap animate-gradient-x">Zero Manual Effort</span>
              <div className="slash-divider bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] mx-3 md:mx-8"></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 2. VSL CINEMATIC SECTION --- */}
      <section id="vsl" className="py-20 md:py-28 px-4 relative bg-[#020203]">
        <div className="max-w-[1000px] mx-auto text-center">
          <Badge className="bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 mb-6 px-4 py-1">System Demonstration</Badge>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-10">See the architecture <span className="text-cyan-400">in action.</span></h2>
          
          <div className="relative w-full aspect-video rounded-3xl glass-card overflow-hidden group cursor-pointer border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-[#050505]/70 group-hover:bg-[#050505]/50 transition-colors duration-500"></div>
            <div className="relative z-10 w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <Play className="w-8 h-8 md:w-12 md:h-12 text-white ml-2" fill="currentColor" />
            </div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">Watch Overview (4:12)</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE ECOSYSTEM STACK --- */}
      <section className="py-12 border-y border-white/5 bg-[#050505] overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest">Natively Plugs Into Your Entire Business</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto px-4 opacity-70">
          {["Meta Ads API", "Stripe Connect", "OpenAI GPT-4", "Shopify Native", "Zapier Webhooks", "LinkedIn API"].map((tool, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 font-bold text-xs md:text-sm">
              <Workflow className="w-4 h-4 text-fuchsia-400" /> {tool}
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. AGITATION & FOUNDER'S MANIFESTO --- */}
      <section className="py-24 md:py-32 px-4 relative bg-[#020203]">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-fuchsia-600/20 blur-[60px] rounded-full"></div>
            <div className="glass-card p-8 md:p-12 rounded-[2rem] relative z-10 border border-red-500/20">
              <Badge className="bg-red-500/10 text-red-400 border-0 mb-6">The Hard Truth</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">The traditional agency model is <span className="text-red-500">a scam.</span></h2>
              <p className="text-slate-400 text-base md:text-lg mb-6 leading-relaxed font-medium">
                You pay a $3,000 retainer for a junior team to guess your brand voice, delay your launches, and deliver zero automation. 
              </p>
              <div className="space-y-4 text-sm font-bold text-slate-300">
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 shrink-0"/> You are paying for human error.</div>
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 shrink-0"/> You are paying for slow execution.</div>
                <div className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 shrink-0"/> Leads slip through the cracks while they sleep.</div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 md:p-12 rounded-[2rem] border border-cyan-500/30 relative overflow-hidden">
             <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 rotate-180" />
             <h3 className="text-2xl font-black text-cyan-400 mb-6">Why I Built Boopilot.</h3>
             <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
               "I built this system because I was tired of watching business owners burn cash on software they didn't have time to use, or agencies that didn't care about their growth. <br/><br/>
               Boopilot isn't another SaaS tool you have to log into. It's a complete done-for-you growth engine. We deploy the AI, we manage the pipeline, you close the deals."
             </p>
             <div className="flex items-center gap-4 border-t border-white/10 pt-6">
               <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 p-0.5">
                 <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center text-xs font-black text-white">CS</div>
               </div>
               <div>
                 <div className="text-white font-black">Chinmay Sharma</div>
                 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Founder, Boopilot Tech</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 5. ENGINE ARCHITECTURE --- */}
      <section className="py-20 px-4 relative bg-[#050505] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">The Complete <span className="text-fuchsia-400">Architecture.</span></h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-medium px-4">Our tech stack unifies your entire growth pipeline.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <Video/>, title: "Omnichannel Studio", desc: "High-converting visuals and copy auto-generated and scheduled." },
            { icon: <BotMessageSquare/>, title: "24/7 AI Sales SDR", desc: "Every DM receives an instant, intelligent reply capturing contacts." },
            { icon: <Target/>, title: "Auto-Ad Scaler", desc: "Winning organic posts deployed as Meta Ads to flood your pipeline." }
          ].map((feature, i) => (
            <div key={i} className="glass-card p-8 rounded-[2rem] flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-[#0a0a0f] rounded-2xl flex items-center justify-center mb-6 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 6. WALL OF PROOF --- */}
      <section id="proof" className="py-24 px-4 relative bg-[#020203]">
         <div className="max-w-[1200px] mx-auto text-center mb-16">
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 px-4 py-1">Live Output</Badge>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">System Output. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Real Capital.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="glass-card p-6 rounded-3xl border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-transparent">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-2"><CreditCard className="w-4 h-4"/> Stripe Connect</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
            <div className="text-4xl font-black text-white mb-2">$14,280<span className="text-lg text-slate-500">.00</span></div>
            <div className="text-sm font-bold text-emerald-400 flex items-center gap-1"><TrendingUp className="w-4 h-4"/> +32% this month</div>
          </div>
          {/* Card 2 */}
          <div className="glass-card p-6 rounded-3xl border-cyan-500/30">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-2"><Target className="w-4 h-4"/> Meta Ad Manager</span>
            </div>
            <div className="text-4xl font-black text-white mb-2">4.8x</div>
            <div className="text-sm font-bold text-cyan-400">Average Pipeline ROAS</div>
          </div>
          {/* Card 3 */}
          <div className="glass-card p-6 rounded-3xl border-fuchsia-500/30">
             <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-2"><MessageSquare className="w-4 h-4"/> AI Auto-SDR</span>
            </div>
            <div className="text-4xl font-black text-white mb-2">242</div>
            <div className="text-sm font-bold text-fuchsia-400">Leads captured in DMs natively</div>
          </div>
        </div>
      </section>

      {/* --- 7. INTERACTIVE ROI CALCULATOR --- */}
      <section className="py-24 px-4 relative bg-[#050505] border-y border-white/5">
        <div className="max-w-[800px] mx-auto glass-card p-8 md:p-12 rounded-[3rem] border border-red-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Calculate Your <span className="text-red-500">Bleed Rate.</span></h2>
            <p className="text-slate-400 font-medium">How much money are you losing doing this manually?</p>
          </div>
          
          <div className="mb-12">
            <div className="flex justify-between text-sm font-bold text-white mb-4">
              <span>Hours spent on marketing per week:</span>
              <span className="text-cyan-400 text-xl">{roiHours} hrs</span>
            </div>
            <input 
              type="range" min="1" max="40" value={roiHours} 
              onChange={(e) => setRoiHours(parseInt(e.target.value))}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#020203] p-6 rounded-2xl border border-white/5">
              <div className="text-xs text-slate-500 font-bold uppercase mb-2">Cost of your time ($50/hr)</div>
              <div className="text-3xl font-black text-red-400">${monthlyCost.toLocaleString()}<span className="text-sm text-slate-500">/mo</span></div>
            </div>
            <div className="bg-[#020203] p-6 rounded-2xl border border-white/5">
              <div className="text-xs text-slate-500 font-bold uppercase mb-2">Boopilot Managed</div>
              <div className="text-3xl font-black text-cyan-400">$997<span className="text-sm text-slate-500">/mo</span></div>
            </div>
          </div>

          <div className="text-center p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-emerald-500/20">
            <div className="text-sm font-bold text-slate-300 mb-1">Your Net Monthly Savings:</div>
            <div className="text-4xl md:text-5xl font-black text-emerald-400">+${savings > 0 ? savings.toLocaleString() : "0"}</div>
          </div>
        </div>
      </section>

      {/* --- 8. PRICING --- */}
      <section id="pricing" className="py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="max-w-[900px] mx-auto relative z-20">
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 blur-[100px] opacity-20 rounded-[4rem] animate-pulse-glow pointer-events-none"></div>
          <div className="p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] glass-card border-[1.5px] border-fuchsia-500/40 relative flex flex-col shadow-[0_0_50px_rgba(168,85,247,0.15)]">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 w-max">
               <div className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-black px-6 md:px-8 py-2 md:py-3 text-[10px] md:text-sm uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                 Strictly 5 Partners / Month
               </div>
            </div>
            <div className="text-center mt-6 mb-10">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">The DFY Growth Partner</h3>
              <p className="text-slate-400 font-medium">We build, manage, and scale the entire AI architecture.</p>
            </div>
            <div className="text-center mb-10">
              <span className="text-6xl md:text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tighter drop-shadow-2xl">$997</span>
              <span className="text-slate-500 font-bold text-xl">/mo</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-200 font-bold mb-10">
              <div className="glass-card p-4 rounded-xl flex items-center gap-3"><Check className="w-5 h-5 text-cyan-400" /> Full Tech-Stack Setup</div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3"><Check className="w-5 h-5 text-cyan-400" /> 30 Days Content Scheduled</div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3"><Check className="w-5 h-5 text-cyan-400" /> 24/7 AI Comment & DM SDR</div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3"><Check className="w-5 h-5 text-cyan-400" /> Meta Ad & CRM Updates</div>
            </div>
            <div className="w-full flex flex-col items-center">
              <HypnoticCTA onClick={openModal} text="Apply For Managed Access" className="w-full sm:w-[80%]" />
              <p className="text-slate-500 text-[10px] mt-4 font-bold uppercase tracking-widest">No 6-Month Lock-ins. Cancel Anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. NO-BS FAQ SECTION --- */}
      <section className="py-20 px-4 bg-[#020203]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-12">No-BS <span className="text-fuchsia-400">FAQ</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card rounded-2xl overflow-hidden cursor-pointer" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <div className="p-6 flex justify-between items-center">
                  <span className="font-bold text-white text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-fuchsia-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 10. FINAL ULTIMATUM --- */}
      <section className="pt-24 pb-16 px-4 relative text-center border-t border-white/5 overflow-hidden bg-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <Rocket className="w-16 h-16 md:w-24 md:h-24 text-fuchsia-400 mx-auto mb-6 opacity-60 animate-pulse-glow transform -rotate-45" />
        <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-8">Your competitors are automating. <br/><span className="text-gradient-purple">Don't get left behind.</span></h2>
        <div className="flex justify-center mb-16">
          <button onClick={openModal} className="bg-white text-slate-900 font-black text-sm md:text-lg px-8 md:px-12 py-4 rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center gap-3">
            Initiate System Audit <ArrowRight className="w-4 h-4"/>
          </button>
        </div>
      </section>

      {/* --- FOOTER MARQUEE --- */}
      <div className="relative w-full overflow-hidden bg-[#020203] pb-10 pt-6 z-20 border-t border-white/10">
        <div className="absolute inset-y-0 left-0 w-8 md:w-64 bg-gradient-to-r from-[#020203] to-transparent z-30"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-64 bg-gradient-to-l from-[#020203] to-transparent z-30"></div>
        <div className="marquee-track-reverse items-center">
          {[1, 2, 3, 4].map((set) => (
            <div key={set} className="flex items-center">
              <span className="mx-4 md:mx-12 text-5xl md:text-[10rem] font-black uppercase text-outline-massive whitespace-nowrap">Scale Infinitely</span>
              <span className="mx-4 md:mx-12 text-5xl md:text-[10rem] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-white whitespace-nowrap drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">Automate Everything</span>
            </div>
          ))}
        </div>
      </div>

      <footer className="py-12 px-4 text-center bg-[#000000] relative z-20 pb-28 md:pb-12">
        <div className="flex justify-center items-center mb-4"><img src="/logoBoopilotGif.gif" alt="Boopilot" className="h-6 opacity-50 grayscale hover:grayscale-0 transition" /></div>
        <p className="text-slate-600 font-bold text-[10px] uppercase tracking-widest mb-2">Powered by Boopilot Technologies</p>
        <p className="text-slate-700 text-[8px]">© {new Date().getFullYear()} All rights reserved. Built for global scaling.</p>
      </footer>
    </div>
  );
}
