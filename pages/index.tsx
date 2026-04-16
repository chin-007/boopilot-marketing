import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  Users,
  Globe,
  Menu,
  X,
  Mail,
  Phone,
  CheckCircle2,
  Play,
  Megaphone,
  MessageSquare,
  ShieldCheck,
  Calendar,
  BarChart3,
  Video,
  XCircle,
  Zap,
  Activity,
  Volume2,
  VolumeX,
  Target,
  Database,
  BotMessageSquare,
  Box,
  Star,
  ChevronDown
} from "lucide-react";
import { FacebookLogo, InstagramLogo, YouTubeLogo, LinkedInLogo, XLogo } from "@/components/PlatformLogos";
import { LazyVideo } from "@/components/LazyVideo";

// Lazy-load below-the-fold sections for performance
import { TestimonialsSection } from "@/components/TestimonialsSection";

// --- MASTER STYLES (Cinematic SaaS Vibe) ---
// Animations disabled on initial load for performance, enabled after hydration
const customStyles = `
  /* Disable animations on initial load for better performance */
  .no-animations * {
    animation: none !important;
    transition: none !important;
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
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }
  @keyframes pulse-ring {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
    70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(79, 70, 229, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
  }
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  /* NEW Testimonial Card Float Animation */
  @keyframes float-up-on-hover {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .animate-float-1 { animation: float-1 7s ease-in-out infinite; will-change: transform; contain: layout style; }
  .animate-float-2 { animation: float-2 8s ease-in-out infinite; will-change: transform; contain: layout style; }
  .animate-float-3 { animation: float-3 6s ease-in-out infinite; will-change: transform; contain: layout style; }
  .animate-fade-up { animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-pulse-glow { animation: pulse-glow 8s ease-in-out infinite; will-change: opacity, transform; contain: layout style; }
  .animate-pulse-ring { animation: pulse-ring 6s infinite; will-change: transform; contain: layout style; }
  .animate-gradient-x { 
    background-size: 200% 200%;
    animation: gradient-x 3s ease infinite; 
  }
  .animate-marquee {
    animation: marquee 40s linear infinite;
    will-change: transform;
  }
  /* Apply animation only on hover */
  .animate-float-on-hover:hover {
    animation: float-up-on-hover 0.5s ease-out forwards;
  }
  
  .text-gradient-hero {
    background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .glass-nav-pill {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08);
  }

  .hero-cinematic-bg {
    background: radial-gradient(100% 100% at 50% 0%, #1e1b4b 0%, #0f172a 50%, #020617 100%);
  }

  /* Custom Pricing Switch */
  .toggle-checkbox:checked { right: 0; border-color: #4f46e5; }
  .toggle-checkbox:checked + .toggle-label { background-color: #4f46e5; }
  
  /* FAQ Accordion Styles */
  details > summary { list-style: none; }
  details > summary::-webkit-details-marker { display: none; }

  /* --- PREMIUM FLOWING TEXT GRADIENTS (Billion Dollar Palette) --- */
  @keyframes flowing-text {
    0% { background-position: 0% center; }
    100% { background-position: -200% center; }
  }
  
  /* Agency - The Pain Point (Fire / Crimson to Sunset Orange) */
  .text-gradient-danger {
    background: linear-gradient(to right, #ff3366, #ff7733, #ff3366);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: flowing-text 10s linear infinite;
  }

  /* Autopilot - The Solution (Magic / Indigo to Purple to Hot Pink) */
  .text-gradient-blue {
    background: linear-gradient(to right, #8794ff, #b975ff, #f764a8, #8794ff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: flowing-text 10s linear infinite;
  }
  /* --- BREATHING CYBER GRID --- */
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
    will-change: background-position, opacity;
    z-index: 0;
    pointer-events: none;
  }
`;
// --- Inline Google Logo ---
const GoogleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// Deferred hero video — poster shows instantly, video src injected after CPU idle
const HERO_VIDEO_URL = "https://vz-b56449b1-580.b-cdn.net/6872b3db-a656-46ce-b05d-a2592b35cde1/play_720p.mp4";
const HERO_POSTER_URL = "https://vz-b56449b1-580.b-cdn.net/6872b3db-a656-46ce-b05d-a2592b35cde1/thumbnail.jpg";

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const load = () => {
      const v = videoRef.current;
      if (!v) return;
      v.src = HERO_VIDEO_URL;
      v.load();
      v.play().catch(() => {}); // autoplay may be blocked, poster stays visible
    };
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(load, { timeout: 3000 });
    } else {
      setTimeout(load, 2000);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      controls
      className="w-full h-full object-cover scale-[1.01]"
      poster={HERO_POSTER_URL}
      preload="none"
    />
  );
}

export default function Home() {
  // Auth state handled by redirect to app.boopilot.com
  const isAuthenticated = false;
  const user = null;
  const loading = false;
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  // ── IP-based currency detection (reuses billing.getCountry endpoint) ──────
  // Default to null (unknown) to avoid hydration mismatch; resolved client-side
  const [currency, setCurrency] = useState<'INR' | 'USD' | null>(null);
  useEffect(() => {
    if (geoData) {
      setCurrency(geoData.currency as 'INR' | 'USD');
    }
  }, [geoData]);
  
  // Resolved currency — default to INR while detecting (avoids layout shift for majority IN users)
  const activeCurrency = currency ?? 'INR';
  
  // 🌍 DYNAMIC LOCALIZED TEXT BASED ON IP
  const agencyCost = activeCurrency === 'INR' ? '₹40,000/month' : '$2,000/month';
  const oldWayCost = activeCurrency === 'INR' ? '₹30,000 - ₹50,000' : '$2,000 - $5,000';
  
  // Video Mute States (Only for Studio and Autopilot)
  const [mutedFeature, setMutedFeature] = useState<string | null>(null);
  
  const videoRefs = {
    studio: useRef<HTMLVideoElement>(null),
    autopilot: useRef<HTMLVideoElement>(null),
  };

  const toggleMute = (feature: 'studio' | 'autopilot') => {
    const ref = videoRefs[feature];
    if (ref && ref.current) {
      if (mutedFeature === feature) {
        ref.current.muted = true;
        setMutedFeature(null);
      } else {
        if (mutedFeature && videoRefs[mutedFeature as 'studio' | 'autopilot'].current) {
          videoRefs[mutedFeature as 'studio' | 'autopilot'].current!.muted = true;
        }
        ref.current.muted = false;
        setMutedFeature(feature);
      }
    }
  };
  
  const [scrolled, setScrolled] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  
  // Enable animations AFTER CPU idle — keeps TBT near zero
  useEffect(() => {
    const enable = () => setAnimationsEnabled(true);
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(enable, { timeout: 2500 });
    } else {
      setTimeout(enable, 2000);
    }
  }, []);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
        <div className="animate-pulse">
          <img src="/logoBoopilot.webp" alt="Boopilot" className="h-16 w-auto" />
        </div>
      </div>
    );
  }

  // --- Authenticated Dashboard Entry ---
  if (isAuthenticated) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center bg-[#fafafa] px-4 relative overflow-hidden font-sans ${!animationsEnabled ? 'no-animations' : ''}`}>
        <style>{customStyles}</style>
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
        
        <Card className="text-center max-w-xl relative z-10 p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border-slate-200/60 bg-white/80 backdrop-blur-xl">
          <img src="/logoBoopilot.webp" alt="Boopilot Logo" className="h-20 w-auto mb-8 mx-auto object-contain" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Welcome back, <span className="text-indigo-600">{user?.name?.split(' ')[0] || 'there'}</span> 👋
          </h1>
          <p className="text-lg text-slate-500 mb-10 font-medium">
            Your automated growth engine is running perfectly.
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = 'https://app.boopilot.com/dashboard'}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-14 text-lg font-bold rounded-2xl shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]"
          >
            Open Dashboard <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Card>
      </div>
    );
  }

  // --- MASSIVE PUBLIC LANDING PAGE ---
  return (
    <div className={`min-h-screen bg-[#fafafa] font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden text-slate-900 ${!animationsEnabled ? 'no-animations' : ''}`}>
      <style>{customStyles}</style>

{/* --- APP-LIKE FLOATING HEADER (Billion Dollar Animated Gradient) --- */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        {/* The Animated Gradient Border Wrapper */}
        <div className="w-full max-w-[1100px] rounded-full p-[1px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 animate-gradient-x shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.3)] transition-shadow duration-500">
          
          {/* 🔥 FIX: Changed background strictly to solid #fdfdfd to perfectly blend the logo */}
          <nav className="w-full rounded-full transition-all duration-500 flex items-center justify-between px-4 py-2.5 md:px-6 md:py-3 bg-[#fdfdfd]">
            
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <img src="/logoBoopilot.webp" alt="Boopilot Logo" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">How it Works</a>
              <a href="#features" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#comparison" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Why Us</a>
              <a href="#pricing" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Pricing</a>
            </div>
            
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" onClick={() => router.push('/login')} className="text-slate-700 font-bold rounded-full hover:bg-slate-100 h-10 px-5">Log In</Button>
              <Button onClick={() => router.push('/login?tab=signup')} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-10 px-6 rounded-full shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105">
                Start Free Trial
              </Button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-900 p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </div>
      
      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-24 left-4 right-4 z-40 bg-[#fdfdfd] p-6 rounded-3xl flex flex-col gap-5 border border-slate-200 shadow-2xl md:hidden animate-fade-up">
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 text-center">How it Works</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 text-center">Features</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-800 text-center">Pricing</a>
          <div className="flex flex-col gap-3 mt-2">
            <Button onClick={() => router.push('/login')} variant="outline" className="w-full h-12 text-base font-bold rounded-xl border-slate-200">Log In</Button>
            <Button onClick={() => router.push('/login?tab=signup')} className="w-full bg-indigo-600 text-white h-12 text-base font-bold rounded-xl">Start Free Trial</Button>
          </div>
        </div>
      )}

{/* --- BILLION DOLLAR CRO HERO SECTION (Final Flawless Version) --- */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-0 px-4 md:px-6 text-center z-10 hero-cinematic-bg border-b border-slate-800/50">
        
        {/* Background elements wrapped in absolute container so video can overlap perfectly */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-grid"></div>
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[500px] bg-indigo-600/30 blur-[120px] rounded-full animate-pulse-glow"></div>
        </div>

        <div className="max-w-[1100px] mx-auto relative flex flex-col items-center z-10">
          
          {/* Top Social Proof Badge */}
          <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-8 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg animate-fade-up">
            <ShieldCheck className="w-4 h-4 mr-2 inline-block -mt-0.5" /> Trusted by 500+ business owners
          </Badge>
          
          {/* Aggressive Animated Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tight mb-6 leading-[1.1] animate-fade-up text-white" style={{animationDelay: '0.1s'}}>
            Your entire marketing <span className="text-gradient-danger">Agency</span> <br className="hidden md:block"/>
            <span className="text-gradient-blue">Replaced by one AI.</span>
          </h1>
          
          {/* Feature-Packed Subheadline */}
          <p className="text-base md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium mb-12 animate-fade-up" style={{animationDelay: '0.2s'}}>
            Automatic Content Creation, 30 Days Auto-Pilot Mode, Single Click Posting to all Platforms, Automatic Leads CRM, Auto-Meta Ads, Instagram Automations, Google Business Booster and everything inside one single Dashboard.
          </p>

          {/* --- THE ULTRA-MODERN TITAN CTA BUTTON --- */}
          <div className="flex flex-col items-center justify-center animate-fade-up w-full mb-12 relative z-10" style={{animationDelay: '0.3s'}}>
            <div className="relative group cursor-pointer" onClick={() => router.push('/login?tab=signup')}>
              
              {/* Subtle Breathing Ambient Glow */}
              <div className="absolute -inset-1 rounded-full bg-indigo-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow pointer-events-none"></div>

              {/* TITAN BUTTON BODY */}
              <button className="relative w-full sm:w-auto px-10 md:px-14 h-16 md:h-18 rounded-full font-black text-white text-lg md:text-xl flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 transform group-hover:scale-[1.03] group-hover:-translate-y-1 bg-slate-950 border border-slate-800 group-hover:border-transparent shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)]">
                
                {/* Dynamic Gradient Border */}
                <div className="absolute inset-0 rounded-full p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <div className="w-full h-full rounded-full bg-slate-950"></div>
                </div>

                {/* Internal Void Background */}
                <div className="absolute inset-[1.5px] rounded-full bg-slate-950 z-0"></div>

                {/* Fast Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[marquee_1.2s_ease-in-out_infinite] z-1" />

                {/* Text and Icon */}
                <span className="relative z-10 flex items-center gap-3 tracking-tight selection:bg-none selection:text-white">
                  Start 7 Days Free Trial
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 transform group-hover:translate-x-2" />
                </span>

                {/* Subtle Inner Sheen */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-1"></div>
              </button>
            </div>
            
            {/* Friction Reducers */}
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-6 text-[11px] md:text-sm font-bold text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Setup in 2 minutes</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> No credit card required</span>
            </div>
          </div>

          {/* --- INFINITE MARQUEE TRUST BADGES (Vibrant Colors) --- */}
          <div className="w-full max-w-[100vw] overflow-hidden border-y border-slate-700/50 bg-slate-900/30 backdrop-blur-sm py-5 mb-16 animate-fade-up relative" style={{animationDelay: '0.4s'}}>
            
            {/* Edge Fading Masks */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#0f1117] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#0f1117] to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <div className="flex w-max animate-marquee items-center">
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

          {/* Product Video Container (Overlapping with Premium Glowing Shadow) */}
          <div className="relative max-w-5xl w-full mx-auto md:-mb-32 rounded-2xl md:rounded-[2rem] border-[4px] border-slate-800 bg-slate-900 overflow-hidden shadow-[0_30px_100px_-15px_rgba(79,70,229,0.5)] animate-fade-up aspect-[16/9] z-20" style={{animationDelay: '0.5s'}}>
             <HeroVideo />
          </div>

        </div>
      </section>

      {/* Spacer to account for the overlapping video on desktop */}
      <div className="hidden md:block h-40 bg-[#fafafa]"></div>
      {/* --- THE PAIN VS DREAM COMPARISON --- */}
      <section id="comparison" className="py-16 md:py-24 px-4 md:px-6 bg-white relative z-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">
              Why business owners are switching to Boopilot.
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto px-2">
              Stop guessing if your marketing is actually working. Get total transparency and massive cost savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <Card className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-rose-50/50 border border-rose-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-rose-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <XCircle className="w-6 h-6 md:w-7 md:h-7 text-rose-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4 md:mb-6">The Old Way (Agencies)</h3>
              <ul className="space-y-4 md:space-y-5 text-base md:text-lg font-medium text-slate-600">
                <li className="flex items-start gap-3"><X className="w-5 h-5 md:w-6 md:h-6 text-rose-500 shrink-0 mt-0.5" /> Costs {oldWayCost} every single month.</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 md:w-6 md:h-6 text-rose-500 shrink-0 mt-0.5" /> Zero transparency. You have no idea what they do all day.</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 md:w-6 md:h-6 text-rose-500 shrink-0 mt-0.5" /> You still have to review and approve everything manually.</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 md:w-6 md:h-6 text-rose-500 shrink-0 mt-0.5" /> Leads get lost in Instagram DMs and Facebook comments.</li>
              </ul>
            </Card>

            {/* The Boopilot Way */}
            <Card className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-indigo-50/50 border-2 border-indigo-200 shadow-xl relative mt-4 md:mt-0 transition-transform hover:-translate-y-1">
              <div className="absolute top-0 right-6 md:right-10 bg-indigo-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-b-xl shadow-md">
                THE SOLUTION
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-indigo-500/30">
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4 md:mb-6">The Boopilot Way</h3>
              <ul className="space-y-4 md:space-y-5 text-base md:text-lg font-medium text-slate-700">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 shrink-0 mt-0.5" /> Starts at just {activeCurrency === 'INR' ? '₹3,999' : '$39'}/month. A fraction of the cost.</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 shrink-0 mt-0.5" /> Watch your real-time growth on a beautiful, clear dashboard.</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 shrink-0 mt-0.5" /> AI generates and schedules a full month of content in minutes.</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 shrink-0 mt-0.5" /> Every DM and comment automatically turns into a tracked lead.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* --- DEEP DIVE FEATURES (Crucial Zig-Zag Layout) --- */}
      <section id="how-it-works" className="py-20 md:py-32 px-4 md:px-6 relative z-10 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
          
          {/* --- STEP 1: CREATIVE STUDIO (Text Left, Video Right) --- */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            <div className="w-full lg:w-5/12">
              <Badge className="bg-fuchsia-100 text-fuchsia-700 border-0 mb-4 px-3 py-1 font-bold uppercase tracking-wider text-[10px] md:text-xs">Step 1: Creative Studio</Badge>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Agency-quality content. Zero agencies.</h3>
              <p className="text-base md:text-lg text-slate-500 font-medium mb-8 leading-relaxed">
                Stop paying thousands of rupees for graphic designers who miss deadlines. Boopilot's AI generates hyper-realistic, scroll-stopping visuals in seconds. Open the native editor, drop your logo, inject psychological hooks, and you are ready to dominate.
              </p>
              
              {/* SOCIAL LOGOS */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6 md:mt-12 p-4 md:p-6 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 shadow-inner">
                <Badge variant="outline" className="text-fuchsia-700 border-fuchsia-200 font-bold uppercase tracking-widest text-[10px] shrink-0">Deploy to:</Badge>
                <InstagramLogo className="w-6 h-6 md:w-7 md:h-7 text-[#E4405F]" />
                <FacebookLogo className="w-6 h-6 md:w-7 md:h-7 text-[#1877F2]" />
                <LinkedInLogo className="w-6 h-6 md:w-7 md:h-7 text-[#0A66C2]" />
                <XLogo className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />
                <GoogleLogo className="w-6 h-6 md:w-7 md:h-7" />
              </div>
            </div>

            <div className="w-full lg:w-7/12 relative mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-fuchsia-200 rounded-full blur-[80px] md:blur-[100px] opacity-20" />
              
              <div className="relative z-10 w-full max-w-sm md:max-w-full mx-auto">
                <Card className="rounded-xl md:rounded-[2rem] bg-slate-900 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col relative z-10 border border-slate-200/50">
                  <LazyVideo
                    src="https://vz-b56449b1-580.b-cdn.net/88c77ea4-216d-415d-bfb9-d7a5bbeaabb0/play_720p.mp4"
                    className="w-full h-full object-cover scale-[1.02]"
                    rootMargin="400px"
                  />
                </Card>

                {/* MOBILE FIX: w-28, left-2 instead of -left-4 */}
                <div className="absolute -bottom-4 left-2 md:-bottom-12 md:-left-12 w-28 sm:w-32 md:w-56 aspect-[9/16] z-30 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 to-indigo-500 rounded-xl md:rounded-[2rem] rotate-3 opacity-70 group-hover:rotate-6 transition-all duration-300 blur-sm animate-pulse"></div>
                  <Card className="relative w-full h-full rounded-lg md:rounded-[1.5rem] border-2 md:border-4 border-white shadow-2xl overflow-hidden bg-slate-900 flex flex-col">
                     <LazyVideo
                       ref={videoRefs.studio}
                       src="https://vz-b56449b1-580.b-cdn.net/606bfd29-ca05-4552-abb8-80a22d64bf28/play_720p.mp4"
                       className="w-full h-full object-cover scale-[1.02]"
                       rootMargin="400px"
                     />
                     
                     {mutedFeature !== 'studio' && (
                       <button onClick={() => toggleMute('studio')} className="absolute inset-0 w-full h-full bg-black/40 hover:bg-black/20 flex flex-col items-center justify-center transition-all duration-300 z-40 backdrop-blur-[2px]">
                         <div className="bg-white/90 text-slate-900 p-2 md:p-3 rounded-full mb-2 shadow-lg animate-pulse">
                           <VolumeX className="w-4 h-4 md:w-6 md:h-6" />
                         </div>
                         <span className="bg-slate-900/80 text-white text-[8px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/10">Tap to Unmute</span>
                       </button>
                     )}
                     {mutedFeature === 'studio' && (
                        <button onClick={() => toggleMute('studio')} className="absolute top-2 right-2 md:top-3 md:right-3 bg-black/50 p-1 md:p-1.5 rounded-full text-white hover:bg-black/70 transition-colors z-40 backdrop-blur-md">
                          <Volume2 className="w-3 h-3 md:w-4 md:h-4" />
                        </button>
                     )}
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* --- STEP 2: BEAST AUTO-PILOT (Video Left, Text Right) --- */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            <div className="w-full lg:w-7/12 order-2 lg:order-1 relative mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-indigo-200 rounded-full blur-[80px] md:blur-[100px] opacity-20" />
              
              <div className="relative z-10 w-full max-w-sm md:max-w-full mx-auto">
                <Card className="rounded-xl md:rounded-[2rem] bg-slate-900 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col relative z-10 border border-slate-200/50">
                  <div className="flex-1 relative bg-slate-900 overflow-hidden">
                     <LazyVideo
                       src="https://vz-b56449b1-580.b-cdn.net/ca7934df-c8b9-49a2-8f97-4449e0c4294f/play_720p.mp4"
                       className="w-full h-full object-cover scale-[1.02]"
                       rootMargin="400px"
                     />
                  </div>
                </Card>

                {/* MOBILE FIX: w-28, right-2 instead of -right-4 */}
                <div className="absolute -bottom-4 right-2 md:-bottom-12 md:-right-12 w-28 sm:w-32 md:w-56 aspect-[9/16] z-30 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-xl md:rounded-[2rem] -rotate-3 opacity-70 group-hover:-rotate-6 transition-all duration-300 blur-sm animate-pulse"></div>
                  <Card className="relative w-full h-full rounded-lg md:rounded-[1.5rem] border-2 md:border-4 border-white shadow-2xl overflow-hidden bg-slate-900 flex flex-col">
                     <LazyVideo
                       ref={videoRefs.autopilot}
                       src="https://vz-b56449b1-580.b-cdn.net/a12c737c-7788-4698-b7e7-43527a798fd3/play_720p.mp4"
                       className="w-full h-full object-cover scale-[1.02]"
                       rootMargin="400px"
                     />
                     
                     {mutedFeature !== 'autopilot' && (
                       <button onClick={() => toggleMute('autopilot')} className="absolute inset-0 w-full h-full bg-black/40 hover:bg-black/20 flex flex-col items-center justify-center transition-all duration-300 z-40 backdrop-blur-[2px]">
                         <div className="bg-white/90 text-slate-900 p-2 md:p-3 rounded-full mb-2 shadow-lg animate-pulse">
                           <VolumeX className="w-4 h-4 md:w-6 md:h-6" />
                         </div>
                         <span className="bg-slate-900/80 text-white text-[8px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/10">Tap to Unmute</span>
                       </button>
                     )}
                     {mutedFeature === 'autopilot' && (
                        <button onClick={() => toggleMute('autopilot')} className="absolute top-2 right-2 md:top-3 md:right-3 bg-black/50 p-1 md:p-1.5 rounded-full text-white hover:bg-black/70 transition-colors z-40 backdrop-blur-md">
                          <Volume2 className="w-3 h-3 md:w-4 md:h-4" />
                        </button>
                     )}
                  </Card>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 order-1 lg:order-2 pl-0 md:pl-8">
              <Badge className="bg-indigo-100 text-indigo-700 border-0 mb-4 px-3 py-1 font-bold uppercase tracking-wider text-[10px] md:text-xs">Step 2: Autopilot</Badge>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Put your growth on Auto-Pilot.</h3>
              <p className="text-base md:text-lg text-slate-500 font-medium mb-6 md:mb-8 leading-relaxed">
                Consistency is the only way to beat the algorithm, but you're too busy running a business. Hand your brand to Beast Mode. It learns your unique voice, writes the captions, and schedules 30 days of content while you sleep.
              </p>
              <ul className="space-y-3 font-bold text-slate-700 text-sm md:text-base">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Trains entirely on your exact brand DNA.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Writes highly engaging, psychological captions.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Schedules 30 days of content in just 2 minutes.</li>
              </ul>
            </div>
          </div>

          {/* --- STEP 3: OMNICHANNEL DISTRIBUTION (Text Left, Animated Visual Right) --- */}
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="w-full lg:w-1/2">
              <Badge className="bg-blue-100 text-blue-700 border-0 mb-4 px-3 py-1 font-bold uppercase tracking-wider text-[10px] md:text-xs">Step 3: Distribution</Badge>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Dominate every network at once.</h3>
              <p className="text-base md:text-lg text-slate-500 font-medium mb-6 md:mb-8 leading-relaxed">
                Don't rely on just one platform. Upload once, and watch Boopilot intelligently format and blast your content across every major network simultaneously at the exact time your audience is online.
              </p>
              <ul className="space-y-3 font-bold text-slate-700 text-sm md:text-base">
                <li className="flex items-center gap-3"><Globe className="text-blue-500 w-5 h-5 shrink-0" /> Auto-formats posts for Reels, Shorts, and Feeds.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Smart-timing detects when your audience is active.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Unified reporting across all channels.</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 relative mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-[80px] opacity-30" />
              {/* MOBILE FIX: p-6 instead of p-8 */}
              <Card className="rounded-[1.5rem] md:rounded-[2rem] bg-white border-slate-200 shadow-2xl p-6 md:p-12 relative z-10 border-2">
                <div className="grid grid-cols-7 gap-1.5 md:gap-4 mb-4">
                  {[...Array(7)].map((_, i) => <div key={i} className="text-center text-[8px] md:text-xs font-bold text-slate-400">Day {i+1}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1.5 md:gap-4">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className={`aspect-square rounded-md md:rounded-xl ${i % 3 === 0 ? 'bg-blue-500 shadow-md md:shadow-lg shadow-blue-500/30 animate-pulse' : 'bg-slate-100'} flex items-center justify-center transition-transform hover:scale-110`}>
                      {i % 3 === 0 && <Check className="w-3 h-3 md:w-5 md:h-5 text-white" />}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* --- STEP 4: META ADS MANAGER (Animated Visual Left, Text Right) --- */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            <div className="w-full lg:w-7/12 order-2 lg:order-1 relative mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-[80px] md:blur-[100px] opacity-20" />
              
              <div className="relative z-10 w-full max-w-sm md:max-w-full mx-auto">
                <div className="relative w-full aspect-[4/3] bg-slate-900 rounded-xl md:rounded-[2rem] border border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-blue-500/10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                   <div className="relative z-10 bg-slate-800 p-4 md:p-8 rounded-xl md:rounded-2xl border border-slate-700 w-[90%] md:w-4/5 animate-float-1 shadow-2xl shadow-blue-900/50">
                     <div className="flex justify-between items-center mb-4 md:mb-6">
                       <div className="text-blue-400 text-xs md:text-base font-bold flex items-center gap-2"><Target className="w-4 h-4 md:w-5 md:h-5"/> Campaign Active</div>
                       <Badge className="bg-emerald-500 text-white text-[10px] md:text-xs font-bold tracking-widest px-2 py-0.5 md:px-3 md:py-1 shadow-lg shadow-emerald-500/30">ROAS 4.2x</Badge>
                     </div>
                     <div className="h-2 md:h-3 w-full bg-slate-700 rounded-full overflow-hidden mb-6 md:mb-8">
                       <div className="h-full bg-blue-500 w-3/4 rounded-full relative">
                          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
                       </div>
                     </div>
                     <div className="grid grid-cols-3 gap-2 md:gap-4">
                       <div className="h-16 md:h-24 bg-slate-700 rounded-lg md:rounded-xl flex flex-col justify-center items-center gap-1 md:gap-2">
                          <div className="text-slate-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Spend</div>
                          <div className="text-white font-black text-lg md:text-xl">₹4k</div>
                       </div>
                       <div className="h-16 md:h-24 bg-slate-700 rounded-lg md:rounded-xl flex flex-col justify-center items-center gap-1 md:gap-2">
                          <div className="text-slate-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Leads</div>
                          <div className="text-white font-black text-lg md:text-xl">142</div>
                       </div>
                       <div className="h-16 md:h-24 bg-blue-600/20 rounded-lg md:rounded-xl border border-blue-500/50 flex flex-col justify-center items-center gap-1 md:gap-2 shadow-inner">
                          <div className="text-blue-300 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Sales</div>
                          <div className="text-blue-400 font-black text-lg md:text-xl">₹16k</div>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 order-1 lg:order-2 pl-0 md:pl-8">
              <Badge className="bg-blue-100 text-blue-700 border-0 mb-4 px-3 py-1 font-bold uppercase tracking-wider text-[10px] md:text-xs">Step 4: Meta Ads Manager</Badge>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Stop setting your cash on fire.</h3>
              <p className="text-base md:text-lg text-slate-500 font-medium mb-6 md:mb-8 leading-relaxed">
                The "Boost Post" button is a trap designed to drain your wallet. Boopilot's AI identifies your top-performing organic content and automatically converts it into high-converting Meta Ads, optimizing your budget for actual leads, not just vanity likes.
              </p>
               <ul className="space-y-3 font-bold text-slate-700 text-sm md:text-base">
                <li className="flex items-center gap-3"><Target className="text-blue-500 w-5 h-5 shrink-0" /> Turns winning organic posts into ads instantly.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Optimized automatically for lowest Cost-Per-Lead.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Zero technical ad agency skills required.</li>
              </ul>
            </div>
          </div>

          {/* --- STEP 5: UNIFIED LEADS CRM (Text Left, Animated Visual Right) --- */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            <div className="w-full lg:w-5/12">
              <Badge className="bg-emerald-100 text-emerald-700 border-0 mb-4 px-3 py-1 font-bold uppercase tracking-wider text-[10px] md:text-xs">Step 5: Unified Leads CRM</Badge>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Spreadsheets are where leads go to die.</h3>
              <p className="text-base md:text-lg text-slate-500 font-medium mb-6 md:mb-8 leading-relaxed">
                You're hustling too hard to capture leads just to let them go cold in a forgotten Excel file or buried in Instagram DMs. Boopilot centralizes every inbound lead from Meta ads, DMs, comments, and Google into a beautiful, visual drag-and-drop pipeline.
              </p>
              <ul className="space-y-3 font-bold text-slate-700 text-sm md:text-base">
                <li className="flex items-center gap-3"><Database className="text-emerald-500 w-5 h-5 shrink-0" /> One database for Ads, Google, DMs, & Comments.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Never copy-paste a customer's detail again.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Drag-and-drop visual pipeline for extreme clarity.</li>
              </ul>
            </div>

            <div className="w-full lg:w-7/12 relative mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-emerald-200 rounded-full blur-[80px] md:blur-[100px] opacity-20" />
              
              <div className="relative z-10 w-full max-w-sm md:max-w-full mx-auto">
                <div className="relative w-full aspect-[4/3] bg-slate-900 rounded-xl md:rounded-[2rem] border border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden p-4 md:p-10">
                   <div className="absolute inset-0 bg-emerald-500/10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                   
                   <div className="relative z-10 flex gap-3 md:gap-4 w-full h-full">
                      {/* Column 1: New Leads */}
                      <div className="flex-1 bg-slate-800/80 rounded-lg md:rounded-xl p-2 md:p-4 border border-slate-700/50 flex flex-col gap-2 md:gap-3">
                         <div className="h-5 md:h-8 w-[80%] md:w-[60%] bg-slate-700 rounded-md flex items-center px-2 md:px-3"><span className="text-[8px] md:text-xs font-bold text-slate-300">New Leads</span></div>
                         <div className="h-16 md:h-20 w-full bg-slate-700/50 rounded-md md:rounded-lg shadow-sm border border-slate-600/30 p-2 md:p-3 flex flex-col gap-1.5 md:gap-2 justify-center">
                           <div className="h-1.5 md:h-2 w-1/2 bg-slate-500 rounded-full"></div>
                           <div className="h-1.5 md:h-2 w-3/4 bg-slate-600 rounded-full"></div>
                         </div>
                         <div className="h-16 md:h-20 w-full bg-slate-700/50 rounded-md md:rounded-lg shadow-sm border border-slate-600/30 p-2 md:p-3 flex flex-col gap-1.5 md:gap-2 justify-center">
                           <div className="h-1.5 md:h-2 w-2/3 bg-slate-500 rounded-full"></div>
                           <div className="h-1.5 md:h-2 w-1/3 bg-slate-600 rounded-full"></div>
                         </div>
                      </div>
                      
                      {/* Column 2: Closed Won */}
                      <div className="flex-1 bg-slate-800/90 rounded-lg md:rounded-xl p-2 md:p-4 border border-emerald-500/40 flex flex-col gap-2 md:gap-3 transform md:-translate-y-4 shadow-2xl shadow-emerald-500/20">
                         <div className="h-5 md:h-8 w-[90%] md:w-[70%] bg-emerald-900/50 rounded-md flex items-center px-2 md:px-3 border border-emerald-500/30">
                           <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 mr-1.5 md:mr-2 animate-pulse"></span> 
                           <span className="text-[8px] md:text-xs text-emerald-400 font-bold tracking-wide">Closed Won</span>
                         </div>
                         
                         {/* Floating CRM Card */}
                         <div className="h-20 md:h-24 w-full bg-emerald-600/20 border-2 border-emerald-500/50 rounded-md md:rounded-lg shadow-lg animate-float-2 flex flex-col p-2 md:p-4 justify-center gap-2 md:gap-3 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400"></div>
                            <div className="flex items-center gap-1.5 md:gap-2">
                               <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500 flex items-center justify-center"><Check className="w-3 h-3 md:w-4 md:h-4 text-white"/></div>
                               <div className="h-2 md:h-3 w-1/2 bg-emerald-400/80 rounded-full"></div>
                            </div>
                            <div className="h-1.5 md:h-2 w-3/4 bg-emerald-400/40 rounded-full ml-6 md:ml-8"></div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- STEP 6: AUTO-RESPONDER & DM BOT (Animated Visual Left, Text Right) --- */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            <div className="w-full lg:w-7/12 order-2 lg:order-1 relative mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-rose-200 rounded-full blur-[80px] md:blur-[100px] opacity-20" />
              
              <div className="relative z-10 w-full max-w-sm md:max-w-full mx-auto">
                <div className="relative w-full aspect-[4/3] bg-slate-900 rounded-xl md:rounded-[2rem] border border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-rose-500/10 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                   
                   {/* Phone Mockup Floating - Fixed for Mobile */}
                   <div className="relative z-10 w-40 sm:w-48 md:w-64 h-[20rem] sm:h-[22rem] md:h-[28rem] bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-8 border-slate-700 p-3 md:p-6 flex flex-col shadow-2xl transform rotate-[-5deg] animate-float-3">
                      {/* Phone Header */}
                      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 border-b border-slate-700 pb-2 md:pb-3">
                         <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-rose-500 to-orange-500 flex items-center justify-center shadow-lg"><BotMessageSquare className="w-3 h-3 md:w-5 md:h-5 text-white"/></div>
                         <div>
                            <div className="text-[10px] md:text-sm font-bold text-slate-200">Boopilot AI</div>
                            <div className="text-[6px] md:text-[10px] text-emerald-400 font-bold">Online 24/7</div>
                         </div>
                      </div>
                      
                      {/* Chat Bubbles */}
                      <div className="flex flex-col gap-3 md:gap-4">
                         <div className="self-end bg-blue-600 text-white text-[8px] md:text-xs p-2 md:p-3 rounded-l-xl md:rounded-l-2xl rounded-tr-xl md:rounded-tr-2xl max-w-[85%] md:max-w-[80%] shadow-md">
                            I saw your recent post! How much is the starter plan?
                         </div>
                         <div className="self-start bg-slate-700 border border-slate-600 text-white text-[8px] md:text-xs p-2 md:p-3 rounded-r-xl md:rounded-r-2xl rounded-tl-xl md:rounded-tl-2xl max-w-[95%] md:max-w-[90%] shadow-md relative">
                            <span className="absolute -left-1 md:-left-2 top-0 flex h-2 w-2 md:h-3 md:w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-rose-500"></span>
                            </span>
                            Hi! It's just ₹4,999. I've prepared a secure checkout link for you right here. Ready to scale? 🚀
                         </div>
                         <div className="self-center mt-2 md:mt-4 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[8px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-1.5 md:gap-2 shadow-lg backdrop-blur-sm animate-pulse-ring">
                            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4"/> Deal Closed
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 order-1 lg:order-2 pl-0 md:pl-8">
              <Badge className="bg-rose-100 text-rose-700 border-0 mb-4 px-3 py-1 font-bold uppercase tracking-wider text-[10px] md:text-xs">Step 6: Auto-Responder</Badge>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">You are losing sales while you sleep.</h3>
              <p className="text-base md:text-lg text-slate-500 font-medium mb-6 md:mb-8 leading-relaxed">
                In 2026, a comment left unreplied for an hour is a lost customer. Boopilot’s 24/7 AI instantly replies to every single comment *and* shoots them a personalized DM to capture their details. Watch your lead count explode without lifting a finger.
              </p>
               <ul className="space-y-3 font-bold text-slate-700 text-sm md:text-base">
                <li className="flex items-center gap-3"><BotMessageSquare className="text-rose-500 w-5 h-5 shrink-0" /> 100% automated, intelligent replies to comments.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Instantly initiates personalized DM sales flow.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" /> Automatically injects captured leads into your CRM.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

{/* --- MASSIVE "EVERYTHING YOU GET" GRID (Cinematic Ecosystem) --- */}
      <section id="features" className="py-20 md:py-32 relative z-10 hero-cinematic-bg overflow-hidden border-y border-slate-800">
        
        {/* Deep Space Grid & Animated Orbs */}
        <div className="hero-grid opacity-60"></div>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] md:w-[60%] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse-glow pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[300px] bg-fuchsia-600/20 blur-[100px] rounded-full animate-pulse-glow pointer-events-none" style={{animationDelay: '1.5s'}}></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <Badge className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-md px-4 py-1.5 text-[10px] md:text-xs font-black mb-6 rounded-full uppercase tracking-widest shadow-lg">
              Boopilot Way
            </Badge>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              A complete toolkit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 animate-gradient-x">total domination.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto px-2">
              We built every feature a business owner actually needs to scale, without the massive agency fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              { icon: Globe, title: "Google Business Sync", desc: "Keep your local ranking high. Auto-post updates directly to your Google My Business profile." },
              { icon: Video, title: "Reels Expressway", desc: "Upload one vertical video and instantly distribute it across Instagram Reels and YouTube Shorts." },
              { icon: Megaphone, title: "Auto Ads Manager", desc: "Let the system identify your top organic posts and automatically convert them into profitable ads." },
              { icon: BarChart3, title: "Unified Analytics", desc: "View your follower growth, engagement rates, and ROI across all platforms on one screen." },
              { icon: Users, title: "Automated CRM", desc: "Never copy-paste a lead again. Comments and DMs flow directly into your sales pipeline." },
              { icon: Zap, title: "24/7 Autopilot", desc: "Set it and forget it. The system runs in the background, working weekends and holidays." }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:bg-slate-800/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/30 cursor-default relative overflow-hidden">
                {/* Reveal top border line on hover */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 bg-indigo-500/10 rounded-[1.25rem] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500 border border-indigo-500/20 shadow-inner">
                  <feature.icon className="w-7 h-7 text-indigo-400 group-hover:text-indigo-300 transition-colors drop-shadow-md" />
                </div>
                <h4 className="text-xl font-extrabold text-white mb-3 tracking-tight">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WALL OF LOVE (Lazy-loaded for performance) --- */}
      <TestimonialsSection />

      {/* --- DETAILED PRICING SECTION --- */}
      <section id="pricing" className="py-16 md:py-32 px-4 md:px-6 relative z-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight">The highest ROI investment you will make.</h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium px-2">Cheaper than an intern. Smarter than an agency.</p>
            
            <div className="flex items-center justify-center gap-3 md:gap-4 mt-8 md:mt-10">
               <span className={`text-xs md:text-sm font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
               <div 
                 className="relative inline-flex h-7 w-12 md:h-8 md:w-14 items-center rounded-full bg-slate-200 cursor-pointer border border-slate-300 transition-colors"
                 onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
               >
                 <span className={`inline-block h-5 w-5 md:h-6 md:w-6 transform rounded-full bg-white shadow-sm transition duration-300 ${billingCycle === 'yearly' ? 'translate-x-5 md:translate-x-7' : 'translate-x-1'}`} />
               </div>
               <span className={`text-xs md:text-sm font-bold flex items-center gap-1.5 md:gap-2 ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-400'}`}>
                 Annually <Badge className="bg-emerald-100 text-emerald-700 border-0 text-[8px] md:text-[10px] uppercase tracking-wider font-extrabold">Save 20%</Badge>
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            
            {/* Standard Plan */}
            <Card className="p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-white border-2 border-slate-100 shadow-lg flex flex-col h-full hover:border-slate-200 transition-colors">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Starter Core</h3>
                <p className="text-slate-500 text-sm md:text-base font-medium mt-2 mb-6 md:mb-8">For solo business owners wanting to save 10 hours a week.</p>
                <div className="mb-6 md:mb-8 flex items-end gap-2">
                  <span className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                     {activeCurrency === 'INR'
                       ? (billingCycle === 'monthly' ? '₹4,999' : '₹3,999')
                       : (billingCycle === 'monthly' ? '$49' : '$39')}
                  </span>
                  <span className="text-slate-500 font-medium text-sm md:text-lg pb-1 md:pb-2">/month</span>
                </div>
                <Button onClick={() => router.push('/login?tab=signup')} variant="outline" className="w-full h-12 md:h-auto md:py-7 text-sm md:text-lg font-bold rounded-xl md:rounded-2xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 mb-8 md:mb-10 transition-colors">
                   Start 7-Day Free Trial
                </Button>
              </div>
              
              <div className="space-y-4 md:space-y-5 text-sm md:text-base text-slate-600 font-medium mt-auto border-t border-slate-100 pt-6 md:pt-8 flex-1 flex flex-col justify-end">
                <p className="font-extrabold text-slate-900 mb-3 md:mb-4 uppercase tracking-wider text-[10px] md:text-xs">What you get:</p>
                <div className="flex gap-3 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 shrink-0 mt-0.5" /> Connect up to 3 Social Accounts</div>
                <div className="flex gap-3 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 shrink-0 mt-0.5" /> 20 AI Post Generations per month</div>
                <div className="flex gap-3 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 shrink-0 mt-0.5" /> Omnichannel Visual Calendar</div>
                <div className="flex gap-3 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 shrink-0 mt-0.5" /> Beautiful Growth Dashboard</div>
                <div className="flex gap-3 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 shrink-0 mt-0.5" /> Basic Inbound Lead Tracking</div>
                <div className="flex gap-3 items-start"><Check className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 shrink-0 mt-0.5" /> Standard Email Support</div>
              </div>
            </Card>

            {/* Professional Plan (Highlighted) */}
            <Card className="p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-indigo-600 text-white border-0 shadow-2xl relative flex flex-col h-full transform lg:-translate-y-4 mt-6 lg:mt-0">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-[2rem] md:rounded-t-[2.5rem]" />
              <div className="absolute -top-3 md:-top-4 right-6 md:right-8">
                 <Badge className="bg-slate-900 text-white border-0 shadow-lg px-3 py-1.5 md:px-5 md:py-2 text-[8px] md:text-xs font-black uppercase tracking-widest animate-pulse">
                   The Complete Setup
                 </Badge>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">Pro Pipeline</h3>
                <p className="text-indigo-200 text-sm md:text-base font-medium mt-2 mb-6 md:mb-8">Everything required to replace a full-time marketing agency.</p>
                <div className="mb-6 md:mb-8 flex items-end gap-2">
                  <span className="text-4xl md:text-6xl font-black text-white tracking-tight">
                     {activeCurrency === 'INR'
                       ? (billingCycle === 'monthly' ? '₹12,999' : '₹9,999')
                       : (billingCycle === 'monthly' ? '$139' : '$109')}
                  </span>
                  <span className="text-indigo-200 font-medium text-sm md:text-lg pb-1 md:pb-2">/month</span>
                </div>
                <Button onClick={() => router.push('/login?tab=signup')} className="w-full h-12 md:h-auto md:py-7 text-sm md:text-lg font-extrabold rounded-xl md:rounded-2xl bg-white hover:bg-slate-100 text-indigo-900 mb-8 md:mb-10 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform hover:scale-[1.02]">
                  Deploy the System Now
                </Button>
              </div>

              <div className="space-y-4 md:space-y-5 text-sm md:text-base text-white font-medium mt-auto border-t border-indigo-500 pt-6 md:pt-8 flex-1 flex flex-col justify-end">
                <p className="font-extrabold text-indigo-200 mb-3 md:mb-4 uppercase tracking-wider text-[10px] md:text-xs">Everything in Starter, plus:</p>
                <div className="flex gap-3 items-start"><div className="bg-indigo-500 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-3 h-3 md:w-4 md:h-4 text-white" /></div> <span><strong>Unlimited</strong> AI Content Gen</span></div>
                <div className="flex gap-3 items-start"><div className="bg-indigo-500 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-3 h-3 md:w-4 md:h-4 text-white" /></div> <span><strong>All 5 Platforms</strong> (IG, FB, LI, X, YT)</span></div>
                <div className="flex gap-3 items-start"><div className="bg-indigo-500 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-3 h-3 md:w-4 md:h-4 text-white" /></div> <span><strong>Google Business Auto-Sync</strong></span></div>
                <div className="flex gap-3 items-start"><div className="bg-indigo-500 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-3 h-3 md:w-4 md:h-4 text-white" /></div> <span><strong>Full Sales Pipeline CRM</strong></span></div>
                <div className="flex gap-3 items-start"><div className="bg-indigo-500 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-3 h-3 md:w-4 md:h-4 text-white" /></div> <span><strong>Automated Ads Manager</strong></span></div>
                <div className="flex gap-3 items-start"><div className="bg-indigo-500 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-3 h-3 md:w-4 md:h-4 text-white" /></div> <span>In-Depth Competitor Analysis</span></div>
                <div className="flex gap-3 items-start"><div className="bg-indigo-500 p-1 rounded-full shrink-0 mt-0.5"><Check className="w-3 h-3 md:w-4 md:h-4 text-white" /></div> <span>Priority 24/7 WhatsApp Support</span></div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
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

      {/* --- BOTTOM CTA --- */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] bg-indigo-50 border border-indigo-100 p-8 md:p-24 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-indigo-200 rounded-full blur-[60px] md:blur-[80px] opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight text-slate-900">Your brand, on autopilot.</h2>
            <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 max-w-2xl mx-auto font-medium px-2">Join the smart business owners scaling their revenue automatically without lifting a finger.</p>
            <Button onClick={() => router.push('/login?tab=signup')} className="h-14 md:h-16 px-8 md:px-12 rounded-xl md:rounded-2xl bg-indigo-600 text-white font-extrabold text-sm md:text-lg hover:bg-indigo-700 hover:scale-105 transition-all shadow-xl shadow-indigo-500/30 w-full sm:w-auto">
              Start Your 7-Day Free Trial
            </Button>
            <p className="mt-6 md:mt-8 text-[10px] md:text-sm text-slate-500 font-bold flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Setup takes 2 minutes • Cancel anytime
            </p>
          </div>
        </div>
      </section>

     {/* --- PREMIUM MEGA FOOTER (Clean White / Razorpay Compliant) --- */}
      <footer className="bg-[#fdfdfd] border-t border-slate-200 pt-20 pb-10 px-4 md:px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto relative z-10">
          
          {/* Top Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-16 mb-20">
            
            {/* Brand Column */}
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
            
            {/* Platform Column */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h4 className="text-slate-900 font-extrabold mb-6 tracking-widest text-xs uppercase">Platform</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it Works</a></li>
                <li><a href="#features" className="hover:text-indigo-600 transition-colors">Core Features</a></li>
                <li><a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing Plans</a></li>
                <li><a href="/login" className="hover:text-indigo-600 transition-colors">Client Login</a></li>
                <li><a href="/login?tab=signup" className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5"/> Start Free Trial</a></li>
              </ul>
            </div>

            {/* Free Tools Column */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <h4 className="text-slate-900 font-extrabold mb-6 tracking-widest text-xs uppercase">Free Tools</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="/tools/viral-hook-generator" className="hover:text-indigo-600 transition-colors">AI Hook Generator</a></li>
                <li><a href="/tools/roas-calculator" className="hover:text-indigo-600 transition-colors">Ad ROAS Calculator</a></li>
                <li><a href="/tools/engagement-rate-calculator" className="hover:text-indigo-600 transition-colors">Engagement Checker</a></li>
                <li><a href="/tools/best-time-to-post" className="hover:text-indigo-600 transition-colors">Best Time to Post</a></li>
              </ul>
            </div>

            {/* Growth Guides Column */}
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

            {/* Legal Column (Razorpay Compliant) */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2">
              <h4 className="text-slate-900 font-extrabold mb-6 tracking-widest text-xs uppercase">Legal</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><a href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                <li><a href="/refunds" className="hover:text-indigo-600 transition-colors">Cancellation & Refunds</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer Bar */}
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-sm font-medium text-slate-500 order-2 md:order-1 text-center md:text-left">
              © {new Date().getFullYear()} Boopilot Technologies. All rights reserved.
            </div>

            {/* Social Icons */}
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
