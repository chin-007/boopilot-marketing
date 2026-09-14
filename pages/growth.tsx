import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Extend the Window interface to recognize Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

export default function GrowthAgency() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Wait for the Calendly script to load so it doesn't throw errors
    const timer = setTimeout(() => {
      setIsCalendlyLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      // Triggers the sleek overlay modal inside your page
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/sharmachinmaydigichamp13/30min' });
    } else {
      // Fallback just in case
      window.open('https://calendly.com/sharmachinmaydigichamp13/30min', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#030305] text-white font-sans selection:bg-purple-500 selection:text-white">
      <Head>
        <title>Boopilot Growth | Your Marketing Agency Replaced by AI</title>
        <meta name="description" content="We deploy custom AI growth engines, omnichannel content, and automated lead capture for your business." />
        
        {/* Calendly Widget CSS & Script for the Popup Modal */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </Head>

      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            BOOPILOT MANAGED
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#pricing" className="text-sm text-gray-300 hover:text-white transition">Pricing</Link>
          <button 
            onClick={openCalendly}
            className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-purple-500/25"
          >
            Book Growth Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wide uppercase">
          The New Era of Marketing
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Your entire marketing <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Agency Replaced by one AI.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Stop paying $3,000/mo to slow traditional agencies. We deploy autonomous AI growth systems, omnichannel content, and automated lead pipelines for a fraction of the cost.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={openCalendly}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-semibold px-8 py-4 rounded-full text-lg transition shadow-xl shadow-purple-600/30"
          >
            Book Your Free AI Growth Audit
          </button>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold text-center mb-12">Traditional Agency vs. Boopilot Managed</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-900/60 border border-red-500/20 p-8 rounded-2xl relative">
            <div className="absolute top-4 right-4 text-red-400 font-bold text-sm">THE OLD WAY</div>
            <h3 className="text-xl font-semibold mb-4 text-red-300">Traditional Marketing Agency</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>❌ $3,000 – $5,000 monthly retainers</li>
              <li>❌ 30-to-60 day onboarding delays</li>
              <li>❌ Slow, inconsistent human copywriters</li>
              <li>❌ Zero proprietary technology</li>
            </ul>
          </div>
          <div className="bg-neutral-900/80 border border-purple-500/40 p-8 rounded-2xl relative shadow-2xl shadow-purple-500/10">
            <div className="absolute top-4 right-4 text-cyan-400 font-bold text-sm">THE FUTURE</div>
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Boopilot AI Growth Partner</h3>
            <ul className="space-y-3 text-gray-200 text-sm">
              <li>✔ Fraction of traditional agency cost</li>
              <li>✔ Deployed and live within 48 hours</li>
              <li>✔ Autonomous AI content & ad scaling</li>
              <li>✔ Backed by dedicated founder oversight</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="pricing" className="max-w-3xl mx-auto px-6 py-20 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple, High-ROI Engagement</h2>
        <p className="text-gray-400 mb-10">We take on only 5 new international clients per month to ensure absolute dominance.</p>
        
        <div className="bg-gradient-to-b from-purple-950/40 to-neutral-900 border border-purple-500/30 p-8 rounded-3xl text-left relative">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold">Managed AI Growth Partner</h3>
              <p className="text-gray-400 text-sm">Full-stack omnichannel marketing automation</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-extrabold text-cyan-400">$997</span>
              <span className="text-gray-400 text-sm">/mo</span>
            </div>
          </div>
          <ul className="space-y-3 text-gray-300 text-sm mb-8">
            <li>✨ Custom AI Engine Setup for your brand</li>
            <li>✨ Automated Multi-Platform Content Generation</li>
            <li>✨ Lead Capture & CRM Pipeline Setup</li>
            <li>✨ Weekly Strategy & Optimization Calls</li>
          </ul>
          <button 
            onClick={openCalendly}
            className="w-full block text-center bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Secure Your Slot Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-500">
        <p>© 2026 Boopilot Technologies. All rights reserved. Built for global scaling.</p>
      </footer>
    </div>
  );
}
