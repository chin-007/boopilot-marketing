import type { AppProps } from "next/app";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Silently fires a Meta PageView every time the user navigates your site
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'PageView');
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* 1. Global Meta Pixel Code - LAZY LOADED FOR ZERO SPEED IMPACT */}
      <Script
        id="meta-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '323400288871315'); 
            fbq('track', 'PageView');
          `,
        }}
      />
      
      {/* 2. Microsoft Clarity Code - LAZY LOADED FOR ZERO SPEED IMPACT */}
      <Script
        id="microsoft-clarity"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w9mttvte26");
          `,
        }}
      />

      {/* 3. Your Main App */}
      <Component {...pageProps} />
      
      {/* 4. Vercel Metrics & Analytics */}
      <SpeedInsights />
      <Analytics />
    </>
  );
}
