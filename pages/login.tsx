import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackStartTrial } from "@/lib/metaPixel";
import { 
  Loader2, Mail, Shield, Zap, BarChart3, 
  Eye, EyeOff, ArrowRight, Star, CheckCircle2, Sparkles 
} from "lucide-react";

export default function Login() {
  const loading = false;
  const isAuthenticated = false;
  
  // Form state
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  // Check for URL params (tab=signup auto-switches to registration view, error shows error message)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlError = urlParams.get("error");
    const tab = urlParams.get("tab");
    if (urlError) {
      setError(decodeURIComponent(urlError));
    }
    if (tab === "signup") {
      setIsSignUp(true);
    }
  }, []);

  const handleGoogleLogin = () => {
    window.location.href = "https://app.boopilot.com/api/auth/google";
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // Basic validation
      if (!email || !password) {
        setError("Please fill in all fields");
        setIsSubmitting(false);
        return;
      }

      if (isSignUp && !name) {
        setError("Please enter your name");
        setIsSubmitting(false);
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        setIsSubmitting(false);
        return;
      }

      // Password validation for sign up
      if (isSignUp) {
        if (password.length < 8) {
          setError("Password must be at least 8 characters");
          setIsSubmitting(false);
          return;
        }
        if (!/[A-Z]/.test(password)) {
          setError("Password must contain at least one uppercase letter");
          setIsSubmitting(false);
          return;
        }
        if (!/[a-z]/.test(password)) {
          setError("Password must contain at least one lowercase letter");
          setIsSubmitting(false);
          return;
        }
        if (!/[0-9]/.test(password)) {
          setError("Password must contain at least one number");
          setIsSubmitting(false);
          return;
        }
      }

      // Call backend API
      const response = await fetch(isSignUp ? "https://app.boopilot.com/api/auth/register" : "https://app.boopilot.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password, name: isSignUp ? name : undefined }),
      });

      const data = await response.json();

      if (data.success) {
        // Track StartTrial conversion event for new signups
        if (isSignUp) {
          // Set flag for Dashboard to fire Meta Pixel event
          sessionStorage.setItem('justSignedUp', 'true');
          trackStartTrial(data.userId, email);
        }
        window.location.href = "https://app.boopilot.com/dashboard";
      } else {
        setError(data.error || "Authentication failed");
      }
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[100dvh] bg-[#fefefe] flex flex-col items-center justify-center">
        <img 
          src="https://boopilotai-tpmljkkh.manus.space/logoBoopilotGif.gif" 
          alt="Boopilot" 
          className="h-16 mb-6 object-contain" 
        />
        <Loader2 className="w-6 h-6 animate-spin text-indigo-600 mb-4" />
        <p className="text-slate-500 font-medium text-sm">Authenticating your session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] w-full flex font-sans selection:bg-indigo-100 selection:text-indigo-900 bg-[#fefefe]">
      
      {/* LEFT SIDE - THE AUTH FORM (App Vibe Mobile) */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 py-8 lg:p-12 relative bg-[#fefefe]">
        <div className="w-full max-w-[400px] mx-auto flex flex-col min-h-full justify-center flex-1">
          
          {/* Top spacer for exact vertical centering */}
          <div className="hidden lg:block mt-auto"></div>

          {/* Logo (GIF) - completely borderless, protected from shrinking */}
          <div className="flex justify-center lg:justify-start mb-6 shrink-0 mt-2 lg:mt-0">
            <img 
              src="https://boopilotai-tpmljkkh.manus.space/logoBoopilotGif.gif" 
              alt="Boopilot" 
              className="h-12 sm:h-14 object-contain" 
            />
          </div>

          {/* Header */}
          <div className="text-center lg:text-left mb-6 shrink-0">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1.5">
              {isSignUp ? "Start your free trial" : "Welcome back"}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-medium">
              {isSignUp ? "No credit card required. Cancel anytime." : "Enter your details to access your dashboard."}
            </p>
          </div>

          {/* Social Proof (Desktop Only) */}
          <div className="hidden sm:flex flex-row items-center justify-start gap-6 mb-8 shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-700">4.9/5 <span className="text-slate-400 font-normal">rating</span></span>
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-700">10,000+ <span className="text-slate-400 font-normal">Users</span></span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-100 rounded-2xl text-rose-600 text-sm font-medium flex items-center gap-2 animate-fade-in shrink-0">
              <Shield className="w-4 h-4 shrink-0" /> {error}
            </div>
          )}

          {/* Google Login Button - shrink-0 prevents the collapse glitch */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full shrink-0 h-[52px] lg:h-[56px] bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 shadow-sm flex items-center justify-center gap-3 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative my-6 shrink-0">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-[#fefefe] text-slate-400 font-bold uppercase tracking-wider">or email</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-4 shrink-0">
            {isSignUp && (
              <div className="space-y-1.5 shrink-0">
                <Label htmlFor="name" className="text-slate-700 font-bold text-xs sm:text-sm">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shrink-0 h-[52px] lg:h-[56px] rounded-2xl border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm sm:text-base px-4 w-full shadow-sm"
                />
              </div>
            )}

            <div className="space-y-1.5 shrink-0">
              <Label htmlFor="email" className="text-slate-700 font-bold text-xs sm:text-sm">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shrink-0 h-[52px] lg:h-[56px] pl-11 rounded-2xl border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm sm:text-base w-full shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5 shrink-0">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-700 font-bold text-xs sm:text-sm">Password</Label>
                {!isSignUp && (
                  <a href="/forgot-password" className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">Forgot?</a>
                )}
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={isSignUp ? "Min 8 chars, 1 upper, 1 num" : "Enter password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shrink-0 h-[52px] lg:h-[56px] pr-12 rounded-2xl border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm sm:text-base px-4 w-full shadow-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full shrink-0 h-[52px] lg:h-[56px] mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-bold text-sm sm:text-base transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 border-0"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>{isSignUp ? "Create Account" : "Sign In"}</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </>
              )}
            </Button>
          </form>

          {/* Toggle View */}
          <div className="mt-6 lg:mt-8 text-center shrink-0">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
                setPassword("");
              }}
              className="text-sm sm:text-base text-slate-500 hover:text-slate-800 transition-colors font-medium"
            >
              {isSignUp ? (
                <>Already have an account? <span className="font-bold text-indigo-600">Sign in</span></>
              ) : (
                <>Don't have an account? <span className="font-bold text-indigo-600">Sign up</span></>
              )}
            </button>
          </div>
          
          {/* Footer Text */}
          <div className="mt-8 lg:mt-auto pt-4 shrink-0 pb-4 lg:pb-0">
            <p className="text-center text-[11px] sm:text-xs font-medium text-slate-400">
              By continuing, you agree to Boopilot's <a href="#" className="hover:text-slate-600 underline underline-offset-2">Terms</a> and <a href="#" className="hover:text-slate-600 underline underline-offset-2">Privacy</a>.
            </p>
          </div>
          
        </div>
      </div>

      {/* RIGHT SIDE - THE HOMEPAGE SHOWCASE (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#0f172a] relative overflow-hidden items-center justify-center p-12 xl:p-20">
        
        {/* Abstract Glowing Background Elements matching Homepage */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-lg">
          
          <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Fire your Agency. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Watch your brand grow on Autopilot.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 font-medium leading-relaxed max-w-md">
            The only tool you need to generate agency-quality content, auto-publish everywhere, and capture leads while you sleep.
          </p>

          {/* Floating UI Bento Box matching homepage aesthetic */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold mb-1 text-lg">AI Studio</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Pixel-perfect creatives and copy in 3 seconds.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="text-white font-bold mb-1 text-lg">Omni-Channel</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Meta, LinkedIn, and Google in one click.</p>
            </div>
            
            <div className="col-span-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-xl rounded-2xl p-6 flex items-center justify-between shadow-2xl">
              <div>
                <h3 className="text-white font-bold mb-1 flex items-center gap-2 text-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Auto-Pilot Active
                </h3>
                <p className="text-slate-400 text-sm">24/7 lead capture and DM replies engaged.</p>
              </div>
              <div className="relative flex items-center justify-center w-12 h-12">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20"></div>
                <div className="absolute inset-0 rounded-full border-2 border-t-indigo-400 animate-spin"></div>
                <Zap className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}
