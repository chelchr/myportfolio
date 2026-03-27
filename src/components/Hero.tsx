"use client";

import { useRef, useEffect } from "react";

export default function Hero() {
  const mainRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mainRef.current || !spotlightRef.current) return;
      const rect = mainRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spotlightRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      spotlightRef.current.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
    };

    const currentMain = mainRef.current;
    if (currentMain) {
      currentMain.addEventListener("mousemove", handleMouseMove);
      currentMain.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (currentMain) {
        currentMain.removeEventListener("mousemove", handleMouseMove);
        currentMain.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={mainRef}
      /* h-[calc(100vh-6rem)]: Mengurangi tinggi layar dengan tinggi Navbar (kira-kira 64px-80px) agar tidak scroll */
      className="relative w-full h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-brand-bg"
    >
      {/* Spotlight Effect */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -left-[200px] -top-[200px] h-[400px] w-[400px] rounded-full bg-brand-accent/20 blur-[100px] opacity-0 transition-opacity duration-300 z-0"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e1b32] text-xs font-medium text-white shadow-lg border border-white/5">
              <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
              Available for work • Based in Indonesia
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-name-start via-name-middle to-name-end bg-clip-text text-transparent">
                Chelsea Christofera
              </span>
            </h1>

            <p className="text-lg md:text-2xl font-medium text-brand-teal">
              Front-End Developer & UI/UX Enthusiast
            </p>

            <p className="text-base text-brand-text-muted max-w-xl leading-relaxed">
              I craft pixel-perfect web experiences that merge elegant design
              with solid engineering. From concept to deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
