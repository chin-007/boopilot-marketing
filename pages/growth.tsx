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
  Clock,
  Rocket,
  Video,
  MousePointerClick,
  Users,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Loader2,
  X,
  Activity
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
  
  .text-outline {
    color: transparent;
    -webkit-text-stroke: 1px rgba(255,255,255,0.6);
  }
  .text-outline-fuchsia {
    color: transparent;
    -webkit-text-stroke: 1px rgba(217,70,239,0.9);
    text-shadow: 0 0 20px rgba(217,70,239,0.3);
  }
  .text-outline-massive {
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(255,255,255,0.4);
    text-shadow: 0 0 40px rgba(255,255,255,0.1);
  }
  @media (min-width: 768px) { .text-outline-massive { -webkit-text-stroke: 2px rgba(255,255,255,0.5); } }
  
  .text-glow-white {
    color: white;
    text-shadow: 0 0 20px rgba(255,255,255,0.4);
  }

  .slash-divider {
    width: 3px;
    height: 25px;
    border-radius: 4px;
    transform: rotate(15deg);
  }
  @media (min-width: 768px) { .slash-divider { height: 40px; width: 5px; } }

  .dark-input {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    color: white;
    font-size: 16px; 
    transition: all 0.3s ease;
  }
  .dark-input:focus {
    outline: none;
    border-color: #a855f7;
    background: rgba(168,85,247,0.05);
    box-shadow: 0 0 15px rgba(168,85,247,0.2);
  }
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

  useEffect(() => {
    setIsReady(true);
  }, []);

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
          prefill: {
            name: formData.name,
            email: formData.email
          },
          utm: {}
        });
      }
    }, 3200);
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalState(1);
    setLoadingText("Initializing System Diagnostics...");
  };

  const closeModal = () => {
    setModalState(0);
  };

  return (
    <div className={`min-h-[100dvh] space-bg text-white font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden pb-20 md:pb-0 ${!isReady ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
      <Head>
        <title>Boopilot Managed | Enterprise AI Growth Infrastructure</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta name="description" content="We deploy autonomous AI growth systems to replace outdated marketing processes. Fully managed. Done for you." />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </Head>
      <style>{customStyles}</style>

      {/* --- NATIVE APP MOBILE STICKY CTA --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        <HypnoticCTA onClick={openModal} text="Apply For Managed Access" className="w-full" />
      </div>

      {/* --- MULTI-STEP APPLICATION MODAL --- */}
      {modalState > 0 && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="absolute inset-0" onClick={closeModal}></div>
          <div className="relative w-full max-w-2xl bg-[#0a0a0f] border-t md:border border-white/10 rounded-t-[2rem] md:rounded-[2rem] shadow-[0_0_80px_rgba(168,85,247,0.2)] overflow-hidden flex flex-col h-[90dvh] md:max-h-[90vh] animate-in slide-in-from-bottom-full md:slide-in-from-bottom-8 duration-500">
            
            <div className="flex justify-between items-center p-5 md:p-6 border-b border-white/10 bg-white/5 shrink-0">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400" />
                <span className="font-black text-base md:text-lg tracking-wide">Strategic System Audit</span>
              </div>
              <button onClick={closeModal} className="text-slate-400 hover:text-white transition bg-white/5 p-1 rounded-full"><X className="w-5 h-5 md:w-6 md:h-6" /></button>
            </div>

            <div className="overflow-y-auto w-full flex-1 scrollbar-hide pb-10 md:pb-0">
              {modalState === 1 && (
                <form onSubmit={handleApplicationSubmit} className="p-5 md:p-8 space-y-5 md:space-y-6">
                  <div className="text-center mb-6 md:mb-8">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-2">Request an Audit</h3>
                    <p className="text-slate-400 text-xs md:text-sm px-2">Tell us a bit about your current infrastructure so our strategy team can prepare a custom growth roadmap prior to the call.</p>
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

                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest flex items-center justify-between">
                      Website or Social Link <span className="text-slate-500 text-[9px]">(Optional)</span>
                    </label>
                    <input type="text" onChange={(e) => setFormData({...formData, link: e.target.value})} className="w-full h-12 rounded-xl dark-input px-4" placeholder="boopilot.com or @boopilot" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest flex items-center justify-between">
                      Monthly Revenue <span className="text-slate-500 text-[9px]">(Optional)</span>
                    </label>
                    <select onChange={(e) => setFormData({...formData, revenue: e.target.value})} className="w-full h-12 rounded-xl dark-input px-4 appearance-none">
                      <option value="" disabled selected>Select revenue tier...</option>
                      <option value="under_10k">Under $10,000 / mo</option>
                      <option value="10k_50k">$10,000 - $50,000 / mo</option>
                      <option value="over_50k">$50,000+ / mo</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-widest flex items-center justify-between">
                      Biggest Marketing Bottleneck? <span className="text-slate-500 text-[9px]">(Optional)</span>
                    </label>
                    <textarea onChange={(e) => setFormData({...formData, bottleneck: e.target.value})} rows={3} className="w-full rounded-xl dark-input p-4 resize-none" placeholder="Briefly describe your current challenges..."></textarea>
                  </div>

                  <button type="submit" className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-600 text-white font-black text-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all transform hover:-translate-y-1">
                    Initialize Audit
                  </button>
                </form>
              )}

              {modalState === 2 && (
                <div className="p-10 md:p-20 flex flex-col items-center justify-center text-center animate-in zoom-in duration-300 min-h-[60dvh] md:min-h-[400px]">
                  <Loader2 className="w-12 h-12 md:w-16 md:h-16 text-fuchsia-400 animate-spin mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2">Processing Data</h3>
                  <p className="text-fuchsia-400 font-bold font-mono text-sm tracking-tight animate-pulse h-6">
                    {loadingText}
                  </p>
                </div>
              )}

              <div className={`w-full h-full min-h-[80dvh] bg-white transition-opacity duration-700 ${modalState === 3 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                <div id="calendly-inline-widget" className="w-full h-full min-h-[650px]"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- PREMIUM NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFDFD] shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-b border-slate-200 h-16 md:h-20 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/logoBoopilotGif.gif" alt="Boopilot" className="h-7 md:h-10 w-auto object-contain" />
            <div className="flex flex-col justify-center border-l border-slate-300 pl-2 md:pl-3 ml-1 md:ml-1">
              <span className="text-[8px] md:text-[10px] text-fuchsia-600 font-black tracking-widest uppercase leading-none mb-0.5">Managed Service</span>
              <span className="text-[10px] md:text-xs text-slate-800 font-extrabold leading-none">DFY Growth Partner</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-bold text-slate-700">
              <a href="#agitation" className="hover:text-fuchsia-600 transition">The Truth</a>
              <a href="#engine" className="hover:text-fuchsia-600 transition">The Architecture</a>
              <a href="#pipeline" className="hover:text-fuchsia-600 transition">Process</a>
            </div>
            <button 
              onClick={openModal}
              className="hidden md:flex bg-[#050505] hover:bg-fuchsia-600 text-white font-black text-xs md:text-sm h-11 px-6 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all transform hover:scale-105 items-center gap-2 border border-slate-800"
            >
              <Sparkles className="w-4 h-4"/> Apply For Managed Access
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-4 text-center z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-grid"></div>
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[500px] md:h-[700px] bg-[radial-gradient(ellipse_at_top,#a855f7_0%,#06b6d4_30%,transparent_70%)] opacity-30 animate-pulse-glow"></div>
        </div>

        <div className="hidden lg:flex absolute top-32 left-[10%] animate-float-1 glass-card p-4 rounded-2xl items-center gap-4 z-20 border-emerald-500/30">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-emerald-400"/></div>
          <div className="text-left">
            <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">Live Ad Scaler</div>
            <div className="text-white font-black text-sm">ROAS: 4.8x Active</div>
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-32 right-[10%] animate-float-2 glass-card p-4 rounded-2xl items-center gap-4 z-20 border-cyan-500/30">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center"><Users className="w-5 h-5 text-cyan-400"/></div>
          <div className="text-left">
            <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">CRM Pipeline</div>
            <div className="text-white font-black text-sm">14 New Leads Captured</div>
          </div>
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
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-xs md:text-sm font-bold text-slate-400">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400"/> 15-Min System Audit</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400"/> Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- HERO MARQUEE --- */}
      <div className="relative w-full overflow-hidden bg-[#020203] py-8 md:py-12 border-y border-white/10 z-20 shadow-[0_0_100px_rgba(168,85,247,0.05)]">
        <div className="absolute top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-fuchsia-600/20 blur-[60px] md:blur-[100px] pointer-events-none mix-blend-screen"></div>
        <div className="hidden md:block absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/20 blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="absolute top-2 left-1/2 -translate-x-1/2 md:top-4 md:left-8 md:translate-x-0 z-40 flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] whitespace-nowrap">Neural Pipeline Active</span>
        </div>

        <div className="absolute inset-y-0 left-0 w-12 md:w-64 bg-gradient-to-r from-[#020203] to-transparent z-30 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-64 bg-gradient-to-l from-[#020203] to-transparent z-30 pointer-events-none"></div>

        <div className="marquee-track items-center mb-4 md:mb-8 mt-6 md:mt-0">
          {[1, 2, 3, 4].map((set) => (
            <div key={set} className="flex items-center">
              <span className="mx-4 md:mx-10 text-3xl md:text-6xl font-black uppercase tracking-tighter text-glow-white whitespace-nowrap">
                100% Autonomous
              </span>
              <div className="slash-divider bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)] mx-3 md:mx-8"></div>
              <span className="mx-4 md:mx-10 text-3xl md:text-6xl font-black uppercase tracking-tighter text-outline-fuchsia whitespace-nowrap">
                Omnichannel Sync
              </span>
              <div className="slash-divider bg-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.8)] mx-3 md:mx-8"></div>
              <span className="mx-4 md:mx-10 text-3xl md:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 whitespace-nowrap animate-gradient-x">
                Zero Manual Effort
              </span>
              <div className="slash-divider bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)] mx-3 md:mx-8"></div>
              <span className="mx-4 md:mx-10 text-3xl md:text-6xl font-black uppercase tracking-tighter text-outline whitespace-nowrap">
                $10M AI Architecture
              </span>
              <div className="slash-divider bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] mx-3 md:mx-8"></div>
            </div>
          ))}
        </div>

        <div className="marquee-track-reverse items-center opacity-80">
          {[1, 2, 3, 4, 5].map((set) => (
            <div key={set} className="flex items-center">
               <span className="mx-4 md:mx-10 text-[10px] md:text-sm font-mono font-bold uppercase tracking-widest text-emerald-400 whitespace-nowrap flex items-center gap-2 md:gap-3">
                 <Target className="w-3 h-3 md:w-4 md:h-4"/> [SYS.OPTIMIZING_ROAS]
               </span>
               <span className="text-white/20">•</span>
               <span className="mx-4 md:mx-10 text-[10px] md:text-sm font-mono font-bold uppercase tracking-widest text-fuchsia-400 whitespace-nowrap flex items-center gap-2 md:gap-3">
                 <BotMessageSquare className="w-3 h-3 md:w-4 md:h-4"/> &lt;SDR_AUTO_REPLY_ENGAGED /&gt;
               </span>
               <span className="text-white/20">•</span>
               <span className="mx-4 md:mx-10 text-[10px] md:text-sm font-mono font-bold uppercase tracking-widest text-cyan-400 whitespace-nowrap flex items-center gap-2 md:gap-3">
                 <Video className="w-3 h-3 md:w-4 md:h-4"/> GENERATING_VIRAL_ASSETS...
               </span>
               <span className="text-white/20">•</span>
               <span className="mx-4 md:mx-10 text-[10px] md:text-sm font-mono font-bold uppercase tracking-widest text-indigo-400 whitespace-nowrap flex items-center gap-2 md:gap-3">
                 <Users className="w-3 h-3 md:w-4 md:h-4"/> PIPELINE_SYNC::ONLINE
               </span>
               <span className="text-white/20">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- AGITATION --- */}
      <section id="agitation" className="py-20 md:py-32 px-4 relative border-b border-white/5 bg-[#020203]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.05)_0%,transparent_100%)]"></div>
        <div className="max-w-[1200px] mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">The old ways are <span className="text-red-500">inefficient.</span></h2>
          <p className="text-slate-400 text-sm md:text-xl max-w-2xl mx-auto font-medium">Software requires your time. Agencies require massive retainers. We require neither.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="glass-card p-6 md:p-8 rounded-[2rem] relative overflow-hidden bg-slate-900/40 opacity-80">
            <Badge className="bg-slate-800 text-slate-300 border-0 mb-4 md:mb-6">The SaaS Reality</Badge>
            <h3 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-6">DIY Software Tools</h3>
            <ul className="space-y-3 md:space-y-4 text-slate-400 font-bold text-xs md:text-sm">
              <li className="flex items-start gap-3"><XCircle className="w-4 h-4 md:w-5 md:h-5 text-slate-500 shrink-0 mt-0.5"/> You buy a subscription, but you still do the work.</li>
              <li className="flex items-start gap-3"><XCircle className="w-4 h-4 md:w-5 md:h-5 text-slate-500 shrink-0 mt-0.5"/> You have to learn complex prompting and dashboards.</li>
              <li className="flex items-start gap-3"><XCircle className="w-4 h-4 md:w-5 md:h-5 text-slate-500 shrink-0 mt-0.5"/> Execution fails because you're busy running a business.</li>
            </ul>
          </div>

          <div className="glass-card p-6 md:p-8 rounded-[2rem] relative overflow-hidden border-red-500/20 bg-red-950/10">
            <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-red-500/10 blur-[50px]"></div>
            <Badge className="bg-red-500/20 text-red-400 border-0 mb-4 md:mb-6">The Agency Reality</Badge>
            <h3 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-6">Traditional Agencies</h3>
            <ul className="space-y-3 md:space-y-4 text-slate-400 font-bold text-xs md:text-sm">
              <li className="flex items-start gap-3"><XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500 shrink-0 mt-0.5"/> 30-to-60 day onboarding delays before launch.</li>
              <li className="flex items-start gap-3"><XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500 shrink-0 mt-0.5"/> Junior team members guessing your brand voice.</li>
              <li className="flex items-start gap-3"><XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500 shrink-0 mt-0.5"/> Complete lack of modern AI automation.</li>
            </ul>
          </div>

          <div className="glass-card p-6 md:p-8 rounded-[2rem] relative overflow-hidden border-fuchsia-500/40 shadow-[0_0_40px_rgba(168,85,247,0.15)] transform md:-translate-y-4">
            <div className="absolute bottom-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-fuchsia-500/20 blur-[60px]"></div>
            <Badge className="bg-fuchsia-500/20 text-fuchsia-300 border-0 mb-4 md:mb-6 animate-pulse">The AI Infrastructure</Badge>
            <h3 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-6">Boopilot Managed</h3>
            <ul className="space-y-3 md:space-y-4 text-slate-200 font-bold text-xs md:text-sm relative z-10">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-fuchsia-400 shrink-0 mt-0.5"/> Zero manual effort. We deploy the AI and manage output.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-fuchsia-400 shrink-0 mt-0.5"/> Omnichannel content auto-generated and scheduled.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-fuchsia-400 shrink-0 mt-0.5"/> 24/7 AI Auto-responder capturing leads automatically.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- ENGINE (BENTO) --- */}
      <section id="engine" className="py-20 md:py-32 px-4 relative">
        <div className="max-w-[1200px] mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">Everything built into <br className="hidden md:block"/><span className="text-cyan-400">one architecture.</span></h2>
          <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto font-medium px-4">You don't need fragmented software subscriptions. Our tech stack unifies your growth, operated by our experts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <Video/>, title: "Omnichannel Studio", desc: "High-converting visuals and copy auto-generated and scheduled to Instagram, Facebook, LinkedIn, and X.", img: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80" },
            { icon: <BotMessageSquare/>, title: "24/7 AI Sales SDR", desc: "Every comment and DM receives an instant, intelligent reply that captures contact details natively.", img: "https://images.unsplash.com/photo-1577563908411-50cb98976fea?w=800&q=80" },
            { icon: <Target/>, title: "Auto-Ad Scaler", desc: "We identify your winning organic posts and deploy them as highly-targeted Meta Ads to flood your pipeline.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
            { icon: <Globe/>, title: "Local SEO Dominator", desc: "Daily, automated Google My Business updates and intelligent review auto-replies to elevate your local rank.", img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&q=80" },
            { icon: <MousePointerClick/>, title: "Unified CRM Pipeline", desc: "Spreadsheets are dead. Every lead from every platform syncs into one sleek, trackable dashboard.", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" },
            { icon: <BarChart3/>, title: "Expert Oversight", desc: "You aren't left alone with a bot. Our strategy team oversees the AI output to ensure absolute quality.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" }
          ].map((feature, i) => (
            <div key={i} className="glass-card rounded-[2rem] relative overflow-hidden group flex flex-col">
              <div className="h-40 md:h-48 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10"></div>
                <img src={feature.img} alt={feature.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" />
              </div>
              <div className="p-6 md:p-8 relative z-20 -mt-12 flex-1 flex flex-col">
                <div className="w-12 h-12 bg-[#050505] rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-white/20 shadow-xl text-cyan-400 shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black text-white mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ALIGNMENT FIXED PIPELINE --- */}
      <section id="pipeline" className="py-20 md:py-24 px-4 bg-[#050505] relative border-y border-white/5">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-white/5 text-slate-300 border border-white/10 mb-4 md:mb-6">Zero Friction Onboarding</Badge>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">From audit to live pipeline <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">in 48 hours.</span></h2>
          </div>
          
          <div className="relative space-y-8 md:space-y-12 py-4">
            
            {/* The Bulletproof Timeline - Explicit absolute positioning */}
            <div className="absolute left-[28px] md:left-[40px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-fuchsia-500/10 via-cyan-400/80 to-fuchsia-500/10 bg-[length:100%_200%] animate-pulse z-0"></div>
            
            {[
              { step: "01", title: "The Discovery Audit", desc: "A 15-minute sync. We analyze your current bottlenecks and map out the exact AI architecture needed." },
              { step: "02", title: "Brand DNA Ingestion", desc: "You provide your digital assets. The Boopilot AI consumes your brand voice, styling, and offers in seconds." },
              { step: "03", title: "System Deployment", desc: "Our team deploys the engine. Content scheduled, auto-responders activated, and ad campaigns launched." },
              { step: "04", title: "Automated Scaling", desc: "You go back to running your business. The AI handles the top-of-funnel work and drops qualified leads directly into your CRM." }
            ].map((s, i) => (
              <div key={i} className="relative z-10 animate-fade-up pl-[64px] md:pl-[96px]" style={{animationDelay: `${i * 0.2}s`}}>
                
                {/* Node - Mathematically centered on the line */}
                <div className="absolute left-[28px] md:left-[40px] top-8 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#050505] border-[2px] md:border-[3px] border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.5)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl group hover:-translate-y-1 transition-transform">
                  <div className="text-fuchsia-400 font-black text-sm md:text-lg mb-2 flex items-center gap-3">
                    Step {s.step} <div className="h-px bg-white/10 flex-1"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3">{s.title}</h3>
                  <p className="text-slate-400 font-medium text-xs md:text-base">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="max-w-[900px] mx-auto relative z-20">
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 blur-[60px] md:blur-[100px] opacity-20 rounded-[4rem] animate-pulse-glow pointer-events-none"></div>
          
          <div className="p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] glass-card border-[1.5px] border-fuchsia-500/40 relative flex flex-col shadow-[0_0_50px_rgba(168,85,247,0.15)]">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 w-max">
               <div className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-black px-6 md:px-8 py-2 md:py-3 text-[10px] md:text-sm uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(168,85,247,0.6)] border border-fuchsia-400/50">
                 Comprehensive Managed Pipeline
               </div>
            </div>

            <div className="text-center mt-6 md:mt-6 mb-8 md:mb-12">
              <h3 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-3 md:mb-4">The DFY Growth Partner</h3>
              <p className="text-slate-400 text-sm md:text-xl font-medium px-2">We build, manage, and scale the entire Boopilot AI architecture for you.</p>
            </div>

            <div className="text-center mb-8 md:mb-12">
              <span className="text-5xl md:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tighter drop-shadow-2xl">$997</span>
              <span className="text-slate-500 font-bold text-lg md:text-2xl">/mo</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-xs md:text-base text-slate-200 font-bold mb-10 md:mb-14">
              <div className="glass-card p-4 md:p-5 rounded-2xl flex items-center gap-3 md:gap-4 bg-white/5"><Check className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 shrink-0" /> Full Tech-Stack Setup</div>
              <div className="glass-card p-4 md:p-5 rounded-2xl flex items-center gap-3 md:gap-4 bg-white/5"><Check className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 shrink-0" /> 30 Days Content Scheduled</div>
              <div className="glass-card p-4 md:p-5 rounded-2xl flex items-center gap-3 md:gap-4 bg-white/5"><Check className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 shrink-0" /> 24/7 AI Comment & DM SDR</div>
              <div className="glass-card p-4 md:p-5 rounded-2xl flex items-center gap-3 md:gap-4 bg-white/5"><Check className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 shrink-0" /> Meta Ad & CRM Updates</div>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
              <HypnoticCTA onClick={openModal} text="Apply For Managed Access" className="w-full sm:w-[80%] hidden md:block" />
              <button onClick={openModal} className="md:hidden w-full h-14 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-black text-base shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2">
                Apply For Managed Access <ArrowRight className="w-4 h-4"/>
              </button>
              <p className="text-slate-500 text-[10px] md:text-xs mt-4 md:mt-6 font-bold uppercase tracking-widest">No 6-Month Lock-ins. Cancel Anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 relative text-center border-t border-white/5 overflow-hidden bg-[#020203]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <Rocket className="w-16 h-16 md:w-24 md:h-24 text-fuchsia-400 mx-auto mb-6 md:mb-8 opacity-60 animate-pulse-glow transform -rotate-45 drop-shadow-[0_0_30px_rgba(217,70,239,0.5)]" />
        <h2 className="text-3xl md:text-7xl font-black text-white tracking-tight mb-6 md:mb-8">Your competitors are automating. <br/><span className="text-gradient-purple">Don't get left behind.</span></h2>
        <div className="flex justify-center mt-8 md:mt-12 mb-12 md:mb-20">
          <button onClick={openModal} className="bg-white text-slate-900 font-black text-sm md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full md:rounded-[2rem] hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center gap-3">
            Initiate System Audit <ArrowRight className="w-4 h-4 md:w-5 md:h-5"/>
          </button>
        </div>
      </section>

      {/* --- FOOTER MARQUEE --- */}
      <div className="relative w-full overflow-hidden bg-[#020203] pb-10 md:pb-16 pt-6 md:pt-8 pointer-events-none select-none z-20 border-t border-white/10 shadow-[0_-40px_100px_rgba(168,85,247,0.1)]">
        <div className="absolute inset-y-0 left-0 w-8 md:w-64 bg-gradient-to-r from-[#020203] to-transparent z-30"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-64 bg-gradient-to-l from-[#020203] to-transparent z-30"></div>
        <div className="marquee-track-reverse items-center opacity-100">
          {[1, 2, 3, 4].map((set) => (
            <div key={set} className="flex items-center">
              <span className="mx-4 md:mx-12 text-5xl md:text-[12rem] font-black uppercase text-outline-massive tracking-tighter whitespace-nowrap">Scale Infinitely</span>
              <span className="mx-4 md:mx-12 text-5xl md:text-[12rem] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-white tracking-tighter whitespace-nowrap drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">Automate Everything</span>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-white/5 py-10 md:py-12 px-4 text-center bg-[#000000] relative z-20 pb-28 md:pb-12">
        <div className="flex justify-center items-center gap-2 mb-4 md:mb-6">
          <img src="/logoBoopilotGif.gif" alt="Boopilot" className="h-6 md:h-8 opacity-50 grayscale hover:grayscale-0 transition duration-500" />
        </div>
        <p className="text-slate-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2">Powered by Boopilot Technologies</p>
        <p className="text-slate-700 text-[8px] md:text-[10px]">© {new Date().getFullYear()} All rights reserved. Built for global scaling.</p>
      </footer>
    </div>
  );
}
