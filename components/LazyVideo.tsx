import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  rootMargin?: string;
}

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(
  ({ src, className = "", rootMargin = "300px" }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => videoRef.current as HTMLVideoElement);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin }
      );
      observer.observe(container);
      return () => observer.disconnect();
    }, [rootMargin]);

    useEffect(() => {
      if (isVisible && videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, [isVisible]);

    return (
      <div ref={containerRef} className="w-full h-full">
        {isVisible ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={className}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-slate-900" />
        )}
      </div>
    );
  }
);

LazyVideo.displayName = "LazyVideo";
export { LazyVideo };
